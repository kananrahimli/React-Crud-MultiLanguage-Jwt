import { useTranslation } from "react-i18next"

// eslint-disable-next-line react/prop-types
const JobStatus = ({status}) => {
  const {t}=useTranslation()
  return (
    <span className={`status ${status}`}>{t(status)}</span>
  )
}

export default JobStatus