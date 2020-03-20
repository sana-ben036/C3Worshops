
/* ...................test.....
- tableau associatif??
-tableau a deux dimension??

*/
var albums=[id, prop, valeur];
albums[id]= 2548;
albums[prop]='tracks';
albums[valeur]='Addicted to Love'



function updateRecords(id, prop, valeur) {
    
    if (prop === "tracks" && (!(albums[id,prop.tracks]))) {
        albums[id,prop] = [];
    }
    if (prop === "tracks" && valeur !== "") {
        albums[id,prop].push(valeur);
    }
    if (prop !== "tracks" && valeur !== "") {
        albums[id,prop] = valeur;
    }
    if (valeur === "") {
        delete albums[id,prop];
    }
    return albums;
}

