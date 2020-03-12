

// ................................Enoncée 1.....................................................

function addFavoriteBook(bookName) {

    var favoriteBooks = ["k", "m", "c"];
    var bookName = favoriteBooks.includes("Great")

    if (bookName == false) {
        favoriteBooks.push("Great");
    } else {
        console.log("It already exists");

    }

    function printFavoritBooks() {
        var a = favoriteBooks.length;
        console.log("livres"+" "+"favoris:"+ a);
        for (let value of favoriteBooks) {
            console.log(value);
        }
        
    }printFavoritBooks()


}addFavoriteBook()

// ................................Enoncée 2.....................................................





























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