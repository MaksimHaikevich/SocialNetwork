import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./Profileinfo/ProfileInfo";

export const Profile = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.stateLocal.posts}
                     newPostText={props.stateLocal.newPostText}
                     dispatch={props.dispatch}/>
        </div>
    )
}