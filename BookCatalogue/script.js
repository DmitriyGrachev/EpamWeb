// Filter Books by Category and Search Query
function filterBooks() {
  const searchQuery = document.getElementById('searchBar').value.toLowerCase();
  const category = document.getElementById('categoryFilter').value;
  const books = document.querySelectorAll('.book');

  books.forEach(book => {
    const title = book.querySelector('h2').textContent.toLowerCase();
    const bookCategory = book.getAttribute('data-category');

    if ((category === 'all' || bookCategory === category) && title.includes(searchQuery)) {
      book.style.display = 'block';
    } else {
      book.style.display = 'none';
    }
  });
}

// Show Details in Modal
function showDetails(title) {
  const modal = document.getElementById('bookModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalDetails = document.getElementById('modalDetails');

  modalTitle.textContent = title;
  modalDetails.textContent = `Details about ${title}...`;
  modal.style.display = 'flex';
}

// Close Modal
function closeModal() {
  const modal = document.getElementById('bookModal');
  modal.style.display = 'none';
}
