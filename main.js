
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

let obj = undefined;
const formulario = document.querySelector("#formulario");
let dimencion = document.querySelector(`[name="dimension"]`)
let color = document.querySelector(`[name="color"]`);
/* let marca = document.querySelector(`input[name="marca"]:checked`).value;

console. log(marca);*/

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
for(let i = 0; i< vlrMaterial.length;i++){
    if(vlrMaterial[i].value === obj.material){
        vlrMaterial[i].checked = true;
        break;
    }
}
/* extraemos todos los datos del formulario */

formulario.addEventListener("submit" ,(e)=>{
    e.preventDefault();
    const color = formulario.elements.color.value;
    const marca = formulario.elements.marca.value;
    const dimencion = formulario.elements.dimension.value;
    const borrador = formulario.elements.borrador.value;
    const material = formulario.elements.material.value;

    const nuevoLapiz= new lapiz({
            color:color,
            dimencion:dimencion,
            borrador:borrador,
            material:material,
            marca: marca,
    })
    const tablas = document.querySelector(".datosFormulario");
    tablas.insertAdjacentHTML("beforeend",`
    <tr>
        <th style="background-color:${nuevoLapiz.color}"></th>
        <th>${nuevoLapiz.dimencion}</th>
        <th>${nuevoLapiz.getMarca()}</th>
        <th>${nuevoLapiz.borrador}</th>
        <th>${nuevoLapiz.material}</th>
    </tr>
    `)

})




