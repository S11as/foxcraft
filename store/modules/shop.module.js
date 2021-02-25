import { CHANGE_PAGINATION_PAGE } from '../types'

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
            tier: 1,
            acquirable: false,
            traits: [
              {
                id: '1',
                pertain: true,
                text: 'text',
                val: 10
              },
              {
                id: '2',
                pertain: false,
                text: 'text2',
                val: 20
              },
              {
                id: '3',
                pertain: false,
                text: 'text3',
                val: 30
              }
            ]
          },
          {
            id: 'aaa',
            title: 'VIP',
            acquirable: true,
            tier: 2,
            price: 100,
            img: require('Assets/shop/level1.png'),
            traits: [
              {
                id: '1',
                pertain: true,
                text: 'text',
                val: 1
              },
              {
                id: '2',
                pertain: true,
                text: 'text2',
                val: 1
              },
              {
                id: '3',
                pertain: false,
                text: 'text3',
                val: 1
              }
            ]
          },
          {
            id: 'bbb',
            title: 'PREMIUM',
            acquirable: true,
            tier: 3,
            price: 100,
            img: require('Assets/shop/level2.png'),
            traits: [
              {
                id: '1',
                pertain: true,
                text: 'text',
                val: 1
              },
              {
                id: '2',
                pertain: true,
                text: 'text2',
                val: 1
              },
              {
                id: '3',
                pertain: true,
                text: 'text3',
                val: 1
              }
            ]
          },
          {
            id: 'ccc',
            title: 'DELUXE',
            acquirable: true,
            tier: 4,
            price: 100,
            img: require('Assets/shop/level3.png'),
            traits: [
              {
                id: '1',
                pertain: true,
                text: 'text',
                val: 1
              },
              {
                id: '2',
                pertain: false,
                text: 'text2',
                val: 1
              },
              {
                id: '3',
                pertain: true,
                text: 'text3',
                val: 1
              }
            ]
          },
          {
            id: 'ddd',
            title: 'ELITE',
            acquirable: true,
            tier: 5,
            price: 100,
            img: require('Assets/shop/level4.png'),
            traits: [
              {
                id: '1',
                pertain: false,
                text: 'text',
                val: 1
              },
              {
                id: '2',
                pertain: false,
                text: 'text2',
                val: 1
              },
              {
                id: '3',
                pertain: false,
                text: 'text3',
                val: 1
              }
            ]
          }
        ]
      },
      {
        id: 'bca',
        title: 'HiTech#2',
        privileges: [
          {
            id: 'zzz',
            title: 'Игрок',
            tier: 1,
            acquirable: false,
            traits: [
              {
                id: '1',
                pertain: true,
                text: 'text',
                val: 11111
              },
              {
                id: '2',
                pertain: false,
                text: 'text2',
                val: 222
              },
              {
                id: '3',
                pertain: false,
                text: 'text3',
                val: 333
              }
            ]
          },
          {
            id: 'aaa',
            title: 'VIP',
            acquirable: true,
            tier: 2,
            price: 100,
            img: require('Assets/shop/level1.png'),
            traits: [
              {
                id: '1',
                pertain: true,
                text: 'text',
                val: 64
              },
              {
                id: '2',
                pertain: true,
                text: 'text2',
                val: 'da'
              },
              {
                id: '3',
                pertain: false,
                text: 'text3',
                val: 1
              }
            ]
          },
          {
            id: 'bbb',
            title: 'PREMIUM',
            acquirable: true,
            tier: 3,
            price: 100,
            img: require('Assets/shop/level2.png'),
            traits: [
              {
                id: '1',
                pertain: true,
                text: 'text',
                val: 'net'
              },
              {
                id: '2',
                pertain: true,
                text: 'text2',
                val: 1
              },
              {
                id: '3',
                pertain: true,
                text: 'text3',
                val: 1
              }
            ]
          },
          {
            id: 'ccc',
            title: 'DELUXE',
            acquirable: true,
            tier: 2,
            price: 100,
            img: require('Assets/shop/level3.png'),
            traits: [
              {
                id: '1',
                pertain: true,
                text: 'text',
                val: 1
              },
              {
                id: '2',
                pertain: false,
                text: 'text2',
                val: 1
              },
              {
                id: '3',
                pertain: true,
                text: 'text3',
                val: 1
              }
            ]
          }
        ]
      }
    ],
    items: {
      totalPages: 15,
      perPage: 10,
      currentPage: 1,
      data: [
        {
          img: require('Assets/shop/block.png'),
          title: 'Блок травы',
          amount: 64,
          price: 100
        },
        {
          img: require('Assets/shop/block.png'),
          title: 'Блок травы',
          amount: 64,
          price: 100
        },
        {
          img: require('Assets/shop/block.png'),
          title: 'Блок травы',
          amount: 64,
          price: 100
        },
        {
          img: require('Assets/shop/block.png'),
          title: 'Блок травы',
          amount: 64,
          price: 100
        },
        {
          img: require('Assets/shop/block.png'),
          title: 'Блок травы',
          amount: 64,
          price: 100
        },
        {
          img: require('Assets/shop/block.png'),
          title: 'Блок травы',
          amount: 64,
          price: 100
        },
        {
          img: require('Assets/shop/block.png'),
          title: 'Блок травы',
          amount: 64,
          price: 100
        },
        {
          img: require('Assets/shop/block.png'),
          title: 'Блок травы',
          amount: 64,
          price: 100
        },
        {
          img: require('Assets/shop/block.png'),
          title: 'Блок травы',
          amount: 64,
          price: 100
        }
      ]
    }
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
  },
  privilegeById: (state, getters) => (serverId, privilegeId) => {
    const server = getters.serverById(serverId)
    for (const item of server.privileges) {
      if (item.id === privilegeId) return item
    }
  },
  getFullTable: (state, getters) => id => {
    const server = getters.serverById(id)
    // let length = 0
    // let privilegeIndex = 0
    // for (const [item, index] of server.privileges) {
    //   const localLength = item.traits.length
    //   if (localLength >= length) {
    //     length = localLength
    //     privilegeIndex = index
    //   }
    // }
    return server.privileges[0].traits
  },
  traitPertainsToPrivilege: (state, getters) => (traitId, privilegeId, serverId) => {
    const privilege = getters.privilegeById(serverId, privilegeId)
    for (const item of privilege.traits) {
      if (traitId === item.id) {
        return item.pertain
      }
    }
    return false
  },
  privilegeTraitVal: (state, getters) => (traitId, privilegeId, serverId) => {
    const privilege = getters.privilegeById(serverId, privilegeId)
    for (const item of privilege.traits) {
      if (traitId === item.id) {
        return item.val
      }
    }
    return null
  }
}

const mutations = {
  [CHANGE_PAGINATION_PAGE] (state, payload) {
    state.items.currentPage = payload
  }
}
export default {
  getters,
  mutations,
  state
}
