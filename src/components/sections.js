import uuid from 'uuid'

export default [
  {
    id: uuid.v4(),
    image: 'https://i.ibb.co/cvpntL1/hats.png',
    isLarge: false,
    routeName: 'hats',
    title: 'Hats'
  },
  {
    id: uuid.v4(),
    image: 'https://i.ibb.co/px2tCc3/jackets.png',
    isLarge: false,
    routeName: 'jackets',
    title: 'Jackets'
  },
  {
    id: uuid.v4(),
    image: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    isLarge: false,
    routeName: 'sneakers',
    title: 'Sneakers'
  },
  {
    id: uuid.v4(),
    image: 'https://i.ibb.co/GCCdy8t/womens.png',
    isLarge: true,
    routeName: 'womens',
    title: 'Womens'
  },
  {
    id: uuid.v4(),
    image: 'https://i.ibb.co/R70vBrQ/men.png',
    isLarge: true,
    routeName: 'mens',
    title: 'Mens'
  }
]
