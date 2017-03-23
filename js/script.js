var color = ["red", "blue", "black"];
var i = 0;
$(document).ready(function () {
    $("p").click(function () {
        setColor();
    })
});
function setColor() {
    $(this).css("color", color[i])
    if( i < 2) {
        i++;
    } else {
        i = 0;
    }
}