import PocketBase from 'pocketbase'
import { type TypedPocketBase } from './pocketbase-types.js'

export const pb = new PocketBase(import.meta.env.VITE_URL_POCKETBASE) as TypedPocketBase

// Copier ici les fonctions developpées en R214 | Système d'information


export async function allAgentsSorted() {
    const allAgents = await pb.collection('agents').getFullList({ sort: 'nom' });
    return allAgents;
}

/* 5. Récupérer la liste de toutes les données à partir de la collection */

/* try {
    const listeAll = await pb.collection('maisonsListe').getFullList();
    console.table(listeAll);
} catch (e) {
    console.error(e);
} */


/* console.log("QUESTION 6")
6. écrire le code permettant d’afficher une maison dont on connaît l'id
 */
export async function oneID(id: string) {
    try {
        const oneID = await pb.collection('maisonsListe').getOne(id);
        // console.log(JSON.stringify(uneMaison, null, 2));
        return oneID;
    } catch (e) {
        console.error(e);
    }
}


/* console.log("QUESTION 7")
7. écrire le code permettant d’afficher toutes les maisons par ordre croissant de leur date de création */
export async function allMaisonsSorted() {
    try {
        const allMaisonsSorted = await pb.collection('maisonsListe').getFullList({ sort: 'created' });
        /*     console.log(JSON.stringify(allMaisonsSorted, null, 2));*/
        return allMaisonsSorted;
    } catch (e) {
        console.error(e);
    }
}

/* console.log("QUESTION 8")
8. écrire le code permettant d’afficher toutes les maisons par ordre décroissant de leur date de création */

try {
    const dateCreaInverse = await pb.collection('maisonsListe').getFullList({ sort: '-created' });
    console.log(JSON.stringify(dateCreaInverse, null, 2));
} catch (e) {
    console.error(e);
}

/* console.log("QUESTION 9")
9. écrire le code permettant d’afficher toutes les maisons qui sont en favori */
export async function allMaisonsFavori() {
    try {
        const allMaisonsFavori = await pb.collection('maisonsListe').getFullList({ filter: 'favori = True' });
        // console.log(JSON.stringify(allMaisonsFavori, null, 2));
        return allMaisonsFavori;
    } catch (e) {
        console.error(e);
    }
}

/* console.log("QUESTION 10")
10. écrire le code permettant d’afficher toutes les maisons qui ont une superficie supérieur à 100 */

try {
    const surfaceOver = await pb.collection('maisonsListe').getFullList({ filter: 'surface > 100' });
    console.log(JSON.stringify(surfaceOver, null, 2));
} catch (e) {
    console.error(e);
}

/* console.log("QUESTION 11")
11. écrire le code permettant d’afficher toutes les maisons qui ont une superficie supérieur à 100 et qui ont au moins 2 salles de bain */

try {
    const surfaceOverAndSdB2 = await pb.collection('maisonsListe').getFullList({ filter: 'surface > 100 && nbSdB >= 2' });
    console.log(JSON.stringify(surfaceOverAndSdB2, null, 2));
} catch (e) {
    console.error(e);
}

/* console.log("QUESTION 12")
12. écrire le code permettant d’afficher toutes les maisons qui ont une superficie supérieur à 100 ou qui ont au moins 3 chambres */

try {
    const surfaceOverOrSdB2 = await pb.collection('maisonsListe').getFullList({ filter: 'surface > 100 || nbChambres >= 3' });
    console.log(JSON.stringify(surfaceOverOrSdB2, null, 2));
} catch (e) {
    console.error(e);
}


/* console.log("QUESTION 13")
13. écrire le code permettant d’afficher toutes les maisons qui ont une superficie supérieur à 100 ordonnées par ordre croissant de leurs prix */

/* try {
    const surfaceByPrice = await pb.collection('maisonsListe').getFullList({ filter: 'surface > 100' }, { sort: 'prix' });
    console.log(JSON.stringify(surfaceByPrice, null, 2));
} catch (e) {
    console.error(e);
} */

/* console.log("QUESTION 14")
14. écrire le code permettant d’afficher toutes les maisons par ordre croissant de leurs noms */

try {
    const sortByName = await pb.collection('maisonsListe').getFullList({ sort: 'nomMaison' });
    console.log(JSON.stringify(sortByName, null, 2));
} catch (e) {
    console.error(e);
}

/* console.log("QUESTION 15")
15. écrire le code permettant d’afficher la maison ayant un nom donné */

try {
    const searchByName = await pb.collection('maisonsListe').getFullList({ filter: 'nomMaison = "Villa de Verninac"' });
    console.log(JSON.stringify(searchByName, null, 2));
} catch (e) {
    console.error(e);
}

/* console.log("QUESTION 16")
16. écrire le code permettant d’afficher toutes les maisons dont le nom est différent d’un nom donné et ordonnées par ordre croissant de leur nom */

/* try {
    const excludeNameAndOrderName = await pb.collection('maisonsListe').getFullList({ filter: 'nomMaison != "Tome Raider"' }, { sort: 'nomMaison' });
    console.log(JSON.stringify(excludeNameAndOrderName, null, 2));
} catch (e) {
    console.error(e);
} */

/* 5.bis Récupérer la liste de toutes les données à partir de la collection
console.log("LISTE ALL BIS") */

try {
    const listeAllBis = await pb.collection('maisonsListe').getFullList();
    console.log(JSON.stringify(listeAllBis, null, 2));
} catch (e) {
    console.error(e);
}