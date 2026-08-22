import { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";
import { 
  Menu, X, MousePointerClick, LayoutPanelLeft, AppWindow, 
  Type, Navigation, GalleryHorizontal, MessageSquare, LayoutTemplate 
} from "lucide-react";

const ComponentLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const components = [
    { name: "Button", icon: <MousePointerClick size={16} /> },
    { name: "Card", icon: <LayoutPanelLeft size={16} /> },
    { name: "Modal", icon: <AppWindow size={16} /> },
    { name: "Input", icon: <Type size={16} /> },
    { name: "Navbar", icon: <Navigation size={16} /> },
    { name: "Carousel", icon: <GalleryHorizontal size={16} /> },
    { name: "Tooltip", icon: <MessageSquare size={16} /> },
    { name: "Layout", icon: <LayoutTemplate size={16} /> },
  ];

  return (
    <div className="flex h-[calc(100vh-64px)] w-full max-w-[1400px] mx-auto overflow-hidden transition-colors">
      
      <button 
        className="md:hidden fixed bottom-6 right-6 z-50 p-4 bg-indigo-600 text-white rounded-full shadow-xl"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <aside className={`
        fixed md:relative top-0 left-0 h-full w-64 pt-10 px-6 overflow-y-auto
        border-r border-gray-200 transition-colors z-40
        transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
        transition-transform duration-300 ease-in-out md:translate-x-0
      `}>
        <h4 className="text-xs font-bold transition-colors mb-6 uppercase tracking-widest">
          Components
        </h4>
        
        <ul className="flex flex-col gap-2">
          {components.map((item) => {
            const path = `/components/${item.name.toLowerCase()}`;
            const isActive = location.pathname.includes(path);
            
            return (
              <li
                key={item.name}
                onClick={() => {
                  navigate(item.name.toLowerCase());
                  setSidebarOpen(false);
                }}
                className={`
                  cursor-pointer text-sm font-medium transition-all group flex items-center gap-3 py-2 px-3 rounded-md
                  ${isActive 
                    ? "text-indigo-600 transition-colors" 
                    : "text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-gray-200"}
                `}
              >
                <span className={`${isActive ? "text-indigo-600 dark:text-indigo-400" : "text-gray-400"} transition-colors`}>
                  {item.icon}
                </span>
                
                <div className="relative pb-0.5">
                  {item.name}
                  {/* Faded gradient underline */}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-indigo-500 to-transparent rounded-full" />
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </aside>

      <main className="flex-1 w-full p-8 md:p-12 overflow-y-auto overflow-x-hidden transition-colors">
        <Outlet />
      </main>
    </div>
  );
};

export default ComponentLayout;