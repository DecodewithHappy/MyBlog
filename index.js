/*$(document).ready(function () {
    $("article").click(function () {
        
        var n = $("article").length;
        for(var i=0; i<n; i++){
            if ($("#blog"+index+index).hasClass('Split-right-Modified')){
                $("#blog"+index+index).removeClass('Split-right-Modified').addClass('Split-right');
            }
        }
        var index = $("article").index(this);
        console.log(index);
        $("#blog"+index+index).removeClass('Split-right').addClass('Split-right-Modified');
        
    });
});

*/



$("article").click(function () {

    $("#First-Right-H2").addClass('Split-right');

    var n = $("article").length;
    for (var i = 0; i < n; i++) {
        if ($("#blog" + i + i).hasClass('Split-right-Modified')) {
            $("#blog" + i + i).removeClass('Split-right-Modified').addClass('Split-right');

            break;
        }
    }
    var index = $("article").index(this);
    console.log(index);
    $("#blog" + index + index).removeClass('Split-right').addClass('Split-right-Modified');

});

