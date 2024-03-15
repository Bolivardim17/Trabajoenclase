let personas = [];
function capturadatos() {
  console.log("capturando datos...");
  let persona = {
    nombre: document.getElementById("nombre").value,
    correo: document.getElementById("Correo").value,
    telefono: document.getElementById("telefono").value,
    nacimiento: document.getElementById("nacimiento").value,
    ciudad: document.getElementById("ciudad").value,
  };
  personas.push(persona);
  mostrarcards();
}
function mostrarcards() {
  document.getElementById("cards").innerHTML = "";
  personas.map(function (persona) {
    let card = document.createElement("section");
    let nombre = document.createElement("p");
    let correo = document.createElement("p");
    let telefono = document.createElement("p");
    let fecha = document.createElement("p");
    let ciudad = document.createElement("p");
    nombre.textContent = persona.nombre;
    correo.textContent = persona.correo;
    telefono.textContent = persona.telefono;
    fecha.textContent = persona.fecha;
    ciudad.textContent = persona.ciudad;
    card.append(nombre, correo, telefono, fecha, ciudad);
    console.log(card);
    document.getElementById("cards").append(card);
  });
}

let inputs = document.querySelectorAll("#formulario input");
// console.log(inputs);
inputs.forEach(function (input) {
  console.log(input);
  input.addEventListener("click", validarFormulario);
  input.addEventListener("blur", validarFormulario);
  input.addEventListener("keyup", validarFormulario);
});

let expresionesRegulares = {
  nombre: /^([a-zA-ZùÙüÜäàáëèéïìíöòóüùúÄÀÁËÈÉÏÌÍÖÒÓÜÚñÑ\s]+)$/,
  correo: /\b([\w\.-]+)@([\w\-]+)(\.\w{2,4})(\.\w{2,4})?\b/g,
  telefono: /^93[0-9]{7}$/m,
  nacimiento:
    /((([0][1-9]|[12][\d])|[3][01])[-/]([0][13578]|[1][02])[-/][1-9]\d\d\d)|((([0][1-9]|[12][\d])|[3][0])[-/]([0][13456789]|[1][012])[-/][1-9]\d\d\d)|(([0][1-9]|[12][\d])[-/][0][2][-/][1-9]\d([02468][048]|[13579][26]))|(([0][1-9]|[12][0-8])[-/][0][2][-/][1-9]\d\d\d)/gm,
  ciudad: /([\wÀ-ú])+/g,
};

function validarFormulario(e) {
  //   console.log(e);
  //   console.log(e.target.value);
  //   console.log("validando formulario...");
  switch (e.target.name) {
    case "nombre":
      console.log("este es el input nombre...");
      if (expresionesRegulares.nombre.test(e.target.value)) {
        console.log("paso la validacion");
        document.getElementById("nombre").textContent = "";        
        document.getElementById("nombre").style.borderBottomColor = "";
      } else {
        console.log("no paso la validacion");
        document.getElementById("nombre").style.borderBottomColor = "red";
      }
      break;
    case "correo":
      console.log("este es el input correo...");  
      if (expresionesRegulares.correo.test(e.target.value)) {
        console.log("paso la validacion");
      } else {
        console.log("no paso la validacion");
      }
      break;
    case "telefono":
      console.log("este es el input telefono...");
      if (expresionesRegulares.telefono.test(e.target.value)) {
        console.log("paso la validacion");
      } else {
        console.log("no paso la validacion");
      }
      break;
    case "nacimiento":
      console.log("este es el input nacimiento...");
      if (expresionesRegulares.nacimiento.test(e.target.value)) {
        console.log("paso la validacion");
      } else {
        console.log("no paso la validacion");
      }
      break;
    case "ciudad":
      console.log("este es el input ciudad...");
      if (expresionesRegulares.ciudad.test(e.target.value)) {
        console.log("paso la validacion");
      } else {
        console.log("no paso la validacion");
      }
      break;

    default:
      break;
  }
}
