import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
// MUST match the name in your Vercel screenshot exactly
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY 

if (!supabaseUrl || !supabaseKey) {
  console.error("Supabase keys are missing! Check Vercel Env Variables.")
}

export const supabase = createClient(supabaseUrl || '', supabaseKey || '')
