$(document).ready(function(){
    //Once your code is hooked up you should see this message on your web page: “Scripts are linked”
    $("body").append('Scripts are linked.');
    //Put all of your code under here.
    var box = 3;
    $("button").click(function(){
        console.log("you clicked");
        var guess = $('input').val()
        if (guess==box){
            //something
            $("body").append("correct");
        }else if (guess<box){
             $("body").append("too low");
        }else{
            $("body").append("too high");
        }
    })
});
