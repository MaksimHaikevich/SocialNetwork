import s from './ProfileInfo.module.css'
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";

export const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>

    }


    return (
        <div>
            {/*<div className={s.wallpaper}>*/}
            {/*    <img*/}
            {/*        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Prague_skyline_at_dawn.jpg/1200px-Prague_skyline_at_dawn.jpg"*/}
            {/*        alt=""/>*/}
            {/*</div>*/}
            <div className={s.info}>
                <div className={s.descriptionBlock}>
                    <img src={props.profile.photos.large} alt=""/>
                </div>
                <div className={s.description}>
                    <p>{props.profile.fullName.toUpperCase()}</p>
                    <p>{props.profile.aboutMe}</p>
                    <div>
                        <p>Статус поиска: <strong>{props.profile.lookingForAJob ? 'В поиске работы' : 'Не ищу'}</strong>
                        </p>
                        <ProfileStatus status={props.status}/>
                        <p>{props.profile.lookingForAJobDescription}</p>
                    </div>

                </div>
            </div>

        </div>
    )
}