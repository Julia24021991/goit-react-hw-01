import css from './Profile.module.css'

export const Profile = ({ userData: { username, avatar, location, tag, stats } }) => {
    return (
        <div className={css.profile}>
            <div className="description">
                <img
                    src={avatar}
                    alt={username}
                    width="180"
                    height="180"
                    className={css.avatar}
                />
                <p className={css.name}>{username}</p>
                <p className={css.tag}>@{tag}</p>
                <p className={css.location}>{location}</p>
            </div>


            <ul className={css.stats}>
                <li className={css.labelItem}>
                    <span className={css.label}>Followers</span>
                    <span className={css.value}>{stats.followers}</span>
                </li>
                <li className={css.labelItem}>
                    <span className={css.label}>Views</span>
                    <span className={css.value}>{stats.views}</span>
                </li>
                <li className={css.labelItem}>
                    <span className={css.label}>Likes</span>
                    <span className={css.value}>{stats.likes}</span>
                </li>
            </ul>
        </div>
    )
}