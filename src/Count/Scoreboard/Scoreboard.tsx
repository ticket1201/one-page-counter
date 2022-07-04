import React from 'react';

import s from './Scoreboard.module.css'

type ScoreboardPropsType = {
    count: number
    maxScore: number
}

export const Scoreboard = (props: ScoreboardPropsType) => {

    const setScoreClassName = () => {
        return (props.count === props.maxScore) ? s.red : s.aqua;
    }

    return (
        <div className={s.main}>
            <p className={setScoreClassName()}>{props.count}</p>
        </div>
    );
};

