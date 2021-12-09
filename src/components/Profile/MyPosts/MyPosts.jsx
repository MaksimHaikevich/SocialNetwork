import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove post</button>
            </div>
            <div className={s.posts}>
                <Post message='Hi, how are you?' likesCount='23'/>
                <Post message='Hi boys' likesCount='12'/>

            </div>
        </div>
    )
}