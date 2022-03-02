const movies = [
    { title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura'] },
    { title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción'] },
    { title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller'] },
    { title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación'] },
]
const moviesCatergory = []


for (let movie of movies) {
    for (let category of movie.categories) {
        if (moviesCatergory.indexOf(category) === -1) {
            moviesCatergory.push(category)
        }
    }

} console.log(moviesCatergory)