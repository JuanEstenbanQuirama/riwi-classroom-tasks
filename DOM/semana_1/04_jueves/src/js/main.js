function index() {
    let isTbody = document.getElementById("isTbody");
    for (let i = 0; i < listPets.length; i++) {
        isTbody.innerHTML += `
    <tr>
        <td><img src="https://picsum.photos/200" class="img-fluid p-4" alt="ramdom"></td>
        <td>${listPets[i].petName}</td>
        <td>${listPets[i].status}</td>
        <td>@${listPets[i].owner.ownerName}</td>
        <td><button class="btn btn-primary">Update</button></td>
        <td><button class="btn btn-warning" onclick="deletePet('${listPets[i].petName}')">Delete</button></td>
    </tr>
      `;
    }
}

index() //<button class="btn btn-warning" onclick="deletePet('${listPets[i].petName}')">Delete</button>

// recolectar info
function inputsData() {
    let namePet = prompt("ingresa nombre mascota")
    let speciePet = prompt("ingresa especie mascota")
    let racePet = prompt("ingresa raza mascota")
    let birthPet = prompt("ingresa fecha mascota mm/dd/yyy")
    let widthPet = prompt("ingresa peso mascota")
    let statusPet = prompt("ingresa stado mascota")
    let ownerPet = prompt("ingresa nombre propietario mascota")
    let ownerPetId = prompt("ingresa id propietario mascota")
    let ownerPetPhone = prompt("ingresa phone propietario mascota")
    let ownerPetEmail = prompt("ingresa email propietario mascota")
    // calcular edad 
    registerPet(namePet, speciePet, racePet, birthPet, widthPet, statusPet, ownerPet, ownerPetId, ownerPetPhone, ownerPetEmail)
}

// añadir nueva mascota
function registerPet(namePet, speciePet, racePet, birthPet, widthPet, statusPet, ownerPet, ownerPetId, ownerPetPhone, ownerPetEmail) {
    // calcular la edad 
    let isAge = calculateAge(birthPet)
    // creando nueva mascota 
    pet = {
        petName: namePet,
        petRace: racePet,
        petSpecies: speciePet,
        petAge: isAge,
        petWidth: widthPet,
        petStatus: statusPet,
        petOwner: ownerPet,
        petOwnerId: ownerPetId,
        petOwnerPohone: ownerPetPhone,
        petOwnerEmial: ownerPetEmail
    }
    listPets.push(pet) // añadiendo mascota al arreglo (ultima posición)
    console.log("Agregando mascota");
    console.log(pet)
    return pet
}

// calcular edad 
function calculateAge(birthPet) {
    // fuecha actual y la fecha indicada
    let currentDay = new Date() // fecha actual completa 3423452345356262 2024
    let ageBirth = new Date(birthPet) // fecha completa de la fecha dada 34345 1995
    let age = currentDay.getFullYear() - ageBirth.getFullYear()
    return age;
}

// ver lista mascotas
function getPets() {
    console.log("Lista mascotas");
    listPets.forEach(eachPet => {
        console.log(eachPet.petName, eachPet.petRace, eachPet.petSpecies)
    })
}

// ver lista propietarios
function getPetsOwner() {
    console.log("Lista de dueños");
    let owners = []
    listPets.forEach(eachPet => {
        if (!owners.includes(eachPet.petOwner)) { // booleanos  true / false
            owners.push(eachPet.petOwner)
        }
    })
    console.log(owners);
}

// ver mascota por nombre de la mascota
function getPetByName(namePet) {
    let petFind = listPets.find(pet => pet.petName === namePet)
    if (petFind) {
        console.log("Mascota encontrada");
        console.log(petFind);
    } else {
        console.log("Mascota no encontrada");
    }
}

// mostrar mascotas por nombre del propietario
function getPetsByOwner(owner) {
    let petByOwer = listPets.filter(pet => pet.petOwner === owner) // 2 pets de sebas
    console.log(petByOwer);
    if (petByOwer.length > 0) {
        console.log(`Mascotas de ${owner}`);
        petByOwer.forEach(eachPet => {
            console.log(eachPet.petName, eachPet.petOwner);
        })
    } else {
        console.log(`Mascotas no encontradas para ${owner}`);
    }
} 

