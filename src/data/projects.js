const projects = [
    {
        id: 1,
        img: 'booldog-screenshot.png',
        title: 'Booldog E-Commerce',
        description: {
            it: 'Negozio online dedicato alla vendita di prodotti per animali domestici, svolto in team. Ho implementato le pagine di ricerca dei prodotti, lavorando sia lato frontend sia backend, gestendo barra di ricerca, filtri ed ordinamento dei risultati.',
            en: 'Online store dedicated to selling pet products, developed as a team project. I implemented the product search pages, working on both the frontend and backend, and handling the search bar, filters, and result sorting.'
        },
        stack: ['React', 'Express.js', 'MySQL', 'Bootstrap', 'CSS'],
        link_github: 'https://github.com/pietrobertino/booldog',
        link_demo: 'https://booldog.vercel.app/'
    },
    {
        id: 2,
        img: 'movie-db-screenshot.png',
        title: 'Movie Database',
        description: {
            it: "Web app per consultare un database di film: cliccando sul poster si accede ai dettagli del film, con la possibilità di leggere e aggiungere valutazioni e recensioni. Progetto sviluppato in autonomia, sia nel frontend sia nel backend.",
            en: "Web app for browsing a movie database: clicking a poster opens the film's details, where users can read and add ratings and reviews.Built independently, covering both frontend and backend."
        },
        stack: ['React', 'Express.js', 'MySQL', 'Bootstrap', 'CSS'],
        link_github: 'https://github.com/pietrobertino/movie-database/tree/main',
        link_demo: 'https://movie-database-nine-lake.vercel.app/'
    }
];

export default projects;