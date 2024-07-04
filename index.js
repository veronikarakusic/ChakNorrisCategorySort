const categories = [
    "animal", "career", "celebrity", "dev", "explicit", "fashion", 
    "food", "history", "money", "movie", "music", "political", 
    "religion", "science", "sport", "travel"
];

function Categories() {
    const categorySelect = document.getElementById('category');
    categories.forEach(category => {
        const option = document.createElement('option');
            option.value = category;
            option.textContent = category.charAt(0)+ category.slice(1);
        categorySelect.appendChild(option);
    });
}

document.addEventListener('DOMContentLoaded', Categories);

function getJoke() {
    const jokeElement = document.getElementById('joke');
    const category = document.getElementById('category').value;
    let apiUrl = "https://api.chucknorris.io/jokes/random";

    if (category) {
        apiUrl += `?category=${category}`;
    }

    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            const joke = data.value;
            jokeElement.textContent = joke;
            console.log(joke);
        })
        .catch((error) => {
            console.error("Error: ", error);
        });
}