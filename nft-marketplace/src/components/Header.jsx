import React from 'react'
import nftLogo from "../assets/nft.png"
import { connectWallet } from '../Blockchain.services'

const Header = () => {
  return (
        <div className="w-4/5 flex md:justify-center justify-between
        items-center py-4 mx-auto" >
        <div className="md:flex-[0.5] flex-initial justify-center items-center">
            <img
                className='w-32 cursor-pointer' src={nftLogo}  alt='Logo' />
        </div>
        <ul 
            className='md:flex-[0.5] text-white md:flex
            hidden list-none justify-between item-center flex-initial'>
            <li className='mx-4 cursor-pointer'> Market</li>
            <li className='mx-4 cursor-pointer'> Artist</li>
            <li className='mx-4 cursor-pointer'> Features</li>
            <li className='mx-4 cursor-pointer'> Community</li>
        </ul>
        <button  className='shadow-xl shadow-blue-900 text-white ml-8
        bg-[#b5ba25] hover:bg-[#D3EE70] md:text-xs p-2 
        rounded-full '
        onClick={connectWallet}>
           Connect Wallet 
        </button>
    </div>
  )
}

export default Header