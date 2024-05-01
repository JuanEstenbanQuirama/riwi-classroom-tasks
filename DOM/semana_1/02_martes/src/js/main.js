let listPets = [
    {
        petName: "lulu",
        petRace: "doberman",
        petSpecies: "dog",
        petAge: new Date("12/19/2020"),
        petWidth: 7,
        petStatus: "stable",
        petOwner: "Sebas",
        petOwnerId: 1036670094,
        petOwnerPohone: 3059052091,
        petOwnerEmial: "sebas@gmail.com",
        petImg:"https://picsum.photos/200"
        
    },
    {
        petName: "ikaro",
        petRace: "loro indio",
        petSpecies: "loro",
        petAge: new Date("12/19/202"),
        petWidth: 7,
        petStatus: "stable",
        petOwner: "Sebas",
        petOwnerId: 1036670094,
        petOwnerPohone: 3059052091,
        petOwnerEmial: "sebas@gmail.com",
        petImg:"https://picsum.photos/200"
    },
    {
        petName: "ikaro",
        petRace: "loro indio",
        petSpecies: "loro",
        petAge: new Date("12/19/202"),
        petWidth: 7,
        petStatus: "stable",
        petOwner: "Sebas",
        petOwnerId: 1036670094,
        petOwnerPohone: 3059052091,
        petOwnerEmial: "sebas@gmail.com",
        petImg:"https://picsum.photos/200"
    }
]

const main = document.querySelector('main')
console.log(main);
for (let i = 0; i < listPets.length; i++) {
   main.innerHTML += (`
   <div class="row">
    <div class="col">
   <div class="card" style="width: 18rem">
   <img
     src=${listPets[i].petImg}
     class="card-img-top"
     alt="ramdom"
     title="ramdom"
     class="ramdom"
   />
   <div class="card-body">
     <h2 class="card-title">${listPets[i].petName}</h2>
     <p class="card-text">${listPets[i].petRace}</p>
     <p class="card-text">${listPets[i].petSpecies}</p>
     <a href="#" class="btn btn-primary">see details</a>
   </div>
 </div>`
)
}


// dos formas de hacer lo mismo 
// const main = document.getElementsByTagName('main')
// main[0].appendChild(ramdomImg) 
// const main = document.querySelector('main')
// let ramdomImg = document.createElement('img')

// ramdomImg.id = "ramdom"
// ramdomImg.src = "https://picsum.photos/201"
// ramdomImg.alt = "ramdom imagen"
// ramdomImg.width = 100
// ramdomImg.removeAttribute('id')

// ramdomImg.setAttribute("src", "https://picsum.photos/200") // tambien se peude ramdimgImg.src = "nuevo url"
// main.appendChild(ramdomImg)