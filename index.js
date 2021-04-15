/**
 * HELPER FUNCTIONS
 */

function rot(text, rotNumber) {
    let outputStr = "";

    for(let i=0; i<text.length; i++) {
        let charAscii = text[i].charCodeAt(0);
        //console.log(text[i])
        if(/[A-Za-z]/.test(text[i])) {  //if alpha 
            charAscii += rotNumber;
            if(/[A-Z]/.test(text[i])) { //if upperCase
                if(charAscii > 90) { charAscii = 64 + (charAscii-90); }
                if(charAscii < 65) { charAscii = 91 - (65 - charAscii); }
            } else {                    //if lowerCase
                if(charAscii > 122) { charAscii = 96 + (charAscii-122); }
                if(charAscii < 97) { charAscii = 123 - (97 - charAscii); }
            }
        }
        outputStr += String.fromCharCode(charAscii);
    }
    return outputStr;
}

function addRotSelectors(selector) {
    for(let i=1; i<26; i++){
        const option = document.createElement('option');
        option.text = 'ROT' + i;
        selector.add(option, selector[i])
    }
}


/**
 * EVENT HANDLER
 */
function inputTextChange() {
    const currRot = parseInt(selector.value.split('ROT')[1]);
    outputText.value = rot(inputText.value, currRot);
}

function outputTextChange() {
    const currRot = parseInt(selector.value.split('ROT')[1]);
    inputText.value = rot(outputText.value, -currRot);
}

function selectorChange() {
    inputTextChange();
}

/**
 * GLOBAL VARIABLES
 */
const selector = document.getElementById('rotNumber');
const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');


/**
 * CONNECT SIGNALS 
 */
addRotSelectors(selector);




