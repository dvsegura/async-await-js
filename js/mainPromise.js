const datos = [{
    id: 1,
    title: 'Pelicula 1',
    year: 2001
}, {
    id: 2,
    title: 'Pelicula 2',
    year: 2002

}];

//const datos = [];

const getDatos = () => {
    return new Promise((resolve, reject) => {
        if (datos.length == 0) {
            reject(new Error("No existen datos"));
        }
        setTimeout(() => {
            resolve(datos);
        }, 1500);
    });
}

window.addEventListener("load", () => {
    getDatos()
        .then((datos) => { console.log(datos) })  
        .catch((error) => { alert("Se ha producido un error: " + error);});        
    console.log("continuo ejecutando el codigo...");
});
