const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const copiarTexto = document.querySelector(".btn-copiar");
const width = window.innerWidth;
const height = window.innerHeight;

if (window.innerWidth < 500) {
    menu.classList.toggle("collapsed");
  }

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.value = textoDesencriptado
    textArea.value = "";
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"],["i", "imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }

    }
    return stringEncriptada
}

function desencriptar(stringDesencriptada){
    let matrizCodigo= [["e","enter"], ["i", "imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length;i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }

    }
    return stringDesencriptada
}

function btnCopiarTexto(){
    let resultado = document.querySelector(".mensaje");    
    resultado.select();    
    navigator.clipboard.writeText(resultado.value);
    alert("Copiado");
}
