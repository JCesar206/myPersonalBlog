import { createClient } from "@supabase/supabase-js/dist/index.cjs";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
	throw new Error("Supabase env vars are missing.");
}
console.log(import.meta.env);

export const supabase = createClient(supabaseUrl, supabaseKey);