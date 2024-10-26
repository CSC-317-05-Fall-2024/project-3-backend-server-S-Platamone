/* This file should contain definitions for deleteRestaurantCard,
    and js to attach it as a handler per card.
*/

let deleteButtons = document.querySelectorAll('.deleteButton');
deleteButtons.forEach((button) => {
    button.addEventListener('click', () => {deleteRestaurantCard(button.id)})
})

export const deleteRestaurantCard = (id) => {
    let deleteid = id.toString();
    let card = document.getElementById('card-' + deleteid);
    card.innerHTML = '';
};
