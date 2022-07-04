import React from 'react';


type ButtonPropsType = {
    name: string
    callback: () => void
    class: string
    isDisabled?: boolean
}

export const Button = (props: ButtonPropsType) => {

    const ButtonOnClickHandler = () => {
        props.callback()
    }

    return (

        <button disabled={props.isDisabled} onClick={ButtonOnClickHandler} className={props.class}>
            {props.name}
        </button>

    );
};

