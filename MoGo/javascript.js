$(function(){
    let header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset =  $(window).scrollTop();
    checkScroll( scrollOffset );
    
    /*Header.Fixed*/
    
   $(window).on("scroll", function(){  
        scrollOffset = $(this).scrollTop();
        checkScroll( scrollOffset );
   }); 
    
    function checkScroll( scrollOffset ){
        
       if ( scrollOffset >= introH ){
           header.addClass("fixed");
       }
       else{
           header.removeClass("fixed");
       }
    }
    
    /*Smooth scroll*/
    
    $("[data-scroll]").on("click", function(event){
        event.preventDefault();
        let blockId = $(this).data('scroll'),
            blockOffset =  $(blockId).offset().top;
        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
    });
    
    /*Menu nav toggle*/
    
    $("#nav_toggle").on("click", function(event){
        event.preventDefault();
        $("#nav").toggleClass("active");
    });
    
    /*Collapse*/
    
    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();

        let $this = $(this),
            blockId = $this.data('collapse');

        $this.toggleClass("active");
    });
    

});

























