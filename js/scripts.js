$(function(){
	var carouselList = $("#carousel ul");
	setInterval(changeSlide, 5000);
	function changeSlide(){
		carouselList.animate({marginLeft: -600}, 1000, placeFirstSlideAfterLast);
	}

	function placeFirstSlideAfterLast(){
		var last = carouselList.find('li:last');
		var first = carouselList.find('li:first');
		last.after(first);
		carouselList.css({marginLeft:0});
	}

	$('.next').click(changeSlide);
	$('.prev').click(function(){
		var last = carouselList.find('li:last');
		var first = carouselList.find('li:first');
		first.before(last);
		carouselList.css({marginLeft: -600});
		carouselList.animate({marginLeft: 0}, 1000);
	});
});