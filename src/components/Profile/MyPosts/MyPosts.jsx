import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {Field, reduxForm} from "redux-form";


export const MyPosts = (props) => {

    let postsElements = props.profilePage.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef()

    let addNewPost = (values) => {
        // alert(values.newPostText)
        props.addPost(values.newPostText)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddPostFormRedux onSubmit={addNewPost}/>
            <div className={s.posts}>
                {postsElements}

            </div>
        </div>
    )
}


const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'} name={'newPostText'} placeholder={'Введите текст поста'}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddPostFormRedux = reduxForm({form: 'postAddMessageForm'})(AddPostForm)