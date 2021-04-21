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
      <div>
        <div>
          <p className={styles.name}>{name}</p>
          <span className={styles.tag}>@{tag} | </span>
          <span className={styles.location}>{location}</span>
        </div>
        <ul className={styles.stats}>
    
          <li>
            <p className={styles.quantity}>{stats.followers}</p>
            <p className={styles.label}>Followers</p>
          </li>
          <li>
            <p className={styles.quantity}>{stats.likes}</p>
            <p className={styles.label}>Views</p>
          </li>
          <li>
            <p className={styles.quantity}>{stats.views}</p>
            <p className={styles.label}>Likes</p>
          </li>
        </ul>
      </div>
      
    </section>
  )
}

export default Profile