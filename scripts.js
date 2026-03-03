//настройки
var options = {
	root: null,
	rootMargin: '5px',
	threshold: 0.5
}
//функция обратного вызова
var callback = function(entries, observer){
	entries.forEach(entry => {
	//если элемент является наблюдаемым
	if(entry.isIntersecting){
		console.log('find', entry);
		//добавим класс active к нему
		//entry.target.classList.add('active');
	}
  });
}

//наблюдатель
var observer = new IntersectionObserver(callback, options);

//определяем элементы, за которыми наблюдаем
var targets = document.querySelectorAll('.newblock');
targets.forEach(target => {
	observer.observe(target);
});

function hide_mob(a){
	//alert('asdf');//document.getElementsByClassName('sub').style.display='none';
	var x = document.getElementById("mob_sub" + a);
	
	if(x.innerHTML == ''){
		x.innerHTML=document.getElementById("sub" + a).innerHTML;
	}
	else{
		x.innerHTML = '';
	}
//var i;
//for (i = 0; i < x.length; i++) {
//	if(x[i].style.display == 'none'){
//		x[i].style.display = 'inline-block';
//		x[i].style.transition = '0s';
//	}
//	else{
//		x[i].style.display = 'none';
//	}
//}
}

function show_usl(a,y){
	var usl_a = document.getElementsByClassName("usl_a");
	for (i = 0; i < usl_a.length; i++) {
		//usl_a[i].style.background='#fff';
		usl_a[i].classList.remove("usl_a2");
	}
	y.classList.add("usl_a2");
	var new_text = y.innerHTML;
	document.getElementById("line1").innerHTML='<p>TWINS BEAUTY HOUSE <img src="images/mini_logo.svg">' + new_text + '<img src="images/mini_logo.svg">TWINS BEAUTY HOUSE <img src="images/mini_logo.svg"> ' + new_text + ' <img src="images/mini_logo.svg">TWINS BEAUTY HOUSE <img src="images/mini_logo.svg"> ' + new_text + ' <img src="images/mini_logo.svg">TWINS BEAUTY HOUSE <img src="images/mini_logo.svg"> ' + new_text + ' <img src="images/mini_logo.svg">TWINS BEAUTY HOUSE <img src="images/mini_logo.svg"> ' + new_text + ' <img src="images/mini_logo.svg">TWINS BEAUTY HOUSE <img src="images/mini_logo.svg"> ' + new_text + ' <img src="images/mini_logo.svg">TWINS BEAUTY HOUSE <img src="images/mini_logo.svg"> ' + new_text + ' <img src="images/mini_logo.svg">TWINS BEAUTY HOUSE <img src="images/mini_logo.svg"> ' + new_text + ' <img src="images/mini_logo.svg"></p>';
	//y.style.background = "#841A10";
	//y.style.color = "#fff";
//	if(usl_a[i].style.background-color == 'red'){
//		usl_a[i].style.display = 'inline-block';
//		usl_a[i].style.transition = '0s';
//	}
//	else{
//		x[i].style.display = 'none';
//	}
	//alert('asdf');//document.getElementsByClassName('sub').style.display='none';
	var x = document.getElementById("usl" + a);
	//element.addEventListener('click', function () { this.style.visibility = "hidden";});
	//x.style.bottom="-500px";alert(x.style.bottom);
	x.style.visibility="visible";
	
	//x.style.transform="translateY(400px)";
	x.classList.add("usl_up");
	// Отслеживаем окончание анимации
x.addEventListener("animationend", AnimationHandler, false);

function AnimationHandler () {
  // Удаляем класс с анимацией
  x.classList.remove('usl_up');
  
}
	//alert(x.style.bottom);
//	x.classList.add("animate__animated animate__fadeInLeft");
	 
//	if(x.innerHTML == ''){
//		x.innerHTML=document.getElementById("sub" + a).innerHTML;
//	}
//	else{
//		x.innerHTML = '';
//	}
//var i;
//for (i = 0; i < x.length; i++) {
//	if(x[i].style.display == 'none'){
//		x[i].style.display = 'inline-block';
//		x[i].style.transition = '0s';
//	}
//	else{
//		x[i].style.display = 'none';
//	}
//}
}

$(document).ready(function(){
  $(".card_oplata").click(function(){
    $(".card_oplata_div").slideToggle(200);
  });
});

function hide_box()
{
	document.getElementById('cookie_box').style.display='none';
}

document.addEventListener('DOMContentLoaded', () => {

  const followCursor = () => { // объявляем функцию followCursor
    const el = document.querySelector('.follow-cursor') // ищем элемент, который будет следовать за курсором

    window.addEventListener('mousemove', e => { // при движении курсора
      const target = e.target // определяем, где находится курсор
      if (!target) return

      if (target.closest('.akciya')) { // если курсор наведён на ссылку
        el.classList.add('follow-cursor_active1') // элементу добавляем активный класс
      }
		else if (target.closest('.akciya2')) { // если курсор наведён на ссылку
        el.classList.add('follow-cursor_active2') // элементу добавляем активный класс
      } 
      else { // иначе
        el.classList.remove('follow-cursor_active1') // удаляем активный класс
        el.classList.remove('follow-cursor_active2') // удаляем активный класс
      }

      el.style.left = e.pageX + 'px' // задаём элементу позиционирование слева
      el.style.top = e.pageY + 'px' // задаём элементу позиционирование сверху
    })
  }

  followCursor() // вызываем функцию followCursor

});

