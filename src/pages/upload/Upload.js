import React from 'react'
import Drop from '../../components/drop/Drop'
import SectionFive from '../../components/sectionFive/SectionFive'
import SectionFour from '../../components/sectionFour/SectionFour'
import SectionOne from '../../components/sectionOne/SectionOne'
import SectionThree from '../../components/sectionThree/SectionThree'
import SectionTwo from '../../components/sectionTwo/SectionTwo'

function Upload() {
  return (
    <div>
        <div className="upload bg-gray-100 font-manrope">
            <SectionOne />
            <SectionTwo />
            <Drop />
            <SectionThree />
            <SectionFour />
            <SectionFive />
        </div>
    </div>
  )
}

export default Upload