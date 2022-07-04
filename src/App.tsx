import React, {useState} from 'react';
import './App.css';
import Settings from './Settings/Settings';
import Count from './Count/Count';


function App() {

    let StorageStartValue = localStorage.getItem('StartCount') || 0
    let StorageMaxValue = localStorage.getItem('MaxCount') || 5

    const [startCount, setStartCount] = useState<number>(+StorageStartValue)
    const [maxCount, setMaxCount] = useState<number>(+StorageMaxValue)
    const [isSettingActive, setIsSettingActive] = useState<boolean>(false)



    const changeStartCountHandler = (newValue: number) => {
        setStartCount(newValue)
        localStorage.setItem('StartCount', `${newValue}`)
    }
    const changeMaxCountHandler = (newValue: number) => {
        setMaxCount(newValue)
        localStorage.setItem('MaxCount', `${newValue}`)
    }

    const changeDisplayComponent = () => {
        setIsSettingActive(!isSettingActive)
    }


    return (
        <div className="App">
            {isSettingActive
                ? <Settings
                    startValue={startCount}
                    maxValue={maxCount}
                    changeMaxCountHandler={changeMaxCountHandler}
                    changeStartCountHandler={changeStartCountHandler}
                    changeDisplayComponent={changeDisplayComponent}
                />
                : <Count
                    startCount={startCount}
                    maxCount={maxCount}
                    changeDisplayComponent={changeDisplayComponent}
                />
            }
        </div>
    );
}

export default App;
