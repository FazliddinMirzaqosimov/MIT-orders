import React, { useState } from 'react'
import phone from '../../icons/Calling.svg'
import insta from '../../icons/insta.svg'
import tg from '../../icons/telegram.svg'
import facebook from '../../icons/fackebook.svg'
import pochta from '../../icons/pochta.svg'
import { InputMask } from 'primereact/inputmask';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


export default function FormPage() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    tel: '+998 ',
  });

  const inputValue = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const BotYuborish = async () => {


    const apiToken = process.env.REACT_APP_BOT_TOKEN;
    const chatId = '-1001948727154';

    const message = `
      10% li chegirma uchun:  
      Ism Familya: ${formData.name}
      Telefon Raqam: ${formData.tel}
    `;

    try {
      if (formData.name == '', formData.tel == '+998 ') {
        alert('iltimos Hamma joylarni toldiring')
      }
      else {
        await axios.post(`https://api.telegram.org/bot${apiToken}/sendMessage`, {
          chat_id: chatId,
          text: message,
        });

        setFormData({ name: '', tel: '+998 ' });
        navigate('/congratulations')
      }


    } catch (error) {
      console.error('Error sending message to Telegram:', error);
    }
  };


  return (
    <div className='FormPage'>
      <div className="HeaderText">
        <h1>Lorem impsum doler sit amet</h1>
        <p>Оставьте заявку и наши менеджеры свяжутся с вами в ближайшее время.Работаем без выходных с 9:00 до 21:00</p>
      </div>
      <div className="MainInputs">
        <input name='name' type="text" placeholder='Ism Familya' value={formData.name} onChange={inputValue} />
        <InputMask type="tel" name="tel" id="phone" mask="(99) 999-99-99" placeholder="Telefon Raqamingiz" value={formData.tel} onChange={inputValue}></InputMask>
        <a className="button" onClick={() => BotYuborish()}>
          <span class="button__icon-wrapper">
            <svg width="15" class="button__icon-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 15">
              <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"></path>
            </svg>

            <svg class="button__icon-svg  button__icon-svg--copy" xmlns="http://www.w3.org/2000/svg" width="15" fill="none" viewBox="0 0 14 15">
              <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"></path>
            </svg>
          </span>
          Yuborish
        </a>
      </div>
      <div className="Footer">
        <div className="line-component"></div>
        <p className='FooterInfoText'>Оставьте заявку и наши менеджеры свяжутся с вами в ближайшее время.Работаем без выходных с 9:00 до 21:00</p>
        <div className="FooterNetworks">
          <div className="Networks">
            <div className="Network">
              <img src={phone} alt="" />
              <p>+998 71 200 07 07</p>
            </div>
            <div className="Network">
              <img src={insta} alt="" />
              <p>Mister.IT</p>
            </div>
          </div>
          <div className="Networks">
            <div className="Network">
              <img src={phone} alt="" />
              <p>+998 71 200 07 07</p>
            </div>
            <div className="Network">
              <img src={tg} alt="" />
              <p>@Mister.IT</p>
            </div>
          </div>
          <div className="Networks">
            <div className="Network">
              <img src={pochta} alt="" />
              <p className='indexPochta'>Info@mrit.gmail.com</p>
            </div>
            <div className="Network">
              <img src={facebook} alt="" />
              <p>Mister.IT</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}