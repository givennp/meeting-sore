import Link from "next/link";
import "./button.css"

const Button = ({link, children, func}) => {
    return (
      <>
        <p>
          <Link href={link || ""} onClick={func} data-replace={children}>
            <span>{children}</span>
          </Link>
        </p>
      </>
    );
}

export default Button