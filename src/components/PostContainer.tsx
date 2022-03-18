import React, {useEffect, useState} from 'react';
import {postAPI} from "../services/PostService";
import PostItem from "./PostItem";
import {IPost} from "../models/IPost";

const PostContainer = () => {
    const [limit, setLimit] = useState(100)
    const [ createPost, {} ] = postAPI.useCreatePostMutation()
    const {data: posts, isLoading, error, refetch } = postAPI.useFetchAllPostsQuery(limit,
    //     {
        //     pollingInterval: 5000
        // }
    )
    //
    // useEffect(() => {
    //     setTimeout(() => {
    //         setLimit(8)
    //     }, 2000)
    // },[])

    const handleCreate = async () => {
        const title = prompt()
        await createPost({title, body: title} as IPost)
    }

    return (
        <div>
            <button onClick={handleCreate} >Add New Post</button>
            {/*<button onClick={() => refetch()} >Refetch</button>*/}
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

export default PostContainer;