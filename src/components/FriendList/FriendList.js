import React from 'react'
import FriendListItem from './FriendListItem/FriendListItem'
import style from './FriendList.module.css'

let FriendList = ({friends}) => {
  return (
    <section>
      <ul className={style.friendList}>
        {friends.map(friend => {
          return (
            <FriendListItem
              key={friend.id}
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline ? 'online' : 'offline'}
            />
          )
        })}
      </ul>
    </section>
  )
}

export default FriendList