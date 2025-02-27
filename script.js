document.addEventListener("DOMContentLoaded", function () {

    /////////  Каталог книг  ///////////////////////

    const books = [
        { title: "Гаррі Поттер", genre: "fantasy", image: "image/Harry_Potter.jpg", link: "Harry_Potter.html" },
        { title: "Шерлок Холмс", genre: "detective", image: "image/Sherlock_Holmes.jpg", link: "" },
        { title: "Коротка історія часу", genre: "science", image: "image/Brief_History_of_Time.jpg", link: "" },
        { title: "Володар перснів", genre: "fantasy", image: "image/Lord_of_the_Rings.webp", link: "" },
        { title: "Думай і багатій", genre: "science", image: "image/Think_and_Grow_Rich.jpg", link: "" },
    ];

    const catalog = document.getElementById("bookCatalog");

    if (catalog) { // Перевіряємо, чи є каталог на сторінці
        function displayBooks(filteredBooks) {
            catalog.innerHTML = "";
            filteredBooks.forEach(book => {
                const bookCard = document.createElement("div");
                bookCard.classList.add("book-card");
                bookCard.innerHTML = `
                    <a href="${book.link || '#'}" class="book-link">
                        <img src="${book.image}" alt="${book.title}">
                        <p class="title">${book.title}</p>
                        <p class="genre">${getGenreName(book.genre)}</p>
                    </a>
                `;
                catalog.appendChild(bookCard);
            });
        }

        function filterBooks() {
            const searchQuery = document.getElementById("searchInput")?.value.toLowerCase() || "";
            const selectedGenre = document.getElementById("genreFilter")?.value || "all";

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
    }

    /////////  Логін та реєстрація  ///////////////////////

    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");
    const formTitle = document.getElementById("formTitle");
    const message = document.getElementById("message");

    if (loginForm && registerForm) { // Перевіряємо, чи є форма входу/реєстрації на сторінці
        document.getElementById("showRegister")?.addEventListener("click", function (e) {
            e.preventDefault();
            loginForm.classList.add("hidden");
            registerForm.classList.remove("hidden");
            formTitle.textContent = "Реєстрація";
        });

        document.getElementById("showLogin")?.addEventListener("click", function (e) {
            e.preventDefault();
            registerForm.classList.add("hidden");
            loginForm.classList.remove("hidden");
            formTitle.textContent = "Вхід";
        });

        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const email = document.getElementById("loginEmail").value;
            const password = document.getElementById("loginPassword").value;

            if (email === "test@gmail.com" && password === "123456") {
                message.textContent = "✅ Успішний вхід!";
                message.style.color = "green";
            } else {
                message.textContent = "❌ Невірний email або пароль!";
                message.style.color = "red";
            }
        });

        registerForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const name = document.getElementById("registerName").value;
            const email = document.getElementById("registerEmail").value;
            const password = document.getElementById("registerPassword").value;

            if (name && email && password) {
                message.textContent = `✅ Реєстрація успішна, ${name}!`;
                message.style.color = "green";
                registerForm.reset();
                setTimeout(() => {
                    window.location.href = "login.html";
                }, 2000);
            } else {
                message.textContent = "❌ Заповніть всі поля!";
                message.style.color = "red";
            }
        });
    }

    /////////  Профіль користувача  ///////////////////////

    const recommendedBooks = [
        { title: "Гаррі Поттер", image: "image/Harry_Potter.jpg" },
        { title: "Володар перснів", image: "image/Lord_of_the_Rings.webp" }
    ];

    const readingList = [
        { title: "Шерлок Холмс", image: "image/Sherlock_Holmes.jpg" }
    ];

    const rentedBooks = [
        { title: "Думай і багатій", image: "image/Think_and_Grow_Rich.jpg" }
    ];

    function displayBooksInProfile(books, containerId) {
        const container = document.getElementById(containerId);
        if (!container) return; // Перевіряємо, чи контейнер існує

        container.innerHTML = "";
        books.forEach(book => {
            const bookCard = document.createElement("div");
            bookCard.classList.add("book-card");
            bookCard.innerHTML = `
                <img src="${book.image}" alt="${book.title}">
                <p class="book-title">${book.title}</p>
            `;
            container.appendChild(bookCard);
        });
    }

    displayBooksInProfile(recommendedBooks, "recommendedBooks");
    displayBooksInProfile(readingList, "readingList");
    displayBooksInProfile(rentedBooks, "rentedBooks");

    // Встановлюємо ім'я користувача
    const userName = document.getElementById("userName");
    if (userName) {
        userName.textContent = "Привіт, Олександр!";
    }

});
