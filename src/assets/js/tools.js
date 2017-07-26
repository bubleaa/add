


/*
*  setHtmlFontsize 设置HTML字体大小
*  参数 n number
*/
var setHtmlFontsize = function(n){
    var oHmtl = document.querySelector('html'),
        nWidth = window.screen.availWidth;
        oHmtl.style.fontSize = nWidth / n + 'px';
}

module.exports = {
    setHtmlFontsize:setHtmlFontsize
}