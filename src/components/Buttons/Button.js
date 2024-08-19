import Link from "next/link";
import "./button.css"

const Button = ({
  link = "",
  children,
  func,
  className = "",
  onHoverText,
  className2 = "",
}) => {
  return (
    <>
      <Link
        href={link}
        onClick={func}
        data-replace={onHoverText || children}
        className={`${className}`}
      >
        <span className={`${className2 || className }`}>{children}</span>
      </Link>
    </>
  );
};

export default Button