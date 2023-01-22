-- CreateTable
CREATE TABLE "habit_week_days" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "habit_id" TEXT NOT NULL,
    "week_day" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "histories" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "date" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "history_habits" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "history_id" TEXT NOT NULL,
    "habit_id" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "histories_date_key" ON "histories"("date");

-- CreateIndex
CREATE UNIQUE INDEX "history_habits_history_id_habit_id_key" ON "history_habits"("history_id", "habit_id");
