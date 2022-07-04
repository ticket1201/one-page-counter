import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './Settings.module.css'
import {Button} from '../Button/Button';

type SettingPropsType = {
    startValue: number
    maxValue: number
    changeDisplayComponent: () => void
    changeStartCountHandler: (newValue: number) => void
    changeMaxCountHandler: (newValue: number) => void
}

const Settings = (props: SettingPropsType) => {

    const [localMaxValue, setLocalMaxValue] = useState(props.maxValue)
    const [localStartValue, setLocalStartValue] = useState(props.startValue)
    const [error, setError] = useState(false)

    useEffect(() => {
        if (localMaxValue <= localStartValue) {
            setError(true)
        } else if (localMaxValue < 0 || localStartValue < 0) {
            setError(true)
        } else setError(false)
    }, [localMaxValue, localStartValue])


    const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setLocalMaxValue(+e.currentTarget.value)
    }

    const onChangeStartHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setLocalStartValue(+e.currentTarget.value)
    }

    const setNewValues = () => {
        props.changeStartCountHandler(localStartValue)
        props.changeMaxCountHandler(localMaxValue)
        props.changeDisplayComponent()
    }

    const setInputClass = (value: number) => {
        if (localMaxValue <= localStartValue) {
            return s.error
        }
        return value < 0 ? s.error : '';
    }

    return (
        <div className={'inner'}>
            <div className={s.settingWrapper}>
                <div className={s.inputWrapper}>
                    <label htmlFor={'max'}>Max Value:</label>
                    <input type="number" id={'max'} value={localMaxValue} onChange={onChangeMaxHandler}
                           className={setInputClass(localMaxValue)}/>
                </div>
                <div className={s.inputWrapper}>
                    <label htmlFor={'min'}>Start Value:</label>
                    <input type="number" id={'min'} value={localStartValue} onChange={onChangeStartHandler}
                           className={setInputClass(localStartValue)}/>
                </div>

            </div>
            <div className={'buttons_wrapper'}>
                <Button class={'button'} name={'Set'} callback={setNewValues}
                        isDisabled={error}/>
            </div>
        </div>

    );
};

export default Settings;