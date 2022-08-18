// // javascript es sincronico pq se codifica y lee de arriba a abajo
// // javascript es de hilo simple 
// // javascript es un lenguaje no bloqueante

/// for(let tiempo=120;tiempo>0;tiempo--){
//     console.log(tiempo)
//     if(tiempo===0){
//         console.log("El cafe esta listo")
//     }
// }


// //ejemplo del sincronismo
// console.log("Me despierto")
// console.log("Me lavo los dientes")
// console.log("Pongo la cafetera")
// setTimeout(()=>{
//     console.log(("El cafe esta listo"),3000)
// });
// console.log("Desayuno")
// console.log("Voy al IPF")


// //caso a
// console.log("Teresa")
// console.log("Rodrigo")

// //caso b
// setTimeout(() => {
//     console.log("Teresa")
// }, 3000);
// console.log("Teresa")
// console.log("Rodrigo")


//caso c
// setTimeout(() => {
//     console.log("Teresa")
// }, 0);

// for (let index = 0; index <= 3000; index++) {
//     console.log(index)
//     if(index===300) console.log("Rodrigo")
    
// }
// console.log("Hugo")


//EJERCICIO 3 funciones y callbacks

// function primero(fn) {
//     setTimeout(() => {
//         console.log("Primero")
//         fn()
//     }, 1000);
    
// }

// function segundo(){
//     console.log("Segundo")
// }

// primero(segundo)


// //EJERCICIOS CON FOREACH
//  const miArray=[1,2,3,4,5,6]
// // miArray.forEach((numeros,index)=>{
// //     console.log(numeros, ":", index)
// // })

// var resultado = miArray.filter(numeros=>console.log(numeros>4))

// console.log(resultado)

// let objeto = {}
// let objeto2= new Object()

// objeto={
//     nombre:"XD",
//     edad:25,
//     domicilio:"XDXDDNASHEEE",
//     correos:{
//         correo1:"xdnaaaaa",
//         correo2:"xdasdsadadas",
//         "correo3":"adsddsa dsadsa"
//     }
// }

// objeto.apellido="ASHEEEEEEE"
// console.log(objeto.correos.correo3)

// console.log("ashe" in objeto)

//crear un objeto user vacio
//agrega la propiedad name  con el valor john
//agrega la propiedad surname con el valor smith
//cambia el valor dle name a peter
//remueva la propiedad name del objeto

let user = {}

user.name="John"
user.surname="Smith"
console.log(user)

user.name="Peter"
console.log(user)

delete user.name
console.log(user)

for(key in user){
    console.log(key)
}
