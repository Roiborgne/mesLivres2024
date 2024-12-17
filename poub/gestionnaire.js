//gestionnaire d'event
import {insertLivre} from "./livreService.js";

export const setUpListener = () => {
    //Récupérer les éléments du DOM
    const toggleForm  = document.querySelector("#toggleFormBtn")
    //Gestionnaire de clic bouton tooglrformBtn
    toggleForm.addEventListener("click", () =>{
        const formCollapse = new bootstrap.Collapse(formSection, {toggle: false})
        formCollapse.toggle()
    })
    const setUpListenerForm = () => {
        //Récupérer les éléments du DOM
        const toggleForm  = document.querySelector("#toggleFormBtn")
        const formSection  = document.querySelector("#formSection")
        const livreForm = document.querySelector("#bookForm")



        //On reset le form quand il est caché
        formSection.addEventListener("hidden.bs.collapse",() =>{
            livreForm.reset()
        })

        //traitement du formulaire
        livreForm.addEventListener("submit", (evt) =>{
            //Empecher le refresh de la page
            evt.preventDefault()
            //Récuperer les valeurs saisies
            const titre = livreForm.title.value
            const auteur = livreForm.author.value
            const resume = livreForm.summary.value
            const estlu = livreForm.title.checked
            console.log(titre, auteur, resume, estlu)

            insertLivre(titre, auteur, resume, estlu)
            ////creer un objet js
            //livreForm.addEventListener("submit", (evt)=>{
            //    //1. Créer un objet javascript à partir des données saisies
            //    const livre = {
            //        titre : titre,
            //        auteur : auteur,
            //        resume : resume,
            //        estlu : estlu,
            //        id: crypto.randomUUID(), //id unique
            //        createdAt : new Date().toDateString()
            //    }
            //    console.log(livre)
            //    //2. Serialiser (transformer) en JSON (chaine de caractères)
            //    const livreJSON = JSON.stringify(livre)
            //    console.log(livreJSON)
            //})
            //    //3. Sauvegarder dans le LocalStorage
            ////1) Récupérer dans le LS la valeur liée à la clé "livres"
            //const livresJson = localStorage.getItem("livres")
            //console.log(livresJson)
//
            ////2) Désérialiser le JSON dans un tableau JavaScript
            //const livres = livresJson ? JSON.parse(livresJson) :[]
            //console.log(livres)
//
            ////3) Ajouter l'objet livre dans le tableau livres
            //livres.push(livre)
//
            ////4) Sauvgarder le tableau livres dans le localstorage sous la clé "livres
            //localStorage.setItem('livre',JSON.stringify(livres))

            //4.Cacher le form à la fin
            formCollapse.hide()

        })



        //La sauvegarde des données du formulaire

        //Utilisation du local storage : emplacement de stockage (~5 à 10 Mo).
        //  - Mis à disposition par le navigateur et lié à un domaine
        //  - Le navigateur met à disposition une API pour générer le LocalStorage

        //Les données stockées dans le LocalStorage sont au format JSON
        //Les JSON sont structuré sous une forme clé/valeur
    }
}
