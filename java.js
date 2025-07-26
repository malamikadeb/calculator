let clearbtn = document.querySelector("#clear");
let backspacebtn = document.querySelector("#backspace");
let percentbtn = document.querySelector("#percentage");
let divbtn = document.querySelector("#divide");
let multbtn = document.querySelector("#multiply");
let minusbtn = document.querySelector("#minus");
let plusbtn = document.querySelector("#plus");
let equalbtn = document.querySelector("#equal");
let onebtn = document.querySelector("#one");
let twobtn = document.querySelector("#two");
let threebtn = document.querySelector("#three");
let fourbtn = document.querySelector("#four");
let fivebtn = document.querySelector("#five");
let sixbtn = document.querySelector("#six");
let sevenbtn = document.querySelector("#seven");
let eightbtn = document.querySelector("#eight");
let ninebtn = document.querySelector("#nine");
let zerobtn = document.querySelector("#zero");
let dotbtn = document.querySelector("#dot");
let plusminusbtn = document.querySelector("#plusminus");
let display = document.querySelector("#display");


function updateDisplay(value = '', isAddingNumber = false) {
    let currentInput = display.value || '';
    console.log(`Current Input: ${currentInput} ${isAddingNumber}`);
    if (isAddingNumber && currentInput !== '0') {
        currentInput += value;
    } else {
        currentInput = value;
    }
    
    display.value = currentInput || '0';
}

onebtn.addEventListener("click", () => {
    updateDisplay("1", true)});
twobtn.addEventListener("click", () => {
    updateDisplay("2", true)});
threebtn.addEventListener("click", () => {
    updateDisplay("3", true)});
fourbtn.addEventListener("click", () => {
    updateDisplay("4", true)});
fivebtn.addEventListener("click", () => {
    updateDisplay("5", true)});
sixbtn.addEventListener("click", () => {
    updateDisplay("6", true)});
sevenbtn.addEventListener("click", () => {
    updateDisplay("7", true)});
eightbtn.addEventListener("click", () => {
    updateDisplay("8", true)});
ninebtn.addEventListener("click", () => {
    updateDisplay("9", true)});
zerobtn.addEventListener("click", () => {
    updateDisplay("0", true)});
dotbtn.addEventListener("click", () => {
    updateDisplay(".", true)});

clearbtn.addEventListener("click", () => {
    updateDisplay();
}); 

backspacebtn.addEventListener("click", () => {
    let currentInput = display.value || '';
    if (currentInput.length > 0) {
        currentInput = currentInput.slice(0, -1);
        updateDisplay(currentInput);
    }
});

divbtn.addEventListener("click", () => {
    if (display.value) {
        updateDisplay(" / ", true);
    }
});

multbtn.addEventListener("click", () => {
    if (display.value) {
        updateDisplay(" * ", true);
    }
});

minusbtn.addEventListener("click", () => {
    if (display.value) {
        updateDisplay(" - ", true);
    }
});

plusbtn.addEventListener("click", () => {
    if (display.value) {
        updateDisplay(" + ", true);
    }
}); 

plusminusbtn.addEventListener("click", () => {
    updateDisplay("00", true)});


equalbtn.addEventListener("click", () => {
    try {
        let result = eval(display.value);
        updateDisplay(result.toString());
    } catch (error) {
        console.error("Error evaluating expression:", error);
        updateDisplay("");
    }
});

percentbtn.addEventListener("click", () => {
    let currentInput = display.value || '';
    if (currentInput) {
        updateDisplay(" % ", true);
    }
});






 