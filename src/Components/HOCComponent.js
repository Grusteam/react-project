import React  from 'react';

const HOC = (Comp, props) =>  <div>
                                <span>HOC</span>
                                <span>{props.name}</span>
                                <div>
                                    <Comp { ...props  } addProp="Down prop 1" />
                                </div>
                            </div>

export default  HOC