// Service qui va faire du CRUD avec les livres
export const insererLivre = (titre, auteur, resume, estLu) => {
    // *******************************
    // Sauvegarder les données saisies
    // *******************************
    // 1. Créer un objet JS à partir des données saisies
    const livre = {
        titre: titre,
        auteur: auteur,
        resume: resume,
        estLu: estLu,
        id: crypto.randomUUID(),
        createdAt: new Date().toDateString()
    }
    //console.log(livre)
    // 2. Sérialiser transformer en json (str)
    const livreJson = JSON.stringify(livre)
    // 3. Sauvegarder dans le localstorage (JSON)
    // 3.1 Récupérer dans le localstorage la valeur liée à la clé "livres"
    const livresJson = localStorage.getItem("livres")
    // 3.2 Désérialiser le JSON dans un tableau JS
    const livres = livresJson ? JSON.parse(livresJson) : []
    // 3.3 Ajouter l'objet livre dans le tableau livre
    livres.push(livre)
    // 3.4 Sauvegarder le tableau livre dans le localstorage sous la clé "livres"
    localStorage.setItem("livres", JSON.stringify(livres))
}

export const afficherTousLesLivres = () => {
    // Récupérer dans le localstorage la valeur liée à la clé "livres"
    const livresJson = localStorage.getItem("livres")
    // Désérialiser le JSON dans un tableau JS
    return livresJson ? JSON.parse(livresJson) : []
}

export const supprLivre = id =>{
    // 3.1 Récupérer dans le localstorage la valeur liée à la clé "livres"
    const livresJson = localStorage.getItem("livres")
    // 3.2 Désérialiser le JSON dans un tableau JS
    const livres = livresJson ? JSON.parse(livresJson) : []
    //supprimer le livre avec l'id 'id' dans le tableau livres
    const livresRestants = livres.filter(livre => livre.id !== id)

    //Sauvegarder dans le localStorage
    localStorage.setItem("livres", JSON.stringify(livresRestants))
}

export const toggleLivre = (id, bool) =>{
    // 3.1 Récupérer dans le localstorage la valeur liée à la clé "livres"
    const livresJson = localStorage.getItem("livres")
    // 3.2 Désérialiser le JSON dans un tableau JS
    const livres = livresJson ? JSON.parse(livresJson) : []
    //supprimer le livre avec l'id 'id' dans le tableau livres
    const livresUpdate = livres.find(livre => livre.id !== id)
    if (bool === true){
        livresUpdate.estLu = false
    }else if (bool === false){
        livresUpdate.estLu = true
    }

    //Sauvegarder dans le localStorage
    localStorage.setItem("livres", JSON.stringify(livresUpdate))
}