"use client"
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { 
  IconDefinition, 
  faBars, 
  faHouse, 
  faPhone, 
  faBook, 
  faBuilding 
} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

export default function Navbar() {
    const [small, setSmall] = useState('w-0 hidden')
    
    function expandNavbar(e: any) {
        console.log('Open')
        if (small.includes('w-0'))
          setSmall('w-[40%] gap-50')
        else 
          setSmall('w-0 hidden')

        e.preventDefault()
      }

    return (
        <div className="w-full h-16  items-center justify-between flex ">
          <div className="md:text-lg font-mono text-slate-400">
            <a className="hover:text-orange-500 cursor-pointer font-bold text-[1.5rem]">Texas dev web creative</a>
          </div>
          <ul className={`flex gap-8`}>
            <ItemNav description='hero' href='#' icon={faHouse} />
            <ItemNav description='about' href='#' icon ={faBook}/>
            <ItemNav description='Services' href='#' icon={faBuilding} />
            <ItemNav description='Contact' href='#' icon={faPhone} />
          </ul>
          <button className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-orange-800 duration-300 bg-orange-500 text-white font-bold rounded p-3 cursor-pointer hidden md:block lg:block'>
            Get started
          </button>
          <i className=' md:hidden lg:hidden'><a href='#' onClick={e => expandNavbar(e)}><FontAwesomeIcon className='h-6' icon={faBars} /></a></i>
        </div>
    )
  }

interface IItemNavRequest { 
  icon: IconDefinition;
  description: string;
  href: string;
}

function ItemNav(request: IItemNavRequest) { 
  
  const { description, href, icon } = request;

  return (
      <li className='list-none flex'>
          <a className='flex p-5 text-slate-300 hover:text-orange-500 transition-colors delay-150 h-4 md:pt-0' href={href} >
            <i>
              <FontAwesomeIcon icon={icon} className='h-4'/> {description}
            </i>
          </a>
      </li>
  )
}
