import React from "react";
import s from "./ProfileInfo.module.css";
import { Preloader } from "../../common/Preloader/Preloader";
import { ProfileStatusWithHooks } from "./ProfileStatus/ProfileStatusWithHooks";

export const ProfileInfo = ({ profile, status, updateStatus }) => {
  if (!profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div className={s.info}>
        <div className={s.descriptionBlock}>
          <img
            src={
              profile.photos.large ||
              "https://transplant.org.au/wp-content/uploads/2018/06/James-avatar-for-website-300x300.png"
            }
            alt=""
          />
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
