// Prices in PHP, from the Mr. Brew menu boards.
// Teas come in two cup sizes: first price is the bigger cup.

// ponytail: Kape Blanko price unknown, add `price` once confirmed
export const favorites = [
  {
    name: 'Kape Blanko',
    note: 'Espresso and steamed cream milk',
    tag: 'New',
    img: '/images/kape-blanko.png',
    cutout: true,
  },
  {
    name: 'Brown Panda Boba',
    note: 'Brown sugar series',
    tag: 'Bestseller',
    price: 'from ₱109',
    img: '/images/cup-brown-panda-boba.jpg',
    cutout: true,
  },
  {
    name: 'Cheesecake',
    note: 'Rock salt & cheese',
    tag: 'Bestseller',
    price: 'from ₱139',
    img: '/images/cup-cheesecake.jpg',
    cutout: true,
  },
]

export const menu = [
  {
    id: 'coffee',
    label: 'Coffee',
    note: 'All coffee blends are served iced unless noted.',
    groups: [
      {
        name: 'Coffee Blends',
        items: [
          { name: 'Special Iced Kopi', price: 139 },
          { name: 'Kopi Float', price: 139 },
          { name: 'Iced Caramel Macchiato', price: 129 },
          { name: 'Iced Hazelnut', price: 109 },
          { name: 'Iced Mocha', price: 109 },
          { name: 'Iced Kopi', price: 99, best: true },
          { name: 'Iced Latte', price: 99 },
          { name: 'Sweet Americano', price: 89 },
        ],
      },
    ],
  },
  {
    id: 'tea',
    label: 'Tea',
    sizes: true,
    // Bestsellers = the shop's "Must Try Flavors" wall banner. Descriptions are ours, confirm with the owner.
    groups: [
      {
        name: 'Milk Tea',
        price: '₱119 / ₱109',
        desc: 'Classic milk tea with pearls.',
        items: [
          { name: 'Okinawa', best: true },
          'Chocolate',
          'Matcha',
          'Taro',
          { name: 'Wintermelon', best: true },
          'Cookies & Cream',
        ],
      },
      {
        name: 'Rock Salt & Cheese',
        price: '₱149 / ₱139',
        desc: 'Topped with a salty cream cheese foam.',
        items: [
          { name: 'Cheesecake', best: true },
          'Dark Winter Cream',
          'Choco Lava',
          'Matcha Delight',
          'C&C Overload',
          'C.C. Taro',
          'Kriminawa',
        ],
      },
      {
        name: 'Brown Sugar Series',
        price: '₱119 / ₱109',
        desc: 'Brown sugar syrup and boba.',
        items: [
          { name: 'Brown Panda Boba', best: true },
          { name: 'B.P. Delight', price: '+₱10' },
          { name: 'B.P. Overload', price: '+₱20' },
          { name: 'Dark Panda', price: '+₱30' },
        ],
      },
      {
        name: 'Fruit Tea',
        price: '₱109 / ₱99',
        desc: 'Light and fruity, no milk.',
        items: ['Mango', 'Kiwi', 'Peach', 'Green Apple', 'Strawberry', 'Blueberry'],
      },
      {
        name: 'Frappe Series',
        price: '₱149 / ₱139',
        desc: 'Blended ice drinks.',
        items: [
          'Choco Chips',
          'Hazelnut',
          'Double Cookies',
          'Strawberry Frappe',
          'Blueberry Frappe',
        ],
      },
      {
        name: 'Yakult Blends',
        price: '₱139',
        desc: 'Fruit tea with Yakult.',
        items: ['Peach Mango', 'Wild Berry', 'Sour Apple'],
      },
    ],
  },
  {
    id: 'bites',
    label: 'Bites',
    groups: [
      {
        name: 'Bubble Waffles',
        items: [
          { name: 'Classic', price: 59 },
          { name: 'Choco', price: 69 },
          { name: 'Ube', price: 69 },
          { name: 'Strawberry', price: 69 },
          { name: 'Pandan', price: 69 },
          { name: 'Cheesy Cheese', price: 79 },
          { name: 'Ube Cheesy', price: 79 },
          { name: 'Choco Chips', price: 79 },
        ],
      },
      {
        name: 'Cheesy Waffles',
        items: [
          { name: 'Cheesy Hotdog', price: 99 },
          { name: 'Ham & Cheese', price: 99 },
          { name: 'Cheesy Tuna', price: 99 },
        ],
      },
      {
        name: 'Others',
        items: [
          { name: 'French Fries', price: 55 },
          { name: 'Flavored fries (cheese, bbq, sour cream)', price: '+₱15' },
          { name: 'Cheese Stick', price: 70 },
        ],
      },
    ],
  },
]
