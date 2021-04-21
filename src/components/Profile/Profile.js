import React from 'react'
import styles from './Profile.module.css'

let Profile = ({name, tag, location, avatar, stats}) => {
  return (
    <section className={`${styles.profile}`}>
      <div className="description">
        <img
          src={avatar}
          alt="Аватар пользователя"
          className="avatar"
          width='120'
        />
      </div>
      <ul className="stats">
        <li>
          <p className="name">{name}</p>
          <p className="tag">@{tag}</p>
          <p className="location">{location}</p>
        </li>
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{stats.likes}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{stats.views}</span>
        </li>
      </ul>
    </section>
  )
}

export default Profile