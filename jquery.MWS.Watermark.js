/*
 Plugin Name:	jquery.MWS.Watermark
 Written By:	Kristian Wolseley-Charles
 Date:			24/07/2012
*/
(function($) {
	$.fn.watermark = function(options) {

		var defaults = {
			text : 'Required'
		}, settings = $.extend({}, defaults, options);

		this.each(function(e) {
			var $this = $(this);
			var text = this.val;
			var offset = $this.offset();
			
			// set customText as the WatermarkText attribute and check the type to see if it exists.
			// If the attribute exists, override the text value. 
			var customText = $this.attr('WatermarkText');
			if(typeof customText != 'undefined' && customText != false){
				settings.text = $this.attr('WatermarkText');
			};

			//remove the item to start over if the page is posted back.
            $('#MWSwm_' + $this.attr('id')).remove();

			// Do this before anything else.
			if ($this.val() == '') {
				var MWSWaterMark = '<div id="MWSwm_' + $this.attr('id') + '" class="MWSWatermark">' + settings.text  + '</div>';
				$(MWSWaterMark).appendTo('body').show().css({
					top : offset.top,
					left : offset.left,
					height : $this.height() + 4,
					width : $this.width() + 2
				});
			};

			// Add a click event to remove the watermark.
			$('#MWSwm_' + $this.attr('id')).click(function() {
				$('#MWSwm_' + $this.attr('id')).hide();
				$this.focus();
			});

			// Change the textbox back to a water mark if empty.
			$this.blur(function() {
				if ($this.val() == '') {
					$('#MWSwm_' + $this.attr('id')).show();
				};
			});

		});

		// return the jQuery object for chaining
		return this;
	}
})(jQuery);
