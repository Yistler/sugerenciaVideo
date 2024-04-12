import { Multimedia } from "./multimedia.js";
const mostrar = (function(){
    function mostrarVideo(url, id){
        //logica para mostrar los videos en el iframe
        const iframe = document.getElementById(id)
        iframe.setAttribute("src", url)
    }
    return{
        //funcion publica que recibe los parametros url, id y llama al funcion privada
        reproducirVideo: function(url, id){
            mostrarVideo(url, id);
        }
    }
})();

export class Reproductor extends Multimedia{
    constructor(url, id){
        super(url);
        this._id = id;
    }
    playMultimedia(){
        //metodo que permita hacer el llamado a la funcion publica de la IIFE
        //enviando los atributos url y id
        mostrar.reproducirVideo(this.url, this._id)
    }
    
    setInicio(id, tiempo){
        const iframe = document.getElementById(id);
        if(iframe){
            const url = new URL(iframe.src);
            url.searchParams.set("start", tiempo);
            iframe.src = url.toString();
        } else {
            console.error(`No se encontró ningún elemento con el id ${id}`);
        }
    }
}