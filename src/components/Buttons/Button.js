import Link from "next/link";
import "./button.css"

const Button = ({link = "", children, func}) => {
    return (
      <>
        <a>
          <Link
            href={link}
            onClick={func}
            data-replace={children}
          >
            <span className="mix-blend-normal" >{children}</span>
          </Link>
        </a>
      </>
    );
}

export default Button