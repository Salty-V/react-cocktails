import { useState } from "react";
import CocktailsCard from "../components/CocktailCard";

function CocktailsPage () {

    const [cocktails, setCocktails] = useState(null)

    if(!cocktails) { // le fetch est lancé que s'il n'a pas déjà été chargé (que la valeur de drinks est vide)
 
        fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=") // via fetch on envoie une requête à l'API 
        .then((responseAPI) => { // on utilise .then pour gérer la réponse de l'API 
            return responseAPI.json() // on convertit la data retournée en json
        })
        .then((json) => {  // .then gère la data en json et la rend accessible
            setCocktails(json.drinks) // on affiche en console la data récupérée dans le useState 
            console.log(json.drinks)
        })
    }

    return (
        <main>
            {cocktails ? ( // si drinks a été récupéré
                <>
                <h1>Cocktails</h1>

                {cocktails.map((drinks) => { // je boucle sur la data avec map 
                    return (
                        <>
                            <CocktailsCard cocktailToDisplay={drinks}/>
                        </>
                    )
                })}
                </>
            ) : (
                <p>Loading</p> // si drinks n'a pas été récupéré j'affiche ce message 
            )}
        </main>
    )
}

export default CocktailsPage; 