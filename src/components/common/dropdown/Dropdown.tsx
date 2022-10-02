import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

interface CustomDropdownTypes {
  variant?: string;
  items: Array<any>;
  title?: string;
  onChange?: (item: any) => void
}

export const CustomDropdown: React.FC<CustomDropdownTypes> = ({
  variant = "primary",
  items = [],
  title = 'Add Field',
  onChange = () => null,
  ...restProps
}) => {
  return (
    <DropdownButton
      variant={variant}
      id={`dropdown-variants-${variant}`}
      title={title}
      defaultValue={'checkbox'}
      
      {...restProps}
    >
      {items?.map((item, index) => {
        return (
          <Dropdown.Item onClick={() => onChange(item)} key={item.lable + index} href="#/action-1">
            {item.lable}
          </Dropdown.Item>
        );
      })}
    </DropdownButton>
  );
};
