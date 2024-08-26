function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");

    let textoCifrado = texto
        .replace(/e/gi, "ember")
        .replace(/i/gi, "inter")
        .replace(/a/gi, "atu")
        .replace(/o/gi, "omer")
        .replace(/u/gi,"ufet");

    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado; 
        tituloMensaje.textContent = "Texto encriptado con éxito";
        parrafo.textContent ="";
        muñeco.src = "./img/encriptado.png";
    } else {
        muñeco.src = "./img/muñeco.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent ="Ingresa el texto que deseas encriptar o desencriptar";
        alert("Debes ingresar un texto");
      }
} 
function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");
  
    let textoCifrado = texto
      .replace(/ember/gi, "e")
      .replace(/inter/gi, "i")
      .replace(/atu/gi, "a")
      .replace(/omer/gi, "o")
      .replace(/ufet/gi, "u");
    
      if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = "";
        muñeco.src = "./img/desencriptar.png";
      } else {
        muñeco.src = "./img/muñeco.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        alert("Debes ingresar un texto");
      }
  }
