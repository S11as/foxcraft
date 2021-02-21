const state = () => {
  return {
    servers: [
      {
        id: 'abc',
        title: 'HiTech#1',
        privileges: [
          {
            id: 'zzz',
            title: 'Игрок',
            acquirable: false,
            traits: [
              {
                typeId: '12',
                text: 'text',
                val: 1
              }
            ]
          },
          {
            id: 'aaa',
            title: 'VIP',
            acquirable: true,
            price: 100,
            img: require('Assets/shop/level1.png'),
            traits: []
          },
          {
            id: 'bbb',
            title: 'PREMIUM',
            acquirable: true,
            price: 100,
            img: require('Assets/shop/level2.png')
          },
          {
            id: 'ccc',
            title: 'DELUXE',
            acquirable: true,
            price: 100,
            img: require('Assets/shop/level3.png')
          },
          {
            id: 'ddd',
            title: 'ELITE',
            acquirable: true,
            price: 100,
            img: require('Assets/shop/level4.png')
          }
        ]
      },
      {
        id: 'bca',
        title: 'HiTech#2',
        privileges: [
          {
            id: 'aaa',
            title: 'VIP',
            price: 100
          }
        ]
      }
    ]
  }
}

const getters = {
  redirectServer: state => {
    return state.servers[0]
  },
  serverById: state => id => {
    for (const item of state.servers) {
      if (item.id === id) return item
    }
  }
}
export default {
  getters,
  state
}
