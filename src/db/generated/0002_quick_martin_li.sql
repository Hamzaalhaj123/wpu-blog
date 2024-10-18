DO $$ BEGIN
 CREATE TYPE "public"."role" AS ENUM('user', 'admin');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "sessions" ALTER COLUMN "role" SET DATA TYPE role;--> statement-breakpoint
ALTER TABLE "sessions" ALTER COLUMN "role" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "verification_codes" ALTER COLUMN "code" SET DEFAULT 'd52d8fd4-858d-44d5-8497-6216c72ef262';--> statement-breakpoint
ALTER TABLE "verification_codes" ALTER COLUMN "expires_at" SET DEFAULT '2024-10-14T20:02:23.238Z';