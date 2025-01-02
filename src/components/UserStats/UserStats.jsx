import css from './UserStats.module.css'
import clsx from 'clsx'
export default function UserStats({stats}) {
    return (
        <>
            <ul className={css.items}>
                <li className={css.item}>
                    <span>Followes</span>
                    <span className={css.bold}>{stats.followers}</span>
                </li>
                <li className={clsx(css.item, css.border)}>
                    <span>Views</span>
                    <span className={css.bold}>{stats.views}</span>
                </li>
                <li className={css.item}>
                    <span>Likes</span>
                    <span className={css.bold}>{stats.likes}</span>
                </li>
            </ul>
        </>
    )
};


