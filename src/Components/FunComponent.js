import React  from 'react';
import PC  from './PureComponent.tsx';


let wasChanged = false

export default function FunComponent(props = {}) {

    const [count, changeCount] = React.useState(0)
    const [runned, setRunned] = React.useState(false)
    
    
    const [test1, setTest1] = React.useState('init1')
    const [test2, setTest2] = React.useState('init2')

    const wrapInProxy = (anyHook, anyVal) => {
        console.log('wasChanged pre', wasChanged);

        anyHook(anyVal)
        wasChanged = true

        console.log('wasChanged post', wasChanged);
    }


    React.useEffect(() => {
        // console.log('runned', runned);
    }, [runned])

    // console.log('count 1', count);

    const run = () => {
        // console.log('count 2', count);

        if (!count) {
            const ID = setInterval(() => {
                changeCount(count => count + 1)
            }, 1000);

            setRunned (ID);
        }

    }

    return <div>
        <p>FunComponent</p>
        <div>count: {count}</div>
        <input type="text" value={test1} onChange={e => wrapInProxy(setTest1, e.target.value)}/>
        <input type="text" value={test2} onChange={e => wrapInProxy(setTest2, e.target.value)}/>
        <button onClick={run}>run</button>
        <button onClick={() => changeCount(count + 100500)}>plus 100500</button>
        <div>{props.prop}</div>
        <div>{props.addProp}</div>
        <PC>PureComponent prop from FunComponent</PC>
    </div>
}