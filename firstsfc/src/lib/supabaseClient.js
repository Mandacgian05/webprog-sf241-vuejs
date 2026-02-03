import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
// MUST match your Vercel key name exactly
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY 

// This prevents the blank page crash if keys are missing
if (!supabaseUrl || !supabaseKey) {
  console.error("Supabase keys are missing! Check Vercel Env Variables.")
}

export const supabase = createClient(supabaseUrl || '', supabaseKey || '')
