(function ($) {
    $.fn.checkMate = function (options) {
        var defaults = {
            class: 'Selected-Checkbox',
            testMode: false,
	    focusClass: 'Checkbox-in-focus'
        };

        var options = $.extend(defaults, options);
        var selector = this;

        return this.each(function () {

            var checkboxId = $(this).attr("for");
            var checkbox = $('#' + checkboxId);
            var label = $(this);

            if (checkbox.is(":checked")) {
                checkbox.prop("checked", true);
                label.addClass(options.class);
            } else {
                checkbox.prop("checked", false);
                label.removeClass(options.class);
            }

	    checkbox.focus(function(){
		label.addClass(options.focusClass);
		});

	    checkbox.blur(function(){
		label.removeClass(options.focusClass);
		});

            checkbox.change(function () {
                if (checkbox.is(":checked")) {
                    if (checkbox.is(":radio")) {
                        var groupName = checkbox.attr("name");
                        $('input:radio[name="' + groupName + '"]').each(function () {
                            var labelId = $(this).attr("id");
                            $('label[for="' + labelId + '"]').removeClass(options.class);
                        });
                    }
                    label.addClass(options.class);
                } else {
	            label.removeClass(options.class);
                }
            });

            if (options.testMode) {
                checkbox.show();
            } else {
                checkbox.css("margin-left", "-2000px");
            }
        });
    };
})(jQuery);