(function($) {
	$.extend($.expr[':'], {
		'off-top': function(el) { // проверка того, что элемент достиг верха экрана
			return $(el).offset().top < $(window).scrollTop();
		},
		'off-top-height': function(el) { // проверка того, что весь элемент ушел за верхний край экрана
			return ($(el).offset().top+$(el).outerHeight()) < $(window).scrollTop();
		},
		'off-right': function(el) { // проверка того, что элемент ушел за правый край
			return $(el).offset().left + $(el).outerWidth() - $(window).scrollLeft() > $(window).width();
		},
		'off-bottom': function(el) { // проверка того, что элемент ушел за нижний край
			return $(el).offset().top + $(el).outerHeight() - $(window).scrollTop() > $(window).height();
		},
		'off-left': function(el) { // проверка того, что элемент ушел за левый край
			return $(el).offset().left < $(window).scrollLeft();
		},
		'off-screen': function(el) { // элемент вышел из области видимости экран
			return $(el).is(':off-top, :off-right, :off-bottom, :off-left');
		}
	});
})(jQuery);

$(document).ready(function () {
$(".btn_mobile").click(function(){
  $(".btn_mobile").toggleClass("fixed_menu");
  //alert("asdf");
});
});

$(document).ready(function () {
$(".blog_readmore").click(function(){
	if($(".filter_scroll").html() != $(".blog_full_text").html())
	{
		$(".filter_scroll").html($(".blog_full_text").html());
		$(".blog_readmore").html("Скрыть");
	}
	else
	{
		$(".filter_scroll").html($(".blog_intro_text").html());
		$(".blog_readmore").html("Читать полностью");
	}
});
});

$(document).ready(function () {
$(".a_desc_info").click(function(){
	const collection = document.getElementsByClassName("a_desc_info");
	for (let i = 0; i < collection.length; i++) {
  	collection[i].classList.remove("active");
}
	$(this).addClass("active");
});
});

$(document).ready(function () {
    $(document).scroll(function () { 
    	if((window.scrollY > 1)&&$(".o_brende_logo").html)
    	{
    		$(".o_brende_pc .btn_mobile span").css({'background-color':'#841A10'});
    		$(".o_brende_pc .a_logo").html('<img src="images/logo.svg" class="logo">');
    		$(".o_brende_pc .cart").html('<img src="images/cart.svg"><span style="background-color:#841A10;color:#fff">1</span>');
    		$(".header-mobile").css({'background-color':'#fff'});
    		//document.getElementById("o_brende_logo").innerHTML);
    	}
    	if((window.scrollY == 0)&&$(".o_brende_logo").html)
    	{
    		$(".o_brende_pc .btn_mobile span").css({'background-color':'#fff'});
    		$(".o_brende_pc .a_logo").html('<img src="images/logo_white.svg" class="logo">');
    		$(".o_brende_pc .cart").html('<img src="images/cart_white.svg"><span style="background-color:#fff;color:#841A10">1</span>');
    		$(".header-mobile").css({'background-color':'transparent'});
    	}
        if($('div.usl_end').is(":off-top-height")){
           // $('div.usl_box').css({'display':'block'})//;toggleClass('pos_sticky');
        	//alert('Элемент вышел за верхний край экрана');
        }
    });
});

$(document).ready(function () {
    $(document).scroll(function () {
    	var offset = -(window.scrollY)*0.2;
    	$( ".e12" ).animate({ top: offset }, 10 );
    	$( ".e13" ).animate({ top: offset }, 10 );
    	$( ".e14" ).animate({ top: offset }, 10 );
        //if($('div.usl_end').is(":off-top-height")){
           // $('div.usl_box').css({'display':'block'})//;toggleClass('pos_sticky');
        	//alert('Элемент вышел за верхний край экрана');
        //}
    });
});

//addEventListener('scroll', function () { $( "div" )document.getElementById("e12").animate({ left: 30 }, 500 ); });

//var i = 0;
//var txt = 'Lorem ipsum typing effect!'; /* Текст */
//var speed = 50; /* Скорость/длительность эффекта в миллисекундах */
//
//function typeWriter() {
//  if (i < txt.length) {
//    document.getElementById("nabortxt").innerHTML += txt.charAt(i);
//    i++;
//    setTimeout(typeWriter, speed);
//  }
//}
$(document).ready(function () {
window.addEventListener('click', e => { // при клике в любом месте окна браузера
    const target = e.target; // находим элемент, на котором был клик
    if (!target.closest('.nameknut_popup')&& !target.closest('.nameknut_na_podarok')) { // если этот элемент или его родительские элементы не окно навигации и не кнопка
      $('.nameknut_popup').css({'visibility':'hidden'});
      
      }
  })
});