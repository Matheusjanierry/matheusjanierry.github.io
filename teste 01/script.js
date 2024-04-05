document.getElementById('searchInput').addEventListener('input', function() {
    let searchTerm = this.value.toLowerCase();
    let searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = '';

    fetch('produtos.json')
        .then(response => response.json())
        .then(data => {
            let filteredProducts = data.filter(product => {
                return product.name.toLowerCase().includes(searchTerm);
            });

            filteredProducts.forEach(product => {
                let productDiv = document.createElement('div');
                productDiv.innerHTML = `<p>ID: ${product.id}, Name: ${product.name}, Price: $${product.price}</p>`;
                searchResults.appendChild(productDiv);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});