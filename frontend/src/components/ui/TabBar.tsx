// TabBar.tsx
import { Home, Info, MessageSquare, User } from "lucide-react";

const TabBar = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white backdrop-blur-sm text-white flex justify-around items-center py-3 z-[90] transition-all">
      <button className="flex flex-col items-center text-sm">
        <Home size={20} />
        <span>Home</span>
      </button>
      <button className="flex flex-col items-center text-sm">
        <Info size={20} />
        <span>About</span>
      </button>
      <button className="flex flex-col items-center text-sm">
        <MessageSquare size={20} />
        <span>Contact</span>
      </button>
      <button className="flex flex-col items-center text-sm">
        <User size={20} />
        <span>Profile</span>
      </button>
    </div>
  );
};

export default TabBar;
