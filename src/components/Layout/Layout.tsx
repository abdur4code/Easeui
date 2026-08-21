import React from 'react';
import { cn } from "@/libs/utils";

// 1. The Main div
export const Layout = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={cn("flex h-screen w-full bg-gray-50 dark:bg-slate-900 overflow-hidden", className)}>
      {children}
    </div>
  );
};

// 2. The Sidebar
export const LayoutSidebar = ({ children, className, width = "w-64" }: { children: React.ReactNode; className?: string, width?: string }) => {
  return (
    <aside className={cn(`flex flex-col h-full bg-white dark:bg-slate-800 border-r border-gray-200 dark:border-slate-700 ${width} shrink-0 transition-all duration-300`, className)}>
      {children}
    </aside>
  );
};

// 3. The Main Wrapper (holds Header and Content)
export const LayoutMain = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={cn("flex flex-col flex-1 h-full overflow-hidden", className)}>
      {children}
    </div>
  );
};

// 4. The Header
export const LayoutHeader = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <header className={cn("h-16 flex items-center px-6 bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 w-full shrink-0", className)}>
      {children}
    </header>
  );
};

// 5. The Scrollable Content Area
export const LayoutContent = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <main className={cn("flex-1 overflow-auto p-6 relative", className)}>
      {children}
    </main>
  );
};

// Attach sub-components to the parent namespace
Layout.Sidebar = LayoutSidebar;
Layout.Main = LayoutMain;
Layout.Header = LayoutHeader;
Layout.Content = LayoutContent;