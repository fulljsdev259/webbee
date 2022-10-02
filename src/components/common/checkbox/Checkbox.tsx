import Form from 'react-bootstrap/Form';

interface CheckboxTypes {
  label?: string;
  value?: any;
  onChange?: (value: any) => void
}

export const Checkbox: React.FC<CheckboxTypes> = ({
    value,
    label,
    onChange = () => null
}) => {
    return (
        <Form.Check type={'checkbox'}>
            <Form.Check onClick={() => onChange(value)}  type={'checkbox'} checked={value} />
            <Form.Check.Label>{label}</Form.Check.Label>
        </Form.Check>
    )
 }