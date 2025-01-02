import css from './FriendListItem.module.css';
import clsx from 'clsx';
export default function FriendListItem({
    friend: { avatar, name, isOnline }
}) {
    return (
        <div className={css.item}>
            <img src={avatar} alt="Avatar" width="100" />
            <p className={css.text}>{name}</p>
            <p className={clsx(css.check,isOnline == 'Online' ? css.green : css.red)}>{isOnline}</p>
        </div>
    )
};
