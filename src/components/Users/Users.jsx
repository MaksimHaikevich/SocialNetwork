import React from "react";
import s from './Users.module.css'

export const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://thumbs.dreamstime.com/b/man-portrait-face-icon-web-avatar-flat-style-vector-male-blocked-unknown-anonymous-silhouette-business-manager-character-85797128.jpg',
                followed: false,
                firstName: 'Maksim',
                status: 'Learning ReactJS',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                photoUrl: 'https://thumbs.dreamstime.com/b/man-portrait-face-icon-web-avatar-flat-style-vector-male-blocked-unknown-anonymous-silhouette-business-manager-character-85797128.jpg',
                followed: true,
                firstName: 'Maksim',
                status: 'Learning ',
                location: {city: 'Moscow', country: 'Belarus'}
            },
            {
                id: 3,
                photoUrl: 'https://thumbs.dreamstime.com/b/man-portrait-face-icon-web-avatar-flat-style-vector-male-blocked-unknown-anonymous-silhouette-business-manager-character-85797128.jpg',
                followed: false,
                firstName: 'Maksim',
                status: ' ReactJS',
                location: {city: 'Pinsk', country: 'Belarus'}
            },
            {
                id: 4,
                photoUrl: 'https://thumbs.dreamstime.com/b/man-portrait-face-icon-web-avatar-flat-style-vector-male-blocked-unknown-anonymous-silhouette-business-manager-character-85797128.jpg',
                followed: true,
                firstName: 'Maksim',
                status: ' YO',
                location: {city: 'Hrodno', country: 'Belarus'}
            }
        ])
    }


    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} className={s.usersPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                                : <button onClick={() => props.follow(u.id)}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.firstName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.city}</div>
                            <div>{u.location.country}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}