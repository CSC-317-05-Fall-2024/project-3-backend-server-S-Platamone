// Fill this in
let restaurantData = [
    {
        "id": 0,
        "name": "Restaurant Name",
        "phone": "(415)123-4567",
        "address": "1600 Holloway Ave",
        "photo": "/images/trolley.jpg",
    },
    {
        "id": 1,
        "name": "Restaurant Name",
        "phone": "(415)123-4567",
        "address": "1600 Holloway Ave",
        "photo": "/images/trolley.jpg",
    },
    {
        "id": 2,
        "name": "Restaurant Name",
        "phone": "(415)123-4567",
        "address": "1600 Holloway Ave",
        "photo": "/images/trolley.jpg",
    },
    {
        "id": 3,
        "name": "Restaurant Name",
        "phone": "(415)123-4567",
        "address": "1600 Holloway Ave",
        "photo": "/images/trolley.jpg",
    },
    {
        "id": 4,
        "name": "Restaurant Name",
        "phone": "(415)123-4567",
        "address": "1600 Holloway Ave",
        "photo": "/images/trolley.jpg",
    },
    {
        "id": 5,
        "name": "Restaurant Name",
        "phone": "(415)123-4567",
        "address": "1600 Holloway Ave",
        "photo": "/images/trolley.jpg",
    },
    {
        "id": 6,
        "name": "Restaurant Name",
        "phone": "(415)123-4567",
        "address": "1600 Holloway Ave",
        "photo": "/images/trolley.jpg",
    },
    {
        "id": 7,
        "name": "Restaurant Name",
        "phone": "(415)123-4567",
        "address": "1600 Holloway Ave",
        "photo": "/images/trolley.jpg",
    },
    {
        "id": 8,
        "name": "Restaurant Name",
        "phone": "(415)123-4567",
        "address": "1600 Holloway Ave",
        "photo": "/images/trolley.jpg",
    },
];

let lastId = restaurantData.length;

const getNextId = () => {
    lastId += 1;
    return lastId;
}

// Get a list of restaurants
const getRestaurants = () => {
    return restaurantData;
};


// Get a restaurant by id
const getRestaurant = (id) => {
    let restaurant = restaurantData.find((restaurant) => {
        return restaurant.id === id;
    });
    return restaurant;
};

// Create a new restaurant entry
const createRestaurant = (newRestaurant) => {
    let id = 0;
    restaurantData.forEach(() => {
        id = getNextId();
    });
    newRestaurant.id = id;
    restaurantData.push(newRestaurant);
};

// Delete a restaurant by id
const deleteRestaurant = (id) => {
    restaurantData = restaurantData.filter((restaurant) => {
        restaurant.id != id;
    });
};

export { getRestaurants, getRestaurant, createRestaurant, deleteRestaurant };