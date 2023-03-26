import s from './Card.module.css'

export const Card = ({ title, list }) => {
  return (
    <div className={s.card}>
      <p className={s.title}>{title}</p>
      <ul className={s.content}>
        {list.map((item, i) => (
          <li key={i} className={s.text}>
            {item}
          </li>
        ))}
      </ul>
      <button className={s.btn}>Получить помощь</button>
    </div>
  )
}
