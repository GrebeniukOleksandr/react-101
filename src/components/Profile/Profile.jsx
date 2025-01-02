import css from './Profile.module.css'
import UserStats from '../UserStats/UserStats'
export default function Profile({
    profile:{username, tag, location, avatar , stats},
}) {
    return <div className={css.container}>
        <div className={css.box}>
            <img className={css.img}  src={avatar} alt="User avatar"/>
            <p className={css.name}>{username}</p>
            <p className={css.text}>{tag}</p>
            <p className={css.text}>{location}</p>
        </div>
        <UserStats stats={stats}/>
    </div>
};

