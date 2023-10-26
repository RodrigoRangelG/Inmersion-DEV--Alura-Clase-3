//Detectar si el enlace es imagen
function isImage(url) {
    return /\.jpg/.test(url);
}


/*
0 peliKirdor
1 peliMMpollo
2 peliTechy
3 peliSCLeoo
4 peliMirrus
*/
//Imagenes de peliculas
var listaPeliculas = []
listaPeliculas[0] = "https://m.media-amazon.com/images/I/41QST6DYNDL._AC_UF1000,1000_QL80_.jpg";
listaPeliculas[1] = "https://m.media-amazon.com/images/M/MV5BNWYxZWFiNTItN2FkNS00ZDJmLWE1MWItYjMyMTgyOTI4MmQ4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg";
listaPeliculas[2] = "https://m.media-amazon.com/images/M/MV5BODRmZDVmNzUtZDA4ZC00NjhkLWI2M2UtN2M0ZDIzNDcxYThjL2ltYWdlXkEyXkFqcGdeQXVyNTk0MzMzODA@._V1_FMjpg_UX1000_.jpg";
listaPeliculas[3] = "https://m.media-amazon.com/images/M/MV5BODQ0OWJiMzktYjNlYi00MzcwLThlZWMtMzRkYTY4ZDgxNzgxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg";
listaPeliculas[4] = "https://musicart.xboxlive.com/7/37991100-0000-0000-0000-000000000002/504/image.jpg";

//Nombres de peliculas
var nombrePeliculas = ["V de Venganza","Coach Carter","Your Name","Fight Club","Soy Leyenda"]

for(var i=0;i<listaPeliculas.length;i++){
    if(!isImage(listaPeliculas[i]))
        alert("El URL "+i+" no termina en .jpg");
}

//Mostrar las imagenes en el documento

for(var i = 0; i < listaPeliculas.length ; i++){
    document.write("<span style='display: inline-block; text-align: center; margin: 10px;'>");
    document.write("<img src =" + listaPeliculas[i] + ">");
    document.write("<p>" + nombrePeliculas[i] + "</p>");
    document.write("</span>");
}

//Agregar una pelicula
listaPeliculas.push("https://m.media-amazon.com/images/M/MV5BNWE4OTNiM2ItMjY4Ni00ZTViLWFiZmEtZGEyNGY2ZmNlMzIyXkEyXkFqcGdeQXVyMDU5NDcxNw@@._V1_.jpg");
nombrePeliculas.push("Pesadilla antes de navidad");

//Mostrar las imagenes en el documento
var i = 0;
while(i < listaPeliculas.length){
    document.write("<span style='display: inline-block; text-align: center; margin: 10px;'>");
    document.write("<img src =" + listaPeliculas[i] + ">");
    document.write("<p>" + nombrePeliculas[i] + "</p>");
    document.write("</span>");
    i++;
}
