import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { getRestaurants, getRestaurant, createRestaurant, deleteRestaurant } from './data/restaurants.js';
import { backendRouter } from './routes/api.js';

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', backendRouter);

app.get('/styles.css', (req, res) => {
    res.sendFile(__dirname + '/styles.css');
});

app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/attractions', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'attractions.html'));
});

app.get('/newrestaurant', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'newrestaurant.html'));
})

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.get('/restaurants', (req, res) => {
    const restaurantData = getRestaurants();
    res.render('restaurants', { restaurantData });
    
});

app.get('/restaurants/:id', (req, res) => {
    const restaurantId = parseInt(req.params.id);
    const restaurant = getRestaurant(restaurantId);
    res.render('restaurant-details', { restaurant });
})

app.post('/restaurants', (req, res) => {
    const data = req.body;
    createRestaurant(data);
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});