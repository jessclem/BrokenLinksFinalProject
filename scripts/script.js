/* Document Ready Functions */
$(document).ready(function() {
    
    $("#productBtn").click(function(){
    	$.scrollTo("#productPreview", 1000);
    });
    
    $("#projectBtn").click(function(){
    	$.scrollTo("#projDescription", 1000);
    });
    
    $("#designBtn").click(function(){
    	$.scrollTo("#designObjectives", 1000);
    });
    
    $("#teamBtn").click(function(){
    	$.scrollTo("#teamMembers", 1000);
    });
    
    $(window).scroll(checkScrollPosition);
    
    $("#showsearch").click(function(){
    	$('#searchbar').fadeIn('slow');
    });
        
});

function checkScrollPosition() {
	$(window).scrollTop() > 100 ? $('#searchbar').fadeOut('slow') : $('#searchbar').fadeIn('slow');
}