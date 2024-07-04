function getJoke() {
    const categorySelect = document.getElementById('category-select');
    const jokeDisplay = document.getElementById('joke');
    const selectedCategory = categorySelect.value;
    let apiUrl = "https://api.chucknorris.io/jokes/random";

    if (selectedCategory) {
        apiUrl += `?category=${selectedCategory}`;
    }

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            const joke = data.value;
            jokeDisplay.textContent = joke;
            console.log(joke);
        })
        .catch(error => {
            console.error("Error fetching joke:", error);
        });
}