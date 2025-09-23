import { useEffect } from "react";

const useScrollAnimation = () => {
  useEffect(() => {
    const sections = document.querySelectorAll(".animate-on-scroll");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible"); 
          }
        });
      },
      {
        threshold: 0.2, 
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [useScrollAnimation]);
};

export default useScrollAnimation;
