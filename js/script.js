var color = ["red", "blue", "black"];
var i = 0;
$(document).ready(function () {
    $("p").click(function () {
        setColor($(this));
    })
});
function setColor(obj) {

    if(i < 2) {
        i++;
    } else {
        i = 0;
    }
    obj.css("color", color[i].toString());
    return color[i];
}