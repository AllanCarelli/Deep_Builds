function builds_links(id, link_da_build, nome_da_build){
let id1 = document.getElementById(`link_${id}`)
id1.addEventListener("mouseenter", function(){
    id1.innerHTML = `<a href="${link_da_build}" id="link" target="_blank">${nome_da_build}</a>`
})
id1.addEventListener("mouseleave", function(){
    id1.innerHTML = nome_da_build
})
}


builds_links("IGV21", "https://deepwoken.co/builder?id=K1AJLVYm", "Ignis Glacialis V2.1 (Sub Procella)")
builds_links("IGV20", "https://deepwoken.co/builder?id=OT1dgk3r", "Ignis Glacialis V2.0")
builds_links("IGV10", "https://deepwoken.co/builder?id=az0C9axo", "Ignis Glacialis V1.0")
builds_links("SSV10", "https://deepwoken.co/builder?id=7S4ervmz", "Silent Soul V1.0")
builds_links("CVV10", "https://deepwoken.co/builder?id=6QlEt6ZQ", "CryoVortex V1.0")



