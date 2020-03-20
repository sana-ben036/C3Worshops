

let favoriteBooks = ["k", "m", "c"]; 
function addFavoriteBook(bookName) {

    let search = favoriteBooks.includes("Great")
        console.log(search);  

    if (search !== true) {
        favoriteBooks.push("Great");

    } else {
        console.log("already exists");

    }
}addFavoriteBook()

function printFavoritBooks() {

        let total = favoriteBooks.length;  // compter le nombre des valeurs dans le tableau
        console.log(`livres favoris: ${total}`);
        for (let bookName of favoriteBooks) {
            console.log(bookName)
            
        }
        
}printFavoritBooks() 
    






