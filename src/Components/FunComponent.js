import React  from 'react';
import PC  from './PureComponent.tsx';

export default function FunComponent(props = {}) {

    const [count, changeCount] = React.useState(0)
    const [runned, setRunned] = React.useState(false)

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
        <button onClick={run}>run</button>
        <button onClick={() => changeCount(count + 100500)}>plus 100500</button>
        <div>{props.prop}</div>
        <div>{props.addProp}</div>
        <PC>PureComponent prop from FunComponent</PC>
    </div>
}