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
    const [small, setSmall] = useState('m-0')
    
    function expandNavbar() {
        console.log('Open')
        if (small == '')
          setSmall('m-100')
        else 
          setSmall('m-0')
      }

    return (
      <div className="w-full h-40 max-w-full items-center justify-between flex">
        <div className="md:text-lg lg:text-lg sm:text-sm font-mono text-slate-400 w-[20%]">
          <div className="md:hidden lg:hidden block text-2xl" >TDWC</div>
          <div className="hidden md:block lg:block">Texas dev web creative</div>
        </div>
        <ul className={`md:flex lg:flex md:w-[30%] lg:w-[30%] justify-between items-center gap-10 ${small} hidden sm:flex-col md:flex-row`}>
          <ItemNav description='hero' href='#' icon={faHouse} />
          <ItemNav description='about' href='#' icon ={faBook}/>
          <ItemNav description='Services' href='#' icon={faBuilding} />
          <ItemNav description='Contact' href='#' icon={faPhone} />
        </ul>
        <div className='w-[20%] text-slate-300 text-center'>
          <div className='cursor-pointer hidden md:block lg:block'>Get started</div>
          <i className=' md:hidden lg:hidden'><a href='#' onClick={expandNavbar}><FontAwesomeIcon className='h-6' icon={faBars} /></a></i>
        </div>

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
          <a className='text-slate-300 hover:text-orange-500 transition-colors delay-150 h-4' href={href} >
            <i>
              <FontAwesomeIcon icon={icon} className='h-4'/> {description}
            </i>
          </a>
      </li>
  )
}
