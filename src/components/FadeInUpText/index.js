import styles from "./fadeInUpText.module.css";

const FadeInUpText = ({ duration = "1s", children }) => {
  return (
    <div
      className={`${styles.animated} ${styles.fadeInUp}`}
      style={{ "--animation-duration": duration }}
    >
      {children}
    </div>
  );
};

export default FadeInUpText;
