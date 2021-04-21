import React from "react"
import Product from './Product'
import Section from "./Section"
import BookList from "./BookList"
import favoriteBooks from '../json/books'
import Profile from './Profile'
import Statistics from './Statistics'
import FriendList from './FriendList'
import TransactionHistory from './TransactionHistory'

// json
import user from '../json/user.json'
import statisticalData from '../json/statistical-data.json'
import friends from '../json/friends.json'
import transactions from '../json/transactions.json'



// let favoriteBooks = [
//   {id: 'id-1', name: 'React'},
//   {id: 'id-2', name: 'Angular'},
//   {id: 'id-3', name: 'Vue'},
//   {id: 'id-4', name: 'PHP'},
// ]
let App = () => {
  return (
    // <>
    //   <h1>Welcome!</h1>
    //   <Section
    //     title={'Best products'}
    //   >
    //     <Product
    //       imgUrl={'https://i.pinimg.com/564x/2e/b9/b9/2eb9b97463cba8676f51e879f2dd8775.jpg'}
    //       name='Kebab in Lavash'
    //       price={10}
    //       qty={100}
    //     />
    //   </Section>
    //   <Section
    //     title={'New products!'}
    //   >
    //     <Product
    //       name='Skirt for woman'
    //       price={105}
    //     />
    //   </Section>
    // </>
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <FriendList friends={friends}/>
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
      <TransactionHistory items={transactions}/>
      {/*<BookList books={favoriteBooks}/>*/}
    </>
  )
  
}


export default App