$(function(){
var winH   =$(window).height()
upperH    =$('.upper-bar').innerheight(),
navH      =$('.navbar').innerheight();
$('.slider').height(winH - (upperH + navH));
});

$('.featured-work ul li').on('click',function (){
	$(this)addclass('active').siblings().removeclass('active');
	console.log($(this).data('class'));
});