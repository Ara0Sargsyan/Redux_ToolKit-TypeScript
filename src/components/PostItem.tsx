import React, {FC} from 'react';
import {IPost} from "../models/IPost";
import {postAPI} from "../services/PostService";

interface PostitemProps {
    post: IPost;
}

const PostItem: FC<PostitemProps> = ({post}) => {
    const [ deletePost ] = postAPI.useDeletePostMutation()
    const [ updatePost ] = postAPI.useUbdatePostMutation()

    const handleChange = () => {
        const title = prompt()
        // @ts-ignore
        updatePost({...post, title})
    }

    return (
        <div
            onClick={handleChange}
            style={{
            marginTop: "15px",
            border: "1px solid gray",
            padding: "5px",
        }} >
            {post.id} {post.title}
            <button onClick={(e) => {
                e.stopPropagation()
                deletePost(post)
            }} type="reset">Delete</button>
        </div>
    );
};

export default PostItem;