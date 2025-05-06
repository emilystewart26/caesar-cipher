let mode = "encode";

let originalInput = document.querySelector("#original");
let shiftInput = document.querySelector("#shift");
let encryptedInput = document.querySelector("#encrypted");


let originalMessage = originalInput.value;
originalInput.addEventListener("input", characterEntered, false);
shiftInput.addEventListener("input", numberEntered, false);

document.querySelector("#encodeBtn").addEventListener("click", () => {
    mode = "encode";
    startEncryption();
});

document.querySelector("#decodeBtn").addEventListener("click", () => {
    mode = "decode";
    startEncryption();
});


function characterEntered(e) {
    encryptedInput.value = "";

    originalMessage = e.target.value;
    originalMessage = originalMessage.toLowerCase();
    originalMessage = originalMessage.replace(/[^a-z ]/, '');

    e.target.value = originalMessage;
}

function numberEntered(e) {
    startEncryption();
}

function startEncryption() {
    let encryptedMessage = "";
    let shift = shiftInput.value ? Number(shiftInput.value) : 0;

    if (mode === "decode") {
        shift = -shift;
    }

    for (letter of originalMessage) {
        encryptedMessage += shiftLetter(letter,shift);
    }

    encryptedInput.value = encryptedMessage;

}

startEncryption();

function shiftLetter(letter, shift) {
    // If the character is a space, return it unchanged
    if (letter === ' ') {
        return ' ';
    }

    let letterCode = letter.charCodeAt(0);
    let newLetterCode = letterCode + (shift % 26);

    if (newLetterCode < 97) {
        newLetterCode += 26;
    } else if (newLetterCode > 122) {
        newLetterCode -= 26;
    }

    return String.fromCharCode(newLetterCode);
}
