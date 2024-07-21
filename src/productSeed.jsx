import { v4 as uuidv4 } from 'uuid';

const productSeed = [{
  id: uuidv4(),
  title: 'Cactus',
  price: 10.00,
  type: 'Indoor',
  size: 'Medium',
  description: 'Cactus symbolizing desert life. Ideal for sharing your cactus garden or desert trips',
  image: null,
  isFavourite: true,
  inBasket: false,
  quantity: 0
  },
  {
  id: uuidv4(),
  title: 'Evergreen',
  price: 20.00,
  type: 'Outdoor',
  size: 'Large',
  description: 'Evergreen tree symbolizing forests and nature. Great for discussions about forests or outdoor adventures',
  image: null,
  isFavourite: false,
  inBasket: false,
  quantity: 0
  },
  {
  id: uuidv4(),
  title: 'Herb',
  price: 5.00,
  size: 'Small',
  description: 'Herb for culinary or medicinal plants. Perfect for sharing your herbal garden or natural remedies',
  image: null,
  isFavourite: false,
  inBasket: false,
  quantity: 0
  },
  {
  id: uuidv4(),
  title: 'Shamrock',
  price: 7.50,
  size: 'Small',
  description: 'Shamrock symbolizing luck and Irish culture. Great for St. Patrick’s Day or anything Irish',
  image: null,
  isFavourite: false,
  inBasket: true,
  quantity: 2
  },
  {
  id: uuidv4(),
  title: 'Maple',
  price: 25.00,
  size: 'Large',
  description: 'Maple leaf representing Canadian culture or autumn. Perfect for fall-themed posts or trips to Canada',
  image: null,
  isFavourite: false,
  inBasket: false,
  quantity: 0
  },
  {
  id: uuidv4(),
  title: 'Clover',
  price: 10.00,
  type: 'Outdoor',
  size: 'Small',
  description: 'Four-leaf clover for good luck. Ideal for sharing lucky moments or finding rare surprises',
  image: null,
  isFavourite: false,
  inBasket: true,
  quantity: 1
  },
  {
  id: uuidv4(),
  title: 'Seedling',
  price: 2.50,
  type: 'Indoor',
  size: 'Small',
  description: 'Seedling sprout, symbolizing new growth. Use it to highlight planting and gardening updates',
  image: null,
  isFavourite: true,
  inBasket: false,
  quantity: 0
  },
  {
  id: uuidv4(),
  title: 'Tulip',
  price: 2.50,
  type: 'Outdoor',
  size: 'Small',
  description: 'Tulip flowers, a vibrant symbol of spring. Perfect for sharing your garden or floral arrangements',
  image: null,
  isFavourite: false,
  inBasket: false,
  quantity: 0
  },
  {
  id: uuidv4(),
  title: 'Cherry',
  price: 10.00,
  type: 'Outdoor',
  size: 'Medium',
  description: 'Cherry blossom flowers that signal the arrival of spring. Ideal for showcasing beautiful spring landscapes',
  image: null,
  isFavourite: false,
  inBasket: false,
  quantity: 0
}]

export default productSeed;
