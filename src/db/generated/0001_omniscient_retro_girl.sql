ALTER TABLE "verification_codes" ALTER COLUMN "code" SET DEFAULT '6b5865e2-8770-4d44-9278-cfba3ad2221e';--> statement-breakpoint
ALTER TABLE "verification_codes" ALTER COLUMN "expires_at" SET DEFAULT '2024-10-10T19:48:54.647Z';--> statement-breakpoint
ALTER TABLE "sessions" ADD COLUMN "role" text DEFAULT 'user' NOT NULL;