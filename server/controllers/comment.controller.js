import Comment from "../models/comment.model";
import User from "../models/user.model";

export const getPostComments = async (req, res) => {
    const comments = await Comment.find({ post: req.params.postId }).populate("user", "username img").sort({ createdAt: -1 });

    res.json(comments);


};

export const addComment = async (req, res) => {

    const clerkUserId = req.auth.userId;
    const postId = req.params.postId;

    if (!clerkUserId) {
        return res.status(401).json("Not authenticated!");
    }

    const user = await User.findOne({ clerkUserId });
    if (!user) {
        return res.status(404).json("User not found!");
    }

    const newComment = new Comment({ user: user._id, post: req.params.postId, ...req.body });
    const savedComment = await newComment.save();
    res.status(201).json(savedComment);

};

export const deleteComment = async (req, res) => {

    const clerkUserId = req.auth.userId;
    const id = req.params.id;

    if (!clerkUserId) {
        return res.status(401).json("Not authenticated!");
    }

    const deleteComment = await Comment.findOneAndDelete({
        _id: id,
        user: user._id
    });

    if (!deleteComment) {
        return res.status(403).json("You can delete only your comments!");
    }
    res.status(200).json("Comment has been deleted!");
}

