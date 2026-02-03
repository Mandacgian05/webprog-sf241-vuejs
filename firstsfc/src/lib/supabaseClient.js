import { createClient } from '@supabase/supabase-js'

// Get Supabase URL and public key from environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY

// Fail-safe: Warn if keys are missing
if (!supabaseUrl || !supabaseKey) {
  console.error(
    'Supabase keys are missing! Make sure your .env file or Vercel Environment Variables are set correctly.'
  )
}

// Create and export Supabase client
export const supabase = createClient(supabaseUrl || '', supabaseKey || '')
