import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";
import { Layout } from "@/components/Layout/Layout";
import { Button } from "@/components/Button/Button";
import { Search, Home, Settings, User, Bell, Menu } from "lucide-react";

const LayoutPage = () => {
  const sidebarUsageCode = `import { Layout } from "@/components/Layout/Layout";
import { Search, Home, Settings, User } from "lucide-react";

<Layout className="border border-gray-200 rounded-lg shadow-sm h-[500px]">
  <Layout.Sidebar>
    <div className="p-4 font-bold text-xl border-b border-gray-200">MyApp</div>
    <nav className="flex flex-col gap-2 p-4 text-gray-600">
      <a href="#" className="flex items-center gap-3 hover:text-indigo-600"><Home size={18}/> Dashboard</a>
      <a href="#" className="flex items-center gap-3 hover:text-indigo-600"><User size={18}/> Profile</a>
    </nav>
  </Layout.Sidebar>
  <Layout.Main>
    <Layout.Header className="justify-between">
      <span className="text-gray-400">Search...</span>
      <Button size="sm">New Post</Button>
    </Layout.Header>
    <Layout.Content>
       {/* Page content */}
    </Layout.Content>
  </Layout.Main>
</Layout>`;

  const topNavUsageCode = `import { Layout } from "@/components/Layout/Layout";
import { Search, Bell } from "lucide-react";

// Note the addition of "flex-col" on the main Layout wrapper
<Layout className="flex-col border border-gray-200 rounded-lg shadow-sm h-[500px]">
  <Layout.Header className="justify-between bg-indigo-600 text-white border-none">
    <div className="flex items-center gap-8">
      <div className="font-bold text-xl tracking-tight">EaseUI</div>
      <nav className="hidden sm:flex gap-6 text-sm font-medium text-indigo-100">
        <a href="#" className="hover:text-white transition-colors">Products</a>
        <a href="#" className="hover:text-white transition-colors">Solutions</a>
        <a href="#" className="hover:text-white transition-colors">Pricing</a>
      </nav>
    </div>
    <div className="flex items-center gap-5">
      <Search size={18} className="cursor-pointer text-indigo-200 hover:text-white transition-colors" />
      <Bell size={18} className="cursor-pointer text-indigo-200 hover:text-white transition-colors" />
      <div className="w-8 h-8 rounded-full bg-indigo-400 border-2 border-indigo-300"></div>
    </div>
  </Layout.Header>

  <Layout.Content className="bg-gray-50 flex items-center justify-center">
    <div className="text-center space-y-4">
      <h2 className="text-3xl font-bold text-gray-900">Build something amazing.</h2>
      <p className="text-gray-500 max-w-md mx-auto">
        This top navigation layout is perfect for landing pages, e-commerce storefronts, and consumer-facing applications.
      </p>
    </div>
  </Layout.Content>
</Layout>`;

  const propsData = [
    {
      prop: "Layout",
      type: "Component",
      default: "-",
      description: "The outermost container. Defaults to a flex row, but accepts 'flex-col' for top-nav layouts.",
    },
    {
      prop: "Layout.Sidebar",
      type: "Component",
      default: "-",
      description: "A fixed-width sidebar container.",
    },
    {
      prop: "Layout.Main",
      type: "Component",
      default: "-",
      description: "The flex column that wraps the Header and Content to sit adjacent to the Sidebar.",
    },
    {
      prop: "Layout.Header",
      type: "Component",
      default: "-",
      description: "A fixed-height top navigation bar.",
    },
    {
      prop: "Layout.Content",
      type: "Component",
      default: "-",
      description: "The main scrollable canvas where page content is rendered.",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto p-4 space-y-16">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">App Layout</h1>
        <p className="text-lg text-gray-600">
          A compound component system for rapidly building diverse app structures.
        </p>
      </header>

      {/* 1. TOP NAV LAYOUT DEMO */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Top Navigation Layout</h2>
        <p className="text-gray-600 mb-4 text-sm">
          By applying <code className="bg-gray-100 px-1 py-0.5 rounded text-indigo-600">flex-col</code> to the main container, you can instantly swap to a standard website or top-heavy app layout.
        </p>
        <ComponentDemo code={topNavUsageCode}>
          <div className="w-full py-8">
            <Layout className="flex-col border border-gray-200 rounded-lg shadow-sm h-[500px]">
              {/* Header */}
              <Layout.Header className="justify-between bg-indigo-600 text-white border-none">
                <div className="flex items-center gap-8">
                  <div className="font-bold text-xl tracking-tight">EaseUI</div>
                  <nav className="hidden sm:flex gap-6 text-sm font-medium text-indigo-100">
                    <a href="#" className="hover:text-white transition-colors">Products</a>
                    <a href="#" className="hover:text-white transition-colors">Solutions</a>
                    <a href="#" className="hover:text-white transition-colors">Pricing</a>
                  </nav>
                </div>
                <div className="flex items-center gap-5">
                  <Search size={18} className="cursor-pointer text-indigo-200 hover:text-white transition-colors" />
                  <Bell size={18} className="cursor-pointer text-indigo-200 hover:text-white transition-colors" />
                  <div className="w-8 h-8 rounded-full bg-indigo-400 border-2 border-indigo-300"></div>
                </div>
              </Layout.Header>

              {/* Content area immediately follows header */}
              <Layout.Content className="bg-gray-50 flex items-center justify-center relative">
                {/* Decorative background element */}
                <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-indigo-50/50 to-transparent pointer-events-none"></div>
                
                <div className="text-center space-y-6 relative z-10 w-full max-w-2xl px-6">
                  <div className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-full mb-2">
                    v2.0 Released
                  </div>
                  <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
                    Build something amazing.
                  </h2>
                  <p className="text-gray-500 text-lg">
                    This top navigation layout is perfect for landing pages, e-commerce storefronts, and consumer-facing applications.
                  </p>
                  <div className="pt-4 flex justify-center gap-4">
                    <Button variant="primary" animation="none">Get Started</Button>
                    <Button variant="outline" animation="none">Read Docs</Button>
                  </div>
                </div>
              </Layout.Content>
            </Layout>
          </div>
        </ComponentDemo>
      </section>

      {/* 2. SIDEBAR DASHBOARD LAYOUT DEMO */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Sidebar Dashboard Layout</h2>
        <p className="text-gray-600 mb-4 text-sm">
          The default layout uses a flex row to perfectly accommodate admin panels, internal tools, and SaaS dashboards.
        </p>
        <ComponentDemo code={sidebarUsageCode}>
          <div className="w-full py-8">
            <Layout className="border border-gray-200 rounded-lg shadow-sm h-[500px]">
              <Layout.Sidebar>
                <div className="p-4 text-white font-bold text-xl border-b border-gray-200 flex items-center justify-between">
                  <span>EaseUI</span>
                  <Menu size={20} className="text-gray-300 sm:hidden" />
                </div>
                <nav className="flex flex-col gap-4 p-4 text-sm font-medium text-gray-400">
                  <a href="#" className="flex items-center gap-3 hover:text-indigo-600 transition-colors"><Home size={18}/> Dashboard</a>
                  <a href="#" className="flex items-center gap-3 hover:text-indigo-600 transition-colors"><User size={18}/> Profile</a>
                  <a href="#" className="flex items-center gap-3 hover:text-indigo-600 transition-colors"><Settings size={18}/> Settings</a>
                </nav>
              </Layout.Sidebar>

              <Layout.Main>
                <Layout.Header className="justify-between">
                  <div className="flex items-center text-gray-400 bg-gray-100 px-3 py-1.5 rounded-md">
                    <Search size={16} />
                    <span className="ml-2 text-sm">Search projects...</span>
                  </div>
                  <Button size="sm" variant="primary" animation="none">New Project</Button>
                </Layout.Header>

                <Layout.Content>
                  <h2 className="text-2xl font-bold mb-6">Overview</h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-32 bg-white rounded-lg border border-gray-200 p-4 shadow-sm flex flex-col justify-center">
                      <span className="text-gray-500 text-sm">Total Revenue</span>
                      <span className="text-2xl font-bold">$45,231.89</span>
                    </div>
                    <div className="h-32 bg-white rounded-lg border border-gray-200 p-4 shadow-sm flex flex-col justify-center">
                      <span className="text-gray-500 text-sm">Active Users</span>
                      <span className="text-2xl font-bold">+2350</span>
                    </div>
                    <div className="h-64 bg-white rounded-lg border border-gray-200 p-4 col-span-2 shadow-sm flex items-center justify-center">
                      <span className="text-gray-400 font-medium text-sm">Analytics Here</span>
                    </div>
                  </div>
                </Layout.Content>
              </Layout.Main>
            </Layout>
          </div>
        </ComponentDemo>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>
        <PropsTable data={propsData} />
      </section>
    </div>
  );
};

export default LayoutPage;