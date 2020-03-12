class Bookshelf{
    constructor(addFavoriteBook, printFavoritBooks){
        this.addFavoriteBook=addFavoriteBook;
        this.printFavoritBooks=printFavoritBooks;

        function addFavoriteBook(bookName) {

            var favoriteBooks = ["k", "m", "c"];
            var bookName = favoriteBooks.includes("Great")
        
            if (bookName == false) {
                favoriteBooks.push("Great");
            } else {
                console.log("already exists");
        
            }
        
            function printFavoritBooks() {
                var a = favoriteBooks.length;
                console.log("livres favoris:"+" "+ a);
                for (let favoriteBook of favoriteBooks) {
                    console.log(favoriteBook, typeof favoriteBook);
                }
                
            }printFavoritBooks()
        }addFavoriteBook()





    }
}
    


