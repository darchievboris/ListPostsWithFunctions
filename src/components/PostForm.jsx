import React, {useState} from 'react';
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/MyInput/MyInput";

function PostForm({createPost}) {
    const [post, setPost] = useState({title: "", body: ""});

    const create = event => {
        event.preventDefault()
        const newPost = {id: Date.now(), title: post.title, body: post.body}
        createPost(newPost)
        setPost({title: "", body: ""})
    };

    return (
        <div>
            <MyInput type='text'  placeholder="name title" value={post.title}
                     onChange={e => setPost({...post, title: e.target.value})}/>
            <MyInput type='text'  placeholder="name description" value={post.body}
                     onChange={e => setPost({...post, body: e.target.value})}/>
            <MyButton onClick={event => create(event)}>Add</MyButton>
        </div>
    );
}

export default PostForm;