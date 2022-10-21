const ActivityDetails = require('../models/activityDetails');

const createActivityDetails = async (req, res) => {
    try {
        const activityDetails = await new ActivityDetails(req.body)
        await activityDetails.save()
        return res.status(201).json({
            activityDetails,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}
const getAllActivityDetails = async (req, res) => {
    try {
        const activityDetails = await ActivityDetails.find()
        return res.status(200).json({ activityDetails })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getActivityDetailsById = async (req, res) => {
    try {
        const { id } = req.params;
        const activityDetails = await ActivityDetails.findById(id)
        if (activityDetails) {
            return res.status(200).json({ activityDetails });
        }
        return res.status(404).send('Activity with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const updateActivityDetails = async (req, res) => {
    try {
        const activityDetails = await ActivityDetails.findByIdAndUpdate(req.params.id, req.body, { new: true})
        res.status(200).json(plant)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteActivityDetails = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await ActivityDetails.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Activity deleted");
        }
        throw new Error("Plant not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const Destination = require('../models/destination');

const createDestination = async (req, res) => {
    try {
        const destination = await new Destination(req.body)
        await destination.save()
        return res.status(201).json({
            destination,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}
const getAllDestination = async (req, res) => {
    try {
        const destination = await Destination.find()
        return res.status(200).json({ destination })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getDestinationById = async (req, res) => {
    try {
        const { id } = req.params;
        const destination = await destination.findById(id)
        if (destination) {
            return res.status(200).json({ destination });
        }
        return res.status(404).send('Activity with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const updateDestination = async (req, res) => {
    try {
        const destination = await Destination.findByIdAndUpdate(req.params.id, req.body, { new: true})
        res.status(200).json(destination)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteDestination = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Destination.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Destination deleted");
        }
        throw new Error("Destination not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
module.exports = {
    createActivityDetails,
    getAllActivityDetails,
    getActivityDetailsById,
    updateActivityDetails,
    deleteActivityDetails,
    createDestination,
    getAllDestination,
    getDestinationById,
    updateDestination,
    deleteDestination,
}