//check off specific todo by clicking
$("ul").on("click", "li", function() {
  $(this).toggleClass("change")

})


$("ul").on("click", "span", function(event) {
  $(this).parent().fadeOut("slow", function() {
    $(this).remove()
  })
  event.stopPropagation()
})


$("input[type='text']").keypress(function(event) {
  if (event.which === 13) {
    var todoText = $(this).val();
    $(this).val("");
    $("ul").append("<li><span><i class=\"fas fa-trash-alt\"></i></span> " + todoText + "</li>")
  }
})

$(".fa-plus").click(function(){
  $("input[type='text']").fadeToggle()
})



// $("li").click(function() {
//   console.log($(this).css("color"))
//   if ($(this).css("color") === "rgb(128, 128, 128)") {
//     console.log("its grey")
//     $(this).css({
//       color: "black",
//       textDecoration: "none"
//     })
//   } else {
//     $(this).css({
//       color: "grey",
//       textDecoration: "line-through"
//     })
//   }
// })
