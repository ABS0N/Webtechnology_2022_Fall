function applyBackgroundColorChange(className, color) {
    changeBackgroundColor(className, color);
    incrementCounter(className);
}

function changeBackgroundColor(className, color) {
    const elements = document.getElementsByClassName(className);
    for (const element of elements) {
        element.style.backgroundColor = color;
    }

/* solution #2 - forEach method
Array.from(elements).forEach(element => element.style.backgroundColor = color);
*/
}

function incrementCounter(className) {
    const COUNTER_IDS = {
        note: "note-counter",
        warning: "warning-counter"
    };
    const counter = document.getElementById(COUNTER_IDS[className]);
    counter.textContent = parseInt(counter.textContent) + 1;
}