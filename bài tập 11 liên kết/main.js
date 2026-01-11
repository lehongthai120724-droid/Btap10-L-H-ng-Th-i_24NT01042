animals = [
     { ten: "Sói", anh: "./image/Fox/soi.png",mota:"con sói di bầy đàn rất là mạnh", thuvien: ["./image/Fox/soi1.png", "./image/Fox/soi2.png", "./image/Fox/soi3.png",
        "./image/Fox/soi4.png","./image/Fox/soi5.png", "./image/Fox/soi6.png", "./image/Fox/soi7.png","./image/Fox/soi8.png"
    ] },
    { ten: "Cáo", anh: "./image/wolf/cao.png", thuvien: ["image/Fox/fox_1.PNG", "image/Fox/fox_2.PNG", "image/Fox/fox_3.PNG",
        "image/Fox/fox_4.PNG", "image/Fox/fox_5PNG.PNG", "image/Fox/fox_6PNG.PNG", "image/Fox/fox_7PNG.PNG","image/Fox/fox_8.PNG"
    ] },
    { ten: "Chó", anh: "./image/dog/cho.png", thuvien: ["image/dog/dog_1.PNG", "image/dog/dog_2.PNG", "image/dog/dog_3.PNG",
        "image/dog/dog_4.PNG", "image/dog/dog_5.PNG", "image/dog/dog_6.PNG", "image/dog/dog_7.PNG","image/dog/dog_8.PNG"
    ] },
    { ten: "Dê", anh:"./image/goat/de.png", thuvien: ["image/goat/goat_1.PNG", "image/goat/goat_2.PNG", "image/goat/goat_3.PNG",
        "image/goat/goat_4.PNG", "image/goat/goat_5.PNG", "image/goat/goat_6.PNG", "image/goat/goat_7.PNG","image/goat/goat_8.PNG"
    ] },
    { ten: "Rồng", anh: "./image/dragon/rong.png", thuvien: ["image/dragon/dragon_1.PNG", "image/dragon/dragon_2.PNG", "image/dragon/dragon_3.PNG",
        "image/dragon/dragon_4.PNG", "image/dragon/dragon_5.PNG", "image/dragon/dragon_6.PNG", "image/dragon/dragon_7.PNG","image/dragon/dragon_8.PNG"
    ] }
];
const animalListDiv = document.getElementById('animalList');
if (animalListDiv) {
    animals.forEach(animal => {
        const card = document.createElement('div');
        card.className = 'animal-card';
        card.innerHTML = `
            <img src="${animal.anh}" alt="${animal.ten}">
            <h3>${animal.ten}</h3>
        `;
        card.onclick = function() {
            localStorage.setItem('selectedAnimal', JSON.stringify(animal));
            window.location.href = 'detail.html';
        };
        animalListDiv.appendChild(card);
    });
}