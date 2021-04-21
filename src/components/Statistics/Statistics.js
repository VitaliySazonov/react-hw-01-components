import React from 'react'
import styles from './Statistics.module.css'

let Statistics = ({title, stats}) => {
  return (
    <section className="statistics">
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className="stat-list">
        {stats.map(stat => {
          return (
            <li className={styles.item} key={stat.id}>
              <span className="label"> {stat.label}</span>
              <div className={styles.bar}>
                <span className={styles.scale} style={{width: `${stat.percentage}%`}}></span>
              </div>
              <span className="percentage"> {stat.percentage}%</span>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default Statistics