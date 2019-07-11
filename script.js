var handleClick = function () {
  if (!document.getElementById("egg")) {
    var easterEgg = document.createElement("p");
    easterEgg.setAttribute("id", "egg");
    easterEgg.appendChild(document.createTextNode("hello"));
    document.getElementsByClassName("fun")[0].appendChild(easterEgg);
    document.getElementsByTagName("button")[0].innerText = "click me again";
  }
  else {
    document.getElementById("egg").remove();
    document.getElementsByTagName("button")[0].innerText = "You've made it this far, press the button";
  }

}
