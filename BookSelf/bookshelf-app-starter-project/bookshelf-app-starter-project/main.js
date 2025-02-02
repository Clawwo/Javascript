// Mendapatkan elemen formulir
const bookForm = document.getElementById('bookForm');
const incompleteBookList = document.getElementById('incompleteBookList');
const completeBookList = document.getElementById('completeBookList');

// Fungsi untuk menyimpan buku ke localStorage
function saveBooks() {
    const books = [];
    const incompleteBooks = incompleteBookList.querySelectorAll('[data-testid="bookItem"]');
    const completeBooks = completeBookList.querySelectorAll('[data-testid="bookItem"]');

    incompleteBooks.forEach(book => {
        books.push({
            id: book.getAttribute('data-bookid'),
            title: book.querySelector('[data-testid="bookItemTitle"]').innerText,
            author: book.querySelector('[data-testid="bookItemAuthor"]').innerText.replace('Penulis: ', ''),
            year: Number(book.querySelector('[data-testid="bookItemYear"]').innerText.replace('Tahun: ', '')),
            isComplete: false
        });
    });

    completeBooks.forEach(book => {
        books.push({
            id: book.getAttribute('data-bookid'),
            title: book.querySelector('[data-testid="bookItemTitle"]').innerText,
            author: book.querySelector('[data-testid="bookItemAuthor"]').innerText.replace('Penulis: ', ''),
            year: Number(book.querySelector('[data-testid="bookItemYear"]').innerText.replace('Tahun: ', '')),
            isComplete: true
        });
    });

    localStorage.setItem('books', JSON.stringify(books));
}

// Menambahkan event listener pada formulir
bookForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman formulir yang default

    // Mengambil nilai dari input
    const title = document.getElementById('bookFormTitle').value;
    const author = document.getElementById('bookFormAuthor').value;
    const year = Number(document.getElementById('bookFormYear').value);
    const isComplete = document.getElementById('bookFormIsComplete').checked;

    // Menghasilkan ID buku secara otomatis menggunakan timestamp
    const bookId = new Date().getTime();

    // Membuat elemen buku baru
    const bookItem = document.createElement('div');
    bookItem.setAttribute('data-bookid', bookId);
    bookItem.setAttribute('data-testid', 'bookItem');

    // Menambahkan konten ke elemen buku
    bookItem.innerHTML = `
        <h3 data-testid="bookItemTitle">${title}</h3>
        <p data-testid="bookItemAuthor">Penulis: ${author}</p>
        <p data-testid="bookItemYear">Tahun: ${year}</p>
        <div>
            <button data-testid="bookItemIsCompleteButton">${isComplete ? 'Belum selesai dibaca' : 'Selesai dibaca'}</button>
            <button data-testid="bookItemDeleteButton">Hapus Buku</button>
            <button data-testid="bookItemEditButton">Edit Buku</button>
        </div>
    `;

    // Menambahkan buku baru ke daftar yang sesuai
    if (isComplete) {
        completeBookList.appendChild(bookItem);
    } else {
        incompleteBookList.appendChild(bookItem);
    }

    // Menyimpan buku ke localStorage
    saveBooks();

    // Mengosongkan formulir setelah buku ditambahkan
    bookForm.reset();
});

// Fungsi untuk menghapus buku
function deleteBook(bookItem) {
    bookItem.remove(); // Menghapus elemen dari DOM
    saveBooks(); // Memperbarui localStorage
}

// Menambahkan event listener untuk tombol hapus
incompleteBookList.addEventListener('click', function(event) {
    if (event.target.matches('[data-testid="bookItemDeleteButton"]')) {
       const bookItem = event.target.closest('[data-testid="bookItem"]');
        deleteBook(bookItem);
    }
});

// Menambahkan event listener untuk rak buku selesai dibaca
completeBookList.addEventListener('click', function(event) {
    if (event.target.matches('[data-testid="bookItemDeleteButton"]')) {
        const bookItem = event.target.closest('[data-testid="bookItem"]');
        deleteBook(bookItem);
    } else if (event.target.matches('[data-testid="bookItemIsCompleteButton"]')) {
        const bookItem = event.target.closest('[data-testid="bookItem"]');
        moveToIncomplete(bookItem);
    }
});

