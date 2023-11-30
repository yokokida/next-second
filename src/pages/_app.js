import "@/styles/globals.css";
import { useEffect } from "react";

export default function App({ Component, pageProps, router }) {
  useEffect(() => {
    animationScrollTrigger();
    ApplySpMenu();
    exLink();
    function animationScrollTrigger() {
      var tgts = document.querySelectorAll(".fadein-trigger");
      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-active");
              observer.unobserve(entry.target);
            }
          });
        },
        {
          root: null,
          rootMargin: "10%",
          threshold: 0,
        }
      );
      tgts.forEach((target) => {
        observer.observe(target);
      });
    }
    function ApplySpMenu() {
      var menuBtn = document.getElementById("btn-hamburger");
      var spMenu = document.getElementById("sp-menu");
      menuBtn.addEventListener("click", () => {
        menuBtn.classList.toggle("is-active");
        spMenu.classList.toggle("is-active");
      });
      spMenu.addEventListener("click", () => {
        menuBtn.classList.toggle("is-active");
        spMenu.classList.toggle("is-active");
      });
    }
    function exLink() {
      var anchorTag = document.querySelectorAll("a[href^=http]")[0];
      var sameDomainLink = anchorTag.href.includes(location.hostname);
      if (!sameDomainLink) {
        anchorTag.setAttribute("target", "_blank");
      }
    }
  }, [router.pathname]);

  return <Component {...pageProps} />;
}
