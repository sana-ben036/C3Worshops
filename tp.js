

 

 
 /*.................................................................
  Enoncé 3 complet
................................................................. 
 
function nextInLine (arr,item) {

    arr= [ ];
    item= Number();

    for( item=0 ; arr.length<10 ; item++){
       arr.push(item); 
       arr.push(arr[0]);
       arr.shift();
        
        console.log(arr);
    }


}nextInLine() 
 
 */
 
 
 
 
 
 /*.................................................................
  Enoncé 2 test
................................................................. 

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


} */



/* ...............................................................
  Enoncé 1 complet
 ................................................................. 


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
        
}printFavoritBooks() */
    






