import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Card from './Card/Card'

import { list_1, list_2, list_3, list_4, list_5, list_6 } from '../../data'
import img1 from '../../img/example.png'
import img2 from '../../img/example8.png'
import img3 from '../../img/example3.png'
import img4 from '../../img/example9.png'
import img5 from '../../img/example5.png'
import img6 from '../../img/example6.png'
import img7 from '../../img/example7.png'

import s from './Service.module.css'

// создать объект с датой
export const Service = () => {
  return (
    <div className={s.container}>
      <Header />
      <h2 className={s.title}>Инженерное сопровождение</h2>
      <div className={s.wrapper}>
        <Card
          title="Оформление сопроводительной документации"
          list={list_1}
          image={img1}
        />
        <Card
          title="Оформление разрешительной документации"
          list={list_2}
          image={img7}
        />
        <Card
          title="Оформление проектной документации"
          list={list_3}
          image={img4}
        />
        <Card
          title="Оформление приёмо-сдаточной документации"
          list={list_4}
          image={img5}
        />
        <Card title="Геодезические услуги" list={list_5} image={img5} />
        <Card title="Лабораторные услуги" list={list_6} image={img4} />
      </div>
      {/*<Footer />*/}
    </div>
  )
}
