import { Reproductor } from "./reproductor.js";

let urlMusica = "https://www.youtube.com/embed/2H08mqiDv-c?si=4Nl3uQkb7zJPP5du";
let urlPelicula = "https://www.youtube.com/embed/01UXuz00UkI?si=kWD2YRWSpueOAPAc"
let urlSerie = "https://www.youtube.com/embed/To_kVMMu-Ls?si=TP0WTpWqlqkYSrW4";

let reproducirMusica = new Reproductor(urlMusica, 'musica')
let reproducirPelicula = new Reproductor(urlPelicula, 'peliculas')
let reproducirSerie = new Reproductor(urlSerie, 'series')
reproducirMusica.playMultimedia()
reproducirPelicula.playMultimedia()
reproducirSerie.playMultimedia()

reproducirMusica.setInicio('musica', 20)
reproducirPelicula.setInicio('peliculas', 40)
reproducirSerie.setInicio('series', 90)