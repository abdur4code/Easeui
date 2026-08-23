import { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/Store";
import { 
  Menu, X, MousePointerClick, LayoutPanelLeft, AppWindow, 
  Type, Navigation, GalleryHorizontal, MessageSquare, LayoutTemplate, ArrowRight 
} from "lucide-react";

const ComponentLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const { mode } = useSelector((state: RootState) => state.theme);


    const components = [
    { name: "Button", icon: <MousePointerClick size={18} />, desc: "Interactive button styles with various states." },
    { name: "Card", icon: <LayoutPanelLeft size={18} />, desc: "Versatile containers for grouping content." },
    { name: "Modal", icon: <AppWindow size={18} />, desc: "Accessible overlay dialogs and popups." },
    { name: "Input", icon: <Type size={18} />, desc: "Form fields with validation and adornments." },
    { name: "Navbar", icon: <Navigation size={18} />, desc: "Responsive top-level navigation headers." },
    { name: "Carousel", icon: <GalleryHorizontal size={18} />, desc: "Interactive media sliders with auto-play." },
    { name: "Tooltip", icon: <MessageSquare size={18} />, desc: "Contextual floating information labels." },
    { name: "Layout", icon: <LayoutTemplate size={18} />, desc: "Compound components for dashboard shells." },
  ];

  const isRootPath = location.pathname === "/components" || location.pathname === "/components/";

  return (
    <div className={`flex h-[calc(100vh-64px)] w-full max-w-[1400px] mx-auto overflow-hidden transition-colors ${mode === "dark" ? "bg-[#09090b]" : "bg-white"}`}>
      
      <button 
        className="md:hidden fixed bottom-6 right-6 z-50 p-4 bg-indigo-600 text-white rounded-full shadow-xl"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <aside className={`
        fixed md:relative top-0 left-0 h-full w-64 pt-10 px-6 overflow-y-auto z-40
        transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
        transition-all duration-300 ease-in-out md:translate-x-0
        ${mode === "dark" ? "bg-[#09090b] border-r border-zinc-800" : "bg-gray-50/50 border-r border-gray-200"}
      `}>
        <h4 className={`text-xs font-bold mb-6 uppercase tracking-widest transition-colors ${mode === "dark" ? "text-zinc-500" : "text-gray-500"}`}>
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
                    ? (mode === "dark" ? "text-indigo-400 bg-zinc-800/40" : "text-indigo-600 bg-indigo-50/50") 
                    : (mode === "dark" ? "text-zinc-400 hover:text-gray-200 hover:bg-zinc-900" : "text-gray-800 hover:text-gray-900 hover:bg-gray-100")
                  }
                `}
              >
                <span className={`${isActive ? (mode === "dark" ? "text-indigo-400" : "text-indigo-600") : (mode === "dark" ? "text-zinc-500" : "text-gray-400")} transition-colors`}>
                  {item.icon}
                </span>
                
                <div className="relative pb-0.5">
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-indigo-500 to-transparent rounded-full" />
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </aside>

      <main className={`
        flex-1 w-full p-8 md:p-12 overflow-y-auto overflow-x-hidden transition-colors 
        ${mode === "dark" ? "bg-[#09090b]" : "bg-white"}
      `}>
        {isRootPath ? (
          <div className="max-w-5xl mx-auto space-y-10 animate-fadeIn">
            <header className="space-y-4">
              <h1 className={`text-4xl font-extrabold tracking-tight ${mode === "dark" ? "text-white" : "text-gray-900"}`}>
                Components
              </h1>
              <p className={`text-lg max-w-2xl leading-relaxed ${mode === "dark" ? "text-zinc-400" : "text-gray-600"}`}>
                Explore a collection of beautifully crafted, accessible, and customizable React components built for modern web applications.
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {components.map((comp) => (
                <div
                  key={comp.name}
                  onClick={() => navigate(comp.name.toLowerCase())}
                  className={`group relative p-6 rounded-2xl border cursor-pointer transition-all duration-300 ${
                    mode === "dark"
                      ? "bg-zinc-900/40 border-zinc-800 hover:border-indigo-500/50 hover:bg-zinc-900/80 shadow-sm"
                      : "bg-white border-gray-200 hover:border-indigo-300 hover:shadow-lg shadow-sm"
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors ${
                    mode === "dark"
                      ? "bg-zinc-800 text-zinc-400 group-hover:bg-indigo-500/20 group-hover:text-indigo-400"
                      : "bg-gray-50 border border-gray-100 text-gray-500 group-hover:bg-indigo-50 group-hover:text-indigo-600 group-hover:border-indigo-100"
                  }`}>
                    {comp.icon}
                  </div>
                  
                  <h3 className={`text-lg font-semibold mb-2 transition-colors ${
                    mode === "dark" ? "text-gray-100 group-hover:text-white" : "text-gray-900 group-hover:text-indigo-600"
                  }`}>
                    {comp.name}
                  </h3>
                  
                  <p className={`text-sm leading-relaxed ${
                    mode === "dark" ? "text-zinc-400" : "text-gray-500"
                  }`}>
                    {comp.desc}
                  </p>

                  <div className={`mt-6 flex items-center text-sm font-medium opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ${
                    mode === "dark" ? "text-indigo-400" : "text-indigo-600"
                  }`}>
                    View documentation <ArrowRight size={16} className="ml-1" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <Outlet />
        )}
      </main>
    </div>
  );
};

export default ComponentLayout;