import { Navbar } from "@/components/navbar";
import ComponentDemo from "../ComponentsDemo";

const NavbarPage = () => {
  const usageCode = `import {Navbar} from "@/components/navbar"
  

  `;

  return (
    <div>
      <ComponentDemo code={usageCode}>
        <Navbar />
      </ComponentDemo>
    </div>
  );
};

export default NavbarPage;
