-- CreateEnum
CREATE TYPE "Project_Type" AS ENUM ('webdev', 'dsai', 'cybersecurity', 'misc');

-- CreateTable
CREATE TABLE "Skill" (
    "name" STRING NOT NULL,
    "logo_path" STRING NOT NULL,
    "display_order" INT4 NOT NULL GENERATED BY DEFAULT AS IDENTITY,

    CONSTRAINT "Skill_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "Stack" (
    "name" STRING NOT NULL,
    "logo_path_light" STRING NOT NULL,
    "logo_path_dark" STRING NOT NULL,
    "colour" STRING NOT NULL,
    "skill_work_order" INT4 NOT NULL DEFAULT 0,
    "skill_name" STRING NOT NULL,
    "skill_name_order" INT4 NOT NULL,

    CONSTRAINT "Stack_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "Company" (
    "name" STRING NOT NULL,
    "position" STRING NOT NULL,
    "logo_path_light" STRING NOT NULL,
    "logo_path_dark" STRING NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3),
    "description" STRING[],
    "link" STRING NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "Project" (
    "name" STRING NOT NULL,
    "featured" BOOL NOT NULL,
    "type" "Project_Type" NOT NULL,
    "logo_path" STRING NOT NULL,
    "cover_path" STRING NOT NULL,
    "colour" STRING NOT NULL,
    "deployed_link" STRING NOT NULL,
    "description" STRING NOT NULL,
    "repo" STRING NOT NULL,
    "owner" STRING NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "Achievement" (
    "id" STRING NOT NULL,
    "cover_path_desktop" STRING NOT NULL,
    "cover_path_mobile" STRING NOT NULL,
    "logo_path" STRING NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3),
    "year" INT4 NOT NULL,
    "position" STRING NOT NULL,
    "name" STRING NOT NULL,
    "description" STRING NOT NULL,
    "link" STRING NOT NULL,

    CONSTRAINT "Achievement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CompanyToStack" (
    "A" STRING NOT NULL,
    "B" STRING NOT NULL
);

-- CreateTable
CREATE TABLE "_ProjectToStack" (
    "A" STRING NOT NULL,
    "B" STRING NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CompanyToStack_AB_unique" ON "_CompanyToStack"("A", "B");

-- CreateIndex
CREATE INDEX "_CompanyToStack_B_index" ON "_CompanyToStack"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ProjectToStack_AB_unique" ON "_ProjectToStack"("A", "B");

-- CreateIndex
CREATE INDEX "_ProjectToStack_B_index" ON "_ProjectToStack"("B");

-- AddForeignKey
ALTER TABLE "Stack" ADD CONSTRAINT "Stack_skill_name_fkey" FOREIGN KEY ("skill_name") REFERENCES "Skill"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CompanyToStack" ADD CONSTRAINT "_CompanyToStack_A_fkey" FOREIGN KEY ("A") REFERENCES "Company"("name") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CompanyToStack" ADD CONSTRAINT "_CompanyToStack_B_fkey" FOREIGN KEY ("B") REFERENCES "Stack"("name") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjectToStack" ADD CONSTRAINT "_ProjectToStack_A_fkey" FOREIGN KEY ("A") REFERENCES "Project"("name") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjectToStack" ADD CONSTRAINT "_ProjectToStack_B_fkey" FOREIGN KEY ("B") REFERENCES "Stack"("name") ON DELETE CASCADE ON UPDATE CASCADE;
