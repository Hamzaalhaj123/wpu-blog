CREATE TABLE IF NOT EXISTS "verification_codes" (
	"id" integer PRIMARY KEY NOT NULL,
	"code" text DEFAULT '7146581b-1057-43b6-84cf-6af409405ba9' NOT NULL,
	"expires_at" timestamp with time zone DEFAULT '2024-09-10T20:50:42.025Z' NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "verification_codes" ADD CONSTRAINT "verification_codes_id_users_id_fk" FOREIGN KEY ("id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
