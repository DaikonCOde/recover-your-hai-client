// Hooks
import { NavLink } from "react-router-dom"
// Animation
import AsideLayout from "../../layout/AsideLayout"
// Assets
import { MdHome, MdEmergency, MdSentimentSatisfiedAlt } from "react-icons/md"
import { BsQuestion } from 'react-icons/bs';
// Styles
import { ContentNavMobile } from "./NavMobileStyles"

// list Menu
const listMenu = [
  {
    id: 1,
    label: 'Inicio',
    href: '/',
    icon: MdHome,
  },
  {
    id: 2,
    label: 'Clínicas',
    href: '/clinics',
    icon: MdEmergency,

  },
  {
    id: 3,
    label: 'Pacientes',
    href: '/patients',
    icon: MdSentimentSatisfiedAlt,
  },
  {
    id: 4,
    label: 'Preguntas frecuentes',
    href: '/faqs',
    icon: BsQuestion,
  },
  
]

const NavMobile = ({ close}) => {
  return (
    <AsideLayout close={close} title={'Menú'} >
      <ContentNavMobile>
        
        <ul className="listMenu">
          {
            listMenu.map(({ id, label, href, icon: Icon }) => (
              <li key={id} >
                <NavLink 
                  to={href} 
                  className={({ isActive }) => isActive ? 'activeRoute' : undefined }
                  onClick={ close }
                >
                  <i>
                    <Icon />
                  </i>
                  {label}
                </NavLink>
              </li>
            ))
          }
        </ul>
      </ContentNavMobile>
    </AsideLayout>
  )
}

export default NavMobile