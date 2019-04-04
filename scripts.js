var scrollStatus = {
    wheeling: false,
    functionCall: false
};
var scrollTimer = false;
var scrollTimer = false;
var pos = 0;
var $jump = 25;
var width = 50;
var scrollCount = 0;

document.getElementById('myContainer').addEventListener('wheel', myMove);
function myMove() {
    var elem = document.getElementById("myAnimation");
    scrollStatus.wheeling = true;
    if (!scrollStatus.functionCall) {
        if (event.deltaY > 0) {
            pos += $jump;
            scrollCount++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
            elem.style.borderRadius = Math.floor(pos / 14) + 'px'
            if (pos >= 350) {
                pos = 325
                scrollCount = 14;
            }

        }
        if (event.deltaY < 0) {
            pos -= $jump;
            scrollCount--;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
            elem.style.borderRadius = Math.floor(pos / 10) + 'px'

            if (pos <= 25) {
                pos = 25;
                scrollCount = 0;
            }
        }
        scrollStatus.functionCall = true;
    }

    window.clearInterval(scrollTimer);
    scrollTimer = window.setTimeout(function () {
        scrollStatus.wheeling = false;
        scrollStatus.functionCall = false;
    }, 50);
    console.log(scrollCount);

}