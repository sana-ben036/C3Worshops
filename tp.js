

// ................................Enoncé 1.....................................................
class Bookshelf{
    constructor(addFavoriteBook, printFavoritBooks){
        this.addFavoriteBook=addFavoriteBook;
        this.printFavoritBooks=printFavoritBooks;
    }
    
}



    

        function addFavoriteBook(bookName) {

            let favoriteBooks = [String(105), "m", "c"]; // conversion explicite (string(105))
            let search = favoriteBooks.includes("Great")
        
            if (search !== true) {
                favoriteBooks.push("Great");
            } else {
                console.log("already exists");
        
            }
        
            function printFavoritBooks() {
                let total = favoriteBooks.length;
                console.log(`livres favoris: ${total}`);
                for (let bookName of favoriteBooks) {
                    console.log(bookName, typeof bookName); // afficher le book et son type
                    
                }
                
            }printFavoritBooks()
        }addFavoriteBook()

 
































// test test test ...........................................

// function addFavoriteBook(bookName) {

//     if (favoriteBooks !== bookName) {
//         favoriteBooks.push(bookName);
//     } else {
//         alert("exist");
//     }


// }
// addFavoriteBook();
// console.log(favoriteBooks);
// question 3 et 4 ..............................................   

// var favoriteBook = ["k","m","c"];

// function printFavoriteBooks(){
//     var a = favoriteBooks.length;
//     console.log("livres"+" "+"favoris:"+ a);


// }printFavoriteBooks();

// question 5 ..............................................  

// var favoriteBooks = ["k","m","c"];
// var a = favoriteBooks.length;
// var i;
// var favoriteBooks = ["k","m","c"];
// function printFavoriteBooks(){

//     for(var i=0; i< a ; i++){
//        alert(bookName);

//     }
// }printFavoriteBooks();



// var a = favoriteBooks.length;
// var i;

// function printFavoriteBooks() {
//     for (let favoriteBook of favoriteBooks) {
//         console.log(favoriteBook);

//     }

//     // for(var i=0; i< a ; i++){
//     //    console.log(favoriteBook);


// }
// printFavoriteBooks();