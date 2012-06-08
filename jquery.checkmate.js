(function($) {
    $.fn.sexyChecks = function(options) {
	var defaults = {
		class: 'Selected-Checkbox',
		testMode: false
		};

	var options = $.extend(defaults, options);
	var selector = this;		

	return this.each(function() {
		var id = $(this).attr("for");
		var className =	$('#'+id).attr("class");

		$(this).addClass(className);

		if (options.testMode)
		{
			$('#'+id).show();
		} else {
			$('#'+id).hide();
		}

		if ($('#'+id).is(":checked"))
		{
			$('#'+id).attr("checked", true);
			$(this).addClass(options.class);
		} else {
			$('#'+id).removeAttr("checked");
			$(this).removeClass(options.class);
		}

		$(this).click(function(e){
			e.preventDefault();
			var id = $(this).attr("for");

			if ($('#'+id).is(":radio"))
			{
				var groupName = $('#'+id).attr("name");
				$('input:radio[name="'+groupName+'"]').each(function(){
					var labelId = $(this).attr("id");
					$('label[for="'+labelId+'"]').removeClass(options.class);
					$(this).removeAttr("checked");
				});
			}

			if ($('#'+id).is(":checked"))
			{
				$('#'+id).removeAttr("checked");
				$(this).removeClass(options.class);
			} else {
				$('#'+id).attr("checked", true);
				$(this).addClass(options.class);
			}
		});
	});
	};
})(jQuery);