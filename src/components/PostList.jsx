import React from 'react'
import PostItem from './PostItem'
import {CSSTransition, TransitionGroup} from "react-transition-group";

export default function PostList({posts, remove}) {
    if (!posts.length) {
        return <h1 style={{textAlign: 'center'}}>Posts not found</h1>
    }
    return (
        <TransitionGroup>
            {posts.map((post, index) => (
                <CSSTransition
                    key={post.id}
                    timeout={500}
                    classNames="post">
                    <PostItem index={index + 1} post={post} remove={remove}/>
                </CSSTransition>
            ))}
        </TransitionGroup>
    )
}
