import React from 'react'
import cn from 'classnames'

import s from './Footer.module.scss'

// Форму вынести в отдельный компонент и попробовать
// Все регулярки использовать через константы в отдельном файле
const Footer = () => {
  return (
    <>
      <footer className={s.footer}>
        <h4 className={s.title}>Работаем по всей России</h4>

        <p className={s.subtitle}>Офис в Краснодаре:</p>

        <div className={s.wrapper}>
          <span className={s.tel}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-telephone"
              viewbox="0 0 16 16"
            >
              <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
            </svg>
            <a href="tel:+79999990026">+7(999) 999-00-26</a>
          </span>

          <span className={s.mail}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-envelope-fill"
              viewbox="0 0 16 16"
            >
              <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
            </svg>
            <a href="mailto:aurum.g@mail.ru">aurum.g@mail.ru</a>
          </span>

          <span className={s.address}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-geo-alt-fill"
              viewbox="0 0 16 16"
            >
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
            </svg>
            350087, г. Краснодар, ул. Стасова, д.178/2 офис 309
          </span>
        </div>

        <form action="#" id="form" className={s.form}>
          <h5 className={s.form__title}>Свяжитесь с нами</h5>
          <p className={s.form__subtitle}>
            Задайте вопрос, пришлите коммерческое предложение или пригласите на
            тендер
          </p>

          <input type="hidden" name="project_name" value="aurum-company.ru" />
          <input type="hidden" name="admin_email" value="aurum.g@mail.ru" />
          <input type="hidden" name="form_subject" value="Form Subject" />

          <div className={s.form__info}>
            <label for="username" className={s.form__info_label}>
              Представьтесь, пожалуйста
            </label>
            <div className={s.form__info_wrapper}>
              <input
                className={s.form__info_wrapper_text}
                id="username"
                name="username"
                type="text"
                placeholder="Ваше имя"
                required
              />
            </div>
          </div>

          <div className={s.form__info}>
            <label for="telephone" className={s.form__info_label}>
              Ваш телефон
            </label>
            <div className={s.form__info_wrapper}>
              <input
                className={s.form__info_wrapper_text}
                id="tel"
                name="tel"
                type="tel"
                placeholder="+7 (___)___-__-__"
                maxlength="12"
                pattern="^((\+7|7|8)+([0-9]){10})$"
                title="Введите корректный номер"
                required
              />
            </div>
          </div>

          <div className={s.form__info}>
            <label for="email" className={s.form__info_label}>
              Ваш email
            </label>
            <div className={s.form__info_wrapper}>
              <input
                className={s.form__info_wrapper_text}
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                required
              />
            </div>
          </div>

          <div className={s.form__info}>
            <label for="file" className={s.form__info_label}>
              Прикрепить файл
            </label>
            <div className={s.form__info_wrapper}>
              <div className={s.form__info_wrapper_text}>
                <input
                  className="file"
                  type="file"
                  id="file"
                  name="file"
                  placeholder="Прикрепить файл"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className={'bi bi-arrow-bar-up'}
                  viewBox="0 0 16 16"
                >
                  <path d="M8 10a.5.5 0 0 0 .5-.5V3.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 3.707V9.5a.5.5 0 0 0 .5.5zm-7 2.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5z" />
                </svg>
              </div>
            </div>
            <div className={s.form__info_wrapper}>
              <label for="checkbox" className={s.form__info_label}>
                <input
                  className={cn(s.form__info_checkbox, s.checkbox)}
                  id="checkbox"
                  name="checkbox"
                  type="checkbox"
                  checked
                  required
                />
                Я соглашаюсь с <a href="#">политикой конфиденциальности</a>
              </label>
            </div>
          </div>

          <div className={s.wrapper_conteiner}>
            <button type="submit" className={cn(s.button, s.btn)}>
              Отправить
            </button>
          </div>
        </form>
      </footer>

      <div className={s.rights_clients}>
        <div className={s.rights_clients__logo}>
          <img src="@img/logo_full.svg" alt="Logo" width="100" height="100" />
          <p>Все права защищены</p>
        </div>
      </div>
    </>
  )
}

export default Footer
