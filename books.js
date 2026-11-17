let books = [
    {
        title: "Dracula",
        genre: "Horror",
        pages: 418,
        rating: 5
    },

    {
        title: "The Hobbit",
        genre: "Fantasy",
        pages: 310,
        rating: 5
    },

    {
        title: "Sherlock Holmes",
        genre: "Mystery",
        pages: 307,
        rating: 4
    },

    {
        title: "The Notebook",
        genre: "Romance",
        pages: 214,
        rating: 3
    },

    {
        title: "Pride and Prejudice",
        genre: "Classic",
        pages: 432,
        rating: 5
    },

    {
    title: "Harry Potter",
    genre: "Fantasy",
    pages: 650,
    rating: 5
    }
];


function getBookColor(genre) {

    if (genre == "Fantasy") {
        return "#426344";
    }

    if (genre == "Horror") {
        return "#8E3B46";
    }

    if (genre == "Mystery") {
        return "#354B68";
    }

    if (genre == "Romance") {
        return "#BD7189";
    }

    if (genre == "Classic") {
        return "#BD965D";
    }

    return "#806B55";
}

let height = 100 + book.pages / 5;


function drawLibrary() {

    let g = tahvel.getContext("2d");

    // Clear previous drawing
    g.clearRect(0, 0, 800, 450);

    // Background
    g.fillStyle = "#F9F3E8";
    g.fillRect(0, 0, 800, 450);

    // Starting position
    let x = 70;

    // Loop through all books
    for (let i = 0; i < books.length; i++) {

        let book = books[i];

        // Choose colour based on genre
        let color = getBookColor(book.genre);

        // Calculate height based on pages
        let height = 100 + book.pages / 5;

        // Draw book
        drawBook(
            g,
            x,
            330 - height,
            65,
            height,
            color,
            book.title,
            book.rating
        );

        // Move to next position
        x = x + 80;
    }

    // Draw bookshelf
    g.fillStyle = "#76513B";
    g.fillRect(40, 330, 720, 18);

    g.strokeStyle = "#49382F";
    g.strokeRect(40, 330, 720, 18);

    // Title
    g.fillStyle = "#49382F";
    g.font = "28px Georgia";
    g.textAlign = "center";
    g.fillText("The Little Library", 400, 40);

}

function joonista() {
    drawLibrary();
}
