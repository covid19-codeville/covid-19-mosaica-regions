import React from 'react'
import { ComposableMap, Geographies, Geography } from 'react-simple-maps'
import projection from './helpers/projection-asia-lambert-conic-conformal'
import topojson from './data/russia.json'

export default function Map ({ regionObject, onMouseEnter, onMouseLeave, ...props }) {
  const regionObjectName = regionObject ? regionObject.name : null

  return <ComposableMap projection={projection}>
  <Geographies geography={topojson}>
    {({ geographies }) => geographies.map(geography => {
      return <Geography
        className={ regionObjectName === geography.properties.NAME_1 ? 'active' : '' }
        key={geography.rsmKey}
        geography={geography}
        onMouseEnter={e => onMouseEnter(e, geography.properties.NAME_1)}
        onMouseLeave={e => onMouseLeave(e, geography.properties.NAME_1)}
        { ...props }
      />
    })}
  </Geographies>
</ComposableMap>
}