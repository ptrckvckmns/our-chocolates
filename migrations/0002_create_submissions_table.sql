-- Create business_submissions table
CREATE TABLE IF NOT EXISTS business_submissions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  business_name TEXT NOT NULL,
  address TEXT NOT NULL,
  website TEXT,
  email TEXT NOT NULL,
  phone TEXT,
  category TEXT NOT NULL,
  status TEXT DEFAULT 'pending',
  notes TEXT,
  submitted_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  processed_at DATETIME,
  processed_by TEXT
);

-- Create index for quick status filtering
CREATE INDEX IF NOT EXISTS idx_submissions_status ON business_submissions(status);

-- Create index for date filtering
CREATE INDEX IF NOT EXISTS idx_submissions_date ON business_submissions(submitted_at);
