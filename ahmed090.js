const matrix = document.querySelector(".matrix");

function makeId() {
    let result = "";

    let characters = 
    "ABCDFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789夂夊夕大女子宀寸小尢尸屮山巛工己斤方无日曰月木欠止歹殳毋比毛氏气 疒癶白皮皿目矛矢石示禸禾穴立6竹";

    result += characters.charAt(Math.floor(Math.random() * characters.length));

    return result;
}

function generateText() {
    const w = 19;
    const h = 26;

    for (let i = 0; i < w; i++) { 
        const timeout = Math.floor(Math.random() *19) * 1000;
        let delay = 0;

        const column = document.createElement("p");

        for (let i = 0; i < h; i++) {
            const letter = document.createElement("span");
    
            letter.innerHTML = makeId();
    
            column.appendChild(letter);
    
            delay += 100;
            column.children[i].style.animationDelay = delay + "ms"
        }
        setTimeout(() => {
            matrix.appendChild(column);
        }, timeout);
    }
}

generateText();