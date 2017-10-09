(function($) {
    
        $(document).ready(function() {
            
            var links = $("nav .dropdown-menu a");

            $.each(links, function(index, element) {
                    $(this).addClass($(this).attr("title"));

                    if ($(this).attr("title") === "all") {
                        $(this).append("<i class='fa fa-arrow-circle-right'></i");
                    }
            })

            $("nav .dropdown-menu a").last().css("border-bottom", "none");
    
        });
    
    })(jQuery);
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    