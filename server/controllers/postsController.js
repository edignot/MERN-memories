import Post from '../models/postModel.js'

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find()
    res.status(200).json(posts)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const createPost = async (req, res) => {
  const post = req.body
  const newPost = new Post(post)
  try {
    await newPost.save()
    res.status(201).json(newPost)
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}

export const updatePost = async (req, res) => {
  const { id: _id } = req.params
  const post = request.body
  if (!mongoose.types.ObjectId.isValid(_id)) res.status(404).send('Not found')
  const updatedPost = await Post.findByIdAndUpdate(_id, post, { new: true })
  res.status(200).json(updatePost)
}

export const deletePost = async (req, res) => {
  res.json('delete post')
}
