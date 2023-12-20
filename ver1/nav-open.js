$(function() {
    $('.click').click(function() {
     $('.mainNav_wrap').toggleClass('active');
    });
    
    $('.mainNav a[href^="#"]').click(function() {
     $('.click').click();
    });
})
