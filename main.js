// class lapiz{
//     #marca              /* coloco el # para decirle que es un atributo privado(protegido) */

//     constructor({color="Amarillo",
//                 dimencion=19,
//                 borrador=true, 
//                 material="Madera",
//                 marca="mongol"}){
        
//         this.color = color;
//         this.dimencion = dimencion;
//         this.borrador = borrador;
//         this.material = material;
//         this.#marca = marca;
//     }
    
//     /* set solom modificar get solo obtener */
//     setMarca({}){
//         this.#marca = marca;
//         return this.getMarca();
//     }
//     getMarca(){
//         return this.#marca;
//     }
// }

// /* los metodos es lo que el lapiz puede hacer  */
// /* La instancia de las clases es como crear la lave que va al constructore  */

// let  obj = new lapiz({marca: "Norma"});
// console.log(obj);

// const formulario = document.querySelector("#formulario");
// console.log(formulario);

class lapiz{
    #marca
    constructor({
        color="#fff700",
        dimencion = "19",
        marca = "molgol",
        borrador = true,
        material = "Madera"

    }){
        this.color = color;
        this.dimencion= dimencion;
        this.#marca= marca;
        this.borrador=borrador;
        this.material=material;
    }

    getColor(){
        return this.color;
    }
}

const formulario = document.querySelector("#formulario");
let obj = undefined;
let color = document.querySelector(`[name="color"]`);
let dimencion = document.querySelector(`[name="dimension"]`)
console.log(dimencion);

addEventListener("DOMContentLoaded", (e)=>{
    obj = new lapiz({});
    color.value = obj.color 

    dimencion.value = obj.dimencion


})