// Fungsi untuk memindahkan buku dari "Belum selesai dibaca" ke "Selesai dibaca"
function moveToComplete(bookItem) {
    const title = bookItem.querySelector('[data-testid="bookItemTitle"]').innerText;
    const author = bookItem.querySelector('[data-testid="bookItemAuthor"]').innerText.replace('Penulis: ', '');
    const year = Number(bookItem.querySelector('[data-testid="bookItemYear"]').innerText.replace('Tahun: ', ''));

    // Membuat elemen buku baru untuk rak selesai dibaca
    const newBookItem = document.createElement('div');
    const bookId = bookItem.getAttribute('data-bookid');
    
    newBookItem.setAttribute('data-bookid', bookId);
    newBookItem.setAttribute('data-testid', 'bookItem');
    newBookItem.innerHTML = `
        <h3 data-testid="bookItemTitle">${title}</h3>
        <p data-testid="bookItemAuthor">Penulis: ${author}</p>
        <p data-testid="bookItemYear">Tahun: ${year}</p>
        <div>
            <button data-testid="bookItemIsCompleteButton">Belum selesai dibaca</button>
            <button data-testid="bookItemDeleteButton">Hapus Buku</button>
            <button data-testid="bookItemEditButton">Edit Buku</button>
        </div>
    `;

    // Menambahkan buku baru ke rak selesai dibaca
    completeBookList.appendChild(newBookItem);
    deleteBook(bookItem); // Menghapus buku dari rak belum selesai dibaca
}

// Fungsi untuk memindahkan buku dari "Selesai dibaca" ke "Belum selesai dibaca"
function moveToIncomplete(bookItem) {
    const title = bookItem.querySelector('[data-testid="bookItemTitle"]').innerText;
    const author = bookItem.querySelector('[data-testid="bookItemAuthor"]').innerText.replace('Penulis: ', '');
    const year = Number(bookItem.querySelector('[data-testid="bookItemYear"]').innerText.replace('Tahun: ', ''));

    // Membuat elemen buku baru untuk rak belum selesai dibaca
    const newBookItem = document.createElement('div');
    const bookId = bookItem.getAttribute('data-bookid');
    
    newBookItem.setAttribute('data-bookid', bookId);
    newBookItem.setAttribute('data-testid', 'bookItem');
    newBookItem.innerHTML = `
        <h3 data-testid="bookItemTitle">${title}</h3>
        <p data-testid="bookItemAuthor">Penulis: ${author}</p>
        <p data-testid="bookItemYear">Tahun: ${year}</p>
        <div>
            <button data-testid="bookItemIsCompleteButton">Selesai dibaca</button>
            <button data-testid="bookItemDeleteButton">Hapus Buku</button>
            <button data-testid="bookItemEditButton">Edit Buku</button>
        </div>
    `;

    // Menambahkan buku baru ke rak belum selesai dibaca
    incompleteBookList.appendChild(newBookItem);
    deleteBook(bookItem); // Menghapus buku dari rak selesai dibaca
}

// Menambahkan event listener untuk tombol "Selesai dibaca" pada rak belum selesai dibaca
incompleteBookList.addEventListener('click', function(event) {
    if (event.target.matches('[data-testid="bookItemIsCompleteButton"]')) {
        const bookItem = event.target.closest('[data-testid="bookItem"]');
        moveToComplete(bookItem);
    }
});

// Memuat buku dari localStorage saat aplikasi dimuat
function loadBooks() {
  const books = JSON.parse(localStorage.getItem("books")) || [];
  books.forEach((book) => {
    const bookItem = document.createElement("div");
    bookItem.setAttribute("data-bookid", book.id);
    bookItem.setAttribute("data-testid", "bookItem");
    bookItem.innerHTML = `
            <h3 data-testid="bookItemTitle">${book.title}</h3>
            <p data-testid="bookItemAuthor">Penulis: ${book.author}</p>
            <p data-testid="bookItemYear">Tahun: ${book.year}</p>
            <div>
                <button data-testid="bookItemIsCompleteButton">${
                  book.isComplete ? "Belum selesai dibaca" : "Selesai dibaca"
                }</button>
                <button data-testid="bookItemDeleteButton">Hapus Buku</button>
                <button data-testid="bookItemEditButton">Edit Buku</button>
            </div>
        `;

    // Menambahkan buku ke rak yang sesuai
    if (book.isComplete) {
      completeBookList.appendChild(bookItem);
    } else {
      incompleteBookList.appendChild(bookItem);
    }
  });
}

// Memuat buku dari localStorage saat aplikasi dimuat
document.addEventListener("DOMContentLoaded", loadBooks);