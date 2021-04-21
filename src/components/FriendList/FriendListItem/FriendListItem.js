import React from 'react'
import styles from './FriendListItem.module.css'

console.log(styles)
let FriendListItem = ({avatar, name, isOnline}) => {
  return (
    <li className={`${styles.item} ${isOnline} ${isOnline === 'online' ? styles.online : styles.offline}`}>
      <img className={styles.avatar} src={avatar} alt="" width="48"/>
      <p className='name'>{name}</p>
      <span className={`status`}>{isOnline}</span>
    </li>
  )
}

export default FriendListItem