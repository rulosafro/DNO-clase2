var elEncabezado = document.querySelector("header");
var laHora = new Date().getHours();
var dondeEstas;
if (document.body.classList.contains("portada")) {
    dondeEstas = true;
} else {
    dondeEstas = false;
} 
var dondeEstas2;
if (document.body.classList.contains("portada2")) {
    dondeEstas2 = true;
} else {
    dondeEstas2 = false;
} 
var dondeEstas3
if (document.body.classList.contains("page")) {
    dondeEstas3 = true;
} else {
    dondeEstas3 = false;
} 
var elSaludo;
if (5 < laHora && laHora < 12) {
    elSaludo = "Holas holas";
} else if (11 < laHora && laHora < 21) {
    elSaludo = "Ya se hizo tarde";
} else {
    elSaludo = "A mimir";
}
var elColor;
function setup() {
    createCanvas(windowWidth, windowHeight).position(0, 0).style("z-index", -1);
    background(122, 154, 230);
    createElement("h1", elSaludo).parent(elEncabezado).id("title");
    createA("index.html", "index").parent("vinculos");
    createA("page.html", "page").parent("vinculos");
    createA("pag3.html", "pag3").parent("vinculos");
    elColor = createColorPicker("#FFFFFF").parent("controles");
    elSlider = createSlider(1, 20, 10).parent("controles");
    if (dondeEstas) {
        portada();
    } else if (dondeEstas2) {
        portada2();
    } else if (dondeEstas3) {
        page();
    } 
}
function draw() {
    stroke(elColor.color());
    strokeWeight(elSlider.value());
    if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}
function portada() {
    createSpan(". Estás en la matrix").parent("title");
    select("a:nth-child(1)").style("font-weight", "bold").style("color", "#000000");
}
function page() {
    createSpan(". Estás en la matrix 2").parent("title");
    select("a:nth-child(2)").style("font-weight", "bold").style("color", "#000000");
}
function portada2() {
    createSpan(". Este es mi dibujo").parent("title");
    select("a:nth-child(3)").style("font-weight", "bold").style("color", "#000000");
}
