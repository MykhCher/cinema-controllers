var studios = [
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
        studios.push({...newStudio});
        res.status(201).send(newStudio);
    }
    updateStudio(req, res) {
        const {params: {studioId}, body} = req;
        const [studioToDelete] = studios.filter((stud) => stud.id === Number(studioId));
        if (!studioToDelete) {
            return res.status(404).send(`studio id ${studioId} was not found!`)
        }
        studios = studios.map((studio) => studio.id === Number(studioId) ? {...body} : studio);
        res.status(202).send(body);
    }
    deleteStudio(req, res) {
        const id = req.params.studioId;
        const [studioToDelete] = studios.filter((stud) => stud.id === Number(id));
        if (!studioToDelete) {
            return res.status(404).send(`studio id ${id} was not found!`)
        }
        studios = studios.filter((studio) => studio.id !== Number(req.params.studioId));
        res.status(200).send(`studio id ${req.params.studioId} deleted!`);
    }
}

module.exports = new StudioController();