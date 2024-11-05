import {addToCard} from '../utils/addToCard';

const data = [
  {
    id: 1,
    description: 'Yellow chair',
    price: 10,
    img: '🪑',
  },
  {
    id: 4,
    description: 'Green sofa',
    price: 150,
    img: '🐢',
  },
  {
    id: 18,
    description: 'Blue lamp',
    price: 45,
    img: '🧞‍♂️',
  },
];

document.querySelector('#card').innerHTML =
  data &&
  data
    .map(
      (item) => `
<div class="m-2 p-2 border" id="${item.id}">
  <div class=" text-4xl">${item.img}</div>
  <div>${item.description}</div>
  <div>${item.price}€</div>
  <div><button id="${item.id}" class="add-to-cart border rounded-lg px-4 py-2 hover:bg-yellow-300 hover:text-black">Ajouter au panier</button></div>
</div>
`
    )
    .join('');

const buttons = document.querySelectorAll('.add-to-cart');
for (let i = 0; i < buttons.length; i++) {
  const button = buttons[i];
  button.addEventListener('click', () => addToCard(button.id));
}
