

let favoriteBooks = [String(105), "m", "c"]; // conversion explicite (string(105))

class Bookshelf {

    constructor(favoriteBooks){
        this.favoriteBooks=favoriteBooks;    
    }

    addFavoriteBook(bookName) {
        let search = this.favoriteBooks.includes("Great")
        console.log(search); 
    
        if (search !== true) {
            this.favoriteBooks.push("Great");
        } else {
            console.log("already exists");
    
        }
    }
    printFavoritBooks() {
        let total = this.favoriteBooks.length;  // compter le nombre des valeurs dans le tableau
        console.log(`livres favoris: ${total}`);
        for (let bookName of this.favoriteBooks) {
            console.log(bookName, typeof bookName); // afficher le book et son type
            
        }

    }
    
     
}
function loadBooks (Bookshelf){


} 




