//xoxo stackoverflow
function limit(num, min, max) {
    const MIN = min ?? 1;
    const MAX = max ?? 20;
    const parsed = parseInt(num)
    return Math.min(Math.max(parsed, MIN), MAX)
}
$(document).ready(function () {
function isMobile() {
return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
if (!isMobile()) {
    
    const clamp = (num, min, max) => Math.min(Math.max(num, min), max)
    var $one = $('#coverview'),
        mousemoveEventTimeout = 50, // mousemove event every N miliseconds
        transitionSteps = 5, // number of steps between the old and new mouse positions
        transitionStepDuration = Math.floor(mousemoveEventTimeout / transitionSteps),
        browserPrefix = "",
        cx = Math.ceil(window.innerWidth / 2.0),
        cy = Math.ceil(window.innerHeight / 2.0),
        oldMousePositionX = cx,
        oldMousePositionY = cy,
        usrAg = navigator.userAgent;
    if(usrAg.indexOf("Chrome") > -1 || usrAg.indexOf("Safari") > -1) {
        browserPrefix = "-webkit-";
    } else if (usrAg.indexOf("Opera") > -1) {
        browserPrefix = "-o";
    } else if (usrAg.indexOf("Firefox") > -1) {
        browserPrefix = "-moz-";
    } else if (usrAg.indexOf("MSIE") > -1) {
        browserPrefix = "-ms-";
    }
    
    function calculateChanges(dx, dy) {
        var tiltx = (dy / cy),
            tilty = - (dx / cx),
            radius = Math.sqrt(Math.pow(tiltx, 2) + Math.pow(tilty, 2)),
            degree = (radius * 15),
            shadx = degree*tiltx,   /*horizontal shadow*/
            shady = degree*tilty,   /*vertical shadow*/
            changes = Object.create(null);
        changes.degree = degree;
        changes.tiltx = tiltx;
        changes.tilty = tilty;
        changes.shadx = shadx;
        changes.shady = shady;
        return changes;
    }
    
    var wait = false;
    $(document).mousemove(function (event) {
        var newMousePositionX = event.pageX,
            newMousePositionY = event.pageY;

        if(!wait){
            var distanceX = Math.round((oldMousePositionX - newMousePositionX) / transitionSteps),
                distanceY = Math.floor(Math.round((oldMousePositionY - newMousePositionY) / transitionSteps)),

                dx = oldMousePositionX - cx - distanceX,
                dy = oldMousePositionY - cy - distanceY,
                i = 1;

            var myVar = setInterval(function() {
                if (i >= transitionSteps - 1) {
                    clearInterval(myVar);
                }
                i++;
                dx = limit(dx - distanceX, -400, 400);
                dy = limit(dy - distanceY, -400, 400);
                
                var changes = calculateChanges(dx, dy);
            

                $one.css(browserPrefix + 'transform', 'rotate3d(' + changes.tiltx + ', ' + changes.tilty + ', 0, ' + changes.degree + 'deg)');
        
         

                if(dx>cx) /*without that horizontal values are reversed*/
                    $('#coverview').css('box-shadow', + (-changes.shady) + 'px ' + (-changes.shadx) +'px 5px #3D352A');
                else $('#coverview').css('box-shadow', + changes.shady + 'px ' + (-changes.shadx) +'px 5px #3D352A');
            }, transitionStepDuration);
				
            oldMousePositionX = newMousePositionX;
            oldMousePositionY = newMousePositionY;
            wait = true;
            setTimeout(function(){ wait = false; }, mousemoveEventTimeout);
        }
    });
}
});