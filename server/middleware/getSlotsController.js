const slotData = require ("../schemas/slotData.js");

const getSlotsController = async(req,res)=>{
    try {
        const allSlots = await slotData.find();
        if (typeof allSlots !== 'undefined' && allSlots.length > 0) {
            res.status(200).json(allSlots);
        }
    } catch (error) {
        res.json({message: error.message});
    }
}

module.exports = {getSlotsController};