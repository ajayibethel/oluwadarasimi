const symbols = ["★", "彡", "ツ", "✿", "⚡", "❖", "♛"];

function addSymbols(Oluwadarasimi) {
    const randomSymbol1 = symbols[Math.floor(Math.random() * symbols.length)];
    const randomSymbol2 = symbols[Math.floor(Math.random() * symbols.length)];
    return `${randomSymbol1} ${name} ${randomSymbol2}`;
}