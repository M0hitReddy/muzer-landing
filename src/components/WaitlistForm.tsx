import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Textarea } from "./ui/textarea";
import { Separator } from "./ui/separator";
import { Label } from "./ui/label";
import { joinWaitlist } from "@/lib/joinWaitList";
import { sendEmail } from "@/lib/mail";

export const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [suggestions, setSuggestions] = useState("");
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // Here you would typically send this to your backend
    const { data, error } = await joinWaitlist({
      email,
      username,
      suggestions,
    });
    if (error) {
      console.error("Failed to join waitlist", error);
      return;
    }

    console.log("Form submitted:", { email, username, suggestions });

    toast({
      title: "Thanks for joining!",
      description: "We'll notify you when Muzer launches.",
    });
    sendEmail({ email });

    setEmail("");
    setUsername("");
    setSuggestions("");
  };

  return (
    <form className="flex flex-col w-full max-w-sm gap-4">
      <Input
        type="email"
        placeholder="Enter your email *"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className=" border-white/20 "
        required
      />
      <Input
        type="text"
        placeholder="Register your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className=" border-white/20"
      />
      {/* <Input
        type="text"
        placeholder="Discord username"
        value={discord}
        onChange={(e) => setDiscord(e.target.value)}
        className=" border-white/20 "
      /> */}
      {/* <Separator /> */}
      <div className="flex flex-col gap-2">
        <Label className="ml-2 gradient-text">Got any suggestions?</Label>
        <Textarea
          className="rounded-md  border-white/20"
          value={suggestions}
          onChange={(e) => setSuggestions(e.target.value)}
          placeholder="Type your suggestions here"
        />
      </div>
      <Button
        type="submit"
        onClick={handleSubmit}
        className="bg-primary shadow-xl shadow-primary/30"
      >
        Join Waitlist
      </Button>
    </form>
  );
};
