import { useState } from "react";

//import axios from "../utility/axios-instance";

const useInput = (validateInput) => {
    const [enteredValue, setEnteredValue] = useState("");
    const [inputIsTouched, setInputIsTouched] = useState(false);

    const enteredValueIsValid = validateInput(enteredValue);
    const enteredValueIsInValid = !enteredValueIsValid && inputIsTouched;

    const valueChangeHandler = (e) => {
        setEnteredValue(e.target.value);
        // axios
        //     .put(`/services/rest/server/containers/virtual-ciso_1.0.0-SNAPSHOT/tasks/${taskInstanceId}/states/started`, {
        //         enteredName: e.target.value,
        //     })
        //     .then((res) => {});
    };

    const inputBlueHandler = () => {
        setInputIsTouched(true);
    };

    const resetInput = () => {
        setEnteredValue("");
        setInputIsTouched(false);
    };

    return {
        value: enteredValue,
        resetInput,
        valueChangeHandler,
        inputBlueHandler,
        enteredValueIsValid,
        enteredValueIsInValid,
    };
};

export default useInput;
