$('li').on("mouseenter",function() {

  $(this).css("background-color","red");
});
$('li').on("mouseleave",function() {

  $(this).css("background-color","white");
});
$('li').on("click",function() {
  var elemento = $(this).text().trim();
  if(confirm("¿deseas borrar " + elemento + "?" )){
  $(this).remove();
  }
});
