var _timer;
var _length = $("#flesh").find('.images>.img-item').length;
var _speed = 5000; //单位ms
var _time = 1000; //单位ms

function _flesh(index) {
    if (index >= _length){
        index = 0;
    }
    $("#flesh").find('.images>.img-item').eq(index).fadeIn(_time).siblings('.img-item').fadeOut(_time);
    $("#flesh").find('.title>.tit-item').eq(index).slideDown(_time).siblings('.tit-item').slideUp(_time);
    $("#flesh").find('.ctrl>.ctrl-item').eq(index).addClass("active").siblings(".ctrl-item").removeClass("active");
    _timer = setTimeout('_flesh('+(index+1)+')',_speed);
}
_flesh(0);
$(document).ready(function (e) {
    $("#flesh").find('.ctrl>.ctrl-item').hover(function (e) {
        clearTimeout(_timer);
    },function (e) {
        var index = $("#flesh").find('.ctrl>.ctrl-item.active').index();
        _timer = setTimeout('_flesh('+(index+1)+')',_speed);
    });
    $("#flesh").find('.ctrl>.ctrl-item').click(function (e) {
        var index = $(this).index();
        $("#flesh").find('.images>.img-item').eq(index).fadeIn(_time).siblings('.img-item').fadeOut(_time);
        $("#flesh").find('.title>.tit-item').eq(index).slideDown(_time).siblings('.tit-item').slideUp(_time);
        $("#flesh").find('.ctrl>.ctrl-item').eq(index).addClass("active").siblings(".ctrl-item").removeClass("active");
    });
});