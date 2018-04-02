function numeroDeEleccion(jugador) {
    // joyaaaaaaa justo iba a poner con numero donde pusiste vos  antes pero estaba en duda
    //jajajaja tranqui... repasemos un poco el switch si queres o las funciones. Hacelo todo devuelta de cero.
    //siempre te pone piedra, por lo que esta pasando por el default siempre. Tenes un error. Entonces? No coincide jugador con ningun case. Recorda que vos le pasas numeros.
    //no te olvides que le estas preguntando que hace en el case (case) de que jugador valga algo...
    //el default lo que hace es que si no esta en ningun caso, haga algo. Si le ingresas un 7 y no hay caso para el 7, pasa por el default.
    switch(jugador){
        case 0: jugador = 'piedra'
            break
        case 1: jugador = 'papel'
            break
        case 2: jugador = 'tijera'
            break
        default: jugador = 'piedra'
            break
    }

    return jugador
}