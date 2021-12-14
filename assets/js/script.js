const year = document.getElementById('year');
year.innerHTML = new Date().getFullYear();

$(document).ready(function(){
    
    $("#navigation li a, #header small a").click(function(e){
        e.preventDefault();

        var targetElement = $(this).attr("href");
        var targetPosition = $(targetElement).offset().top;
        
        $("html, body").animate({ scrollTop: targetPosition - 100}, "slow")
    });

});