import { Card } from './Card/Card'
import { list_1, list_2, list_3, list_4, list_5, list_6 } from '../../data'
import s from './Service.module.css'

export const Service = () => {
  return (
    <div className={s.container}>
      <h2 className={s.title}>Инженерное сопровождение</h2>
      <div className={s.wrapper}>
        <Card title="Оформление сопроводительной документации" list={list_1} />
        <Card title="Оформление разрешительной документации" list={list_2} />
        <Card title="Оформление проектной документации" list={list_3} />
        <Card title="Оформление приёмо-сдаточной документации" list={list_4} />
        <Card title="Геодезические услуги" list={list_5} />
        <Card title="Лабораторные услуги" list={list_6} />
      </div>
    </div>
  )
}
