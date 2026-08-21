import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";
import { Carousel } from "@/components/Carousel/Carousel";

const CarouselPage = () => {
  const usageCode = `import { Carousel } from "@/components/Carousel/Carousel";

const items = [
  <img src="https://images.unsplash.com/photo-1707343843437-caacff5cfa74?q=80&w=1000&auto=format&fit=crop" className="w-full h-80 object-cover" alt="Slide 1" />,
  <img src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?q=80&w=1000&auto=format&fit=crop" className="w-full h-80 object-cover" alt="Slide 2" />,
  <div className="w-full h-80 bg-slate-900 flex items-center justify-center text-white text-3xl font-bold">
    Custom Content Node
  </div>
];

<Carousel items={items} autoPlay interval={4000} />`;

  const propsData = [
    {
      prop: "items",
      type: "React.ReactNode[]",
      default: "-",
      description: "Array of React nodes (images, text blocks, other components) to display as slides.",
    },
    {
      prop: "showArrows",
      type: "boolean",
      default: "true",
      description: "Toggles visibility of the left and right navigation arrows on hover.",
    },
    {
      prop: "showIndicators",
      type: "boolean",
      default: "true",
      description: "Toggles visibility of the pagination dots at the bottom of the carousel.",
    },
    {
      prop: "autoPlay",
      type: "boolean",
      default: "false",
      description: "If true, automatically transitions through the slides.",
    },
    {
      prop: "interval",
      type: "number",
      default: "3000",
      description: "Time in milliseconds between automatic slide transitions.",
    },
  ];

  const demoItems = [
    <img key="1" src="https://images.unsplash.com/photo-1707343843437-caacff5cfa74?q=80&w=1000&auto=format&fit=crop" className="w-full h-[400px] object-cover" alt="Slide 1" />,
    <img key="2" src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?q=80&w=1000&auto=format&fit=crop" className="w-full h-[400px] object-cover" alt="Slide 2" />,
    <div key="3" className="w-full h-[400px] bg-slate-900 flex flex-col gap-4 items-center justify-center text-white text-3xl font-bold">
      <span>Any React Node Works!</span>
      <span className="text-sm font-normal text-gray-400">You can place buttons, forms, or entire layouts in here.</span>
    </div>
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-12">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Carousel</h1>
        <p className="text-lg text-gray-600">
          A responsive slideshow component for cycling through images or custom UI blocks.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>
        <ComponentDemo code={usageCode}>
          <div className="w-full max-w-2xl mx-auto py-8">
            <Carousel items={demoItems} className="shadow-lg border border-gray-200" />
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

export default CarouselPage;