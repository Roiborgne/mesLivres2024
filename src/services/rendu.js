import {afficherTousLesLivres} from "./livreservice.js";

export const afficherLivres = () =>{
    //Récupérer la div avec l'id "booksList"
    const listeLivre = document.querySelector("#booksList")
    const livres = afficherTousLesLivres()
    console.log(livres)
    //data.forEach(resultArray => {
    //    document.getElementById('titre').innerHTML = resultArray.titre;
    //    document.getElementById('auteur').innerHTML = resultArray.auteur;
    //    document.getElementById('resume').innerHTML = resultArray.resume;
    //});
    //Récuperer la liste des livres
    listeLivre.innerHTML = livres.map(livre => {
        const date = new Date(livre.createdAt).toLocaleDateString("fr-FR")
        return `
<div class="col-md-6 col-lg-4" id="book-${livre.id}">
     <div class="card h-100">
        <div class="card-body">
            <div class="d-flex justify-content-between align-items-start mb-2">
                <h5 class="card-title mb-0">${livre.titre}</h5>
                <span class="badge ${livre.estLu ? 'bg-success' : 'bg-secondary'} toggle-read-btn"  data-id="${livre.id}" data-bool="${livre.estLu}"
                        style="cursor: pointer;" >
                    ${livre.estLu ? '<i class="bi bi-check-circle me-1"></i>Lu' : '<i class="bi bi-circle me-1"></i>Non lu'}
                </span>
                </div>
                <h6 class="card-subtitle mb-2">
                <i class="bi bi-person me-1"></i>${livre.auteur}
                </h6>
                <p class="card-text small">${livre.resume}</p>
                <div class="d-flex justify-content-between align-items-center mt-3">
                <small class="text-muted">
                    <i class="bi bi-calendar3 me-1"></i>${date}
                </small>
                <button class="btn btn-outline-danger btn-sm delete-btn" data-id="${livre.id}" >
                    <i class="bi bi-trash me-1"></i>Supprimer
                </button>
            </div>
        </div>
    </div>
</div>`
    }).join(' ')
//
}
//<div class="card w-50 shadow">
//    <p class="card-title text-center">${livre.titre}</p>
//    <p class="card-body">${livre.resume}</p>
//    <div class="card-footer">
//        <p class="col-4">${livre.auteur}</p>
//        <p class="col-4">${livre.estLu}</p>
//        <p class="col-4">${livre.id}</p>
//    </div>
//</div>