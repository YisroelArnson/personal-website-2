$(document).ready(function() {
	checkTestimonial();
	clearContact();
	smoothScroll(800);

	function checkTestimonial () {
		var $testimonialContainer = $('.testimonials-master-container');
		var $testimonialInfo = $testimonialContainer.find('.testimonial-info')
		var $info1 = $testimonialContainer.find('.testimonial-info-1');
		var $info2 = $testimonialContainer.find('.testimonial-info-2');
		var $info3 = $testimonialContainer.find('.testimonial-info-3');
		var $circle = $testimonialContainer.find('.circle');
		var $leftCircle = $testimonialContainer.find('.left');
		var $middleCircle = $testimonialContainer.find('.middle');
		var $rightCircle = $testimonialContainer.find('.right');

		$circle.on('click', function() {
			$circle.css('background-color', '#fff');
			$(this).css('background-color', '#555');

			$leftCircle.on('click', function() {
				changeInfo($info1);
			})

			$middleCircle.on('click', function() {
				changeInfo($info2);
			})

			$rightCircle.on('click', function() {
				changeInfo($info3);
			})

		});

		function changeInfo(whichId) {
			$testimonialInfo.css('display', 'none');
			whichId.css('display', 'initial');
			whichId.css('display', 'flex');
		}
	}


	function clearContact() {
		var	$inputContainer = $('.contact-input-container');
		var $inputs =  $inputContainer.find('input');

		$inputs.on('focus', function() {
			var $this = $(this);
			$this.val('');
			$this.keyup(function() {
				var value = $this.val();
				$this.val(value);
			});

			$this.on('blur', function() {
					if($this.val() === '') {
						$this.val($this.attr('name'));
					}
			});
		});
	}


	function smoothScroll (duration) {
		$('a[href^="#"]').on('click', function(event) {

		    var target = $( $(this).attr('href') );

		    if( target.length ) {
		        event.preventDefault();
		        $('html, body').animate({
		            scrollTop: target.offset().top
		        }, duration);
		    }
		});
		}

});	
