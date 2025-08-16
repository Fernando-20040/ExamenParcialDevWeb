
$(document).ready(function(){

  // Botón bienvenida
  $("#btn-bienvenida").click(function(){
    alert("¡Bienvenido a mi perfil!");
  });

  // Cambiar color de fondo y guardar en localStorage
  $("#btn-cambiar-fondo").click(function(){
    $("body").css("background-color", "lightblue");
    localStorage.setItem("fondo", "lightblue");
  });

  //Recuperar color de fondo guardado
  if(localStorage.getItem("fondo")){
    $("body").css("background-color", localStorage.getItem("fondo"));
  }

  //Validación del formulario y guardado en localStorage 
  $("#contact-form").submit(function(e){
    e.preventDefault();
    
    let nombre = $("#nombre").val();
    let correo = $("#correo").val();
    let mensaje = $("#mensaje").val();

   
    if(!nombre || !correo || !mensaje){
      alert("Todos los campos son obligatorios");
      return;
    }

    
    localStorage.setItem("nombre", nombre);
    localStorage.setItem("correo", correo);
    localStorage.setItem("mensaje", mensaje);

    alert("✅ Formulario enviado y datos guardados en el navegador");
  });

  //Precargar datos del formulario desde localStorage 
  if(localStorage.getItem("nombre")){
    $("#nombre").val(localStorage.getItem("nombre"));
    $("#correo").val(localStorage.getItem("correo"));
    $("#mensaje").val(localStorage.getItem("mensaje"));
  }

  //Cambiar texto de un párrafo al presionar un botón 
  $("#btn-cambiar-texto").click(function(){
    $("#parrafo-cambiable").text("📌 El contenido de este párrafo fue cambiado con jQuery!");
  });

  //Agregar elementos dinámicos a una lista 
  $("#btn-agregar-item").click(function(){
    let nuevoItem = $("#nombre").val(); // Usamos el input "nombre"
    if(nuevoItem){
      $("#lista-dinamica").append("<li>"+nuevoItem+"</li>");
    } else {
      alert("Esperemos sacar 15 en el examen");
    }
  });

  //Efecto: imagen de perfil crece con hover 
  $(".img-fluid").hover(
    function(){ $(this).css("transform", "scale(1.1)"); },
    function(){ $(this).css("transform", "scale(1)"); }
  );

});
