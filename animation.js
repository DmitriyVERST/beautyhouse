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