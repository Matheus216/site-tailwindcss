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

export default function Navbar() {
  
    return (
      <div className="w-full h-40 max-w-full items-center justify-between flex">
        <div className="md:text-lg lg:text-lg sm:text-sm font-mono text-slate-400 w-[20%]">
          Texas dev web creative
        </div>
        <ul className='md:flex lg:flex md:w-[30%] lg:w-[30%] justify-between items-center gap-10 w-0 hidden'>
          <ItemNav description='hero' href='#' icon={faHouse} />
          <ItemNav description='about' href='#' icon ={faBook}/>
          <ItemNav description='Services' href='#' icon={faBuilding} />
          <ItemNav description='Contact' href='#' icon={faPhone} />
        </ul>
        <div className='w-[20%] text-slate-300'>
          <div className='cursor-pointer hidden md:block lg:block'>Get started</div>
          <i className=' md:hidden lg:hidden'><a href='#'><FontAwesomeIcon className='h-6' icon={faBars} /></a></i>
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