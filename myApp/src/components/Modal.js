import React from 'react'

const Modal = ({showModal}) => {

    const closeModal = () => {
        showModal()
    }
  return (
    <React.Fragment>
    <main>
      <div className="w-screen h-screen bg-gray-900 opacity-90 centered overflow-x-hidden overflow-y-auto fixed inset-0 z-50">
        <div className="bg-white w-96 h-96 text-3xl flex flex-col justify-between py-10 md:w-2/5">
            <p className="font-bold text-center">Add Your Content</p>
            <div className="flex justify-evenly">
            <button  className='py-1 px-5 border-2 border-purple-900 text-purple-900 rounded font-bold text-sm'>ok</button>
            <button onClick={closeModal} className='py-1 px-5 border-2 border-purple-900 text-purple-900 rounded font-bold text-sm'>cancel</button>
            </div>
        </div>
      </div>
    </main>
  </React.Fragment>
  
  )
}

export default Modal