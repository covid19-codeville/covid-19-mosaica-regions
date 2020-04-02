import React from 'react'
import { ComposableMap, Geographies, Geography } from 'react-simple-maps'
import projection from './helpers/projection-asia-lambert-conic-conformal'
import topojson from './data/russia.json'

export default function Map ({ onMouseEnter, onMouseLeave, ...props }) {
  return <ComposableMap projection={projection}>
  <Geographies geography={topojson}>
    {({ geographies }) => geographies.map(geography => {
      return <Geography
        key={geography.rsmKey}
        geography={geography}
        onMouseEnter={e => onMouseEnter(e, geography)}
        onMouseLeave={e => onMouseLeave(e, geography)}
        { ...props }
      />
    })}
  </Geographies>
</ComposableMap>
}