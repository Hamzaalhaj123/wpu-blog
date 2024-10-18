ALTER TABLE "sessions" ALTER COLUMN "role" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "verification_codes" ALTER COLUMN "code" SET DEFAULT 'bef6ebdb-0e88-41cc-bdcd-640a99308974';--> statement-breakpoint
ALTER TABLE "verification_codes" ALTER COLUMN "expires_at" SET DEFAULT '2024-10-14T20:06:28.864Z';