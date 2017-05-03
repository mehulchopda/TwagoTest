!function($, sr) {
    // debouncing function from John Hann
    // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
    var debounce = function(func, threshold, execAsap) {
        var timeout;
        return function() {
            function delayed() {
                execAsap || func.apply(obj, args), timeout = null;
            }
            var obj = this, args = arguments;
            timeout ? clearTimeout(timeout) : execAsap && func.apply(obj, args), timeout = setTimeout(delayed, threshold || 100);
        };
    };
    // smartresize
    jQuery.fn[sr] = function(fn) {
        return fn ? this.bind("resize", debounce(fn)) : this.trigger(sr);
    };
}(jQuery, "smartresize"), function($) {
    $(document).ready(function() {
        $(".slider").slick({
            autoplay: !0,
            dots: !0,
            infinite: !0,
            speed: 300,
            arrows: !1
        }), $("input").focus(function() {
            $(this).prev("label").hide();
        }).blur(function() {
            $(this).prev("label").show();
        });
    }), /**
     * jQuery displayWidth - A simple Media Query check
     * @param  {string} comparison   Comparison condition. Possible values: Either one these: '>', '<', '>=', '<=' or a full, complex Media Query. The latter is risky because it will fail without a fallback in browsers that do not support the matchMedia function.
     * @param  {int+} width          Display width (in pixels)
     */
    window.displayWidth = function(comparison, width) {
        return "function" == typeof window.matchMedia && void 0 !== window.matchMedia && null !== window.matchMedia("screen and (max-width: 767px)") ? void 0 !== width && jQuery.isNumeric(width) ? (width = Number(width), 
        ">=" === comparison ? comparison = "min-width" : "<=" === comparison ? comparison = "max-width" : ">" === comparison ? (comparison = "min-width", 
        width++) : "<" === comparison && (comparison = "max-width", width--), window.matchMedia("(" + comparison + ":" + width + "px)").matches) : window.matchMedia(comparison).matches : void 0 !== width && jQuery.isNumeric(width) ? (void 0 === window.current_window_width && (window.current_window_width = jQuery(window).outerWidth()), 
        ">=" === comparison ? window.current_window_width >= width : "<=" === comparison ? window.current_window_width <= width : ">" === comparison ? window.current_window_width > width : "<" === comparison ? window.current_window_width < width : void 0) : (void 0 !== console && console.log("Error: This Browser does not support media queries."), 
        !1);
    }, $(document).on("ajaxComplete", function() {}), $(window).smartresize(function() {}), 
    $(window).on("scroll", function() {});
}(jQuery.noConflict()), function($) {
    "use strict";
    function getAjaxContent(url, container, callback, method, data) {
        callback = callback || function() {}, method = method || "GET", data = data || {}, 
        showSpinner(), $.ajax({
            type: method,
            url: url,
            data: data,
            success: function(html) {
                var $content = $("<div />").html(html).find(".ajax-wrapper").removeClass("container");
                $content.length ? (container.html($content), hideSpinner(), callback()) : location.href = "/";
            },
            error: function() {
                alert("failure");
            }
        });
    }
    function showSpinner() {
        $("body").append('<div class="spinner-backdrop fade in"></div><div class="spinner-holder fullscreen fade in"><div class="spinner"></div></div>');
    }
    function hideSpinner() {
        var $spinner = $(".spinner-backdrop, .spinner-holder");
        $spinner.removeClass("in"), $spinner.on("transitionend", function() {
            $(this).remove();
        });
    }
    function appendModal(className) {
        return $("body").append('<div class="modal fade ' + className + '" tabindex="-1" role="dialog">  <div class="modal-dialog" role="document">    <div class="modal-content">      <div class="modal-header">        <button type="button" class="close iconx-lightbox-close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"></span></button>      </div>      <div class="modal-body"></div>    </div>\x3c!-- /.modal-content --\x3e  </div>\x3c!-- /.modal-dialog --\x3e</div>\x3c!-- /.modal --\x3e'), 
        $(".modal." + className + " .modal-body");
    }
    $(document).ready(function() {
        var $body = $("body");
        // appendModal('modal-newsletter');
        // appendModal('modal-contact');
        $(".open-modal").click(function(event) {
            event.preventDefault();
            var classes = $(this).attr("class"), modalClass = (classes.match(/(modal-.+)/) || [ "form" ])[0], $currentModalBody = $(".modal." + modalClass + " .modal-body");
            0 == $currentModalBody.length && ($currentModalBody = appendModal(modalClass)), 
            $(".modal." + modalClass).hasClass("no-ajax") ? $(".modal." + modalClass).modal("show") : getAjaxContent($(this).attr("href"), $currentModalBody, function() {
                $(".modal." + modalClass).modal("show");
            });
        }), $body.on("click", ".modal a", function(event) {
            event.preventDefault(), getAjaxContent($(this).attr("href"), $(this).closest(".modal-body"));
        }), $body.on("submit", ".modal form", function(event) {
            event.preventDefault(), getAjaxContent($(this).attr("action"), $(this).closest(".modal-body"), null, "POST", $(this).serialize());
        });
    });
}(jQuery);
//# sourceMappingURL=scripts.dev.js.map