import React from 'react'
import Footer from '../../components/footer/Footer'
import InputData from '../../components/input/InputData'
import Navbar from '../../components/navbar/Navbar'


function UploadData() {
  return (
    <div>
        <main className='bg-gray-100'>
            <Navbar />
            <InputData />
            <Footer />
        </main>
    </div>
  )
}

export default UploadData