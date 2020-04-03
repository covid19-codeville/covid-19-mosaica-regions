import React, { useState, useRef } from 'react'
import { REGION_API_URL, REGION_TOOLTIP_GLOBAL_ID } from './config/constants';
import { formatUpdateDate, findRegionObjectByName } from './helpers'
import useDataLoader from './helpers/useDataLoader'

import Map from './Map'
import RegionTooltip, { rebuild, show } from './RegionTooltip'
import Table from './Table'

import './App.css'

function App() {
  const { regions, updated } = useDataLoader(REGION_API_URL)

  const [ regionObject, setRegionObject ] = useState(null)

  const ref = useRef(null)

  const mapEventHandlers = {
    onMouseEnter (e, regionName) {
      e.target.classList.add('active')
      const region = findRegionObjectByName(regionName, regions)
      setRegionObject(region || { name: regionName })
      rebuild()
    },
    onMouseLeave (e) {
      e.target.classList.remove('active')
      setRegionObject(null)
    }
  }

  return (
    <div className="cv19App">
      <h3 class="cv19App__title">COVID-19 в России</h3>

      <span className="cv19App__updated">Данные <strong>стопкоронавирус.рф</strong>, обновлено: { formatUpdateDate(updated) }</span>

      <div className="cv19App__content">
        <div className="cv19App__content_row">
          { regions.length > 0 ? <Map { ...mapEventHandlers } data-tip data-for={ REGION_TOOLTIP_GLOBAL_ID } regionObject={ regionObject } /> : '' }
        </div>
        {/* <div className="cv19App__content_row"> */}
          <Table regionObject={ regionObject } regions={ regions } { ...mapEventHandlers } />
        {/* </div> */}
      </div>
      <RegionTooltip tooltipRef={ref} id={ REGION_TOOLTIP_GLOBAL_ID } regionObject={ regionObject } place="bottom" />
    </div>
  )
}

export default App
