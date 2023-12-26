import {useTranslation} from 'react-i18next'
import LangSelect from '../assets/styledComponent/LangSelect'
const Language = () => {
  const {i18n} =useTranslation()
  const changeLang=(e)=>{
    localStorage.setItem('lang',e.target.value)
    i18n.changeLanguage(e.target.value)
    // window.location.reload()
  }
  return (
    <LangSelect name="lang" id="" value={localStorage.getItem('lang')}  className="p-1" onChange={(e)=>changeLang(e)}>
      <option value="en">En</option>
      <option value="az">Az</option>
      <option value="ru">Rus</option>

    </LangSelect>
  )
}

export default Language