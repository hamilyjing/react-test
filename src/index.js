import {createElement,initVnode} from 'utils/react';
import Root from 'container/root';
import Test from 'components/test'
let testVnode = createElement(Root);
let testNode = initVnode(testVnode);
document.getElementById('root').appendChild(testNode);
