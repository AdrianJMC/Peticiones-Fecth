// script.js

document.addEventListener('DOMContentLoaded', () => {
    fetchMercadoLibre();
    fetchPokeAPI();
});

function fetchMercadoLibre() {
    fetch('https://api.mercadolibre.com/sites/MLA/search?q=ordenadores')
        .then(response => response.json())
        .then(data => {
            const resultsContainer = document.getElementById('mercado-libre-results');
            data.results.forEach(item => {
                const card = document.createElement('div');
                card.className = 'col-md-4';
                card.innerHTML = `
                    <div class="card">
                        <img src="${item.thumbnail}" class="card-img-top" alt="${item.title}">
                        <div class="card-body">
                            <h5 class="card-title">${item.title}</h5>
                            <p class="card-text">Precio: $${item.price}</p>
                            <a href="${item.permalink}" class="btn btn-primary" target="_blank">Ver producto</a>
                        </div>
                    </div>
                `;
                resultsContainer.appendChild(card);
            });
        })
        .catch(error => console.error('Error fetching data from Mercado Libre:', error));
}

function fetchPokeAPI() {
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
        .then(response => response.json())
        .then(data => {
            const resultsContainer = document.getElementById('pokeapi-results');
            const card = document.createElement('div');
            card.className = 'col-md-4';
            card.innerHTML = `
                <div class="card">
                    <img src="${data.sprites.front_default}" class="card-img-top" alt="${data.name}">
                    <div class="card-body">
                        <h5 class="card-title">${data.name}</h5>
                        <p class="card-text">Peso: ${data.weight}</p>
                        <p class="card-text">Altura: ${data.height}</p>
                        <p class="card-text">Habilidades: ${data.abilities.map(ability => ability.ability.name).join(', ')}</p>
                    </div>
                </div>
            `;
            resultsContainer.appendChild(card);
        })
        .catch(error => console.error('Error fetching data from PokeAPI:', error));
}
