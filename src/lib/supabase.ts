import { createClient } from '@supabase/supabase-js';

// Fallback to empty strings if variables aren't injected during build time
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder-project.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-key';

if (!import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY) {
  console.warn(
    'Supabase credentials missing. Using placeholder values for compilation safety.'
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
