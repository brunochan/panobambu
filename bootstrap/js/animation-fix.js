$('#collapse-navbar').on('show.bs.collapse', function() {
	$('.foto-capa').css('transform', 'translate(-50%, 10%');
});

$('#collapse-navbar').on('hide.bs.collapse', function() {
	$('.foto-capa').css('transform', 'translate(-50%, -50%');
});




$(document).ready(function(){
    $window = $(window);
    //Captura cada elemento section com o data-type "background"
    $('section[data-type="background"]').each(function(){
        var $scroll = $(this);   
            //Captura o evento scroll do navegador e modifica o backgroundPosition de acordo com seu deslocamento.            
            $(window).scroll(function() {
                var yPos = -($window.scrollTop() / $scroll.data('speed')); 
                var coords = '50% '+ 210px + 'px';
                $scroll.css({ backgroundPosition: coords });    
            });
   });  
}); 