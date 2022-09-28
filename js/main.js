$(".navbar_gnb,.sub_shadow").on("mouseenter mouseleave", function (aa) {
  if ($(window).width() > 1169) {
    //데스크탑
    if (aa.type == "mouseenter") {
      //hover
      $(".sub").stop().slideDown();
      $(".sub_shadow").stop().fadeIn();
    } else {
      $(".sub")
        .stop()
        .slideUp(200, function () {
          $(".sub").removeAttr("style");
        });
      $(".sub_shadow")
        .stop()
        .fadeOut(200, function () {
          $(".sub_shadow").removeAttr("style");
        });
    }
  }
});

//모바일 - 메인메뉴 클릭하면 서브메뉴 나옴
const width = window.innerWidth;
const $mainBtn = $(".navbar_gnb > li > a"); //메인메뉴
$mainBtn.click(function () {
  if (width < 1170) {
    if (!$(this).parents("li").hasClass("on")) {
      //클린한 a의 부모 li 에 on class가 없을때
      $(".sub").slideUp(200);
      $(".navbar_gnb > li").removeClass("on");

      $(this).siblings(".sub").slideDown(500);
      $(this).parents("li").addClass("on");
    } else {
      $(".sub").slideUp(200);
      $(".sub").parents("li").removeAttr("class");
    }
  }
});

// const subMenu = document.querySelector(".sub");
// mainBtn.addEventListener("click", function () {
//   subMenu.slideDown();
// });

//모바일 상태에서 햄버거 버튼을 누르면 사이드바가 열리고 닫힘

$(".trigger").click(function () {
  $(this).toggleClass("open");
  if ($(this).hasClass("open")) {
    $(".gnb").animate({ right: 0 }, 400);
    $("header").animate({ left: -250 }, 400);
  } else {
    $("header").animate({ left: 0 }, 200);
    $(".gnb").animate({ right: -250 }, 200);
  }
});

//모바일 상태에서 서브메뉴를 열고 데스크탑상태로 바꾸면 서브가 그냥 보이는 상태 - 수정
$(window).resize(function () {
  if ($(window).width() > 1169) {
    $(".sub").removeAttr("style");
    $(".navbar_gnb > li").removeClass("on");
  }
});
/*
  mouseenter mouseleave - 자식 요소가 있다면 해당 자식요소 영역은 제외
  mouseover / mouseout  - 자식 요소가 있따면 해당 자식요소까지 포함

*/
