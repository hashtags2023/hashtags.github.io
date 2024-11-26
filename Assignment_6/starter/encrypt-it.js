/*
 * Starter file 
 */
(function() {
  "use strict";

  /**
   * The starting point in my program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * Initializes event listeners for UI elements.
   */
  function init() {
    // Add event listener for the Encrypt-It! button
    document.getElementById("encrypt-it").addEventListener("click", handleEncrypt);

    // Add event listener for the Reset button
    document.getElementById("reset").addEventListener("click", handleReset);
  }

  /**
   * Handles the Encrypt-It! button click event.
   * Retrieves the input text, encrypts it using the shift cipher,
   * and displays the result in the output paragraph.
   */
  function handleEncrypt() {
    const inputText = document.getElementById("input-text").value;
    const encryptedText = shiftCipher(inputText);
    document.getElementById("output").textContent = encryptedText;
  }

  /**
   * Handles the Reset button click event.
   * Clears the input textarea and output paragraph.
   */
  function handleReset() {
    document.getElementById("input-text").value = "";
    document.getElementById("output").textContent = "";
  }

  /**
   * Encrypts the input text using a shift cipher.
   * Each letter is shifted by 1; 'z' is shifted to 'a'.
   * Non-alphabetical characters are not modified.
   * @param {string} text - The input text to encrypt.
   * @returns {string} - The encrypted text.
   */
  function shiftCipher(text) {
    text = text.toLowerCase();
    let result = "";
    for (let i = 0; i < text.length; i++) {
      if (text[i] < "a" || text[i] > "z") {
        result += text[i]; // Non-alphabetic characters remain unchanged
      } else if (text[i] === "z") {
        result += "a"; // Special case for 'z'
      } else {
        let letter = text.charCodeAt(i);
        let resultLetter = String.fromCharCode(letter + 1);
        result += resultLetter;
      }
    }
    return result;
  }
})();
