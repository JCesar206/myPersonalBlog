import { createClient } from "@supabase/supabase-js/dist/index.cjs";

export const supabase = createClient(
	"https://xhabbjvhizbodbwuehcq.supabase.co",
	import.meta.env.VITE_SUPABASE_ANON_KEY
);
console.log(import.meta.env.VITE_SUPABASE_ANON_KEY?.length);