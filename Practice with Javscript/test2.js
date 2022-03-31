/*
var myContentDivs = document.getElementsByClassName("content");
__ geting an array of class having content name __

var myH2 =myContentDivs[1].getElementsByTagName("h2");
__ getting all the H2 tagged elements from the 2nd array of Content Divs that we got earlier from __

*/

/*
myBoday[0].innerHTML = "<p> This changes the whole body to this paragraph </p>"
*/

/*
var myTitle = document.getElementById("page-title");
myTitle
myTitle.textContent;
myTitle.textContent = "This changed the Text Content";
*/

//Change CSS Styles

/*
var title = document.getElementById("page-title");

title.setAttribute("style","position: relative;");

__ add to earlier attribute __ write the code again
title.setAttribute("style","position: relative; left: 10px;");

__change only left of the attribute in style __
titile.style.left = "20px";

__add another attribute without writing code again __
title.style.top = "10px";

*/

//Adding Elements to the DOM

/*
var newLi = document.createElement("li");

var newA = document.createElement("a");

var menu = document.getElementbyId("main-nav").getElementsbyTagName("ul")[0];
menu

menu.appendChild(newLi);

newLi.appendChild(newA);

newA.innerHTML = "Blog";

*/

/*
__ Put the new Element at the first of the ul __
menu.insertBefore("newLi, menu.getElementByTagName("li)[0]);

*/

// Removing Elements from the DOM

/*
var parent = document.getElementbyId("main-nav").getElementsbyTagName("ul")[0];
parent
var child = parent.getElementsByTagName("li")[0];
child
var removed = parent.removeChild(child);
removed

parent.appendChild(removed);

*/