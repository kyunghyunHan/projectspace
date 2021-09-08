$(".rollRight").click(function () {
    $(".coffeeRoll li").eq(0).insertAfter(".coffeeRoll li:last-child");
});
$(".rollLeft").click(function () {
   $(".coffeeRoll li").eq(-1).insertBefore(".coffeeRoll li:first-child");
});