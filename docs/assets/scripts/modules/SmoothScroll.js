import $ from 'jquery';
import smoothScroll from 'jquery-smooth-scroll';
/*
class SmoothScroll{
	constructor() {
		this.headerLinks = $(".site-header a");
		this.addSmoothScrolling();
	}
}

addSmoothScrolling(){
	this.headerLinks.smoothScroll();
}

export default SmoothScroll;*/


$('.site-header a').on('click', function(event) {
event.preventDefault();
  var link = this;
  $.smoothScroll({
  	scrollElement: null
    scrollTarget: null
  });
});

$.smoothScroll(); 

