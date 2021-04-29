const setText = data => {
    contenido.textContent = data;
}
//funciones que simulan procesos (peticiones api)
// usando callback
/*const getData = callback => {
    setText("Solicitando autorización...");
    setTimeout(() => {
        callback(true);
    },2000);
}

const showData = callback => {
    setText("esperando..");
    setTimeout(() => {
        callback({ name : 'Day'});
    },2000);
}

btn.addEventListener("click", () => {
    getData(authorization => {
        if(authorization){
            showData(user =>{
                setText(user.name);
            });
        }
    });
});*/

//usando Promise 
const getData = () => {
    return new Promise((resolve, reject) => {
        setText("Solicitando autorización...");
        setTimeout(() => {
            resolve(false);
        }, 5000);

    });
}

const showData = () => {
    return new Promise((resolve, reject) => {
        setText("esperando la información..");
        setTimeout(() => {
            resolve({ name: 'Day' });
        }, 1000);
    });
}
//anidando promesas
btn.addEventListener("click", () => {
    getData().then(authorization => {
        if (authorization) {
            return showData();
        }
    }).then(user => {
        setText(user.name);
    });

});

// async await
btnAsync.addEventListener("click", async () => {
    let user = null; // || {name : 'default'}
    const authorization = await getData();
    if (authorization) {
        user = await showData();
        setText(user.name);
    }
    console.log("fin del proceso");
});


