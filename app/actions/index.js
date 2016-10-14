import * as testAction from './test';

import Util from '../utils/Util';

let actions = Object.assign(
        {},
        testAction,
);


// 如果有重复key就抛出错误
if(
    !Util.keysDupliCheck(
        actions,
        testAction,
    )
){
    throw new Error("Actions Keys Duplicated!");
}

export default actions;
