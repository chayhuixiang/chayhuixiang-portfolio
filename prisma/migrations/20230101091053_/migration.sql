-- DropForeignKey
ALTER TABLE "Stack" DROP CONSTRAINT "Stack_skill_name_fkey";

-- AlterTable
ALTER TABLE "Project" ALTER COLUMN "deployed_link" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Stack" ALTER COLUMN "skill_name" DROP NOT NULL;
ALTER TABLE "Stack" ALTER COLUMN "skill_name_order" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Stack" ADD CONSTRAINT "Stack_skill_name_fkey" FOREIGN KEY ("skill_name") REFERENCES "Skill"("name") ON DELETE SET NULL ON UPDATE CASCADE;
