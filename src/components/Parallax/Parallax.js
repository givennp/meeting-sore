import { useEffect } from "react";
import styles from "./Parallax.module.css";

const Parallax = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const secondSection = document.querySelector(`.${styles.secondSection}`);

      if (secondSection) {
        secondSection.style.transform = `translateY(${scrollPosition * 0.5}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <section className={`${styles.section} ${styles.firstSection}`}>
        <h1>First Section</h1>
      </section>
      <section className={`${styles.section} ${styles.secondSection}`}>
        <h1>Second Section</h1>
      </section>
    </div>
  );
};

export default Parallax;
