import { Navbar } from "@/components/navbar";
import { Button } from "@/components/Button/Button";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";

const NavbarPage = () => {
  const usageCode = `import { Navbar } from "@/components/navbar";
import { Button } from "@/components/Button/Button";

// Light Variant
<Navbar variant="light" size="default">
  <div className="font-bold text-xl">EaseUI</div>
  <div className="flex gap-6 text-sm font-medium">
    <a href="#" className="hover:text-blue-600">Home</a>
    <a href="#" className="hover:text-blue-600">Products</a>
    <a href="#" className="hover:text-blue-600">Pricing</a>
  </div>
  <Button size="sm">Sign In</Button>
</Navbar>

// Glass Variant
<Navbar variant="glass" size="default" className="mt-4">
  <div className="font-bold text-xl">Glass Nav</div>
  <div className="flex gap-6 text-sm font-medium text-gray-200">
    <a href="#" className="hover:text-white">About</a>
    <a href="#" className="hover:text-white">Careers</a>
  </div>
  <Button variant="dark" size="sm">Contact</Button>
</Navbar>`;

  const propsData = [
    {
      prop: "variant",
      type: '"light" | "dark" | "primary" | "glass"',
      default: '"light"',
      description: "Defines the background color and text theme of the navigation bar.",
    },
    {
      prop: "size",
      type: '"default" | "sm" | "lg" | "xl"',
      default: '"default"',
      description: "Controls the vertical height of the navbar.",
    },
    {
      prop: "animation",
      type: 'keyof typeof entranceAnimations',
      default: '"fadeIn"',
      description: "GSAP entrance animation when the navbar mounts.",
    },
    {
      prop: "hoverAnimation",
      type: 'keyof typeof hoverAnimations',
      default: '"none"',
      description: "Optional GSAP animation triggered when hovering over the entire navbar.",
    },
    {
      prop: "children",
      type: "React.ReactNode",
      default: "-",
      description: "The links, logos, and buttons rendered inside the navbar.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-12">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Navbar</h1>
        <p className="text-lg text-gray-600">
          A flexible, responsive navigation header to route users through your application.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>
        <ComponentDemo code={usageCode}>
          <div className="w-full flex flex-col gap-8 bg-gray-50 p-4 rounded-lg relative">
            
            {/* Standard Light Navbar */}
            <Navbar variant="light" size="default" animation="slideUp">
              <div className="font-bold text-xl text-indigo-600">EaseUI</div>
              <div className="hidden sm:flex gap-6 text-sm font-medium">
                <a href="#" className="hover:text-indigo-600 transition-colors">Home</a>
                <a href="#" className="hover:text-indigo-600 transition-colors">Products</a>
                <a href="#" className="hover:text-indigo-600 transition-colors">Pricing</a>
              </div>
              <Button size="sm">Sign In</Button>
            </Navbar>

            {/* Glass Navbar  */}
            <div className="bg-slate-900 p-4 rounded-lg">
              <Navbar variant="glass" size="default" animation="fadeIn">
                <div className="font-bold text-xl text-white">EaseUi</div>
                <div className="hidden sm:flex gap-6 text-sm font-medium text-gray-300">
                  <a href="#" className="hover:text-white transition-colors">Home</a>
                  <a href="#" className="hover:text-white transition-colors">About</a>
                  <a href="#" className="hover:text-white transition-colors">Careers</a>
                </div>
                <Button variant="dark" size="sm">Contact</Button>
              </Navbar>
            </div>

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

export default NavbarPage;