import { Button } from "@/components/ui/button";
import { WaitlistForm } from "@/components/WaitlistForm";
import { MusicWave } from "@/components/MusicWave";
import {
  Music,
  Vote,
  MessageCircle,
  Github,
  Twitter,
  Handshake,
  LucideMonitorSpeaker,
  PartyPopper,
  Music4,
  Mail,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Grad from "@/components/BgGrad";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="min-h-screen overflow-x-hidden flex flex-col ">
      {/* Header */}
      <header
        className={`fixed -top-0 left-0 p-0 right-0 z-50 transition-all duration-300  ${
          isScrolled
            ? "bg-black/20 backdrop-blur-sm shadow-xl shadow-black/40"
            : "bg-transparent"
        }`}
      >
        <nav className="flex container p-6 justify-between items-center">
          <Link to="/" className="text-2xl font-bold gradient-text">
            Muzer
          </Link>
          <div className="flex gap-6">
            <Link
              to="/about"
              className="text-sm font- tracking-wide hover:text-muted-foreground transition-colors"
            >
              About
            </Link>
            <a href="#features"
              className="text-sm font- tracking-wide hover:text-muted-foreground transition-colors"
            >
              Features
            </a>
            <Link to="/waitlist"
              className="text-sm font- tracking-wide hover:text-muted-foreground transition-colors"
            >
              Join Waitlist
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container bg-white/10 sm:rounded-lg  flex flex-col items-center text-center py-20 relative mt-24">
        <Grad />
        <h1 className="text-5xl md:text-7xl font-bold mb-6 relative">
          Music is Better <span className="gradient-text">Together</span>
        </h1>
        <p className="text-xl text-gray-400 mb-8 max-w-2xl relative">
          Join the waitlist for the first platform that lets you create virtual
          music rooms where friends vote on what plays next
        </p>
        <div className="relative">
          <MusicWave />
        </div>
        <div className="mt-12 relative">
          <Link to="/waitlist">
            <Button className="bg-primary shadow-xl shadow-primary/30 hover:bg-primary/90">
              Join Waitlist
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="container py-20">
        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose <span className="gradient-text">Muzer </span>?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="feature-card">
            <Music4 className="w-12 h-12 mb-6 text-yellow-500" />
            <h3 className="text-xl font-semibold mb-4">Create Music Rooms</h3>
            <p className="text-gray-400">
              Host parties with your Spotify account and let everyone join the
              fun
            </p>
          </div>
          <div className="feature-card">
            <Vote className="w-12 h-12 mb-6 text-blue-500" />
            <h3 className="text-xl font-semibold mb-4">Vote Together</h3>
            <p className="text-gray-400">
              Democracy decides the next track - everyone has a say in the
              playlist
            </p>
          </div>
          <div className="feature-card">
            <MessageCircle className="w-12 h-12 mb-6 text-green-500" />
            <h3 className="text-xl font-semibold mb-4">Chat & Connect</h3>
            <p className="text-gray-400">
              Discuss music in real-time and share your thoughts with the room
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="container py-20 text-center">
        <h2 className="text-3xl font-semibold mb-8">Coming Soon To</h2>
        <div className="flex flex-wrap justify-center gap-8 text-xl text-gray-400">
          <span className="flex items-center gap-2 text-left">
            <PartyPopper className="text-red-600" /> Virtual Parties
          </span>
          <span className="flex items-center gap-2 text-left">
            <LucideMonitorSpeaker className="text-blue-600" /> Modern Offices
          </span>
          <span className="flex items-center gap-2 text-left">
            <Users className="text-green-600" /> Friend Groups
          </span>
          <span className="flex items-center gap-2 text-left">
            <Music4 className="text-yellow-600" /> Music Clubs
          </span>
        </div>
      </section>

      {/* Footer */}

      <footer className="bg-black text-white py-12 mt-auto">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/10 pt-8">
          <div className="flex items-center gap-4">
            <Link to="/" className="text-2xl font-bold gradient-text">
              Muzer
            </Link>
          </div>
          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} Muzer. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a
              href="https://github.com/M0hitReddy"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
            >
              <SiGithub className="w-6 h-6" />
            </a>
            <a
              href="https://x.com/mohitreddyy"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
            >
              <SiX className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/mohit-reddy-675b47251"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
            >
              <SiLinkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8 mt-8">
          <div className="flex flex-col md:flex-row gap-6">
            <a
              href="#features"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Features
            </a>
            <Link
              to="/waitlist"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Join Waitlist
            </Link>
            <Link
              to="#contact"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Contact
            </Link>
            <Link
              to="about"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              About Us
            </Link>
          </div>
          <div className="text-sm text-gray-400 text-center md:text-left">
            <a
              href="mailto:metaconvo@gmail.com"
              className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors"
            >
              contact: metaconvo@gmail.com
            </a>

            {/* <p>123 Music Lane, Melody City, 56789</p> */}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
