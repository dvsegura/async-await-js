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
        }, 2000);
    });
  
}
async function fetchingData(){
    try{
        const fetchedPeliculas = await getDatos();
        console.log(fetchedPeliculas); 
    }catch(error){
        alert(error);
    }
}

window.addEventListener("load", () => {
    fetchingData();           
    console.log("continuo ejecutando el codigo...");
});

