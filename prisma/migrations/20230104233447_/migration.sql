/*
  Warnings:

  - You are about to drop the column `skill_name_order` on the `Stack` table. All the data in the column will be lost.
  - You are about to drop the column `skill_work_order` on the `Stack` table. All the data in the column will be lost.
  - You are about to drop the `_CompanyToStack` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ProjectToStack` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_CompanyToStack" DROP CONSTRAINT "_CompanyToStack_A_fkey";

-- DropForeignKey
ALTER TABLE "_CompanyToStack" DROP CONSTRAINT "_CompanyToStack_B_fkey";

-- DropForeignKey
ALTER TABLE "_ProjectToStack" DROP CONSTRAINT "_ProjectToStack_A_fkey";

-- DropForeignKey
ALTER TABLE "_ProjectToStack" DROP CONSTRAINT "_ProjectToStack_B_fkey";

-- AlterTable
ALTER TABLE "Stack" DROP COLUMN "skill_name_order";
ALTER TABLE "Stack" DROP COLUMN "skill_work_order";
ALTER TABLE "Stack" ADD COLUMN     "stack_skill_order" INT4;
ALTER TABLE "Stack" ADD COLUMN     "stack_work_order" INT4 NOT NULL DEFAULT 0;

-- DropTable
DROP TABLE "_CompanyToStack";

-- DropTable
DROP TABLE "_ProjectToStack";

-- CreateTable
CREATE TABLE "StacksOnProjects" (
    "stack_name" STRING NOT NULL,
    "project_name" STRING NOT NULL,
    "stack_project_order" INT4 NOT NULL,

    CONSTRAINT "StacksOnProjects_pkey" PRIMARY KEY ("stack_name","project_name")
);

-- CreateTable
CREATE TABLE "StacksOnCompanies" (
    "stack_name" STRING NOT NULL,
    "company_name" STRING NOT NULL,
    "stack_company_order" INT4 NOT NULL,

    CONSTRAINT "StacksOnCompanies_pkey" PRIMARY KEY ("stack_name","company_name")
);

-- AddForeignKey
ALTER TABLE "StacksOnProjects" ADD CONSTRAINT "StacksOnProjects_stack_name_fkey" FOREIGN KEY ("stack_name") REFERENCES "Stack"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StacksOnProjects" ADD CONSTRAINT "StacksOnProjects_project_name_fkey" FOREIGN KEY ("project_name") REFERENCES "Project"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StacksOnCompanies" ADD CONSTRAINT "StacksOnCompanies_stack_name_fkey" FOREIGN KEY ("stack_name") REFERENCES "Stack"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StacksOnCompanies" ADD CONSTRAINT "StacksOnCompanies_company_name_fkey" FOREIGN KEY ("company_name") REFERENCES "Company"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
