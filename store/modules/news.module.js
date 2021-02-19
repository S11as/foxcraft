const state = () => {
  return {
    news: [
      {
        id: 'ho',
        title: 'Заголовок новости',
        preview: 'Lorem Ipsum - это текст-"рыба", часто \n' +
          'используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий создал большую...',
        text: '\n' +
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum commodo lorem sit amet porttitor pharetra. Etiam tincidunt urna ac ultricies placerat. Morbi lectus sapien, congue ac lacinia a, dignissim eget dui. Donec sodales erat quis tellus aliquam, eget rhoncus orci congue. Curabitur eleifend dui sapien, sit amet vehicula mi finibus a. Quisque metus leo, scelerisque sed nisl vel, rutrum aliquam dolor. Quisque sed tincidunt leo. Aenean sit amet pulvinar leo, id tempor lorem. Pellentesque imperdiet facilisis diam vel porta. Fusce quis mi nisi. Mauris dignissim risus elementum lacus pulvinar tincidunt. Phasellus vulputate magna a viverra elementum. Proin tempor, arcu id ornare mollis, mi ipsum lobortis odio, a imperdiet libero augue et sem. Praesent nec rhoncus enim. Maecenas lectus arcu, commodo et sagittis sit amet, pellentesque sit amet magna. Fusce eget nunc et ipsum pharetra pellentesque non ut sem.\n' +
          '\n' +
          'Praesent non odio ornare, pharetra felis quis, iaculis lectus. Fusce tristique, orci pharetra accumsan venenatis, turpis purus efficitur dolor, in bibendum est metus ut enim. Etiam cursus tortor at risus sodales, vitae pulvinar est aliquet. Curabitur vehicula enim sed fringilla consequat. Donec fringilla elit vitae nisl aliquet, nec tincidunt ligula ullamcorper. Quisque mauris justo, mollis vitae venenatis vitae, interdum in diam. Aenean aliquam, orci porta laoreet imperdiet, nulla nisi rutrum nunc, vitae scelerisque ligula magna eget quam. Nullam tristique justo vel molestie pharetra.\n' +
          '\n' +
          'Sed vitae diam at tortor volutpat pretium. Ut ultrices lacinia dapibus. Curabitur tristique urna pulvinar cursus consequat. Integer ut ante nec nibh malesuada porttitor. Curabitur tortor urna, ullamcorper in feugiat nec, feugiat sit amet massa. Nam at nulla in ipsum accumsan aliquet. Mauris varius eu turpis nec consectetur. Proin molestie eget quam ut scelerisque. Aliquam et leo nec massa posuere varius et eu sapien. Aenean id libero nibh. Cras bibendum, mauris a tempus aliquam, metus nunc tempor diam, quis ornare eros libero efficitur augue. Vestibulum pellentesque dolor non auctor fringilla. Suspendisse iaculis maximus risus, eget efficitur mauris convallis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras est sem, faucibus sit amet interdum a, pulvinar quis massa. Curabitur risus diam, aliquam vitae suscipit sed, interdum non nisl.\n' +
          '\n' +
          'Nullam rhoncus feugiat nisi, at vulputate risus interdum ut. Integer tristique augue in felis mattis consequat. Vestibulum faucibus magna blandit augue suscipit pharetra. Quisque sagittis quam ut aliquet euismod. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur vitae eros maximus, consectetur sem sit amet, semper ex. Nam accumsan, ante eget faucibus efficitur, sapien odio dignissim enim, efficitur sodales ante lorem et nulla.\n' +
          '\n' +
          'Donec lacinia, tellus consequat semper aliquet, neque nulla tempor sem, id facilisis risus ipsum eget sem. Nulla facilisi. Proin sed lectus viverra enim sollicitudin tristique. In nunc mauris, dignissim sed augue sit amet, eleifend mollis magna. Praesent tempor nulla tellus, id vehicula nibh commodo eu. Nam varius quam et enim venenatis, pretium laoreet massa ultrices. Nunc sagittis et leo quis tristique. In hac habitasse platea dictumst. Maecenas molestie ex ut accumsan auctor. Ut lacinia nunc nec ligula posuere fringilla. Vestibulum volutpat mauris non ligula molestie, at fringilla arcu rutrum.',
        previewImg: require('Assets/news/news-preview-img.png'),
        img: require('Assets/news/news-img.png')
      },
      {
        id: '321',
        title: 'Заголовок новости',
        preview: 'Lorem Ipsum - это текст-"рыба", часто \n' +
          'используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий создал большую...',
        text: '\n' +
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum commodo lorem sit amet porttitor pharetra. Etiam tincidunt urna ac ultricies placerat. Morbi lectus sapien, congue ac lacinia a, dignissim eget dui. Donec sodales erat quis tellus aliquam, eget rhoncus orci congue. Curabitur eleifend dui sapien, sit amet vehicula mi finibus a. Quisque metus leo, scelerisque sed nisl vel, rutrum aliquam dolor. Quisque sed tincidunt leo. Aenean sit amet pulvinar leo, id tempor lorem. Pellentesque imperdiet facilisis diam vel porta. Fusce quis mi nisi. Mauris dignissim risus elementum lacus pulvinar tincidunt. Phasellus vulputate magna a viverra elementum. Proin tempor, arcu id ornare mollis, mi ipsum lobortis odio, a imperdiet libero augue et sem. Praesent nec rhoncus enim. Maecenas lectus arcu, commodo et sagittis sit amet, pellentesque sit amet magna. Fusce eget nunc et ipsum pharetra pellentesque non ut sem.\n' +
          '\n' +
          'Praesent non odio ornare, pharetra felis quis, iaculis lectus. Fusce tristique, orci pharetra accumsan venenatis, turpis purus efficitur dolor, in bibendum est metus ut enim. Etiam cursus tortor at risus sodales, vitae pulvinar est aliquet. Curabitur vehicula enim sed fringilla consequat. Donec fringilla elit vitae nisl aliquet, nec tincidunt ligula ullamcorper. Quisque mauris justo, mollis vitae venenatis vitae, interdum in diam. Aenean aliquam, orci porta laoreet imperdiet, nulla nisi rutrum nunc, vitae scelerisque ligula magna eget quam. Nullam tristique justo vel molestie pharetra.\n' +
          '\n' +
          'Sed vitae diam at tortor volutpat pretium. Ut ultrices lacinia dapibus. Curabitur tristique urna pulvinar cursus consequat. Integer ut ante nec nibh malesuada porttitor. Curabitur tortor urna, ullamcorper in feugiat nec, feugiat sit amet massa. Nam at nulla in ipsum accumsan aliquet. Mauris varius eu turpis nec consectetur. Proin molestie eget quam ut scelerisque. Aliquam et leo nec massa posuere varius et eu sapien. Aenean id libero nibh. Cras bibendum, mauris a tempus aliquam, metus nunc tempor diam, quis ornare eros libero efficitur augue. Vestibulum pellentesque dolor non auctor fringilla. Suspendisse iaculis maximus risus, eget efficitur mauris convallis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras est sem, faucibus sit amet interdum a, pulvinar quis massa. Curabitur risus diam, aliquam vitae suscipit sed, interdum non nisl.\n' +
          '\n' +
          'Nullam rhoncus feugiat nisi, at vulputate risus interdum ut. Integer tristique augue in felis mattis consequat. Vestibulum faucibus magna blandit augue suscipit pharetra. Quisque sagittis quam ut aliquet euismod. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur vitae eros maximus, consectetur sem sit amet, semper ex. Nam accumsan, ante eget faucibus efficitur, sapien odio dignissim enim, efficitur sodales ante lorem et nulla.\n' +
          '\n' +
          'Donec lacinia, tellus consequat semper aliquet, neque nulla tempor sem, id facilisis risus ipsum eget sem. Nulla facilisi. Proin sed lectus viverra enim sollicitudin tristique. In nunc mauris, dignissim sed augue sit amet, eleifend mollis magna. Praesent tempor nulla tellus, id vehicula nibh commodo eu. Nam varius quam et enim venenatis, pretium laoreet massa ultrices. Nunc sagittis et leo quis tristique. In hac habitasse platea dictumst. Maecenas molestie ex ut accumsan auctor. Ut lacinia nunc nec ligula posuere fringilla. Vestibulum volutpat mauris non ligula molestie, at fringilla arcu rutrum.',
        previewImg: require('Assets/news/news-preview-img.png'),
        img: require('Assets/news/news-img.png')
      },
      {
        id: '213',
        title: 'Заголовок новости',
        preview: 'Lorem Ipsum - это текст-"рыба", часто \n' +
          'используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий создал большую...',
        text: '\n' +
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum commodo lorem sit amet porttitor pharetra. Etiam tincidunt urna ac ultricies placerat. Morbi lectus sapien, congue ac lacinia a, dignissim eget dui. Donec sodales erat quis tellus aliquam, eget rhoncus orci congue. Curabitur eleifend dui sapien, sit amet vehicula mi finibus a. Quisque metus leo, scelerisque sed nisl vel, rutrum aliquam dolor. Quisque sed tincidunt leo. Aenean sit amet pulvinar leo, id tempor lorem. Pellentesque imperdiet facilisis diam vel porta. Fusce quis mi nisi. Mauris dignissim risus elementum lacus pulvinar tincidunt. Phasellus vulputate magna a viverra elementum. Proin tempor, arcu id ornare mollis, mi ipsum lobortis odio, a imperdiet libero augue et sem. Praesent nec rhoncus enim. Maecenas lectus arcu, commodo et sagittis sit amet, pellentesque sit amet magna. Fusce eget nunc et ipsum pharetra pellentesque non ut sem.\n' +
          '\n' +
          'Praesent non odio ornare, pharetra felis quis, iaculis lectus. Fusce tristique, orci pharetra accumsan venenatis, turpis purus efficitur dolor, in bibendum est metus ut enim. Etiam cursus tortor at risus sodales, vitae pulvinar est aliquet. Curabitur vehicula enim sed fringilla consequat. Donec fringilla elit vitae nisl aliquet, nec tincidunt ligula ullamcorper. Quisque mauris justo, mollis vitae venenatis vitae, interdum in diam. Aenean aliquam, orci porta laoreet imperdiet, nulla nisi rutrum nunc, vitae scelerisque ligula magna eget quam. Nullam tristique justo vel molestie pharetra.\n' +
          '\n' +
          'Sed vitae diam at tortor volutpat pretium. Ut ultrices lacinia dapibus. Curabitur tristique urna pulvinar cursus consequat. Integer ut ante nec nibh malesuada porttitor. Curabitur tortor urna, ullamcorper in feugiat nec, feugiat sit amet massa. Nam at nulla in ipsum accumsan aliquet. Mauris varius eu turpis nec consectetur. Proin molestie eget quam ut scelerisque. Aliquam et leo nec massa posuere varius et eu sapien. Aenean id libero nibh. Cras bibendum, mauris a tempus aliquam, metus nunc tempor diam, quis ornare eros libero efficitur augue. Vestibulum pellentesque dolor non auctor fringilla. Suspendisse iaculis maximus risus, eget efficitur mauris convallis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras est sem, faucibus sit amet interdum a, pulvinar quis massa. Curabitur risus diam, aliquam vitae suscipit sed, interdum non nisl.\n' +
          '\n' +
          'Nullam rhoncus feugiat nisi, at vulputate risus interdum ut. Integer tristique augue in felis mattis consequat. Vestibulum faucibus magna blandit augue suscipit pharetra. Quisque sagittis quam ut aliquet euismod. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur vitae eros maximus, consectetur sem sit amet, semper ex. Nam accumsan, ante eget faucibus efficitur, sapien odio dignissim enim, efficitur sodales ante lorem et nulla.\n' +
          '\n' +
          'Donec lacinia, tellus consequat semper aliquet, neque nulla tempor sem, id facilisis risus ipsum eget sem. Nulla facilisi. Proin sed lectus viverra enim sollicitudin tristique. In nunc mauris, dignissim sed augue sit amet, eleifend mollis magna. Praesent tempor nulla tellus, id vehicula nibh commodo eu. Nam varius quam et enim venenatis, pretium laoreet massa ultrices. Nunc sagittis et leo quis tristique. In hac habitasse platea dictumst. Maecenas molestie ex ut accumsan auctor. Ut lacinia nunc nec ligula posuere fringilla. Vestibulum volutpat mauris non ligula molestie, at fringilla arcu rutrum.',
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
