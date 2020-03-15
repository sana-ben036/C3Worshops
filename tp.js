






// ..........................test test..................

var favoriteBooks = [String(105), "m", "c"]; // conversion explicite (string(105))

class Bookshelf {
    constructor(){
        this.addFavoriteBook();
        this.printFavoritBooks();
    }

    addFavoriteBook(bookName) {
        let search = favoriteBooks.includes("Great")
        console.log(search); 
    
        if (search !== true) {
            favoriteBooks.push("Great");
        } else {
            console.log("already exists");
    
        }
    }
    
        printFavoritBooks() {
            let total = favoriteBooks.length;  // compter le nombre des valeurs dans le tableau
            console.log(`livres favoris: ${total}`);
            for (let bookName of favoriteBooks) {
                console.log(bookName, typeof bookName); // afficher le book et son type
                
            }

        }
}window.onload = new Bookshelf() // l'appel de la fonction global Bookshelf

/*  enoncé 1

function addFavoriteBook(bookName) {

    let favoriteBooks = ["k", "m", "c"]; 
    let search = favoriteBooks.includes("Great")
        console.log(search);  

    if (search !== true) {
        favoriteBooks.push("Great");

    } else {
        console.log("already exists");

    }

    function printFavoritBooks() {
        let total = favoriteBooks.length;  // compter le nombre des valeurs dans le tableau
        console.log(`livres favoris: ${total}`);
        for (let bookName of favoriteBooks) {
            console.log(bookName)
            
        }
        
    }printFavoritBooks()
}addFavoriteBook()
*/