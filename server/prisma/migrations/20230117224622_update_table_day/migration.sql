/*
  Warnings:

  - You are about to drop the `histories` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropIndex
DROP INDEX "histories_date_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "histories";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "day" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "date" DATETIME NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_day_habits" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "day_id" TEXT NOT NULL,
    "habit_id" TEXT NOT NULL,
    "dayId" TEXT NOT NULL,
    "habitId" TEXT NOT NULL,
    CONSTRAINT "day_habits_dayId_fkey" FOREIGN KEY ("dayId") REFERENCES "day" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "day_habits_habitId_fkey" FOREIGN KEY ("habitId") REFERENCES "habits" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_day_habits" ("dayId", "day_id", "habitId", "habit_id", "id") SELECT "dayId", "day_id", "habitId", "habit_id", "id" FROM "day_habits";
DROP TABLE "day_habits";
ALTER TABLE "new_day_habits" RENAME TO "day_habits";
CREATE UNIQUE INDEX "day_habits_day_id_habit_id_key" ON "day_habits"("day_id", "habit_id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "day_date_key" ON "day"("date");
