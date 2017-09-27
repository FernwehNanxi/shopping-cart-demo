/*export const changePrice=makeAction('CHANGE_PRICE')
export const changeStyle=makeAction('CHANGE_STYLE')
export const addItem=makeAction('ADD_ITEM')
export const removeItem=makeAction('REMOVE_ITEM')

function makeAction(type){
    return ({dispatch}, ...args) => dispatch(type, ...args)
}*/

import * as types from './mutation-types'
const makeAction =(type)=>{
    return ({commit}, ...args)=>commit(type, ...args)
}
export const changePrice=makeAction(types.CHANGE_PRICE)
export const changeStyle=makeAction(types.CHANGE_STYLE)
export const addItem=makeAction(types.ADD_ITEM)
export const removeItem=makeAction(types.REMOVE_ITEM)