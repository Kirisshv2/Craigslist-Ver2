
// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://mgwnecbvbgsvdjsrjklb.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1nd25lY2J2YmdzdmRqc3Jqa2xiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYyODM3NjgsImV4cCI6MjA2MTg1OTc2OH0.pTcq9skP_X5gmD1StZ9DbV0FjkDdA8lrkrZ1yQ20hyo";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
