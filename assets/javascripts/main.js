jQuery(document).ready(function($){
	//update this value if you change this breakpoint in the style.css file (or _layout.scss if you use SASS)
	var MqL = 1070;

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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIiLCJzb3VyY2VzIjpbIm1haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsialF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigkKXtcblx0Ly91cGRhdGUgdGhpcyB2YWx1ZSBpZiB5b3UgY2hhbmdlIHRoaXMgYnJlYWtwb2ludCBpbiB0aGUgc3R5bGUuY3NzIGZpbGUgKG9yIF9sYXlvdXQuc2NzcyBpZiB5b3UgdXNlIFNBU1MpXG5cdHZhciBNcUwgPSAxMDcwO1xuXG5cdC8vb24gZGVza3RvcCwgc3dpdGNoIGZyb20gcHJvZHVjdCBpbnRybyBkaXYgdG8gcHJvZHVjdCB0b3VyIGRpdlxuXHQkKCdhW2hyZWY9XCIjY2QtcHJvZHVjdC10b3VyXCJdJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpe1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0JCgnaGVhZGVyJykuYWRkQ2xhc3MoJ3NsaWRlLWRvd24nKTtcblx0XHRpZigkKHdpbmRvdykud2lkdGgoKSA8IE1xTCkge1xuXHRcdFx0JCgnYm9keSxodG1sJykuYW5pbWF0ZSh7J3Njcm9sbFRvcCc6ICQoJyNjZC1wcm9kdWN0LXRvdXInKS5vZmZzZXQoKS50b3AgLSAzMCB9LCAyMDApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkKCcuY2QtbWFpbi1jb250ZW50JykuYWRkQ2xhc3MoJ2lzLXByb2R1Y3QtdG91cicpO1xuXHRcdH1cblx0fSk7XG5cblx0Ly9sb2dvIHJldHVybnMgdG8gaW50cm9cbi8vXHQkKCcjY2QtbG9nbycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KXtcbi8vXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4vL1x0XHRzaG93UHJvZHVjdEludHJvKCk7XG4vL1x0fSk7XG5cblx0Ly91cGRhdGUgdGhlIHNsaWRlciAtIGRlc2t0b3Agb25seVxuXHQkKCcuY2QtcHJldicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KXtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdHZhciBhY3RpdmVTbGlkZSA9ICQoJy5jZC1hY3RpdmUnKTtcblx0XHRpZihhY3RpdmVTbGlkZS5pcygnOmZpcnN0LWNoaWxkJykpIHtcblx0XHRcdC8vaW4gdGhpcyBjYXNlIC0gc3dpdGNoIGZyb20gcHJvZHVjdCB0b3VyIGRpdiB0byBwcm9kdWN0IGludHJvIGRpdlxuXHRcdFx0c2hvd1Byb2R1Y3RJbnRybygpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR1cGRhdGVTbGlkZXIoYWN0aXZlU2xpZGUsICdwcmV2Jyk7XG5cdFx0fVxuXHR9KTtcblx0JCgnLmNkLW5leHQnKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCl7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHR2YXIgYWN0aXZlU2xpZGUgPSAkKCcuY2QtYWN0aXZlJyk7XG5cdFx0dXBkYXRlU2xpZGVyKGFjdGl2ZVNsaWRlLCAnbmV4dCcpO1xuXHR9KTtcblxuXHQkKHdpbmRvdykub24oJ3Njcm9sbCcsIGZ1bmN0aW9uKCl7XG5cdFx0d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpe1xuXHRcdFx0aWYoJCh3aW5kb3cpLndpZHRoKCkgPCBNcUwgJiYgJCh3aW5kb3cpLnNjcm9sbFRvcCgpIDwgJCgnI2NkLXByb2R1Y3QtdG91cicpLm9mZnNldCgpLnRvcCAtIDMwICkge1xuXHRcdFx0XHQkKCdoZWFkZXInKS5yZW1vdmVDbGFzcygnc2xpZGUtZG93bicpO1xuXHRcdFx0fSBlbHNlIGlmICgkKHdpbmRvdykud2lkdGgoKSA8IE1xTCAmJiAkKHdpbmRvdykuc2Nyb2xsVG9wKCkgPj0gJCgnI2NkLXByb2R1Y3QtdG91cicpLm9mZnNldCgpLnRvcCAtIDMwICl7XG5cdFx0XHRcdCQoJ2hlYWRlcicpLmFkZENsYXNzKCdzbGlkZS1kb3duJyk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pO1xuXG5cdGZ1bmN0aW9uIHNob3dQcm9kdWN0SW50cm8oKSB7XG5cdFx0JCgnaGVhZGVyJykucmVtb3ZlQ2xhc3MoJ3NsaWRlLWRvd24nKTtcblx0XHQkKCcuY2QtbWFpbi1jb250ZW50JykucmVtb3ZlQ2xhc3MoJ2lzLXByb2R1Y3QtdG91cicpO1xuXHR9XG5cblx0ZnVuY3Rpb24gdXBkYXRlU2xpZGVyKGFjdGl2ZSwgZGlyZWN0aW9uKSB7XG5cdFx0dmFyIHNlbGVjdGVkO1xuXHRcdGlmKCBkaXJlY3Rpb24gPT0gJ25leHQnICkge1xuXHRcdFx0c2VsZWN0ZWQgPSBhY3RpdmUubmV4dCgpO1xuXHRcdFx0Ly9vbiBGaXJlZm94IENTUyB0cmFuc2l0aW9uL2FuaW1hdGlvbiBmYWlscyB3aGVuIHBhcmVudCBlbGVtZW50IGNoYW5nZXMgdmlzaWJpbGl0eSBhdHRyaWJ1dGVcblx0XHRcdC8vc28gd2UgaGF2ZSB0byBjaGFuZ2UgLmNkLXNpbmdsZS1pdGVtIGNoaWxkcmVucyBhdHRyaWJ1dGVzIGFmdGVyIGhhdmluZyBjaGFuZ2VkIGl0cyB2aXNpYmlsaXR5IHZhbHVlXG5cdCAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0ICAgICAgICAgICBcdGFjdGl2ZS5yZW1vdmVDbGFzcygnY2QtYWN0aXZlJykuYWRkQ2xhc3MoJ2NkLWhpZGRlbicpLm5leHQoKS5yZW1vdmVDbGFzcygnY2QtbW92ZS1yaWdodCcpLmFkZENsYXNzKCdjZC1hY3RpdmUnKS5vbmUoJ3dlYmtpdFRyYW5zaXRpb25FbmQgb3RyYW5zaXRpb25lbmQgb1RyYW5zaXRpb25FbmQgbXNUcmFuc2l0aW9uRW5kIHRyYW5zaXRpb25lbmQnLCBmdW5jdGlvbigpe1xuXHQgICAgICAgICAgIFx0XHRhY3RpdmUuYWRkQ2xhc3MoJ2NkLW5vdC12aXNpYmxlJyk7XG5cdCAgICAgICAgICAgXHR9KTtcblx0ICAgICAgICB9LCA1MCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHNlbGVjdGVkID0gYWN0aXZlLnByZXYoKTtcblx0XHRcdC8vb24gRmlyZWZveCBDU1MgdHJhbnNpdGlvbi9hbmltYXRpb24gZmFpbHMgd2hlbiBwYXJlbnQgZWxlbWVudCBjaGFuZ2VzIHZpc2liaWxpdHkgYXR0cmlidXRlXG5cdFx0XHQvL3NvIHdlIGhhdmUgdG8gY2hhbmdlIC5jZC1zaW5nbGUtaXRlbSBjaGlsZHJlbnMgYXR0cmlidXRlcyBhZnRlciBoYXZpbmcgY2hhbmdlZCBpdHMgdmlzaWJpbGl0eSB2YWx1ZVxuXHQgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdCAgICAgICAgICAgXHRhY3RpdmUucmVtb3ZlQ2xhc3MoJ2NkLWFjdGl2ZScpLmFkZENsYXNzKCdjZC1tb3ZlLXJpZ2h0JykucHJldigpLmFkZENsYXNzKCdjZC1hY3RpdmUnKS5vbmUoJ3dlYmtpdFRyYW5zaXRpb25FbmQgb3RyYW5zaXRpb25lbmQgb1RyYW5zaXRpb25FbmQgbXNUcmFuc2l0aW9uRW5kIHRyYW5zaXRpb25lbmQnLCBmdW5jdGlvbigpe1xuXHQgICAgICAgICAgIFx0XHRhY3RpdmUuYWRkQ2xhc3MoJ2NkLW5vdC12aXNpYmxlJyk7XG5cdCAgICAgICAgICAgXHR9KTtcblx0ICAgICAgICB9LCA1MCk7XG5cdFx0fVxuXHRcdC8vdXBkYXRlIHZpc2libGUgc2xpZGVyXG5cdFx0c2VsZWN0ZWQucmVtb3ZlQ2xhc3MoJ2NkLW5vdC12aXNpYmxlJyk7XG5cdFx0Ly91cGRhdGUgc2xpZGVyIG5hdmlnYXRpb24gKGluIGNhc2Ugd2UgcmVhY2hlZCB0aGUgbGFzdCBzbGlkZXIpXG4gICAgICAgIHVwZGF0ZVNsaWRlck5hdihzZWxlY3RlZCk7XG5cdH1cblxuXHRmdW5jdGlvbiB1cGRhdGVTbGlkZXJOYXYoc2VsZWN0ZWQpIHtcblx0XHQoIHNlbGVjdGVkLmlzKCc6bGFzdC1jaGlsZCcpICkgPyAkKCcuY2QtbmV4dCcpLmFkZENsYXNzKCdjZC1pbmFjdGl2ZScpIDogJCgnLmNkLW5leHQnKS5yZW1vdmVDbGFzcygnY2QtaW5hY3RpdmUnKSA7XG5cdH1cblxufSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=