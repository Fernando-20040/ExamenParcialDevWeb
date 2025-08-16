$(document).ready(function(){

  // Alerta bienvenida
  $("#btn-bienvenida").click(function(){
    alert("¡Bienvenido a mi perfil!");
  });

  // Cambiar color fondo
  $("#btn-cambiar-fondo").click(function(){
    $("body").css("background-color", "lightblue");
    localStorage.setItem("fondo", "lightblue");
  });

});
