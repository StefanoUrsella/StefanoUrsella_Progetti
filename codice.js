paragrafo = document.getElementById("paragrafo");
console.log(paragrafo.textContent);
document.getElementById("button").addEventListener("click", function(){
    console.log("pulsnte cliccato");
    stampareInput();
});

input = document.getElementById("input");
function stampareInput(){
    console.log(input.value);
}