$(function() {   
    function logoShrinkAnimation() {
        var screenWidth = window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth;
        var screenHeight = window.innerHeight
            || document.documentElement.clientHeight
            || document.body.clientHeight;

        var scroll = document.getScroll();

        if (screenWidth >= screenHeight) {
            var logoWidth = Math.round(screenWidth * 0.6) - scroll[1];            
        } else {
            var logoWidth = Math.round(screenWidth * 0.9) - scroll[1];
            if (logoWidth <= 256) logoWidth = 256;
        }
        var logoHeight = Math.round(logoWidth * 0.3789);     
            var topMargin = Math.round((screenHeight - logoHeight) / 2);
            var bottomMargin = topMargin;
            bottomMargin -= scroll[1];

        if (bottomMargin > 10) {
            $('.image').attr('width', logoWidth);
            $('.image').attr('height', logoHeight);
            $('.logo').css('margin-top', topMargin + 'px');
            $('.logo').css('margin-bottom', bottomMargin + 'px');
        }
    };

    document.getScroll = function() {
        if (window.pageYOffset != undefined) {
            return [pageXOffset, pageYOffset];
        } else {
            var sx, sy, d = document,
                r = d.documentElement,
                b = d.body;
            sx = r.scrollLeft || b.scrollLeft || 0;
            sy = r.scrollTop || b.scrollTop || 0;
            return [sx, sy];
        }
    }

    document.addEventListener('scroll', (event)=>{
        logoShrinkAnimation();
      });

      logoShrinkAnimation();
});