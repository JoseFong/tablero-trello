-- AlterTable
CREATE SEQUENCE "public".column_order_seq;
ALTER TABLE "public"."Column" ALTER COLUMN "order" SET DEFAULT nextval('"public".column_order_seq');
ALTER SEQUENCE "public".column_order_seq OWNED BY "public"."Column"."order";
