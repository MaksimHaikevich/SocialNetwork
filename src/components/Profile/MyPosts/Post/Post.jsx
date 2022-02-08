import React from "react";
import s from './Post.module.css'

export const Post = (props) => {
    return (
        <div className={`${s.item}`}>
            <img
                src="data:image/png;base64,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"
                alt=""/>
            {props.message}
            <div>
                <span>LIKE: {props.likesCount}</span>
            </div>
        </div>

    )
}