import React from 'react'
import { ContentAccordion } from './AccordionStyles'
import { BiChevronRight } from 'react-icons/bi';

const Accordion = ({ data }) => {
  return (
    <ContentAccordion className="accordion">
      {
        data.map( (item) => (
          <div className="tab" key={item.idTab}>
            <input type="radio" id={item.idTab} name="rd" />
            <label className="label" for={item.idTab}>
              {item.label}
              <i>
                <BiChevronRight />
              </i>
            </label>
            <div className="content">
              {item.response}
            </div>
          </div>
        )  )
      }
    </ContentAccordion>
  )
}

export default Accordion