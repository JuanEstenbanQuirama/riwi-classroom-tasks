




function index() {
    let carrusel = document.getElementById("carrusel");
    for (let i = 0; i < listPets.length; i++) {
        carrusel.innerHTML += `
        <div class="carousel-item">
        <div class="card mb-3 mx-auto p-2" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src=${listPets[i].imagen} class="img-fluid rounded-start" alt="animal">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${listPets[i].petName} </h5>
                        <p class="card-text">${listPets[i].race}</p>
                        <p class="card-text">${listPets[i].species}</p>
                        <p class="card-text">${listPets[i].status}</p>
                        <p class="card-text"><small class="text-body-secondary">${listPets[i].owner.ownerName}</small></p>
                    </div>
                </div>
            </div>
        </div>
      `;
    }
}

index()

