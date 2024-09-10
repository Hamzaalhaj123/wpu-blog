import { Lucia, RegisteredDatabaseUserAttributes, Session } from "lucia";
import { DrizzlePostgreSQLAdapter } from "@lucia-auth/adapter-drizzle";
import { cache } from "react";
import { User } from "lucia";
import { cookies } from "next/headers";
import { sessions, users } from "@/db/schema";
import { db } from "@/db/db";
const adapter = new DrizzlePostgreSQLAdapter(db, sessions, users);

export const lucia = new Lucia(adapter, {
  sessionCookie: {
    expires: false,
    attributes: {
      secure: process.env.NODE_ENV === "development",
    },
  },
  getUserAttributes: (attributes) => {
    return {
      id: attributes.id,
      name: attributes.name,
      description: attributes.description,
      image: attributes.image,
      createdAt: attributes.createdAt,
    };
  },
});

export const validateRequest = cache(
  async (): Promise<
    | {
        user: User ;
        session: Session;
      }
    | {
        user: null;
        session: null;
      }
  > => {
    const sessionId = cookies().get(lucia.sessionCookieName)?.value ?? null;
    if (!sessionId) {
      return {
        user: null,
        session: null,
      };
    }
    const result = await lucia.validateSession(sessionId);
    try {
      if (result.session && result.session.fresh) {
        const sessionCookie = lucia.createSessionCookie(result.session.id);
        cookies().set(
          sessionCookie.name,
          sessionCookie.value,
          sessionCookie.attributes,
        );
      }
      if (!result.session) {
        const sessionCookie = lucia.createBlankSessionCookie();
        cookies().set(
          sessionCookie.name,
          sessionCookie.value,
          sessionCookie.attributes,
        );
      }
    } catch (error) {}
    return result;
  },
);

declare module "lucia" {
  interface Register {
    Lucia: typeof Lucia;

    UserId: number;
    DatabaseUserAttributes: DatabaseUserAttributes;
  }
}

interface DatabaseUserAttributes {
  id: number;
  name: string;
  description: string | null;
  image: string | null;
  createdAt: Date;
}
