import s from './Profile.module.css'
import {ProfileInfo} from "./Profileinfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

export const Profile = (props) => {

    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer profile={props.profile} />
        </div>
    )
}
