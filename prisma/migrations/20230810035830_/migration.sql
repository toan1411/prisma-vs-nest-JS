/*
  Warnings:

  - Added the required column `classId` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gpa` to the `Student` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Student" ADD COLUMN     "classId" INTEGER NOT NULL,
ADD COLUMN     "gpa" DOUBLE PRECISION NOT NULL;

-- CreateTable
CREATE TABLE "Class" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Class_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class"("id") ON DELETE CASCADE ON UPDATE CASCADE;
