import { SiInstagram, SiX, SiGithub, SiLinkedin } from 'react-icons/si';

import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Mail,
  Instagram,
  Twitter,
  Facebook,
  Music2,
  Users,
  MessageSquare,
} from "lucide-react";
import Bth from '@/components/Bth';

const About = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container px-4 max-w-4xl">
        <Bth/>

        {/* Hero Section */}
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">
            About <span className="gradient-text">Muzer</span>
          </h1>

          {/* Who We Are */}
          <section className="mb-16">
            <div className="p-8 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/10  ">
              <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                At Muzer, we're on a mission to revolutionize the way people
                experience music together. Born from the idea that music is best
                enjoyed as a shared experience, we've built a platform that
                transforms listening into a collaborative, interactive, and
                engaging activity.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Whether you're hosting a party, having a casual hangout, or just
                connecting with friends virtually, Muzer ensures everyone has a
                say in the soundtrack to their moments.
              </p>
            </div>
          </section>

          {/* Vision & Features */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/10  ">
                <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
                <p className="text-gray-300 leading-relaxed">
                  To create a world where music unites people, one shared
                  playlist at a time. Muzer is more than just a music
                  platform—it's a space where memories are made, connections are
                  strengthened, and every voice is heard.
                </p>
              </div>
              <div className="p-8 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/10  ">
                <h2 className="text-3xl font-bold mb-6">Why Muzer?</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Music2 className="w-6 h-6 text-primary mt-1" />
                    <p className="text-gray-300">Real-time song voting</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <Users className="w-6 h-6 text-primary mt-1" />
                    <p className="text-gray-300">Collaborative playlists</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <MessageSquare className="w-6 h-6 text-primary mt-1" />
                    <p className="text-gray-300">Live chat</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Our Story */}
          <section className="mb-16">
            <div className="p-8 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/10  ">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  The idea for Muzer started with a simple question: Why should
                  music at gatherings be controlled by just one person?
                </p>
                <p className="text-gray-300 leading-relaxed">
                  We, passionate about both music and technology,
                  envisioned a platform where everyone could be the DJ. After
                  countless late nights, brainstorming sessions, and prototype
                  tests, Muzer was born—a platform that empowers communities to
                  listen, vote, and vibe together.
                </p>
              </div>
            </div>
          </section>

          {/* Team & Connect */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/10  ">
                <h2 className="text-3xl font-bold mb-6">Meet the Team</h2>
                <p className="text-gray-300 leading-relaxed">
                  We're a group of tech enthusiasts, music lovers, and creative
                  thinkers dedicated to building a seamless music-sharing
                  experience. Our team combines expertise in software
                  development, design, and music streaming to deliver a platform
                  that's not only functional but also fun and engaging.
                </p>
              </div>
              <div className="p-8 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/10  ">
                <h2 className="text-3xl font-bold mb-6">Connect With Us</h2>
                <div className="space-y-4">
                  <a
                    href="mailto:metaconvo@gmail.com"
                    className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors"
                  >
                    <Mail/>metaconvo@gmail.com
                  </a>
                  <div className="flex gap-6 pt-4">
                    <a
                      href="https://github.com/M0hitReddy"
                      className="text-gray-300 hover:text-primary transition-colors"
                      target='_blank'
                    >
                      <SiGithub className="w-6 h-6" />
                    </a>
                    <a
                      href="https://x.com/mohitreddyy"
                      className="text-gray-300 hover:text-primary transition-colors"
                      target='_blank'
                    >
                      <SiX className="w-6 h-6" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/mohit-reddy-675b47251"
                      className="text-gray-300 hover:text-primary transition-colors"
                      target='_blank'
                    >
                      <SiLinkedin className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Join Us */}
          <section>
            <div className="p-8 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/10   text-center">
              <h2 className="text-3xl font-bold mb-6">
                Join Us on This Journey
              </h2>
              <p className="text-gray-300 leading-relaxed mb-8">
                Muzer is more than an app—it's a movement. We're building a
                community of music lovers who value connection, collaboration,
                and creativity. Let's create the soundtrack to your best
                moments, together. 🎶
              </p>
              <Link
                to="/waitlist"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary text-white font-semibold "
              >
                Join the Waitlist
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
