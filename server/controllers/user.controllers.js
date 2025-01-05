import User from "../models/user.model.js";
export const getUserSavePosts = async (req, res) => {
    const clerkUserId = req.auth.userId;
    if (!clerkUserId) {
        return res.status(401).json("Not authenticated!");
    }
    const user = await User.findOne({ clerkUserId });
    res.status(200).json(user.savedPosts);

};

export const savePost = async (req, res) => {
    const clerkUserId = req.auth.userId;
    const postId = req.body.postId;

    if (!clerkUserId) {
        return res.status(401).json("Not authenticated!");
    }
    const user = await User.findOne({ clerkUserId });
    const isSaved = user.savedPosts.some((post) => post === postId);
    if (!isSaved) {
        await user.findByIdAndUpdate(user._id, {
            $push: {
                savedPosts: postId
            }

        });
    } else {
        await user.findByIdAndUpdate(user._id, {
            $pull: {
                savedPosts: postId
            }

        });
    }
    res.status(200).json(isSaved ? "Post unsarve" : "Post saved");

};
