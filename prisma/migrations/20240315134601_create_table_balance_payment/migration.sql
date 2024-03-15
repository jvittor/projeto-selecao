-- CreateTable
CREATE TABLE "Payment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "value" INTEGER NOT NULL,
    "balanceId" TEXT NOT NULL,
    CONSTRAINT "Payment_balanceId_fkey" FOREIGN KEY ("balanceId") REFERENCES "Balance" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Balance" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "initialValue" INTEGER NOT NULL,
    "remainingValue" INTEGER NOT NULL
);
