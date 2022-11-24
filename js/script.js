$(document).ready(function () {
    $("#button1").bind("click", firstButtonProcessing)
    $("#button2").bind("click", secondButtonProcessing)

});

function firstButtonProcessing(ev) {

    
    
    let pId2=$("p#id2")
    let pId1=$("p#id1")
    let divs = $("#div1, #div3, #div5")
    let img=$("img#image1");
    
    // let pars = divs.find("p[id^='id']").css("color", colors[Math.floor(Math.random() * colors.length)]);
    $(pId2).attr('id','idNEW')
    $(pId1).css("border", '3px solid black')
    $(img).css("border", '3px solid black')


    $('p#id1').css("font-size", function() {
        return parseInt($(this).css('font-size')) * 2 + 'px';
    });
   
    
  




   



   
}

function secondButtonProcessing(ev) {

    let img=$("img");
    $(img).animate({ opacity: "hide"},"slow");
    let btn1=$("button#button1");
    btn1.prop('disabled', true);




   
}