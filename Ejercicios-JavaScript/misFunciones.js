/**
 * Convierte unidades entre metros, pies, pulgadas y yardas
 * @method convertirUnidades
 * @param {string} id - id del elemento del input del html
 * @param {number} valor - contiene el valor del input que ingresó el usuario
 */

function convertirUnidades(id,valor){
    let met, pul, pie, yar;
    document.lasUnidades.unid_pulgada.value = Math.round(pul*100)/100;
    document.lasUnidades.unid_pie.value = Math.round(pie*100)/100;
    document.lasUnidades.unid_yarda.value = pie.toFixed(2);
    document.lasUnidades.unid_metro.value = met.toFixed(2);

    if(valor.includes(",")){
        valor = valor.replace(",",".");
    }
    if(isNaN(valor)){
        alert("El valor ingresado no es válido");
        metro= "";
        pie= "";
        pulgada= "";
        yarda= "";
    } else if (id == "pulgada"){
        metro = 0.0254*valor;
        pulgada = valor;
        pie = 0.0833333*valor;
        yarda = 0.0277778*valor;
    }else if (id == "metro") {
        metro = valor;
        pulgada = 39.3701*valor;
        pie = 3.28084*valor;
        yarda = 1.09361*valor;
    }else if (id == "pie") {
        metro = 0.3048*valor;
        pulgada = 12*valor;
        pie = valor;
        yarda = 0.333333*valor;
    }else if (id == "yarda") {
        metro = 0.9144*valor;
        pulgada = 36*valor;
        pie = 3*valor;
        yarda = valor;
    }
}

/**
 * Convierte grados a radianes
 * @method convertirGR
 */
function convertirGR(){
    var grados, radianes;
    grados = document.getElementById("grados").value;
    radianes = (grados*Math.PI)/180;
    document.getElementById("radianes").value=radianes;
}

/**
 * Convierte radianes a grados
 * @method convertirRG
 */
function convertirRG(){
    var grados, radianes;
    radianes = document.getElementById("radianes").value;
    grados = (radianes*180)/Math.PI;
    document.getElementById("grados").value=grados;
}

/**
 * Muestra u oculta el parámetro ingresado
 * @method mostrar_ocultar
 * @param nombre - parámetro a ocultar/mostrar
 */
function mostrar_ocultar(nombre) {
    if(nombre=="val_mostrar"){
        document.getElementById("unDiv").style.display='block';
    }else if(nombre=="val_ocultar"){
        document.getElementById("unDiv").style.display='none';
    }
}

/**
 * Calcula la suma entre dos numeros
 * @method calcularSuma
 */
let sumar = () => {
    let res, s1, s2;
    s1 = Number(document.operacionesMat.sum_num1.value);
    s2 = Number(document.operacionesMat.sum_num2.value);
    res = s1 + s2;
    document.operacionesMat.sum_total.value = res;
}

/**
 * Calcula la resta entre dos numeros
 * @method calcularResta
 */
let resta = () => {
    let res, s1, s2;
    s1 = Number(document.operacionesMat.res_num1.value);
    s2 = Number(document.operacionesMat.res_num2.value);
    res = s1 - s2;
    document.operacionesMat.res_total.value = res;
}

/**
 * Calcula la multiplicacion entre dos numeros
 * @method calcularMult
 */
let multiplicar = () => {
    let res, s1, s2;
    s1 = Number(document.operacionesMat.mul_num1.value);
    s2 = Number(document.operacionesMat.mul_num2.value);
    res = s1 * s2;
    document.operacionesMat.mul_total.value = res;
}

/**
 * Calcula la división entre dos numeros
 * @method calcularDiv
 */
let dividir = () => {
    let res, s1, s2;
    s1 = Number(document.operacionesMat.div_num1.value);
    s2 = Number(document.operacionesMat.div_num2.value);
    res = s1 / s2;
    document.operacionesMat.div_total.value = res;
}

/**
 * generar una url para redireccionar el input
 * @method generarUrl
 */
let generarUrl = () => {
    const dist = document.getElementById("distancia").value;
    const uni = document.getElementsByName("unidades")[0].value;

    const urlCompl = `segundaWeb.html#${dist}#${uni}`;
    window.open(urlCompl);
}
/**
 * cargar el valor de la primer página en la segunda
 * @method cargarValor
 */
let cargarValor=() => {
    let urlCompleta = window.location.href;
    console.log(urlCompleta);
    urlCompleta = urlCompleta.split("#");

    const distancia = urlCompleta[1];
    const unidad = urlCompleta[2];
    document.getElementById("dist").value = `${distancia} ${unidad}`;
}

