// headerFadeIn()
// tabChange()

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
