export default (posts = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return action.payload
    case 'CREATE':
      return [...posts, action.payload]
    case 'UPDATE':
      return posts.map((post) => {
        if (post._id === action.payload._id) {
          return action.payload
        } else {
          return post
        }
      })
    default:
      return posts
  }
}
