/*
 Written by:	Kristian Wolseley-Charles
 Date:			24/07/2012 
 */
(function($) {
	$.fn.watermark = function(options) {

		var defaults = {
			text : 'hello'
		}, settings = $.extend({}, defaults, options);

		this.each(function() {
			var $this = $(this);
			var text = this.val;

			// Do this before anything else
			if ($this.val() == '') {
				$this.val(settings.text).css({
					color : '#aaa'
				});

			};

			// Add a click event to remove the watermark
			$this.click(function() {
				if ($this.val() == settings.text) {
					$this.val('').css({
						color : '#000'
					});
				}
			});

			// Change the textbox back to a water mark if empty 
			$this.blur(function() {
				if ($this.val() == '') {
					$this.val(settings.text).css({
						color : '#aaa'
					});
				};
			});

		});
		// return the jQuery object for chaining
		return this;
	}
})(jQuery);
