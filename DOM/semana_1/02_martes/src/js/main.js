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

const section = document.querySelector('section')
console.log(section);
for (let i = 0; i < listPets.length; i++) {
  section.innerHTML += `
  <div class="col">
    <div class="card" style="width: 18rem;">
      <img src="${listPets[i].petImg}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
 `

}


