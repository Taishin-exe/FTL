$(function(){
  $('.burger').on('click', function(){
      $(this).toggleClass('active');
      $('.top').toggleClass('active');
      $('.mid').toggleClass('active');
      $('.bot').toggleClass('active');
      $('.modal-nav').toggleClass('active');
  });
  $('.modal-menu').on('click', function(){
    $('.top').toggleClass('active');
    $('.mid').toggleClass('active');
    $('.bot').toggleClass('active');
    $('.modal-nav').toggleClass('active');
  });
  // モーダル領域をクリックでフェードアウトさせる
  $( '.modal-nav' ).click( function(){
    $( this ).toggleClass('active');
    $('burger-wrap').toggleClass('active');
    $('.top').toggleClass('active');
    $('.mid').toggleClass('active');
    $('.bot').toggleClass('active');
  } );
  $( '.header-btn' ).click( function(){
    if($('.modal-nav').hasClass('active')){
      $('.modal-nav').toggleClass('active');
      $('burger-wrap').toggleClass('active');
      $('.top').toggleClass('active');
      $('.mid').toggleClass('active');
      $('.bot').toggleClass('active');
    }
  } );
  // がしかし、画像をクリックでキャンセルさせる
  $( '.modal-item' ).on( 'click', function( e ){
    e.stopPropagation();
  } );

  $('a[href^=#]').click(function() {
    // スクロールの速度
    var speed = 1000; // ミリ秒
    // アンカーの値取得
    var href= $(this).attr("href");
    // 移動先を取得
    var target = $(href == "#" || href == "" ? 'html' : href);
    // 移動先を数値で取得
    var position = target.offset().top;
    // スムーススクロール
    $('body,html').animate({scrollTop:position-80}, speed, 'swing');
    return false;
 });
});

//page top ボタン
jQuery(function() {
  var appear = false;
  var pagetop = $('#page_top');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 20) {  //100pxスクロールしたら
      if (appear == false) {
        appear = true;
        pagetop.stop().animate({
          'bottom': '50px' //下から50pxの位置に
        }, 300); //0.3秒かけて現れる
      }
    } else {
      if (appear) {
        appear = false;
        pagetop.stop().animate({
          'bottom': '-50px' //下から-50pxの位置に
        }, 300); //0.3秒かけて隠れる
      }
    }
  });
  pagetop.click(function () {
    $('body, html').animate({ scrollTop: 0 }, 3000); //3秒かけてトップへ戻る
    return false;
  });
});

//フェードインアニメーション
$(function() {
  $('.load-in').delay(900).fadeIn(4000);
  // フェードアウト
  $('.fadeOut').delay(4000).fadeOut();
});

$(window).scroll(function (){
  $('.fadein').each(function(){
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight + 50){
        $(this).addClass('active');
      }
  });
  $('.fadein2').each(function(){
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight + 100){
        $(this).addClass('active');
      }
  });
  $('.fadein3').each(function(){
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight + 100){
        $(this).addClass('active');
      }
  });
  $('.fadein4').each(function(){
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight + 100){
        $(this).addClass('active');
      }
  });
  $('.fadein5').each(function(){
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight + 200){
        $(this).addClass('active');
      }
  });
});

$(function() {
  $('.load-in').fadeIn();
});