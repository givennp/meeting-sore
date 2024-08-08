import Link from "next/link";
import "./button.css"

const Button = ({link = "", children, func}) => {
    return (
      <>
          <Link
            href={link}
            onClick={func}
            data-replace={children}
          >
            <span className="" >{children}</span>
          </Link>
      </>
    );
}

export default Button