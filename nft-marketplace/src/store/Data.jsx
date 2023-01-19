import {createGlobalState } from "react-hooks-global-state"
const { setGlobalState, useGlobalState, getGlobalState} = createGlobalState ({
    modal: 'scale-0',
    showNft: 'scale-100',
})

export {
    useGlobalState,
    setGlobalState,
    getGlobalState,
}
