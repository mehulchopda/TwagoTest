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
        webshims.setOptions("forms", {
            lazyCustomMessages: !0
        }), webshims.polyfill("forms"), $(".slider").slick({
            autoplay: !0,
            dots: !0,
            infinite: !0,
            arrows: !1,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplaySpeed: 2e3
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
}(jQuery.noConflict());
//# sourceMappingURL=scripts.dev.js.map