let studios = [
    {
        id: 1,
        title: 'Lucasfilm',
        location: 'California'
    },
    {
        id: 2,
        title: 'New Line Cinema',
        location: 'New York'
    },
    {
        id: 3,
        title: 'Miramax',
        location: 'Los-Angeles'
    }
];

class StudioController {
    getStudios(req, res) {
        res.status(200).send(studios);
    }
    getStudioById(req, res) {
        const [studio] = studios.filter((studio) => studio.id === Number(req.params.studioId));
        res.status(studio ? 200 : 404)
            .send(studio || `studio id ${req.params.studioId} was not found!`);
    }
    createStudio(req, res) {
        const newStudio = req.body;
        studios.push(newStudio);
        res.status(201).send(newStudio);
    }
    updateStudio(req, res) {
        const {params: {studioId}, body} = req;
        let isUpdated = false;
        
        studios = studios.map((studio) => {
            if(studio.id === Number(studioId)) { 
                isUpdated = true;
                return body;
            } else { 
                return studio;
            }
        });
        res.status(isUpdated ? 202 : 404)
            .send(isUpdated ? body : `studio id ${studioId} was not found!`);
    }
    deleteStudio(req, res) {
        const id = req.params.studioId;
        let isDeleted = false;
        
        studios = studios.filter((studio) => {
            const match = studio.id !== Number(id);
            if (!match) isDeleted = true;
            return match;
        });
        res.status(isDeleted ? 200 : 404)
            .send(isDeleted ? `studio id ${id} deleted!` : `studio id ${id} was not found!`);
    }
}

module.exports = new StudioController();