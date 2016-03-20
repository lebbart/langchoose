/**
 * Created by Bogdan on 3/20/16.
 */

$(".now-lang a.present").click(function(event){
    $(".choose-lang").toggle();
    event.preventDefault();
});

$(".choose-lang ul li").click(function(){
    $(".choose-lang ul").find(".active").removeClass();
    $(this).addClass("active");
    var textValue = $(this).text();
    var imageValue = $(this).find("img").attr("src");
    $(".now-lang a").html(textValue);
    $(".now-lang img").attr("src",imageValue);
    $(".choose-lang").toggle();
});