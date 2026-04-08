{
  'use strict'

  function OpenMenu() {
      // メニューが閉じている状態から開く状態へ
      $('.header-nav').slideDown()
      $e.addClass('close')
      $('.header-nav').removeClass('collapse')
  }

  function CloseMenu() {
      // メニューが開いている状態から閉まる状態へ
      $('.header-nav').slideUp()
      $e.removeClass('close')
      $('.header-nav').addClass('collapse')
  }


  $('.navbtn').on('click', (event) => {
    event.preventDefault()
    $e = $(event.currentTarget)
    if($e.hasClass('close')) {
            CloseMenu();
    } else {
            OpenMenu();
    }
  })

  $("a").on("click", function() {
    var id = $(this).attr('href'); // リンク先のhref属性を取得
   if ( id && id.match(/#/)) {
        CloseMenu();
    }
  });

const mq = window.matchMedia("(min-width: 800px)");

mq.addEventListener("change", (e) => {
  if (e.matches) {
        CloseMenu();
  }
  
});

}
