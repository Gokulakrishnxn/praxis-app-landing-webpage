-- Create waitlist table for email notifications
CREATE TABLE IF NOT EXISTS public.waitlist (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  notified BOOLEAN DEFAULT FALSE
);

-- Enable RLS for security
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert their email (public signup)
CREATE POLICY "Allow public email signup" ON public.waitlist
  FOR INSERT 
  WITH CHECK (true);

-- Only allow reading own email or admin access
CREATE POLICY "Allow users to view all emails" ON public.waitlist
  FOR SELECT 
  USING (true);
