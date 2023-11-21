export default function Myscript() {
  if (typeof document !== "undefined") {
    document.cookie = "クッキー";
  }

  ApplySpMenu();
  exLink();
  animationScrollTrigger();
  // headerFadeIn();
  // tabChange();

  function ApplySpMenu() {
    var menuBtn = document.getElementById("btn-hamburger");
    var spMenu = document.getElementById("sp-menu");
    menuBtn.addEventListener("click", function () {
      menuBtn.classList.toggle("is-active");
      spMenu.classList.toggle("is-active");
    });
    spMenu.addEventListener("click", function () {
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

  function animationScrollTrigger() {
    var tgts = document.querySelectorAll(".bg-slide-trigger,.fadein-trigger");
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

  // function headerFadeIn() {
  //   $(window).scroll(function () {
  //     var tgt = document.getElementById("#header");
  //     var scroll = $(window).scrollTop();
  //     var windowHeight = $(window).height();
  //     if (windowHeight * 0.5 < scroll) {
  //       tgt.addClass("is-active");
  //     } else {
  //       tgt.removeClass("is-active");
  //     }
  //   });
  // }

  // function tabChange() {
  //   $(".tab").click(function () {
  //     $(".tab.is-active").removeClass("is-active");
  //     $(this).addClass("is-active");
  //     $(".panel.is-show").removeClass("is-show");
  //     var index = $(this).index();
  //     $(".panel").eq(index).addClass("is-show");
  //   });
  // }
}
