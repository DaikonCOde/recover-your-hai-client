import { useState, useEffect } from 'react'
// Components
import AsideLayout from '../../../../layout/AsideLayout'
import RangeFilter from '../RangeFilter';
import { ContentNavFilter } from './NavFilterStyles';


const NavFilter = ({ close }) => {
  
  const [ valueFilters, setValueFilters ] = useState({
    price: 1500,
    foriculos: 750
  })
  
  const changeValueFilter = (e) => {

    const name = e.target.name;
    const value = e.target.value;

    setValueFilters( prev => ({ 
      ...prev,
      [name]: value
    }) )

  } 

  // price
  useEffect( () => {

    const valuePrice = document.querySelector('#valuePrice');
    if ( valuePrice ) {
      const min = 1000;
      const max = 3000;

      const valueToMove = (valueFilters.price - min) * 100 / (max - min) 

      valuePrice.style.left = `${valueToMove}%`;
    }

  }, [valueFilters.price] )

  // foriculos
  useEffect( () => {

    const valueForiculos = document.querySelector('#valueForiculos');
    if ( valueForiculos ) {
      const min = 500;
      const max = 2000;

      const valueToMove = (valueFilters.foriculos - min) * 100 / (max - min) 
      // assigned porcentage value to valueforiculos 
      valueForiculos.style.left = `${valueToMove}%`;
    }

  }, [valueFilters.foriculos] )

  return (
    <AsideLayout
      close={close}
      title={ 'Filtrar clínica' }
    >
      <ContentNavFilter>
        <RangeFilter
          label='Precio'
          min={ 1000 }
          max={ 3000 }
          name="price"
          value={valueFilters.price}
          change={changeValueFilter}
          id={'valuePrice'}
          symbole="€"
        /> 
        <RangeFilter
          label='N° de folículos'
          min={ 500 }
          max={ 2000 }
          name={'foriculos'}
          id={'valueForiculos'}
          value={valueFilters.foriculos}
          change={changeValueFilter}
        /> 
      </ContentNavFilter>
    </AsideLayout>
  )
}

export default NavFilter