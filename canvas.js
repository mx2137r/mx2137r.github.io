window.onload = function() {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    context.moveTo(0, 0);
    context.lineTo(600, 400);
    context.stroke();
    context.moveTo(300, 200);
    context.lineTo(600, 0);
    context.stroke();
    context.moveTo(300, 200);
    context.lineTo(-2565, 2110);
    context.stroke();
    context.moveTo(465, 90);
    context.lineTo(135, 90);
    context.stroke();
};
