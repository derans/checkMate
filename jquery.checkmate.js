(function ($) {
    $.fn.checkMate = function (options) {
        var defaults = {
            class: 'Selected-Checkbox',
            testMode: false
        };

        var options = $.extend(defaults, options);
        var selector = this;

        return this.each(function () {
            var checkboxId = $(this).attr("for");
            var checkbox = $('#' + checkboxId);
            var label = $(this);

            if (options.testMode) {
                checkbox.show();
            } else {
                checkbox.hide();
            }

            if (checkbox.is(":checked")) {
                checkbox.attr("checked", true);
                label.addClass(options.class);
            } else {
                checkbox.removeAttr("checked");
                label.removeClass(options.class);
            }

            label.click(function (e) {
                e.preventDefault();
                var checkboxId = $(this).attr("for");
                var checkbox = $('#' + checkboxId);
                var label = $(this);

                if (checkbox.is(":radio")) {
                    var groupName = checkbox.attr("name");
                    $('input:radio[name="' + groupName + '"]').each(function () {
                        var labelId = $(this).attr("id");
                        $('label[for="' + labelId + '"]').removeClass(options.class);
                        $(this).removeAttr("checked");
                    });
                }

                if (checkbox.is(":checked")) {
                    checkbox.removeAttr("checked");
                    label.removeClass(options.class);
                } else {
                    checkbox.attr("checked", true);
                    label.addClass(options.class);
                }
            });
        });
    };
})(jQuery);