$(function(){

$('.banner-section__slider').slick({
dots: true,
prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="images/arrow-left.svg"></button>',
nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="images/arrow-right.svg"></button>',
responsive: [
   {
     breakpoint: 969,
     settings: {
       arrows: false
     }
   }
 ]
});


$('.tab').on('click', function(e){
   e.preventDefault();

$($(this).siblings()).removeClass('tab--active');
$($(this).closest('.tabs-wrapper').siblings().find('div')).removeClass('tabs-content--active');

$(this).addClass('tab--active');
$($(this).attr('href')).addClass('tabs-content--active');

$('.product-slider').slick('setPosition'); 
});


$('.product-item__favorite').on('click', function(){
   $(this).toggleClass('product-item__favorite--active')
});


$('.product-slider').slick({
slidesToShow: 4,
slidesToScroll: 1,
prevArrow: '<button class="product-slider__slider-btn product-slider__slider-btnprev"><img src="images/arrow-black-left.svg"></button>',
nextArrow: '<button class="product-slider__slider-btn product-slider__slider-btnnext"><img src="images/arrow-black-right.svg"></button>',
responsive: [
   {
     breakpoint: 1301,
     settings: {
       arrows: false,
       dots: true
     }
   },
   {
      breakpoint: 1201,
      settings: {
         arrows: false,
         slidesToShow: 3,
         dots: true
      }
    },
   {
      breakpoint: 870,
      settings: {
         arrows: false,
         slidesToShow: 2,
         dots: true
      }
    },
   {
      breakpoint: 590,
      settings: {
         arrows: false,
         slidesToShow: 1,
         dots: true
      }
    },
 ]
});

$('.filter-style').styler();

$('.filter__item-drop,.filter__extra').on('click', function(){
$(this).toggleClass('filter__item-drop--active');
$(this).next().slideToggle();
});


$(".js-range-slider").ionRangeSlider({
   grid: false,
   type: "double",
   min: 100000,
   max: 500000,
   onStart: function (data) {
      // Обработчик события onStart вызывается один раз при инициализации плагина.
      // В этом обработчике мы можем связать элементы ползунков с плагином.
      $(data.input).parent().find('.irs-min').html(data.from);
      $(data.input).parent().find('.irs-max').html(data.to);
   },
   onChange: function (data) {
      // Обработчик события onChange вызывается каждый раз, когда пользователь изменяет значение ползунка.
      // В этом обработчике мы можем обновить значения на ползунках.
      $(data.input).parent().find('.irs-min').html(data.from);
      $(data.input).parent().find('.irs-max').html(data.to);
   }
});


$('.catalog__filter-btngrid').on('click', function(){
   $(this).addClass('catalog__filter-button--active');
   $('.catalog__filter-btnline').removeClass('catalog__filter-button--active');
   $('.product-item__wrappeer').removeClass('product-item__wrapper--list');
});

$('.catalog__filter-btnline').on('click', function(){
   $(this).addClass('catalog__filter-button--active');
   $('.catalog__filter-btngrid').removeClass('catalog__filter-button--active');
   $('.product-item__wrappeer').addClass('product-item__wrapper--list');
});



$(".rate-yo").rateYo({
   rating: 4,
   ratedFill: "#1C62CD",
   spacing: "7px",
   normalFill: "#C4C4C4"
 });


 $('.menu__btn').on('click', function(){
  $('.menu-mobile__list,.menu__btn-line').toggleClass('active');
 });


 $('.footer__topdrop').on('click', function(){
$(this).next().slideToggle();
$(this).toggleClass('active');
 });


 $('.aside__btn').on('click', function(){
$(this).next().slideToggle();
 });
 
});

 
 
