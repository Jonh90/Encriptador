const campo_texto = document.querySelector(".encriptar");
const campo_mensaje = document.querySelector(".texto-resultado");
var imagen = document.querySelector(".contenedor-imagen");


const matriz_code = [
    ["e","enter"],
    ["i","imes"],
    ["a","ai"],
    ["o","ober"],
    ["u","ufat"]
                    ];

function btnEncriptar(){
    ocultarAdelante();
    const texto1 = encriptartexto(campo_texto.value);
    campo_mensaje.textContent = texto1;
    document.querySelector(".encriptar").value = "";
}

function btnDesencriptar(){
    const texto2 = desencriptartexto(campo_texto.value);
    campo_mensaje.textContent = texto2;
    document.querySelector(".encriptar").value = "";
}

function encriptartexto(parrafoEncriptado){
    for(let i = 0; i < matriz_code.length; i++){
        if(parrafoEncriptado.includes(matriz_code[i][0])){
            parrafoEncriptado = parrafoEncriptado.replaceAll(
                matriz_code[i][0], 
                matriz_code[i][1]
            );
        }
    }
    return parrafoEncriptado;
}

function desencriptartexto(parrafoDesencriptado){
    for(let i = 0; i < matriz_code.length; i++){
        if(parrafoDesencriptado.includes(matriz_code[i][1])){
            parrafoDesencriptado = parrafoDesencriptado.replaceAll(
                matriz_code[i][1], 
                matriz_code[i][0]
            );
        }
    }
    return parrafoDesencriptado;
}

function ocultarAdelante(){
    var contenedor = document.querySelector(".contenedor-parrafo");
    imagen.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}

const btnCopiar = document.querySelector(".btn-copiar"); 
    btnCopiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".texto-resultado").textContent;
    navigator.clipboard.writeText(contenido);
    console.log("hola"); 
});
