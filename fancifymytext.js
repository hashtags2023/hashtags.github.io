// This function will make the text larger when the "Bigger!" button is clicked
function makeTextBigger() {
    let textarea = document.getElementById("userText");
    textarea.style.fontSize = "24pt";  // Make text larger (24pt)
}

// This function will apply styles based on the selected radio button
function applyFancyStyles() {
    let textarea = document.getElementById("userText");
    
    // Check if FancyShmancy is selected
    if (document.getElementById("fancyShmancy").checked) {
        textarea.style.fontWeight = "bold";
        textarea.style.color = "blue";
        textarea.style.textDecoration = "underline";
    }
    // Check if BoringBetty is selected
    else if (document.getElementById("boringBetty").checked) {
        textarea.style.fontWeight = "normal";
        textarea.style.color = "black";
        textarea.style.textDecoration = "none";
    }
}

// This function will make the text uppercase and append "-Moo" to each sentence
function mooifyText() {
    let textarea = document.getElementById("userText");
    let text = textarea.value;
    
    // Convert text to uppercase
    text = text.toUpperCase();
    
    // Split the text into sentences (assuming sentences end with a period)
    let sentences = text.split(".");
    
    // Add "-Moo" to the last word of each sentence
    sentences = sentences.map(sentence => {
        // Remove extra whitespace and add "-Moo" to the last word
        let words = sentence.trim().split(" ");
        words[words.length - 1] = words[words.length - 1] + "-Moo";
        return words.join(" ");
    });
    
    // Join the sentences back together and put the result in the textarea
    textarea.value = sentences.join(". ");
}

// Add event listeners to the buttons and radio buttons
document.getElementById("biggerButton").addEventListener("click", makeTextBigger);
document.getElementById("fancyShmancy").addEventListener("change", applyFancyStyles);
document.getElementById("boringBetty").addEventListener("change", applyFancyStyles);
document.getElementById("mooButton").addEventListener("click", mooifyText);
