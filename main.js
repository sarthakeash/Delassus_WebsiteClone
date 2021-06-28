$(document).ready( function(){

$('#carouselExampleIndicators').on('slide.bs.carousel', function onSlide (ev) {
    var id = ev.relatedTarget.id;
    switch (id) {
      case "e1":{
      $("body").css({"background-color" : "rgb(231,82,77)",  "transition" :"ease-out 1.4s"})
      $("hr").css({"margin-left":"17%" });
      $('.cta').removeClass("c5");
      $('.cta').removeClass("c4");
      $('.cta').removeClass("c3");
      $('.cta').removeClass("c2");
     $('.cta').addClass('c1');
     $(".flowers").css("opacity", "0.4");
     $(".avocados").css("opacity", "0.4");
     $(".grapes").css("opacity", "0.4");
     $(".citrus").css("opacity", "0.4");
     $(".tomato").css("opacity", "1");

        break;}

        
      case "e2":{$("body").css({"background-color" : "rgb(253,113,41)",  "transition" :"ease-out 1.4s"});
      $("hr").css({"margin-left":"29.5%",});
      $('.cta').removeClass("c5");
      $('.cta').removeClass("c4");
      $('.cta').removeClass("c3");
      $('.cta').removeClass("c1");
      $('.cta').addClass('c2');
      $(".flowers").css("opacity", "0.4");
      $(".avocados").css("opacity", "0.4");
      $(".grapes").css("opacity", "0.4");
      $(".citrus").css("opacity", "1");
      $(".tomato").css("opacity", "0.4");
 
       break;}


      case "e3":{
        $("body").css({"background-color" : "rgb(250,118,146)",  "transition" :"ease-out 1.4s"});
        $("hr").css({"margin-left":"37%" ,});
        $('.cta').removeClass("c5");
        $('.cta').removeClass("c4");
        $('.cta').removeClass("c1");
        $('.cta').removeClass("c2");
        $('.cta').addClass('c3');
        $(".flowers").css("opacity", "0.4");
        $(".avocados").css("opacity", "0.4");
        $(".grapes").css("opacity", "1");
        $(".citrus").css("opacity", "0.4");
        $(".tomato").css("opacity", "0.4");

        break;}


case "e4" : {

  $("body").css({"background-color" : "rgb(139,210,184)",  "transition" :"ease-out 1.4s"});
  $("hr").css({"margin-left":"44%" ,});
  $('.cta').removeClass("c5");
  $('.cta').removeClass("c1");
  $('.cta').removeClass("c3");
  $('.cta').removeClass("c2");

  $('.cta').addClass('c4');
  $(".flowers").css("opacity", "0.4");
        $(".avocados").css("opacity", "1");
        $(".grapes").css("opacity", "0.4");
        $(".citrus").css("opacity", "0.4");
        $(".tomato").css("opacity", "0.4");
break;}


case "e5": {
  $("body").css({"background-color" : "rgb(254,210,0)",  "transition" :"ease-out 1.4s"});
  $("hr").css({"margin-left":"52%" ,});
  $('.cta').removeClass("c1");
  $('.cta').removeClass("c4");
  $('.cta').removeClass("c3");
  $('.cta').removeClass("c2");
  $('.cta').addClass('c5');
  $(".flowers").css("opacity", "1");
        $(".avocados").css("opacity", "0.4");
        $(".grapes").css("opacity", "0.4");
        $(".citrus").css("opacity", "0.4");
        $(".tomato").css("opacity", "0.4");
  break;

}}
  })


// hover to move 

var k;

for(k=1; k<15; k++){

  let it = ".item"+ k;

$(document).on("click mousemove",".carousel-inner",function(e){ 



    var x = e.clientX;
    var y = e.clientY;
    var newposX = x/35 ;
    var newposY = y/35; $(it).css("transform","translate3d("+(-newposX)+"px,"+(-newposY)+"px,0px)");

    });
  }



$(".product").hover( function(){ 

$("#pro1").toggleClass("fruitup");



})
$(".about").hover( function(){
$("#pro2").toggleClass("fruitup");
  })
 $(".randd").hover( function(){
  $("#pro3").toggleClass("fruitup");   
    })

$(".csr").hover( function(){
      $("#pro4").toggleClass("fruitup");   
      })
      
      $(".st").hover( function(){
        $("#pro5").toggleClass("fruitup");   
        
        })
        $(".ct").hover( function(){
          $("#pro6").toggleClass("fruitup");   
          })
          $(".gp").hover( function(){
            $("#pro7").toggleClass("fruitup");   
            })
            $(".av").hover( function(){
              $("#pro8").toggleClass("fruitup");   
              })
              $(".fl").hover( function(){
                $("#pro9").toggleClass("fruitup");   
                })
}  
  )



$(document).ready(function(){
$("#carouselExampleIndicators").on("slide.bs.carousel", function(event) {
  $(".transition-timer-carousel-progress-bar", this)
      .removeClass("animate").css("width", "0%");
}).on("slid.bs.carousel", function(event) {
  $(".transition-timer-carousel-progress-bar", this)
      .addClass("animate").css("width", "5%");
});
  

$(".transition-timer-carousel-progress-bar", "#carouselExampleIndicators")
  .css("width", "5%");

})


