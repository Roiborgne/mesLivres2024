////service qui va faire du CRUD avec les livres
//
//export const insertLivre = (titre, auteur, resume, estlu) =>{
//    const setUpListenerForm = () => {
//        //Récupérer les éléments du DOM
//        const toggleForm  = document.querySelector("#toggleFormBtn")
//        const formSection  = document.querySelector("#formSection")
//        const livreForm = document.querySelector("#bookForm")
//
//
//
//        //On reset le form quand il est caché
//        formSection.addEventListener("hidden.bs.collapse",() =>{
//            livreForm.reset()
//        })
//
//        //traitement du formulaire
//        livreForm.addEventListener("submit", (evt) =>{
//            //Empecher le refresh de la page
//            evt.preventDefault()
//            //Récuperer les valeurs saisies
//            const titre = livreForm.title.value
//            const auteur = livreForm.author.value
//            const resume = livreForm.summary.value
//            const estlu = livreForm.title.checked
//            console.log(titre, auteur, resume, estlu)
//
//            //creer un objet js
//            livreForm.addEventListener("submit", (evt)=>{
//                //1. Créer un objet javascript à partir des données saisies
//                const livre = {
//                    titre : titre,
//                    auteur : auteur,
//                    resume : resume,
//                    estlu : estlu,
//                    id: crypto.randomUUID(), //id unique
//                    createdAt : new Date().toDateString()
//                }
//                console.log(livre)
//                //2. Serialiser (transformer) en JSON (chaine de caractères)
//                const livreJSON = JSON.stringify(livre)
//                console.log(livreJSON)
//            })
//            //3. Sauvegarder dans le LocalStorage
//            //1) Récupérer dans le LS la valeur liée à la clé "livres"
//            const livresJson = localStorage.getItem("livres")
//            console.log(livresJson)
//
//            //2) Désérialiser le JSON dans un tableau JavaScript
//            const livres = livresJson ? JSON.parse(livresJson) :[]
//            console.log(livres)
//
//            //3) Ajouter l'objet livre dans le tableau livres
//            livres.push(livre)
//
//            //4) Sauvgarder le tableau livres dans le localstorage sous la clé "livres
//            localStorage.setItem('livre',JSON.stringify(livres))
//}