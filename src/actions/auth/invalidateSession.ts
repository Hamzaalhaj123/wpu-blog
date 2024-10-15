import { db } from "@/db/db";
import { sessions } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function invalidateSession(sessionId: string): Promise<void> {
  await db.delete(sessions).where(eq(sessions.id, sessionId));
}
