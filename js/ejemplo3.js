// app.js
const timeout = function (delay) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, delay)
    })
  }
  
  async function timer () {    
    console.log('timer started');
    await timeout(500);
    console.log('timer 500');
    await timeout(3000);
    console.log('timer 3000');
    await timeout(500);
    console.log('2 timer 500');
    
  }
  
 window.addEventListener("load", async () => {
   console.log("loaded page");
    const time = await timer(); 
    console.log("finish timer");   
 }); 