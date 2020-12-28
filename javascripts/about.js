$("#nav").load("./navbar.html");
$("#contact").load("./Contact.html");

$(document).ready(function(){
    addTechnologies();
    
    let targetOffset = $(".techValue").offset().top;
    let winHeight    = $(window).height();

    $(window).scroll(function(){
        let currentScroll = $(window).scrollTop();         // current Window scrollTop
        let scrollNeeded  = (targetOffset - winHeight);    // scroll needed to make .paralax visible
        $(".techValue").width(function(){
            if(currentScroll > scrollNeeded)
                return $(this).attr("id")
        }); 
    });
});

function adding(name, value){
    let technologies = document.getElementById("technologies");

    let fullBar = document.createElement('div');
    fullBar.classList.add("fullBar", "mb-3");
    
    let techValue = document.createElement('div');
    techValue.classList.add('techValue');
    techValue.style.width = "0%";
    techValue.setAttribute('id',value);
    // techValue.style.width = value;

    let techName = document.createElement('div');
    techName.classList.add('techName');

    let strongName = document.createElement('strong');
    strongName.textContent = name;

    let percentage = document.createElement('span');
    percentage.classList.add("percentage", "ml-auto", "mr-1", "my-auto");
    percentage.textContent = value;

    techName.appendChild(strongName);
    techValue.appendChild(techName);
    fullBar.appendChild(techValue);
    fullBar.appendChild(percentage);

    technologies.appendChild(fullBar);
}

function addTechnologies(){
    adding("HTML", "80%");
    adding("CSS", "70%");
    adding("JavaScript", "70%");
    adding("Angular", "80%");
    adding("React", "60%");
    adding("NodeJs", "70%");
    adding("MongoDB", "60%");
    adding("SQL Server", "80%");
    adding("SSIS", "60%");
}