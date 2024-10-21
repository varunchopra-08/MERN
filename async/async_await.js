//this is used to avoid callback hell or nested callback 
//It can be used to write code in form of sync code without looosing properties of an async code
//promises are synactical sugar
/* function myOwnSetTimeout(callback, duration){
    setTimeout(callback,duration);
} */
/* myOwnSetTimeout(()=>{
    console.log("after settimeout")
}, 1000) */
function promisifiedMyOwnSetTimeout(duration){
    const p = new Promise(function(resolve){

    });//expects this functio

    return p;
}

const ans = promisifiedMyOwnSetTimeout(1000);//ans = promise <pending>
ans.then(()=>{
    console.log("timeout is done");

})//async awit or promise chaining => callback hhell
//promise is just other class in JS
//Date()
//constd = new Date();
//d.getMonth();
