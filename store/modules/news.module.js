const state = () => {
  return {
    news: [
      {
        id: 'ho',
        title: 'Заголовок новости',
        preview: 'Lorem Ipsum - это текст-"рыба", часто \n' +
          'используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий создал большую...',
        text: 'Lorem Ipsum - это текст-"рыба", часто \n' +
          'используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий создал большую...',
        previewImg: require('Assets/news/news-preview-img.png'),
        img: require('Assets/news/news-img.png')
      },
      {
        id: '321',
        title: 'Заголовок новости',
        preview: 'Lorem Ipsum - это текст-"рыба", часто \n' +
          'используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий создал большую...',
        text: 'Lorem Ipsum - это текст-"рыба", часто \n' +
          'используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий создал большую...',
        previewImg: require('Assets/news/news-preview-img.png'),
        img: require('Assets/news/news-img.png')
      },
      {
        id: '213',
        title: 'Заголовок новости',
        preview: 'Lorem Ipsum - это текст-"рыба", часто \n' +
          'используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий создал большую...',
        text: 'Lorem Ipsum - это текст-"рыба", часто \n' +
          'используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий создал большую...',
        previewImg: require('Assets/news/news-preview-img.png'),
        img: require('Assets/news/news-img.png')
      }
    ]
  }
}

const getters = {
  newsById: state => id => {
    for (const item of state.news) {
      if (item.id === id) return item
    }
  }
}
export default {
  getters,
  state
}
