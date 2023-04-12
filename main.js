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
        marca = "Mongol",
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
    getMarca(){
        return this.#marca;
    }
}

const formulario = document.querySelector("#formulario");
let dimencion = document.querySelector(`[name="dimension"]`)


let obj = undefined;
let color = document.querySelector(`[name="color"]`);
obj = new lapiz({});

addEventListener("DOMContentLoaded", (e)=>{
    color.value = obj.color 
    dimencion.value = obj.dimencion
})
/* mostar el valor de la dimencion  */

const vlrdimencion = document.querySelector("#vlrdimencion");
dimencion.addEventListener("input", function(){
    vlrdimencion.textContent = dimencion.value;
});

/* asignar por defecto a los radio del nombre su valor */
const defRadios = document.getElementsByName('marca');
for (let i = 0; i < defRadios.length; i++) {
    if (defRadios[i].value === obj.getMarca()) {
        defRadios[i].checked = true;
        break; 
    }
}

/* para asignar por defecto los valorres del borrador */
const vlrBorrador = document.getElementsByName('borrador');
(obj.borrador)? vlrBorrador[0].checked = true: vlrBorrador[1].checked=true 

/* para asignar  los valores por defecto a los tradie del material */
const vlrMaterial = document.getElementsByName('material');
console.log(vlrMaterial);
console.log(obj);
for(let i = 0; i< vlrMaterial.length;i++){
    if(vlrMaterial[i].value === obj.material){
        vlrMaterial[i].checked = true;
        break;
    }

}







