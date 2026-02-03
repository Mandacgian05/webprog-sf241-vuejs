import { createClient } from '@supabase/supabase-js'

// These names must match your Vercel screenshot exactly
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY 

// This prints the "Supabase keys are missing!" warning you see in your log
if (!supabaseUrl || !supabaseKey) {
  console.error("Supabase keys are missing! Check Vercel Env Variables.")
}

export const supabase = createClient(supabaseUrl || '', supabaseKey || '')
