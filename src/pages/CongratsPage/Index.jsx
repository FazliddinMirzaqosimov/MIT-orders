import React from 'react'
import phone from '../../icons/Calling.svg'
import insta from '../../icons/insta.svg'
import facebook from '../../icons/fackebook.svg'
import telegram from '../../icons/telegram.svg'

export default function CongratsPage() {
  return (
    <div className='Congrats'  >
      <div className="MainInfo">
        <h1>Tabriklaymiz! Siz MIT Academydan 15% chegirmaga ega bo’ldingiz. </h1>
        <p>Sizni arizangiz muvaffaqiyatli qabul qilindi. Biz siz bilan tez orada qayta aloqaga chiqamiz. Savol va takliflar uchun quyidagi raqamlarga murojaat qilishingiz mumkin.
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

