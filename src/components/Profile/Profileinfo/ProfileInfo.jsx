import s from './ProfileInfo.module.css'

export const ProfileInfo = () => {
    return (
        <div>
            <div  className={s.wallpaper}>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Prague_skyline_at_dawn.jpg/1200px-Prague_skyline_at_dawn.jpg"
                    alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                avatar + opis
            </div>
        </div>
    )
}