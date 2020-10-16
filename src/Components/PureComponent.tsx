import React  from 'react';
import {PureComponent} from 'react'

export default class PC extends PureComponent {

    showMeYourUnderMouse(level: string, e: React.SyntheticEvent) {
        const { target, currentTarget } = e;

        console.log('level', level)
        console.log('target', target)
        console.log('currentTarget', currentTarget)
    }

    render() {
const { showMeYourUnderMouse } = this;

        return  <div>
                    <div>PureComponent</div> 
                    <div>{this.props.children}</div> 
                    {/* >Event bubbling */}
                    <div>
                        <div>Event bubbling</div>
                        <div onClick={e => showMeYourUnderMouse('level 1', e)}>
                            level 1
                            <div>
                                <div onClick={e => showMeYourUnderMouse('level 2', e)}>
                                    level 2
                                    <div onClick={e => showMeYourUnderMouse('level 3', e)}>level 3</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <Event bubbling */}
                </div> 
    }
}