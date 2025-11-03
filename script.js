let IGV21 = document.getElementById("link_IGV21")
let IGV10 = document.getElementById("link_IGV10")
let SLV10 = document.getElementById("link_SLV10")
let discord = document.getElementById("discord")
const linkss = document.getElementsByClassName("link")



function builds_links(id, link_da_build, nome_da_build){
id.addEventListener("mouseenter", function(){
    id.innerHTML = `<a href="${link_da_build}" id="link">${nome_da_build}</a>`
})
id.addEventListener("mouseleave", function(){
    id.innerHTML = nome_da_build
})
}

builds_links(IGV21, "https://deepwoken.co/builder?id=K1AJLVYm", "Ignis Glacialis V2.1 (Sub Procella)")
builds_links(IGV10, "https://deepwoken.co/builder?id=az0C9axo", "Ignis Glacialis V1.0")
builds_links(SLV10, "https://deepwoken.co/builder?id=7S4ervmz", "Silent Soul V1.0")



