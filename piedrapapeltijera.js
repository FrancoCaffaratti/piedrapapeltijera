function jugar(mensaje) {
    //comienza el juego
    let jugador1 = Math.round(Math.random() * (2 - 0) + 0)
    //0 = piedra, 1 = papel, 2 = tijera
    let jugador2 = Math.round(Math.random() * (2 - 0) + 0)

    //cambiamos el valor de piedra papel o tijera a numerico
    jugador1 = numeroDeEleccion(jugador1)
    jugador2 = numeroDeEleccion(jugador2)
    
    //podes escribir un texto y reemplazar todos los que coincidan usando ctrl f. Intentá. copado man<23

    if((jugador1 === 'piedra' && jugador2 === 'tijera') || (jugador2 === 'piedra' && jugador1 === 'tijera')) {
        if(jugador1 === 'piedra') {
            console.log('Gana el jugador1 con piedra')
        } else {
            console.log('Gana el jugador2 con piedra')
        }
    } else if ((jugador1 === 'piedra' && jugador2 === 'papel') || (jugador2 === 'piedra' && jugador1 === 'papel')) {
        if(jugador1 === 'papel') {
            console.log('Gana el jugador1 con papel')
        } else {
            console.log('Gana el jugador2 con papel')
        }
    } else if ((jugador1 === 'papel' && jugador2 === 'tijera') || (jugador2 === 'papel' && jugador1 === 'tijera')) {
        if(jugador1 === 'tijera') {
            console.log('Gana el jugador1 con tijera')
        } else {
            console.log('Gana el jugador2 con tijera')
        }
    } else {
        console.log('Es un empate')
    }
    
    console.log('Valores obtenidos:')
    console.log(`Valor del jugador1: ${jugador1}`)
    console.log(`Valor del jugador2: ${jugador2}`)
    console.log('-------------------------------')

}
//me pone nerviso la puta madre y no me sale jajaja mira esto
//hacete la funcion numeroDeEleccion
//esta bien no?, faltan cosas y jugador no esto estaba bien
function numeroDeEleccion (jugador) {
    switch (jugador) {
        case 0: 
            return 'piedra'
            break
        case 1: 
            return 'papel'
            break
        case 2:
            return 'tijera'
            break
        default: 
            return 'piedra'
            break
    }
    //pero te falta que vas a retornar, que valor. return no es una funcion, no lleva ().
    // El () lo usa para hacer el calculo y retornar lo resulante de adentro. B: Cierto!! en ese caso puede esestar o no
    //funcionma perfecto. Felicidades!!!! :D
    //Gracias!!! Vamos por masssss  jkajajajaja otra forma de retornar es haciendo esto
    //retornas el valor ahi y te olvidas

    //lo subimos a github? Que es eso. Donde yo te lo mostre ayer en el link. Bueno pero todavia no lo instale. Lo baje pero no esta instalado

}

jugar()