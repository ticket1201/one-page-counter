import React, {useEffect, useState} from 'react';
import {Scoreboard} from './Scoreboard/Scoreboard';
import {Button} from '../Button/Button';

type CountPropsType = {
    startCount: number
    maxCount: number
    changeDisplayComponent: () => void
}


const Count = (props: CountPropsType) => {

    const [currentCount, setCurrentCount] = useState<number>(props.startCount)

    useEffect(() => {
        setCurrentCount(props.startCount)
    }, [props.startCount])


    const buttonIncHandler = () => {
        if (currentCount < props.maxCount) {
            setCurrentCount(currentCount + 1)
        }
    }

    const buttonResetHandler = () => {
        setCurrentCount(props.startCount)
    }

    const buttonSetHandler = () => {
        props.changeDisplayComponent()
    }


    return (
        <div className={'inner'}>
            <Scoreboard count={currentCount} maxScore={props.maxCount}/>
            <div className={'buttons_wrapper'}>
                <Button isDisabled={currentCount === props.maxCount} class={'button'} name={'Inc'}
                        callback={buttonIncHandler}/>
                <Button isDisabled={currentCount === props.startCount} class={'button'} name={'Reset'}
                        callback={buttonResetHandler}/>
                <Button name={'Set'} class={'button'} callback={buttonSetHandler}/>
            </div>
        </div>
    );
};

export default Count;