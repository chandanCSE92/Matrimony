import R from 'ramda'

export const flex={display: 'flex'}
export const row = {flexDirection: 'row'}
export const column = {flexDirection: 'column'}
export const sb = {justifyContent: 'space-between'}
export const sa = {justifyContent: 'space-around'}
export const fs = {justifyContent: 'flex-start'}
export const fe = {justifyContent: 'flex-end'}
export const frsb = R.merge(flex, row, sb)
export const fr = R.merge(flex, row)
export const fc = R.merge(flex, column)
export const frsa = R.mergeAll([flex, row, sa])
console.log(frsa)
