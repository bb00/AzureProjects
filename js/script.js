var color = ["red", "blue", "black"];
var i = 0;
$(document).ready(function () {
    $("p").click(function () {
        setColor(this);
    })
});
function setColor(obj) {
    obj.css("color", color[i].toString());
    if(i < 2) {
        i++;
    } else {
        i = 0;
    }
    return color[i];
}