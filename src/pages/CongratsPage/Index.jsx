import React from 'react'
import phone from '../../icons/Calling.svg'
import insta from '../../icons/insta.svg'
import facebook from '../../icons/fackebook.svg'
import telegram from '../../icons/telegram.svg'

export default function CongratsPage() {
  return (
    <div className='Congrats'  >
      <div className="MainInfo">
        <h1>Arizangiz muvaffaqiyatli yuborildi
!</h1>
        <p>Biz haftada etti kun 9:00 dan 21:00 gacha ishlaymiz.
          Barcha savollar bo'yicha quyidagi manzilga murojaat qilishingiz mumkin:
</p>
      </div>
      <div className="footerInfo">
        <p>Связаться с менеджером</p>
        <div className="phoneFooter">
          <img src={phone} alt="" />
          <span>+998 55 515 30 30</span>
        </div>
      </div>
{/*       <div className="networksIcon">
        <img src={insta} alt="" />
        <img src={telegram} alt="" />
        <img src={facebook} alt="" />
      </div> */}
    </div>
  )
}

