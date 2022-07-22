import React from 'react'
import MyButton from './UI/button/MyButton'
import {useNavigate} from "react-router-dom";

export default function PostItem({ post, index, remove, open }) {
	const navigate = useNavigate()
	console.log(navigate);
	return (
		<div className='post'>
			<div className='post__content'>
				<strong>
					<div>
						{post.id}. {post.title}
					</div>
				</strong>
				<div>{post.body}</div>
			</div>
			<div className='post_btns'>
				<MyButton onClick={() => navigate(`/posts/${post.id}`)}>Open</MyButton>
			</div>
			<div className='post_btns'>
				<MyButton onClick={() => remove(post)}>delete</MyButton>
			</div>
		</div>
	)
}
