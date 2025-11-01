let IGV21 = document.getElementById("link_IGV21")
let IGV10 = document.getElementById("link_IGV10")

IGV21.addEventListener("mouseenter", function(){
    IGV21.innerHTML = '<a href="https://deepwoken.co/builder?id=K1AJLVYm" id="link">Ignis Glacialis V2.1 (Sub Procella)</a>'
})
IGV21.addEventListener("mouseleave", function(){
    IGV21.innerHTML = 'Ignis Glacialis V2.1 (Sub Procella)'
})

IGV10.addEventListener("mouseenter", function(){
    IGV10.innerHTML = '<a href="https://deepwoken.co/builder?id=az0C9axo" id="link">Ignis Glacialis V1.0</a>'
})
IGV10.addEventListener("mouseleave", function(){
    IGV10.innerHTML = 'Ignis Glacialis V1.0'
})