
var extLink = document.querySelectorAll('a[href^="http"]')

for (var i = 0; i < extLink.length; i++){
  if (!extLink[i].hasAttribute("target")){
      extLink[i].setAttribute("target","_blank");
  }else{
    extLink[i].hasAttribute("target");
  }
}
