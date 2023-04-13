import s from './Card.module.scss'
import png from '../../../img/example.png'

export const Card = ({ title, list }) => {
  return (
    <div className={s.card}>
      <p className={s.title}>{title}</p>
      <div className={s.wrapper}>
        <img src={png} alt="пример" className={s.image} />
        <ul className={s.content}>
          {list.map((item, i) => (
            <li key={i} className={s.text}>
              <p className={s.subtext}>{item}</p>
            </li>
          ))}
        </ul>
      </div>
      <button className={s.btn}>Получить помощь</button>
    </div>
  )
}
