"use strict";
var $ = function(id) { return document.getElementById(id); };

window.onload = function() {
    var image1 = $("image1");           
    var image2 = $("image2");           
    
    // preload images 
    var links = $("image_list").getElementsByTagName("a");
    var i, link, image;
    
    //preload images
    for (i = 0; i < links.length; i++)
    {
        link = links[i];
        image = new Image();
        image.src = link.href;
        break;
    }

    // attach mouseover and mouseout events for each image
    image1.onmouseover = function() {
        image1.src = "images/profile.jpg";
        
    };
    image1.onmouseout = function() {
        image1.src = "images/computer.jpg";
        
    };
    
    image2.onmouseover = function() {
        image2.src = "images/cupcake.jpg";
        
    };
    image2.onmouseout = function() {
        image2.src = "images/alert.jpg";
        
    };
};
