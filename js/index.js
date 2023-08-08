$(document).ready(function(){
$(".image2").hover(function(){
    $(this).toggle
  ();
});
  });


 $(document).ready(function(){
  $("button").click(function(){
    $(".topbutton").animate({"width": "+=300px"},"slow").delay(500)
    .animate({"width": "-=300px"},"slow")
    });
});


$(document).ready(function(){
  $("button").click(function(){
    $(this).css({color: "#0EF1D6"})
     });
    });


    $(document).ready(function() {
      $( ".toggle" ).click( function() {
            $("#whtarrow").css({'transform': 'rotate(-180deg)'});
        });
    });