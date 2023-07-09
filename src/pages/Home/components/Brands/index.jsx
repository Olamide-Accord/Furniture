import React from 'react';
import './brands.css'; 
import { FaDropbox } from 'react-icons/fa';
import { GiWoodCabin, GiWoodenCrate } from 'react-icons/gi'
import { LuRockingChair } from 'react-icons/lu';
import { SiAirtable } from 'react-icons/si'

const index = () => {
  return (
    <section className='brands'>
      <h3 className="title">Our Brands</h3>
      <div className="container">
        <div className="row">
          {
            brandIcons.map((item) => {
              const { id, icon } = item;
              return (
                <div className='card' key={id}>
                  <span>
                    {icon}
                  </span>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default index


const brandIcons = [
  {
    id: 1,
    icon: <FaDropbox />
  },
  {
    id: 2,
    icon: <GiWoodCabin />
  },
  {
    id: 3,
    icon: <SiAirtable />
  },
  {
    id: 4,
    icon: <LuRockingChair />
  },
  {
    id: 5,
    icon: <GiWoodenCrate />
  },
]