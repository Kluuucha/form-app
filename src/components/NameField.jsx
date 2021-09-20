import { Form } from 'react-bootstrap';
import { useState, useRef, useEffect } from "react";
import useValidate from '../hooks/useValidator';

const NameField = ({setError, fieldName, ...props}) => {

    const [value, setValue] = useState('');

    const nameValidator = useRef(async(value) => {
        return value.length >= 2
    })

    const {valid, validating} = useValidate(value, nameValidator.current)

    useEffect(()=>{
        setError(fieldName, valid)
    }, [setError, fieldName, valid]);

    return(
        <Form.Group controlId={`validation-${props.fieldName}`}>
            <Form.Control 
            required 
            onInput={e => setValue(e.target.value)} 
            value={value}
            placeholder={props.placeholder}
            isInvalid={props.errors && props.validated && !validating}
            isValid={!props.errors && props.validated && !validating}
            name={fieldName}
            />
        </Form.Group>
    );
}

export default NameField;