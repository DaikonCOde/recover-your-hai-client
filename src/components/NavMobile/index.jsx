// Hooks
import { NavLink } from "react-router-dom"
// Animation
import { motion } from "framer-motion"
// Assets
import { MdClose, MdHome, MdEmergency, MdSentimentSatisfiedAlt } from "react-icons/md"
// Styles
import { ContentNavMobile, Overlay } from "./NavMobileStyles"

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
]

const NavMobile = ({ close }) => {
  return (
    <>
      <ContentNavMobile
        as ={ motion.nav }
        initial={{ x: 300 }}
        animate={ { x: 0 } }
        transition={ { delay: 0.3, duration: 0.5 } }
        exit={{x: 300  }}
      >
        <div className="top">
          <h4 className="label">Menú</h4>
          <i onClick={ close } >
            <MdClose />
          </i>
        </div>
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

      <Overlay 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{opacity: 0}}
        transition={{ duration: 0.3 }}
        onClick={close} 
      ></Overlay>
    </>
  )
}

export default NavMobile