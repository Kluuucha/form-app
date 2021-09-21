import { Form } from 'react-bootstrap';
import { useState, useRef, useEffect } from "react";
import useValidate from '../hooks/useValidator';

const EmailField = ({setError, fieldName, ...props}) => {

    const [value, setValue] = useState('');

    const emailValidator = useRef(async (value) => {
        return fetch(`https://emailvalidation.abstractapi.com/v1/?api_key=6905a0d4530e4f12b4599cb1b32a290f&email=${value}`)
            .then(response => response.json())
            .then(json => {
                return (json.is_valid_format.value);
            });
    })

    const {valid, validating} = useValidate(value, emailValidator.current)

    useEffect(()=>{
        setError(fieldName, !valid)
    }, [setError, fieldName, valid]);

    return(
        <Form.Group controlId="validationEmail">
            <Form.Control 
                required
                value={value}
                onInput={e => setValue(e.target.value)} 
                placeholder={props.placeholder}
                isInvalid={props.errors && props.validated && !validating}
                isValid={!props.errors && props.validated && !validating}
                name={fieldName}
            />
            <Form.Control.Feedback type="invalid">
                {props.isValid===false ? 'Please provide a correct email address.' : 'Please fill the email address.'}
            </Form.Control.Feedback>
        </Form.Group>
    );
}

export default EmailField ;