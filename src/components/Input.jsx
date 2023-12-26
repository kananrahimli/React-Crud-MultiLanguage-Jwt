import { t } from "i18next";
import {Input} from "../assets/styledComponent/Input";
import Row from "../assets/styledComponent/Row";

// eslint-disable-next-line react/prop-types
const InputElement = ({type,value,label,name,handleInput,width}) => {
  return (
    <Row className="input-group align-items-baseline" $gap='4px'>
      <label htmlFor={name}>{label?label.charAt(0).toUpperCase()+ label.slice(1):''}</label>
      <Input
        type={type}
        value={value}
        name={name}
        onChange={handleInput}
        $width={`${width?width:'100%'}`}
        $padding="8px 8px"
        $borderRadius="4px"
        $border="1px solid var(--grey-200) "
      ></Input>
    </Row>
  );
};

export default InputElement;
