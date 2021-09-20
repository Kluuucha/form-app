import { Form } from 'react-bootstrap';

const GenderPick = () => {
    return(
        <>
            <Form.Check inline type="radio" label="Male" value="male" name="gender" id="gender-male"></Form.Check>
            <Form.Check inline type="radio" label="Female" value="female" name="gender" id="gender-female"></Form.Check>
            <Form.Check inline type="radio" label="Other" value="other" name="gender" id="gender-other"></Form.Check>
        </>
    );
}

export default GenderPick;