import React from "react";
import s from "./ProfileInfo.module.css";
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatusWithHooks} from "./ProfileStatus/ProfileStatusWithHooks";
import userPhoto from '../../../assets/images/main-avatar.png'

export const ProfileInfo = ({profile, status, updateStatus, isOwner,savePhoto}) => {
    if (!profile) {
        return <Preloader/>;
    }
    const mainPhotoSelected = (e) => {
        if (e.target.files.length){
            savePhoto(e.target.files[0])
        }
    }
    return (
        <div>
            <div className={s.info}>
                <div className={s.descriptionBlock}>
                    <img
                        src={
                            profile.photos.large ||
                            userPhoto
                        }
                        alt=""
                    />
                    <div>
                        {
                            isOwner && <input type={'file'} onChange={mainPhotoSelected}/>
                        }
                    </div>
                </div>
                <div className={s.description}>
                    <p>{profile.fullName.toUpperCase()}</p>
                    <p>{profile.aboutMe}</p>
                    <p>
                        <strong>
                            <ProfileStatusWithHooks
                                updateStatus={updateStatus}
                                status={status}
                            />
                        </strong>
                    </p>
                    <div>
                        <p>
                            Статус поиска:{" "}
                            <strong>
                                {profile.lookingForAJob ? "В поиске работы" : "Не ищу"}
                            </strong>
                        </p>
                        <p>{profile.lookingForAJobDescription}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
