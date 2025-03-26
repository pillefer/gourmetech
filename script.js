document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const recipeGrid = document.getElementById('recipeGrid');

    // Fonction pour charger les recettes
    function loadRecipes() {
        const recipes = [
            { title: "Salade César", category: "entrée", time: "15 min", difficulty: "facile" },
            { title: "Boeuf Bourguignon", category: "plat", time: "120 min", difficulty: "difficile" },
            { title: "Tarte aux pommes", category: "dessert", time: "45 min", difficulty: "moyen" }
            // Ajoutez plus de recettes ici
        ];

        recipes.forEach(recipe => {
            const recipeCard = document.createElement('div');
            recipeCard.className = 'recipe-card';
            recipeCard.innerHTML = `
                <h3>${recipe.title}</h3>
                <p>Catégorie: ${recipe.category}</p>
                <p>Temps: ${recipe.time}</p>
                <p>Difficulté: ${recipe.difficulty}</p>
                <button class="favorite-btn">Ajouter aux favoris</button>
            `;
            recipeGrid.appendChild(recipeCard);
        });
    }

    // Changement de thème
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
    });

    loadRecipes();
});