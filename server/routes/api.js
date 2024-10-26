import express from 'express';
const router = express.Router();

// Add routes here
router.get('/restaurants/:id', (req, res) => {
    res.status(200).json({
        'id': parseInt(req.params.id),
        'name': req.body.name,
        'address': req.body.address,
        'number': req.body.number,
        'photo': req.body.photo
    })
})

export {router as backendRouter};