import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "articles" ADD COLUMN "published_at" timestamp(3) with time zone;
  ALTER TABLE "_articles_v" ADD COLUMN "version_published_at" timestamp(3) with time zone;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "articles" DROP COLUMN "published_at";
  ALTER TABLE "_articles_v" DROP COLUMN "version_published_at";`)
}
