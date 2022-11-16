import React from 'react'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import SectionFour from '../../components/secctionFour/SectionFour'
import SectionOne from '../../components/sectionOne/SectionOne'
import SectionThree from '../../components/sectionThree/SectionThree'
import SectionTwo from '../../components/sectionTwo/SectionTwo'

function Upload() {
  return (
    <div>
        <div className="upload bg-gray-100">
            <Navbar />
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <Footer />
        </div>
    </div>
  )
}

export default Upload