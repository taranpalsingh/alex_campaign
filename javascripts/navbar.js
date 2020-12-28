$(document).ready(function(){
    let routes = ['home', 'about', 'issues'];
    // To add and remove active class
    routes.forEach(element => {
        $("#"+element).click(function(){
            $("#"+element).addClass("active");
            routes.forEach(ele => {
                if(ele != element){
                    $("#"+ele).removeClass("active");
                }
            });
        })
    });
})