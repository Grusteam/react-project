import { createContext } from 'react'

const context = createContext('commonContextDefault');
const  { Consumer, Provider } = context;
export default context;
export { Consumer, Provider };