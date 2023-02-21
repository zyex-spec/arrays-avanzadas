let equipos = [
    {nombre:"Atletico Nacional", titulos: 32},
    {nombre:"Deportivo Indp Medellin", titulos: 16},
    {nombre:"Junior de Barranquilla", titulos: 7}
]

let sumaDeTitulos=0

equipos.forEach(function(equipo){
    sumaDeTitulos=sumaDeTitulos+equipo.titulos
})
console.log(sumaDeTitulos)