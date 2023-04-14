import List from './List/List'

import s from './Card.module.scss'

const Card = ({ title, list, image }) => {
  return (
    <div className={s.card}>
      <h2 className={s.title}>{title}</h2>
      <div className={s.wrapper}>
        <img src={image} alt="image" className={s.image} />

        {/*<List items={list} />*/}
        <ul className={s.content}>
          {list.map((item, i) => (
            <li key={i} className={s.text}>
              <p className={s.subtext}>{item}</p>
            </li>
          ))}
        </ul>
      </div>
      <button className={s.button}>
        <span>Получить помощь</span>
      </button>
    </div>
  )
}

export default Card
