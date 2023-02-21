let inmuebles=[
    {id:1,nombre:"El VIP", direccion: "calle 100"},
    {id:1,nombre:"PROVENZA", direccion: "cr 100"},
    {id:3,nombre:"EL RAUDAL", direccion: "calle 10"}
]

let buscador = inmuebles.find(function(inmueble){
    return(inmueble.id==1)
})
let buscador2 = inmuebles.filter(function(inmueble){
    return(inmueble.id==1)
})
let buscador3 = inmuebles.some(function(inmueble){
    return(inmueble.id==1)
})
console.log(buscador)
console.log(buscador2)
console.log(buscador3)