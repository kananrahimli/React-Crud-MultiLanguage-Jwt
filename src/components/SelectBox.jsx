import { t } from "i18next";
import { Select } from "../assets/styledComponent/Input";
import Row from "../assets/styledComponent/Row";

// eslint-disable-next-line react/prop-types
const SelectBox = ({ name, label, value, width, handleInput, options }) => {
  return (
    <Row className="input-group align-items-baseline" $gap="4px">
      <label htmlFor={name}>{label}</label>
      <Select
        value={value}
        name={name}
        onChange={handleInput}
        $width={`${width ? width : "100%"}`}
        $padding="8px 8px"
        $borderRadius="4px"
        $border="1px solid var(--grey-200) "
      >
        {
          // eslint-disable-next-line react/prop-types
          options &&  options.map((option, index) => (
              // Each item in the array is mapped to a list item
              <option value={option} key={index}>
                {t(option)}
              </option>
            ))
        }
      </Select>
    </Row>
  );
};

export default SelectBox;
