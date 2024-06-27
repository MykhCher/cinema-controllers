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
        res.status(director ? 200 : 404)
            .send(director || `director id ${req.params.directorId} was not found!`);
    }
    createDirector(req, res) {
        const newDirector = req.body;
        directors.push({...newDirector});
        res.status(201).send(newDirector);
    }
    updateDirector(req, res) {
        const {params: {directorId}, body} = req;
        let isUpdated = false;
        
        directors = directors.map((director) => {
            if(director.id === Number(directorId)) { 
                isUpdated = true;
                return body;
            } else { 
                return director;
            }
        });
        res.status(isUpdated ? 202 : 404)
            .send(isUpdated ? body : `director id ${directorId} was not found!`);
    }
    deleteDirector(req, res) {
        const id = req.params.directorId;
        const [directorToDelete] = directors.filter((dir) => dir.id === Number(id));
        if (!directorToDelete) {
            return res.status(404).send(`director id ${id} was not found!`)
        }
        directors = directors.filter((director) => director.id !== Number(id));
        res.status(200).send(`director id ${id} deleted!`);
    }
}

module.exports = new DirectorController();