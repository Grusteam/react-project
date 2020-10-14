import React, { Component } from 'react'


export default class CC extends Component {
    constructor(props) {
        super(props)

        const numbers = [1, 2, 3, 4, 5];
        this.listItems = numbers.map((number) =>
            <li key={number.toString()}>
                {number}
            </li>)

        this.state = {count: 1, num: 0}
        this.myRef = React.createRef()
    }

    run() {
      this.setState((s, p) => {/* console.log('s, p', s, p); */ return {num: s.num + 1}})
    }

    componentDidMount() {
        setInterval(() => {
            this.run()
        }, 1000);
    }


    componentWillUnmount() {
        console.log('cwu');
    }

    // static getDerivedStateFromProps() {
    //     if (this) {
    //         window.console.log('state', { ...this.state });
    //         return this.state;
    //     } else {
    //         console.log('no this');
    //         return null;
    //     }
    // }

    render() {
      const { props, state } = this;
      const { count, num } = state;
      const { prop, sum } = props;
      const result = <div>
                        <h1>CC</h1>
                        <div ref={this.myRef}>{prop}</div>
                        <div>{sum(num, 100)}</div>

                        <button onClick={() => this.setState(({num}) => ({num: num + 10}))}>
                            Add 10
                        </button>
                         { !!count && <h1>Messages: {count}</h1> }
                         {this.listItems}
                     </div>

      return result;
    }
}