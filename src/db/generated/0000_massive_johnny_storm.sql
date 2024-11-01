CREATE TABLE IF NOT EXISTS "role_table" (
	"user_id" integer NOT NULL,
	"role" text,
	CONSTRAINT "pk_role" PRIMARY KEY("user_id","role")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "session_table" (
	"id" text PRIMARY KEY NOT NULL,
	"user_id" integer NOT NULL,
	"expires_at" timestamp with time zone NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"password" text NOT NULL,
	"image" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"is_verified" boolean DEFAULT false NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "verification_code_table" (
	"id" integer PRIMARY KEY NOT NULL,
	"code" text DEFAULT '18ffaaf8-8b28-4d8e-97d1-610f0ab89b4e' NOT NULL,
	"expires_at" timestamp with time zone DEFAULT '2024-11-01T19:19:30.354Z' NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "role_table" ADD CONSTRAINT "role_table_user_id_user_table_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user_table"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "session_table" ADD CONSTRAINT "session_table_user_id_user_table_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user_table"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "verification_code_table" ADD CONSTRAINT "verification_code_table_id_user_table_id_fk" FOREIGN KEY ("id") REFERENCES "public"."user_table"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
