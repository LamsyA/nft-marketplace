import React from 'react'
import {FaTimes} from "react-icons/fa"
import {useState} from 'react' 
import {setGlobalState, useGlobalState} from '../store/Data'

const imgBanner =
 `https://images.cointelegraph.com/images/1434_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjEtMDYvNGE4NmNmOWQtODM2Mi00YmVhLThiMzctZDEyODAxNjUxZTE1LmpwZWc=.jpg`


const MintNFT = () => {

    const [modal] = useGlobalState('modal')


    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [fileUrl, setFileUrl] = useState('')
    const [imgUpload, setImgUpload] = useState(null)

    const handleSubmit = (e) =>{
        e.preventDefault()

        if(!title || !description || !price) return
        console.log("Minted.....")

        closeToggle()
    }
    
    const closeToggle = ()  => {
        setGlobalState('modal', 'scale-0')
        resetForm()
    }


    const resetForm = () => {
        setFileUrl('')
        setImgUpload(null)
        setTitle('')
        setDescription('')
        setPrice('')
    }

  return (
    <div className={`fixed top-0 left-0 w-screen h-screen
    flex items-center justify-center bg-black bg-opacity-50
    transform transition-transform duration-300 ${modal}`}>
        <div className='bg-[#010109] shadow-xl shadow-[#3e6192e3]
        rounded-xl w-11/12 md:w-2/5 h-7/12 p-6'>
            
        <form onSubmit={handleSubmit} className='flex flex-col '>
            <div className='flex justify-between item-center text-gray-400'>
                <p className='font-semibold text-gray-400'>ADD NFT</p>
                <button
                type='button'
                onClick={closeToggle}
                className='border-0 bg-transparent focus:outline-none'>
                    <FaTimes/>
                </button>
            </div>

            <div className='flex justify-center items-center 
                rounded-xl mt-5 '>
                <div className='shrink-0 rounded-xl overflow-hidden h-20 w-20' >
                    <img className='h-full w-full object-cover cursor-pointer'
                        src={imgUpload || imgBanner} alt='NFT' />
                </div>
            </div>
            <div className='flex justify-between items-center bg-gray-800
            rounded-xl mt-5'>
                <label className='block'>
                    <span className='sr-only'>Choose Image item</span>
                    <input 
                    className='block w-full text-sm text-slate-500 file:mr-4
                    file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm
                    hover:file:bg-[#c4e631] file:font-semibold focus:outline-none
                    cursor-pointer focus:ring-0'
                     type='file' 
                    accept='image/png, image/gif, image/webp, image/jpeg, image/jpg'                
                   
                    required/>
                </label>
            </div>
            <div className='flex justify-between items-center bg-gray-800
            rounded-xl mt-5'>
                    <input 
                    className='block w-full text-sm text-slate-500 
                    focus:outline-none focus:ring-0 p-2 
                   bg-transparent border-0'
                     type='text'  
                     placeholder='Title'
                     name='title' 
                     onChange={(e) => setTitle(e.target.value)} 
                     value={title}        
                    required/>
            </div>
            <div className='flex justify-between items-center bg-gray-800
            rounded-xl mt-5'>
                    <input 
                    className='block w-full text-sm text-slate-500 
                    focus:outline-none focus:ring-0 p-2 
                   bg-transparent border-0'
                     type='number'  
                     placeholder='Price (ETH)'
                     name='price'
                     onChange={(e) => setPrice(e.target.value)} 
                     value={price}
                     min= {0.01}
                     step={0.01}            
                    required/>
            </div>
            <div className='flex justify-between items-center bg-gray-800
            rounded-xl mt-5'>
                    <textarea 
                    className='block w-full text-sm text-slate-500 
                    focus:outline-none focus:ring-0 p-2
                   bg-transparent border-0 h-20 resize-none'
                     type='text'  
                     placeholder='Description'
                     name='description'   
                     onChange={(e) => setDescription(e.target.value)} 
                     value={description}         
                    required></textarea>
            </div>
                <button className=" flex justify-center items-center
                  shadow-lg shadow-black text-white bg-[#b5ba25]
                 hover:bg-[#D3EE70] rounded-full mt-5 p-2 "> Mint Now </button>
        </form>
        </div> 
    </div>
  )
}

export default MintNFT