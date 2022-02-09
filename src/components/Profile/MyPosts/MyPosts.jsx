import React from "react";
import s from "./MyPosts.module.css";
import { Post } from "./Post/Post";
import { Field, reduxForm } from "redux-form";
import {
  maxLengthCreator,
  required,
} from "../../../utils/validations/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";

export const MyPosts = React.memo((props) => {
  let postsElements = [...props.profilePage.posts]
    .reverse()
    .map((p) => <Post message={p.message} likesCount={p.likesCount} />);

  // let newPostElement = React.createRef()

  let addNewPost = (values) => {
    // alert(values.newPostText)
    props.addPost(values.newPostText);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <AddPostFormRedux onSubmit={addNewPost} />
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
});

const maxLength30 = maxLengthCreator(30);

const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          validate={[required, maxLength30]}
          component={Textarea}
          name={"newPostText"}
          placeholder={"Введите текст поста"}
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

const AddPostFormRedux = reduxForm({ form: "postAddMessageForm" })(AddPostForm);