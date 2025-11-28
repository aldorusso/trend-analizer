-- CreateTable
CREATE TABLE "SearchQuery" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "country" TEXT NOT NULL,
    "query" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Trend" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "searchQueryId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "traffic" TEXT,
    "relatedQueries" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Trend_searchQueryId_fkey" FOREIGN KEY ("searchQueryId") REFERENCES "SearchQuery" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Content" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "searchQueryId" TEXT NOT NULL,
    "trendId" TEXT,
    "platform" TEXT NOT NULL,
    "postType" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "hashtags" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Content_searchQueryId_fkey" FOREIGN KEY ("searchQueryId") REFERENCES "SearchQuery" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Content_trendId_fkey" FOREIGN KEY ("trendId") REFERENCES "Trend" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
