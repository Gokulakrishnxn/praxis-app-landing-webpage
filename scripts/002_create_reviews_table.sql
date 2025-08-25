-- Create reviews table for user testimonials
CREATE TABLE IF NOT EXISTS public.reviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  role TEXT,
  company TEXT,
  content TEXT NOT NULL,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  featured BOOLEAN DEFAULT FALSE
);

-- Enable RLS
ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;

-- Allow public to read featured reviews
CREATE POLICY "Allow public to read featured reviews" ON public.reviews
  FOR SELECT 
  USING (featured = true);

-- Insert sample reviews
INSERT INTO public.reviews (name, role, company, content, rating, featured) VALUES
('Sarah Chen', 'Product Manager', 'TechCorp', 'Praxis has completely transformed how our team approaches productivity. The AI insights are incredibly accurate and actionable.', 5, true),
('Marcus Rodriguez', 'Startup Founder', 'InnovateLab', 'I''ve tried dozens of productivity apps, but Praxis is the first one that actually understands my workflow. Game-changer.', 5, true),
('Emily Watson', 'Designer', 'Creative Studio', 'The interface is beautiful and the AI recommendations have helped me optimize my daily routine. Can''t wait for the full release!', 5, true),
('David Kim', 'Developer', 'CodeBase Inc', 'Finally, an AI app that doesn''t feel gimmicky. Praxis delivers real value and genuine productivity improvements.', 5, true);
