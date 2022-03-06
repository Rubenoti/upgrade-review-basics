function rollDice(numberFaces) {
    return Math.floor(Math.random() * numberFaces) + 1;
}
console.log(rollDice(6));