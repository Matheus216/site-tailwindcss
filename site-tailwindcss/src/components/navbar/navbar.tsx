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
import { useEffect, useState } from 'react'

export default function Navbar() {
   const [dimensions, setDimensions] = useState({width: window.innerWidth, height: window.innerHeight})

    useEffect(() => {
        const updateDimensions = () => { 
          setDimensions({width: window.innerWidth, height: window.innerHeight})
        }

        window.addEventListener('resize', updateDimensions)
      }, [])

    const smallBreakpoint = 680
    const isSmallScreen = dimensions.width <= smallBreakpoint

    const [small, setSmall] = useState('h-0')

    function expandNavbar(e: any) {
        console.log('Open')
        if (small.includes('h-0'))
          setSmall('h-240px')
        else 
          setSmall('h-0')

        e.preventDefault()
      }

    return (
        <div className="w-full h-16 md:p-10 lg:p-10 items-center justify-between md:flex lg:flex sm:block ">
          <div className="md:text-lg font-mono text-slate-400">
            <a className="hover:text-orange-500 cursor-pointer font-bold text-[1.5rem]">Texas dev web creative</a>
          </div>
          {
            isSmallScreen ? <DropdownResponsive resp={small} /> :
            (
              <ul className={`flex gap-7 sm:hidden md:flex lg:flex`}>
                <ItemNav liStyle={'flex'} linkStyle={'flex p-5 text-slate-300 hover:text-orange-500 transition-colors delay-150 h-4 md:pt-0'}description='hero' href='#' icon={faHouse} />
                <ItemNav liStyle={'flex'} linkStyle={'flex p-5 text-slate-300 hover:text-orange-500 transition-colors delay-150 h-4 md:pt-0'}description='about' href='#' icon ={faBook}/>
                <ItemNav liStyle={'flex'} linkStyle={'flex p-5 text-slate-300 hover:text-orange-500 transition-colors delay-150 h-4 md:pt-0'}description='Services' href='#' icon={faBuilding} />
                <ItemNav liStyle={'flex'} linkStyle={'flex p-5 text-slate-300 hover:text-orange-500 transition-colors delay-150 h-4 md:pt-0'}description='Contact' href='#' icon={faPhone} />
              </ul>
            )
          }
          <a className='hidden md:block lg:block hover:scale-105 active:scale-75 transition ease-in-out bg-orange-500 text-white py-[0.5rem] px-[1rem] border-none outline-none rounded-[20px] text-[0.9rem] font-bold cursor-pointer'>
            Get started
          </a>
          <i className='text-[1.5rem] block md:hidden lg:hidden '><a href='#' onClick={e => expandNavbar(e)}><FontAwesomeIcon className='h-8' icon={faBars} /></a></i>
        </div>
    )
  }

function DropdownResponsive({resp}:any) { 
  const liStyle = 'flex p-[0.7rem] items-center justify-center'
  return (
    <div className={`${resp} transition-[height] delay-[0.2s] md:h-0 lg:h-0 absolute right-8 top-16 w-[300px] bg-[#9ca3af4d] backdrop-blur-[5px] rounded-[10px] overflow-hidden`}>
      <ItemNav liStyle={liStyle} linkStyle={'text-slate-300 hover:text-orange-500 transition-colors delay-150 h-4 md:pt-0'} description='hero' href='#' icon={faHouse} />
      <ItemNav liStyle={liStyle} linkStyle={'text-slate-300 hover:text-orange-500 transition-colors delay-150 h-4 md:pt-0'}description='about' href='#' icon ={faBook}/>
      <ItemNav liStyle={liStyle} linkStyle={'text-slate-300 hover:text-orange-500 transition-colors delay-150 h-4 md:pt-0'} description='Services' href='#' icon={faBuilding} />
      <ItemNav liStyle={liStyle} linkStyle={'text-slate-300 hover:text-orange-500 transition-colors delay-150 h-4 md:pt-0'}description='Contact' href='#' icon={faPhone} />
      <li className={`${liStyle}`}>
        <a className='w-full justify-center text-center hover:scale-105 active:scale-75 transition ease-in-out bg-orange-500 text-white py-[0.5rem] px-[1rem] border-none outline-none rounded-[20px] text-[0.9rem] font-bold cursor-pointer'> Get started </a>
      </li>
      
    </div>
  )
}

interface IItemNavRequest { 
  icon: IconDefinition;
  description: string;
  href: string;
  liStyle:string;
  linkStyle:string;
}

function ItemNav(request: IItemNavRequest) { 
  
  const { description, href, icon } = request;

  return (
      <li className={request.liStyle}>
          <a className={request.linkStyle} href={href} >
            <i>
              <FontAwesomeIcon icon={icon} className='h-4'/> {description}
            </i>
          </a>
      </li>
  )
}
