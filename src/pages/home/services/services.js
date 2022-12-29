import React from 'react'
import Service from './service'

import { figma, code, database } from '../../../images/svgs'

const Services = () => {
  return (
    <div className="w-full md:w-4/5 mx-auto px-4 py-8">
        {/* <div className='grid grid-cols-3 gap-3 lg:gap-12'> */}
        <div className='flex flex-col lg:flex-row lg:justify-between'>
            <Service logo={figma} title="Ui/UX Design" description="Stuning designs" />

            <Service logo={code} title="Application developement" description="Optimized app for all your needs" />

            <Service logo={database} title="Data driven developement" description="Manage your data and make it easy to read" />
        </div>
        <div>
          {/* <div className="contra-hire-me-button" data-analyticsuserid="3df9bb89-07d3-47b9-bdd1-e72284affba9" data-theme="light" data-username="mohamed_hamaida_c175yhzf">
          </div><script async src="https://contra.com/static/embed/sdk.js" charset="utf-8"></script> */}
        </div>
    </div>
  )
}

export default Services