window.onload = function name(params) {
    console.log("Hola usuario");
    const Juego = ["Piedra","Papel","Tijera","Lagarto","Spock"]
    const getRandomJuego = () => {
        const index = Math.floor(Math.random() * Juego.length)
        return Juego[index];
    }
   
    
    const checkJuegoGuess = (userGuess) => {
        const randomJuego = getRandomJuego();
        console.log(`Tú seleccionaste: ${userGuess}`);
        console.log(`La PC selecciono: ${randomJuego}`);
        if (userGuess === randomJuego) {
            console.log("Empate");
        } else if (
            (userGuess === "Piedra" && (randomJuego === "Tijera" || randomJuego === "Lagarto")) ||
            (userGuess === "Papel" && (randomJuego === "Piedra" || randomJuego === "Spock")) ||
            (userGuess === "Tijera" && (randomJuego === "Papel" || randomJuego === "Lagarto")) ||
            (userGuess === "Lagarto" && (randomJuego === "Spock" || randomJuego === "Papel")) ||
            (userGuess === "Spock" && (randomJuego === "Tijera" || randomJuego === "Piedra"))
        ) {
            console.log("Ganaste");
        } else {
            console.log("Perdiste");
        }
    };
    const userGuess = prompt("Elige: Piedra, Papel, Tijera, Lagarto o Spock");
    checkJuegoGuess(userGuess);
};
