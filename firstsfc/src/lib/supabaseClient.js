import { createClient } from '@supabase/supabase-js'

// These names must match your Vercel dashboard exactly
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY 

// Logging to help you see the status in the F12 console
if (!supabaseUrl || !supabaseKey) {
  console.error("Supabase keys are missing! Check Vercel Env Variables.")
}

export const supabase = createClient(supabaseUrl || '', supabaseKey || '')
