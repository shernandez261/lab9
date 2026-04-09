function init() {

    const button = document.getElementById("entrybutton");
    const input = document.getElementById("entryinput");
    const output = document.getElementById("textoutput");

    button.addEventListener("click", function() {
        const text = input.value;

        alert("Samuel Hernandez: " + text);

        output.textContent = text;
    });

}

window.addEventListener('load', init);
