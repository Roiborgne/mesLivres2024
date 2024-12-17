import {afficherLivres} from "../services/rendu.js";

console.log("JS - Gestionnaires - Mes Livres JS")

import {insererLivre, supprLivre, toggleLivre} from "../services/livreservice.js";

export const setupGestionnaires = () => {

    // Récupérer les éléments dans le DOM
    const toggleFormBtn = document.querySelector("#toggleFormBtn")
    const formSection = document.querySelector("#formSection")
    const formCollapse = new bootstrap.Collapse(formSection, {toggle : false})
    const livreForm = document.querySelector("#bookForm")

    // Gestionnaire click bouton toggleFormBtn
    toggleFormBtn.addEventListener("click", ()=> {
        formCollapse.toggle()
    })

    // On reset le formulaire lorsque celui-ci est caché
    formSection.addEventListener('hidden.bs.collapse', () =>{
        livreForm.reset()
    })

    // Traitement du formulaire
    livreForm.addEventListener("submit", (evt) =>{
        //Empécher le rechargement de la page
        evt.preventDefault()
        // Récupérer les valeurs saisies
        const titre = livreForm.elements.title.value
        const auteur = livreForm.elements.author.value
        const resume = livreForm.elements.summary.value
        const estLu = livreForm.elements.isRead.checked

        // Sauvegarder les données saisies
        insererLivre(titre,auteur,resume,estLu)

        formCollapse.hide()

        // Re-afficher la liste des livres
        afficherLivres()
    })
    //Traitement de la suppression d'un livre
    const listeLivre = document.querySelector("#booksList")
        listeLivre.addEventListener('click',(evt)=>{
            //Récupérer l'élément sur lequel on a cliqué
            const target = evt.target.closest(".delete-btn, .toggle-read-btn")
            if(target == null)return;
            //Récupérer l'id du livre à supprimer
            const idLivre = target.dataset.id
            const boolLivre = target.dataset.bool
            //Regarder sur quel élément on a cliqué
            if (target.classList.contains("delete-btn")){
                supprLivre(idLivre)
                afficherLivres() //mise à jour de l'affichage
            }else if (target.classList.contains("toggle-read-btn")){
                toggleLivre(idLivre, boolLivre)
            }
        })

}