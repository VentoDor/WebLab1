document.addEventListener("DOMContentLoaded", function () {
    const books = [
        { title: "Гаррі Поттер", genre: "fantasy", image: "image/Harry_Potter.jpg" },
        { title: "Шерлок Холмс", genre: "detective", image: "image/Sherlock_Holmes.jpg" },
        { title: "Коротка історія часу", genre: "science", image: "image/Brief_History_of_Time.jpg" },
        { title: "Володар перснів", genre: "fantasy", image: "image/Lord_of_the_Rings.webp" },
        { title: "Думай і багатій", genre: "science", image: "image/Think_and_Grow_Rich.jpg" },
        { title: "Гаррі Поттер", genre: "fantasy", image: "image/Harry_Potter.jpg" },
        { title: "Шерлок Холмс", genre: "detective", image: "image/Sherlock_Holmes.jpg" },
        { title: "Коротка історія часу", genre: "science", image: "image/Brief_History_of_Time.jpg" },
        { title: "Володар перснів", genre: "fantasy", image: "image/Lord_of_the_Rings.webp" },
        { title: "Думай і багатій", genre: "science", image: "image/Think_and_Grow_Rich.jpg" }
    ];

    const catalog = document.getElementById("bookCatalog");

    function displayBooks(filteredBooks) {
        catalog.innerHTML = "";
        filteredBooks.forEach(book => {
            const bookCard = document.createElement("div");
            bookCard.classList.add("book-card");
            bookCard.innerHTML = `
                <img src="${book.image}" alt="${book.title}">
                <p class="title">${book.title}</p>
                <p class="genre">${getGenreName(book.genre)}</p>
            `;
            catalog.appendChild(bookCard);
        });
    }

    function filterBooks() {
        const searchQuery = document.getElementById("searchInput").value.toLowerCase();
        const selectedGenre = document.getElementById("genreFilter").value;

        const filteredBooks = books.filter(book => {
            const matchesSearch = book.title.toLowerCase().includes(searchQuery);
            const matchesGenre = selectedGenre === "all" || book.genre === selectedGenre;
            return matchesSearch && matchesGenre;
        });

        displayBooks(filteredBooks);
    }

    function getGenreName(genre) {
        const genreNames = {
            "fantasy": "Фентезі",
            "detective": "Детектив",
            "science": "Наукова література"
        };
        return genreNames[genre] || "Інший";
    }

    displayBooks(books);
});
