import { send } from "@emailjs/browser";
import { createClient } from "@supabase/supabase-js";
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);
export interface User {
  email: string;
  username?: string;
  suggestions?: string;
}

export async function joinWaitlist(user: User) {
  // Check if the user already exists
  const { data: existingUser, error: fetchError } = await supabase
    .from("Waitlist")
    .select("suggestions, username")
    .eq("email", user.email)
    .single();

  if (fetchError && fetchError.code !== "PGRST116") {
    // Handle error (excluding "No rows found" error)
    return { data: null, error: fetchError };
  }

  if (existingUser) {
    // User exists, update the suggestions field
    const updatedSuggestions = existingUser.suggestions
      ? `${existingUser.suggestions}, ${user.suggestions}`
      : user.suggestions;

    const updatedUsername = user.username;

    const { data, error } = await supabase
      .from("Waitlist")
      .update({ suggestions: updatedSuggestions, username: updatedUsername })
      .eq("email", user.email)
      .select();

    return { data, error };
  } else {
    // User does not exist, insert new record
    const { data, error } = await supabase
      .from("Waitlist")
      .insert([
        {
          email: user.email,
          username: user.username,
          suggestions: user.suggestions,
        },
      ])
      .select();

    return { data, error };
  }
  // sendEmail()
}
