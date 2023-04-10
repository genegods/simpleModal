import React, {useState} from 'react'
import Modal from './Modal'

const MainPage = () => {
    const [showModal, setShowModal] = useState(false)

    const handleShowModal = () => {
        setShowModal(true)
    }
    console.log('showModal', showModal)
  return (
    <React.Fragment>
    <main>
      <div>
        <div className="h-screen centered">
            <button onClick={handleShowModal} className='py-2 px-5 bg-white text-purple-900 rounded font-bold'>View Modal</button>
        </div>
      </div>

      {/* modal section */}
      <div>
        {
            showModal &&
            <Modal showModal={() =>setShowModal(false)}/>
        }
       
      </div>
    </main>
  </React.Fragment>
  
  )
}

export default MainPage