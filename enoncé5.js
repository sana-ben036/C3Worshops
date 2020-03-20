
/* ...................test.....*/


function updateRecords(id, prop, valeur) {
    var albums=[];
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

