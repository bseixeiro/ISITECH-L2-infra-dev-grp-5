import { createClient } from "@supabase/supabase-js";

const url = "https://bqljztprudwzstwkjlfg.supabase.co";
const anon =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJxbGp6dHBydWR3enN0d2tqbGZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUwMTA4MjUsImV4cCI6MjA0MDU4NjgyNX0.vEl3LAIClgXF5jmOswxMkQLnJ5xc1n5mv5Eba82j6vY";

const supabase = createClient(url, anon);

export default supabase;
