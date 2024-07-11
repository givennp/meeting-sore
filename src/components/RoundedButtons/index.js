import Link from "next/link";
import "./button.css"

const RoundedButton = ({link = "", children, func}) => {
    return (
      <>
          <Link
            href={link}
            onClick={func}
            data-replace={children}
            className="border border-black rounded-3xl py-1 px-3"
          >
            <span className="text-black" >{children}</span>
          </Link>
      </>
    );
}

export default RoundedButton;