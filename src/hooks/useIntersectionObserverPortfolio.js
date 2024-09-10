import { useEffect } from "react";

const useIntersectionObserverPortfolio = (sectionId, setActiveSection) => {
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // 50% of the element should be visible
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        } else {
          setActiveSection(""); // Reentered from the top
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    const target = document.querySelector(`#${sectionId}`);

    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, [setActiveSection]);
};

export default useIntersectionObserverPortfolio;
