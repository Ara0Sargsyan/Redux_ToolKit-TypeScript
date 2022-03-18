import React, {useEffect} from 'react';
import {postAPI} from "../services/PostService";
import PostItem from "./PostItem";

const PostContainer2 = () => {

    const {data: posts, isLoading, error } = postAPI.useFetchAllPostsQuery(100)

    return (
        <div>
            {isLoading && <span>...Losading</span>}
            {error && <span>Error</span>}
            {
                posts && posts.map(post => {
                    return <PostItem post={post}/>
                })
            }
        </div>
    );
};

export default PostContainer2;