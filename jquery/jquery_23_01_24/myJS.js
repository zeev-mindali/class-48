let isDark = true;
$(() => {
  console.log("Hello class 48, the best that lecturer can get!!!!");
  $("h2").html("<u>Our grooms</u>");
  console.log($("#uName").val("Yeruslav"));
  console.log($("#uPass").attr("type", "color"));
  // background-color: black;
  //color: whitesmoke;
  //$("*").css({ "background-color": "whitesmoke", color: "black" });
  //$("*").css("color", "black");
  $("#myBtn").on("click", () => {
    //alert("mess with the best and die like the rest");
    if (isDark) {
      $("*").css({ "background-color": "whitesmoke", color: "black" });
      $("#myBtn").text("dark mode");
    } else {
      $("*").css({ "background-color": "black", color: "whitesmoke" });
      $("#myBtn").text("normal mode");
    }
    isDark = !isDark;
  });
});
