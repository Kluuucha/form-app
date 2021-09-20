import { useState, useRef, useEffect } from "react";

const useValidate = (value, validator) => {
    const [validating, setValidating] = useState(false);
    const [valid, setValid] = useState(false);
    const timeout = useRef(null);

    useEffect( () => {
        clearTimeout(timeout.current);
        if(value){
            setValidating(true);
            timeout.current = setTimeout(function(){
                validator(value)
                .then(valid => {
                    setValid(valid);
                    setValidating(false);
                });
            }
            , 300);
        } else {
            setValid(null);
            setValidating(false);
        }
      }, [value, validator]
    )

    return {valid, validating}
}
export default useValidate;
