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
        <Form.Check className='mt-3 mb-3' type={'checkbox'}>
            <Form.Check onChange={() => onChange(value)}  type={'checkbox'} checked={value} />
            <Form.Check.Label>{label}</Form.Check.Label>
        </Form.Check>
    )
 }