const { Router } = require('express')
const Post = require('../../models/Post')

const router = Router()

router.get('/', async (req, res) => {
    try {
        const posts = await Post.find()
        if (!post) throw new Error('No post')
        const sorted = post.sort((a, b) => {
            return new Date(a.date).getTime() - new Date(b.date).getTime()
        })
        res.status(200).json(sorted)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})