// Actualizar info pet
function updateInfoPet(namePet, newInfoToUpdate) {
    let index = listPets.findIndex(pet => pet.petName === namePet)
    if (index !== -1) {    // lista de animal, en el index sería la ubicacíon de ese objeto, ... simplemente si no existe la clave se crea y si existe se sobre escribe o actualiza 
        listPets[index] = { ...listPets[index], ...newInfoToUpdate } // esta info como se optiene 
        console.log(`la mascota ${namePet} fur actualizada`);
        document.getElementById("carrusel").innerHTML = "";
        // Volver a dibujar el carrusel con la lista actualizada de mascotas
        index();
        console.log(newInfoToUpdate);
    } else {
        console.log(`no se encontró ninguna mascota con el nombre ${namePet}`);
    }
    
}

// eliminar un pet

function deletePet(petNameToDelete) {
    listPets = listPets.filter(pet => pet.petName != petNameToDelete);
    console.log(`Mascota ${petNameToDelete} eliminada correctamente`);
    console.log(listPets.length);
    // Limpiar el carrusel antes de volver a dibujar
    document.getElementById("isTbody").innerHTML = "";
    // Volver a dibujar el carrusel con la lista actualizada de mascotas
    index();
}

// menu
let op = 0;
function showMenu() {
    return Number(prompt(`
        Menu veterinaria
        1. registro pet
        2. ver todos los pets
        3. ver lista dueños
        4. buscar por nombre del pet
        5. filtrar la mascota por el dueño
        6. actualizar la info del pet
        7. elimar el pet
        8. salir del menu
    `))
}

// while (op != 8) { // true o un false // mientras se cumple siga ejecutando
//     op = showMenu()
//     switch (op) {
//         case 1:
//             //crear
//             inputsData()
//             break;
//         case 2:
//             getPets()
//             break;
//         case 3:
//             getPetsOwner()
//             break;
//         case 4:
//             let isNamePet = prompt("Ingresa el nombre del pet")
//             getPetByName(isNamePet)
//             break;
//         case 5:
//             let isNameOwnerPet = prompt("Ingresa el nombre del pet Owner")
//             getPetsByOwner(isNameOwnerPet)
//             break;
//         case 6:
//             // updateInfoPet("mantis", {petWidthh: 16})
//             let namePet = prompt("Ingresa el nombre del pet")
//             let infoUpdate = prompt("ingresa los campos a actualizar (petWidth:5-campo2:valor2-....")
//             let newInfo = {}
//             // dividir la info por guiones
//             infoUpdate.split("-").forEach(item => { // petWidth:5 /campo2:valor2
//                 let [campo, valor] = item.split(":") //petWidth / 5
//                 newInfo[campo.trim()] = valor.trim() // object = {petWidth: 5}
//             })
//             updateInfoPet(namePet, newInfo)
//             break;
//         case 7:
//             console.log(listPets.length);
//             let isNameToDelete = prompt("Ingresa la mascota")
//             deletePet(isNameToDelete)
//             console.log(listPets.length);
//             break;
//         case 8:
//             console.log("Adios");
//             getPets()
//             break;
//         default:
//             console.log("seleccione la opción correcta");
//             break;
//     }
// }

console.log(listPets.length);





// updateInfoPet("mantis", {petWidthh: 16})
function topupdate (){

    let namePet = prompt("Ingresa el nombre del pet")
    let infoUpdate = prompt("ingresa los campos a actualizar (petWidth:5-campo2:valor2-....")
    let newInfo = {}
    // dividir la info por guiones
    infoUpdate.split("-").forEach(item => { // petWidth:5 /campo2:valor2
        let [campo, valor] = item.split(":") //petWidth / 5
        newInfo[campo.trim()] = valor.trim() // object = {petWidth: 5}
    
    updateInfoPet(namePet, newInfo)
    })}

    function cambiarBg () {
        let isBody = document.body;
        isBody.dataset.bsTheme = 
            isBody.dataset.bsTheme == "light" ? "dark" : "light";

    }