
import Post from "../models/post.model.js";
import User from "../models/user.model.js";
import ImageKit from "imagekit";



export const getPosts = async (req, res) => {

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 2;

    console.log(req.query);

    const posts = await Post
        .find()
        .populate("user", "username")
        .limit(limit)
        .skip((page - 1) * 5);

    const totalPosts = await Post.countDocuments();
    const hasMore = page * limit < totalPosts;

    res.status(200).json({ posts, hasMore });
};

export const getPost = async (req, res) => {
    const post = await Post.findOne({ slug: req.params.slug });
    res.status(200).json(post);
};



export const createPost = async (req, res) => {

    const clerkUserId = req.auth.userId;

    console.log(req.headers);

    if (!clerkUserId) {
        return res.status(401).json("Not authenticated!");
    }

    const user = await User.findOne({ clerkUserId });

    if (!user) {
        return res.status(404).json("User not found!");
    }

    let slug = req.body.title.replace(/ /g, "-").toLowerCase();

    let existingPost = await Post.findOne({ slug });

    let counter = 2;

    while (existingPost) {
        slug = `${slug}-${counter}`;
        existingPost = await Post.findOne({ slug });
        counter++;
    }

    const newPost = new Post({ user: user._id, slug, ...req.body });

    const post = await newPost.save();
    res.status(200).json(post);
};

export const deletePost = async (req, res) => {
    const clerkUserId = req.auth.userId;
    if (!clerkUserId) {
        return res.status(401).json("Not authenticated!");

    }

    const user = await User.findOne({ clerkUserId });

    const deletePost = await Post.findOneAndDelete({ _id: req.params.id, slug, user: user._id });
    res.status(200).json("post has deleted");

};

const imageKit = new ImageKit({
    urlEndpoint: process.env.urlEndpoint,
    publicKey: process.env.publicKey,
    privateKey: process.env.privateKey,
});

export const uploadAuth = async (req, res) => {
    const result = imageKit.getAuthenticationParameters();
    res.send(result);
};