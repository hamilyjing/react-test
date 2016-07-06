import {createElement} from '../utils/react';
import Layout from '../components/layout';
import Test from '../components/test'
export default function(props){
    return {
        props:props,
        render:function() {
            return  createElement(
                Layout,
                null,
                createElement(Test)
            );
        }
    }
}