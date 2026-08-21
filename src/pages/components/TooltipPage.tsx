import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";
import { Tooltip } from "@/components/Tooltip/Tooltip";
import { Button } from "@/components/Button/Button";

const TooltipPage = () => {
  const usageCode = `import { Tooltip } from "@/components/Tooltip/Tooltip";
import { Button } from "@/components/Button/Button";

<Tooltip content="This is a top tooltip" position="top" variant="dark">
  <Button variant="primary">Top</Button>
</Tooltip>
<Tooltip content="This is a light tooltip" position="bottom" variant="light">
  <Button variant="outline">Bottom Light</Button>
</Tooltip>`;

  const propsData = [
    {
      prop: "content",
      type: "string",
      default: "-",
      description: "The text or element displayed inside the tooltip box.",
    },
    {
      prop: "position",
      type: '"top" | "bottom" | "left" | "right"',
      default: '"top"',
      description: "Placement of the tooltip relative to the trigger element.",
    },
    {
      prop: "variant",
      type: '"dark" | "light"',
      default: '"dark"',
      description: "Visual style theme of the tooltip box.",
    },
    {
      prop: "animation",
      type: '"fadeIn" | "scaleIn" | "slideUp" | "bounceIn" | "none"',
      default: '"fadeIn"',
      description: "Entrance animation effect powered by GSAP when the tooltip mounts.",
    },
    {
      prop: "children",
      type: "React.ReactNode",
      default: "-",
      description: "The target element that triggers the tooltip on hover.",
    },
    {
      prop: "className",
      type: "string",
      default: "-",
      description: "Additional CSS classes for custom styling.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-12">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Tooltip</h1>
        <p className="text-lg text-gray-600">
          Displays informative popup text when hovering over an element.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>
        <ComponentDemo code={usageCode}>
          <div className="flex gap-4 flex-wrap justify-center py-10">
            <Tooltip content="This is a top tooltip" position="top" variant="dark">
              <Button variant="primary">Top</Button>
            </Tooltip>
            <Tooltip content="This is a bottom tooltip" position="bottom" variant="dark">
              <Button variant="secondary">Bottom</Button>
            </Tooltip>
            <Tooltip content="This is a light tooltip" position="left" variant="light">
              <Button variant="outline">Left Light</Button>
            </Tooltip>
            <Tooltip content="Right tooltip" position="right" variant="dark">
              <Button variant="dark">Right</Button>
            </Tooltip>
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

export default TooltipPage;