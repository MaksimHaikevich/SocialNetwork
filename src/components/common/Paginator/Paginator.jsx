import React from "react";
import s from "./Paginator.module.css";


export const Paginator = ({totalUsersCount,currentPage,onPageChanged}) => {

    let pagesCount = Math.ceil(totalUsersCount / 600)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    return (
        <div>
            <div className={s.pagesWrapper}>
                {
                    pages.map(p => {
                        return <span className={currentPage === p ? s.selectedPage : s.page}
                                     onClick={(e) => {
                                         onPageChanged(p)
                                     }}>

                            {p}
                        </span>
                    })}

            </div>
        </div>
    )
}