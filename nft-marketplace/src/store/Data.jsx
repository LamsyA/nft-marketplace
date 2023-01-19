import {createGlobalState } from "react-hooks-global-state"
const { setGlobalState, useGlobalState, getGlobalState} = createGlobalState ({
    modal: 'scale-0',
    showNft: 'scale-0',
    updateModal: 'scale-0',
    loader: {show: false, msg: '' },
    alert: {show: false, msg: '' , color: ''},
 
})
const setAlert = (msg, color= 'green') =>{
  setGlobalState('loader', {show: false, msg:''})
  setGlobalState('alert', { show: true, msg, color})
  setTimeout(()=> {
    setGlobalState('alert', { show: false, msg, color})
  },6000)
}

const setLoadingMsg = (msg) => {
  setGlobalState('loader', { show: true, msg})
}

export {
    useGlobalState,
    setGlobalState,
    getGlobalState,
    setLoadingMsg,
    setAlert,
}
