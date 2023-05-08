texto = document.querySelector("#texto")
n = document.querySelector("#n")
i = document.querySelector("#i")
s = document.querySelector("#s")
n.addEventListener("click", function (){
    if (texto.style.fontWeight != 750) {
        texto.style.fontWeight = 750
    } else {
        texto.style.fontWeight = ''
    }
})
i.addEventListener("click", function () {
    if (texto.style.fontStyle != "italic") {
        texto.style.fontStyle = "italic"
    } else {
       texto.style.fontStyle = ''
    }
})
s.addEventListener("click", function () {
    if (texto.style.textDecoration !="underline") {
        texto.style.textDecoration = "underline"
    } else {
        texto.style.textDecoration = ''
    }
})