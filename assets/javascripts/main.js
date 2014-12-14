jQuery(document).ready(function($){
	//update this value if you change this breakpoint in the style.css file (or _layout.scss if you use SASS)
	var MqL = 850;

	//on desktop, switch from product intro div to product tour div
	$('a[href="#cd-product-tour"]').on('click', function(event){
		event.preventDefault();
		$('header').addClass('slide-down');
		if($(window).width() < MqL) {
			$('body,html').animate({'scrollTop': $('#cd-product-tour').offset().top - 30 }, 200);
		} else {
			$('.cd-main-content').addClass('is-product-tour');
		}
	});

	//logo returns to intro
//	$('#cd-logo').on('click', function(event){
//		event.preventDefault();
//		showProductIntro();
//	});

	//update the slider - desktop only
	$('.cd-prev').on('click', function(event){
		event.preventDefault();
		var activeSlide = $('.cd-active');
		if(activeSlide.is(':first-child')) {
			//in this case - switch from product tour div to product intro div
			showProductIntro();
		} else {
			updateSlider(activeSlide, 'prev');
		}
	});
	$('.cd-next').on('click', function(event){
		event.preventDefault();
		var activeSlide = $('.cd-active');
		updateSlider(activeSlide, 'next');
	});

	$(window).on('scroll', function(){
		window.requestAnimationFrame(function(){
			if($(window).width() < MqL && $(window).scrollTop() < $('#cd-product-tour').offset().top - 30 ) {
				$('header').removeClass('slide-down');
			} else if ($(window).width() < MqL && $(window).scrollTop() >= $('#cd-product-tour').offset().top - 30 ){
				$('header').addClass('slide-down');
			}
		});
	});

	function showProductIntro() {
		$('header').removeClass('slide-down');
		$('.cd-main-content').removeClass('is-product-tour');
	}

	function updateSlider(active, direction) {
		var selected;
		if( direction == 'next' ) {
			selected = active.next();
			//on Firefox CSS transition/animation fails when parent element changes visibility attribute
			//so we have to change .cd-single-item childrens attributes after having changed its visibility value
	        setTimeout(function() {
	           	active.removeClass('cd-active').addClass('cd-hidden').next().removeClass('cd-move-right').addClass('cd-active').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
	           		active.addClass('cd-not-visible');
	           	});
	        }, 50);
		} else {
			selected = active.prev();
			//on Firefox CSS transition/animation fails when parent element changes visibility attribute
			//so we have to change .cd-single-item childrens attributes after having changed its visibility value
	        setTimeout(function() {
	           	active.removeClass('cd-active').addClass('cd-move-right').prev().addClass('cd-active').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
	           		active.addClass('cd-not-visible');
	           	});
	        }, 50);
		}
		//update visible slider
		selected.removeClass('cd-not-visible');
		//update slider navigation (in case we reached the last slider)
        updateSliderNav(selected);
	}

	function updateSliderNav(selected) {
		( selected.is(':last-child') ) ? $('.cd-next').addClass('cd-inactive') : $('.cd-next').removeClass('cd-inactive') ;
	}

});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIiLCJzb3VyY2VzIjpbIm1haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsialF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigkKXtcblx0Ly91cGRhdGUgdGhpcyB2YWx1ZSBpZiB5b3UgY2hhbmdlIHRoaXMgYnJlYWtwb2ludCBpbiB0aGUgc3R5bGUuY3NzIGZpbGUgKG9yIF9sYXlvdXQuc2NzcyBpZiB5b3UgdXNlIFNBU1MpXG5cdHZhciBNcUwgPSA4NTA7XG5cblx0Ly9vbiBkZXNrdG9wLCBzd2l0Y2ggZnJvbSBwcm9kdWN0IGludHJvIGRpdiB0byBwcm9kdWN0IHRvdXIgZGl2XG5cdCQoJ2FbaHJlZj1cIiNjZC1wcm9kdWN0LXRvdXJcIl0nKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCl7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHQkKCdoZWFkZXInKS5hZGRDbGFzcygnc2xpZGUtZG93bicpO1xuXHRcdGlmKCQod2luZG93KS53aWR0aCgpIDwgTXFMKSB7XG5cdFx0XHQkKCdib2R5LGh0bWwnKS5hbmltYXRlKHsnc2Nyb2xsVG9wJzogJCgnI2NkLXByb2R1Y3QtdG91cicpLm9mZnNldCgpLnRvcCAtIDMwIH0sIDIwMCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCQoJy5jZC1tYWluLWNvbnRlbnQnKS5hZGRDbGFzcygnaXMtcHJvZHVjdC10b3VyJyk7XG5cdFx0fVxuXHR9KTtcblxuXHQvL2xvZ28gcmV0dXJucyB0byBpbnRyb1xuLy9cdCQoJyNjZC1sb2dvJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpe1xuLy9cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcbi8vXHRcdHNob3dQcm9kdWN0SW50cm8oKTtcbi8vXHR9KTtcblxuXHQvL3VwZGF0ZSB0aGUgc2xpZGVyIC0gZGVza3RvcCBvbmx5XG5cdCQoJy5jZC1wcmV2Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpe1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0dmFyIGFjdGl2ZVNsaWRlID0gJCgnLmNkLWFjdGl2ZScpO1xuXHRcdGlmKGFjdGl2ZVNsaWRlLmlzKCc6Zmlyc3QtY2hpbGQnKSkge1xuXHRcdFx0Ly9pbiB0aGlzIGNhc2UgLSBzd2l0Y2ggZnJvbSBwcm9kdWN0IHRvdXIgZGl2IHRvIHByb2R1Y3QgaW50cm8gZGl2XG5cdFx0XHRzaG93UHJvZHVjdEludHJvKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHVwZGF0ZVNsaWRlcihhY3RpdmVTbGlkZSwgJ3ByZXYnKTtcblx0XHR9XG5cdH0pO1xuXHQkKCcuY2QtbmV4dCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KXtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdHZhciBhY3RpdmVTbGlkZSA9ICQoJy5jZC1hY3RpdmUnKTtcblx0XHR1cGRhdGVTbGlkZXIoYWN0aXZlU2xpZGUsICduZXh0Jyk7XG5cdH0pO1xuXG5cdCQod2luZG93KS5vbignc2Nyb2xsJywgZnVuY3Rpb24oKXtcblx0XHR3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCl7XG5cdFx0XHRpZigkKHdpbmRvdykud2lkdGgoKSA8IE1xTCAmJiAkKHdpbmRvdykuc2Nyb2xsVG9wKCkgPCAkKCcjY2QtcHJvZHVjdC10b3VyJykub2Zmc2V0KCkudG9wIC0gMzAgKSB7XG5cdFx0XHRcdCQoJ2hlYWRlcicpLnJlbW92ZUNsYXNzKCdzbGlkZS1kb3duJyk7XG5cdFx0XHR9IGVsc2UgaWYgKCQod2luZG93KS53aWR0aCgpIDwgTXFMICYmICQod2luZG93KS5zY3JvbGxUb3AoKSA+PSAkKCcjY2QtcHJvZHVjdC10b3VyJykub2Zmc2V0KCkudG9wIC0gMzAgKXtcblx0XHRcdFx0JCgnaGVhZGVyJykuYWRkQ2xhc3MoJ3NsaWRlLWRvd24nKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSk7XG5cblx0ZnVuY3Rpb24gc2hvd1Byb2R1Y3RJbnRybygpIHtcblx0XHQkKCdoZWFkZXInKS5yZW1vdmVDbGFzcygnc2xpZGUtZG93bicpO1xuXHRcdCQoJy5jZC1tYWluLWNvbnRlbnQnKS5yZW1vdmVDbGFzcygnaXMtcHJvZHVjdC10b3VyJyk7XG5cdH1cblxuXHRmdW5jdGlvbiB1cGRhdGVTbGlkZXIoYWN0aXZlLCBkaXJlY3Rpb24pIHtcblx0XHR2YXIgc2VsZWN0ZWQ7XG5cdFx0aWYoIGRpcmVjdGlvbiA9PSAnbmV4dCcgKSB7XG5cdFx0XHRzZWxlY3RlZCA9IGFjdGl2ZS5uZXh0KCk7XG5cdFx0XHQvL29uIEZpcmVmb3ggQ1NTIHRyYW5zaXRpb24vYW5pbWF0aW9uIGZhaWxzIHdoZW4gcGFyZW50IGVsZW1lbnQgY2hhbmdlcyB2aXNpYmlsaXR5IGF0dHJpYnV0ZVxuXHRcdFx0Ly9zbyB3ZSBoYXZlIHRvIGNoYW5nZSAuY2Qtc2luZ2xlLWl0ZW0gY2hpbGRyZW5zIGF0dHJpYnV0ZXMgYWZ0ZXIgaGF2aW5nIGNoYW5nZWQgaXRzIHZpc2liaWxpdHkgdmFsdWVcblx0ICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHQgICAgICAgICAgIFx0YWN0aXZlLnJlbW92ZUNsYXNzKCdjZC1hY3RpdmUnKS5hZGRDbGFzcygnY2QtaGlkZGVuJykubmV4dCgpLnJlbW92ZUNsYXNzKCdjZC1tb3ZlLXJpZ2h0JykuYWRkQ2xhc3MoJ2NkLWFjdGl2ZScpLm9uZSgnd2Via2l0VHJhbnNpdGlvbkVuZCBvdHJhbnNpdGlvbmVuZCBvVHJhbnNpdGlvbkVuZCBtc1RyYW5zaXRpb25FbmQgdHJhbnNpdGlvbmVuZCcsIGZ1bmN0aW9uKCl7XG5cdCAgICAgICAgICAgXHRcdGFjdGl2ZS5hZGRDbGFzcygnY2Qtbm90LXZpc2libGUnKTtcblx0ICAgICAgICAgICBcdH0pO1xuXHQgICAgICAgIH0sIDUwKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c2VsZWN0ZWQgPSBhY3RpdmUucHJldigpO1xuXHRcdFx0Ly9vbiBGaXJlZm94IENTUyB0cmFuc2l0aW9uL2FuaW1hdGlvbiBmYWlscyB3aGVuIHBhcmVudCBlbGVtZW50IGNoYW5nZXMgdmlzaWJpbGl0eSBhdHRyaWJ1dGVcblx0XHRcdC8vc28gd2UgaGF2ZSB0byBjaGFuZ2UgLmNkLXNpbmdsZS1pdGVtIGNoaWxkcmVucyBhdHRyaWJ1dGVzIGFmdGVyIGhhdmluZyBjaGFuZ2VkIGl0cyB2aXNpYmlsaXR5IHZhbHVlXG5cdCAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0ICAgICAgICAgICBcdGFjdGl2ZS5yZW1vdmVDbGFzcygnY2QtYWN0aXZlJykuYWRkQ2xhc3MoJ2NkLW1vdmUtcmlnaHQnKS5wcmV2KCkuYWRkQ2xhc3MoJ2NkLWFjdGl2ZScpLm9uZSgnd2Via2l0VHJhbnNpdGlvbkVuZCBvdHJhbnNpdGlvbmVuZCBvVHJhbnNpdGlvbkVuZCBtc1RyYW5zaXRpb25FbmQgdHJhbnNpdGlvbmVuZCcsIGZ1bmN0aW9uKCl7XG5cdCAgICAgICAgICAgXHRcdGFjdGl2ZS5hZGRDbGFzcygnY2Qtbm90LXZpc2libGUnKTtcblx0ICAgICAgICAgICBcdH0pO1xuXHQgICAgICAgIH0sIDUwKTtcblx0XHR9XG5cdFx0Ly91cGRhdGUgdmlzaWJsZSBzbGlkZXJcblx0XHRzZWxlY3RlZC5yZW1vdmVDbGFzcygnY2Qtbm90LXZpc2libGUnKTtcblx0XHQvL3VwZGF0ZSBzbGlkZXIgbmF2aWdhdGlvbiAoaW4gY2FzZSB3ZSByZWFjaGVkIHRoZSBsYXN0IHNsaWRlcilcbiAgICAgICAgdXBkYXRlU2xpZGVyTmF2KHNlbGVjdGVkKTtcblx0fVxuXG5cdGZ1bmN0aW9uIHVwZGF0ZVNsaWRlck5hdihzZWxlY3RlZCkge1xuXHRcdCggc2VsZWN0ZWQuaXMoJzpsYXN0LWNoaWxkJykgKSA/ICQoJy5jZC1uZXh0JykuYWRkQ2xhc3MoJ2NkLWluYWN0aXZlJykgOiAkKCcuY2QtbmV4dCcpLnJlbW92ZUNsYXNzKCdjZC1pbmFjdGl2ZScpIDtcblx0fVxuXG59KTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==