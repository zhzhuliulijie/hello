var _timer;
var _length = $("#wy-flesh").find('.wy-f1r-img>a').length;
var _speed = 5000; //单位ms
var _time = 1000; //单位ms

function _flesh(index) {
    if (index >= _length){
        index = 0;
    }
    $("#wy-flesh").find('.wy-f1r-img>a').eq(index).fadeIn(_time).siblings('a').fadeOut(_time);
    $("#wy-flesh").find('.wy-f1r-ctrl>span').eq(index).addClass("active").siblings("span").removeClass("active");
    _timer = setTimeout('_flesh('+(index+1)+')',_speed);
}
_flesh(0);
$(document).ready(function (e) {
    $("#wy-flesh").find('.wy-f1r-ctrl>span').hover(function (e) {
        clearTimeout(_timer);
    },function (e) {
        var index = $("#wy-flesh").find('.wy-f1r-ctrl>span.active').index();
        _timer = setTimeout('_flesh('+(index+1)+')',_speed);
    });
    $("#wy-flesh").find('.wy-f1r-ctrl>span').click(function (e) {
        var index = $(this).index();
        $("#wy-flesh").find('.wy-f1r-img>a').eq(index).fadeIn(_time).siblings('a').fadeOut(_time);
        $("#wy-flesh").find('.wy-f1r-ctrl>span').eq(index).addClass("active").siblings("span").removeClass("active");
    });
});