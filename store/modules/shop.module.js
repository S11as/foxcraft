const state = () => {
  return {
    servers: [
      {
        id: 'abc',
        title: 'HiTech#1',
        privileges: [
          {
            id: 'aaa',
            title: 'VIP',
            price: 100
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