let guardarLS = () => {
    const dist = document.getElementById("distancia").value;
    const uni = document.getElementsByName("unidades")[0].value;

    localStorage.setItem("distanciaLS",dist);
    localStorage.setItem("unidadLS",uni);
    window.open("segundaWeb.html");
}

let cargarLS = () => {
    const distancia = localStorage.getItem("distanciaLS");
    const unidad = localStorage.getItem("unidadLS");

    document.getElementById("dist").value = `${distancia} ${unidad}`
}

/**
 * Dibuja un circulo y un cuadrado en un canvas
 * @method dibujarCirculoCuadrado
 */

let dibujarCirculoCuadrado = () => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    let xMax = canvas.width;
    let yMax = canvas.height;
    ctx.fillStyle = "#586";

    ctx.arc(xMax/2,yMax/2,200, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fill();

    let margen = 15;
    ctx.fillRect(0+margen, yMax-margen,200,-150);

}

/**
 * Limpia el canvas
 * @method limpiarCanvas
 */
let limpiarCanvas = () => {
    let canvas = document.getElementById("miCanvas");
    canvas.width = canvas.width;
}

/**
 * Dibuja en un canvas al mantener presionado el mouse
 * @method dibujar
 */
var bandera;
let dibujar = () => {
    let canvas = document.getElementById("miCanvas");
    let ctx = canvas.getContext("2d");

    let posX = event.clientX;
    let posY = event.clientY;
    console.log(posX, posY);

    canvas.onmousedown = function () {
        bandera = true
    };
    canvas.onmouseup = function () {
        bandera = false
    };

    if (bandera) {
        ctx.fillRect(posX-10, posY-115, 5, 5);
        ctx.fill();
    }
}

/**
 * Dibuja una cuadrícula en un canvas
 * @method dibujarCuadriculado
 */

let dibujarCuadriculado = () => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    const alturaMax = canvas.height;
    const anchoMax = canvas.width;
    const paso = 20;

    let ejeX = -24;
    let ejeY = -14;

    //lineas verticales
    for(let i=paso; i<anchoMax; i+=paso){
        ctx.beginPath();
        ctx.moveTo(i,0);
        ctx.lineTo(i,alturaMax);
        ctx.strokeStyle = "#d77e7e";
        ctx.stroke();
        ctx.font="10px Arial";
        ctx.fillStyle = "#005"
        ctx.fillText(ejeX,i,alturaMax/2);
        ctx.closePath();
        ejeX++;
    }

    //lineas horizontales
    for(let i=paso; i<alturaMax; i+=paso){
        ctx.beginPath();
        ctx.moveTo(0,i);
        ctx.lineTo(anchoMax,i);
        ctx.strokeStyle = "#730707";
        ctx.stroke();
        ctx.font="10px Arial";
        ctx.fillStyle = "#005"
        ctx.fillText(ejeY,anchoMax/2,i);
        ctx.closePath();
        ejeY++;
    }

    //eje x
    ctx.beginPath();
    ctx.moveTo(0,alturaMax/2);
    ctx.lineTo(anchoMax,alturaMax/2);
    ctx.strokeStyle = "#c2c900";
    ctx.stroke();
    ctx.closePath();

    //eje y
    ctx.beginPath();
    ctx.moveTo(anchoMax/2,0);
    ctx.lineTo(anchoMax/2,alturaMax);
    ctx.strokeStyle = "#c2c900";
    ctx.stroke();
    ctx.closePath();
}

/**
 * Dibuja un autito en el canvas (a partir de una imagen)
 * @method dibujarImg
 * @param posX
 * @param posY
 */

let dibujarImg = (posX, posY) => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    limpiarCanvas();
    console.log(posX, posY);
    let img = new Image();
    img.src = "images/auto.png";

    if(posX<0||posY<0||posX>=canvas.width||posY>=canvas.height){
        openDialog();
    } else {
        canvas.width = canvas.width;
        img.onload = function (){
            ctx.drawImage(img, posX, posY);
        }
    }
}

/**
 * Abre un cuadro de dialogo
 * @method openDialog
 */
let openDialog = () => {
    const dialog = document.getElementById("myDialog");
    dialog.showModal();
}

/**
 * Cierra un cuadro de dialogo
 * @method closeDialog
 */
let cerrarDialogo = () => {
    const dialog = document.getElementById("myDialog");
    dialog.close();
}

/**
 * Anima la imagen del autito que dibujamos
 *@method animarAuto
 */
var x=0;
var dx=2;
let animarAuto = () => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    const img = new Image();
    img.src = "images/auto.png";

    img.onload = function (){
        canvas.width = canvas.width;
        ctx.drawImage(img, x, 100);
    }

    x+=dx;

    if(x>canvas.width){
        x=-300;
    }
}