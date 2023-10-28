import React from 'react'
import phone from '../../icons/Calling.svg'
import insta from '../../icons/insta.svg'
import facebook from '../../icons/fackebook.svg'
import telegram from '../../icons/telegram.svg'

export default function CongratsPage() {
  return (
    <div className='Congrats'  >
      <div className="MainInfo">
        <h1>Ваша заявка успешно отправлена!</h1>
        <p>Работаем без выходных с 9:00 до 21:00.
          По любым вопросам можете обращаться:</p>
      </div>
      <div className="footerInfo">
        <p>Связаться с менеджером</p>
        <div className="phoneFooter">
          <img src={phone} alt="" />
          <span>+998 90 009 6009</span>
        </div>
      </div>
      <div className="networksIcon">
        <img src={insta} alt="" />
        <img src={telegram} alt="" />
        <img src={facebook} alt="" />
      </div>
    </div>
  )
}

