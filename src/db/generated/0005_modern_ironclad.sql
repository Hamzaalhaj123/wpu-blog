ALTER TABLE "sessions" RENAME TO "session";--> statement-breakpoint
ALTER TABLE "users" RENAME TO "user";--> statement-breakpoint
ALTER TABLE "verification_codes" RENAME TO "verification_code";--> statement-breakpoint
ALTER TABLE "session" DROP CONSTRAINT "sessions_user_id_users_id_fk";
--> statement-breakpoint
ALTER TABLE "verification_code" DROP CONSTRAINT "verification_codes_id_users_id_fk";
--> statement-breakpoint
ALTER TABLE "verification_code" ALTER COLUMN "code" SET DEFAULT 'd79878c6-b95e-4684-8bf7-04396beb21d9';--> statement-breakpoint
ALTER TABLE "verification_code" ALTER COLUMN "expires_at" SET DEFAULT '2024-10-15T19:44:17.685Z';--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "session" ADD CONSTRAINT "session_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "verification_code" ADD CONSTRAINT "verification_code_id_user_id_fk" FOREIGN KEY ("id") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
