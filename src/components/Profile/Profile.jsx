import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
        <div className={s.profile}>
            <div>
                <img
                    src="https://lh3.googleusercontent.com/proxy/heNMC0ZeW9S4gld2LcDmdfInxOxPUedeu7fKwZKFoCmHuvBPRxbg_z3M0hsh6STI8Cr1YbqmaD_Rcjwvk9wUaYjMoy3Ao1DLDMkbQUOKbTzUKJybO4S-FL6uAVJX5bP2eqynluTyQiYXieZQT-7xp8qPqw"
                    alt=""/>
            </div>
            <div>
                avatar + opis
            </div>
            <MyPosts/>
        </div>
    )
}