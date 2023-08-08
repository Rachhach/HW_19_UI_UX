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
      $("#whtarrow").click(function() {
          $("#whtarrow").toggleClass("flip")
      });
      });

      $(document).ready(function(){
        $("#whtarrow").click(function(){
          $("p").hide(),
          $("#whtarrow").click(function(){
            $("p").show()
          });
          });
          
        });
         

        

      
     
