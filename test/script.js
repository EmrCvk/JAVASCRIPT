document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Formun otomatik olarak gönderilmesini engeller

    var searchQuery = document.getElementById('search-input').value;
    searchQuery = encodeURIComponent(searchQuery); // URL kodlaması

    var searchResults = document.getElementById('search-results');
    searchResults.innerHTML = 'Google\'da "' + searchQuery + '" için arama sonuçları gösterilecek.';
});
