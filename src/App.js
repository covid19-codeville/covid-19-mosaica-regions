import React, { useState } from 'react'
import { REGION_API_URL, REGION_TOOLTIP_GLOBAL_ID } from './config/constants';
import { formatUpdateDate, findRegionObjectByName } from './helpers'
import useDataLoader from './helpers/useDataLoader'

import Map from './Map'
import RegionTooltip, { rebuild } from './RegionTooltip'

import './App.css'

function App() {
  const { regions, updated } = useDataLoader(REGION_API_URL)

  const [ regionObject, setRegionObject ] = useState(null)

  const mapEventHandlers = {
    onMouseEnter (e, geo) {
      e.target.classList.add('active')
      const region = findRegionObjectByName(geo.properties.NAME_1, regions)
      setRegionObject(region || { name: geo.properties.NAME_1 })
      rebuild()
    },
    onMouseLeave (e, geo) {
      e.target.classList.remove('active')
      setRegionObject(null)
    }
  }

  return (
    <div className="App">
      <span className="App__updated">Обновлено: { formatUpdateDate(updated) }</span>
      { regions.length > 0 ? <><Map { ...mapEventHandlers } data-tip data-for={ REGION_TOOLTIP_GLOBAL_ID } /></> : '' }

      <RegionTooltip id={ REGION_TOOLTIP_GLOBAL_ID } regionObject={ regionObject } />
    </div>
  )
}

export default App
