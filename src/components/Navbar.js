import Image from "next/image";
import logo from "../../public/Logo_Complete.svg";
import Link from "next/link";
import icon from "../../public/menu-icon.svg"
import Button from "./Buttons/Button";

const Navbar = () => {
  return (
    <>
      <div className="h-[72px] flex  justify-between items-center container">
        <Link href="/">
          <Image style={{mixBlendMode: "difference"}} width={92} height={24} src={logo} />
        </Link>
        <div className="flex gap-x-6 max-md:hidden">
            <Button link="/portfolio">PORTFOLIO</Button>
            <Button link="/about">ABOUT</Button>
            <Button link="/contact">CONTACT US</Button>
        </div>
        <Image className="md:hidden" src={icon} style={{width: "24px", height: "24px"}}/>
      </div>
    </>
  );
};

export default Navbar;
