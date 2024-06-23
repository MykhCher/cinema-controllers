var directors = [
    {
        id: 1,
        fullName: 'George Lucas',
        birthYear: 1944,
        nationality: "USA"
    },
    {
        id: 2,
        fullName: 'Peter Jackson',
        birthYear: 1961,
        nationality: 'New Zealand'
    },
    {
        id: 3,
        fullName: 'Quentin Tarantino',
        birthYear: 1963,
        nationality: "USA"
    }
];

class DirectorController {
    getDirectors(req, res) {
        res.status(200).send(directors);
    }
    getDirectorById(req, res) {
        const [director] = directors.filter((director) => director.id === Number(req.params.directorId));
        res.status(200).send(director);
    }
    createDirector(req, res) {
        const newDirector = req.body;
        directors.push({...newDirector});
        res.status(201).send(newDirector);
    }
    updateDirector(req, res) {
        const {params: {directorId}, body} = req;
        directors = directors.map((director) => director.id === Number(directorId) ? {...body} : director);
        res.status(202).send(body);
    }
    deleteDirector(req, res) {
        directors = directors.filter((director) => director.id !== Number(req.params.directorId));
        res.status(200).send(`director id ${req.params.directorId} deleted!`);
    }
}

module.exports = new DirectorController();