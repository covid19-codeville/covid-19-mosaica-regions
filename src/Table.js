import React, { useRef, useEffect } from 'react'

import './Table.css'

export default function Table ({ regionObject, regions = [], onMouseEnter, onMouseLeave }) {
  const regionObjectName = regionObject ? regionObject.name : null

  const activeRef = useRef(null)

  // useEffect(() => {
  //   if (activeRef.current && regionObject) {
  //     activeRef.current.scrollIntoView(true)
  //   }
  // }, [ activeRef, regionObject ])

  return <div className="cv19TableContainer">
    <table className="cv19Table">
      <thead>
        <tr>
          <th>Регион</th>
          <th>Заражений</th>
          <th>Выздоровело</th>
          <th>Умерло</th>
        </tr>
      </thead>
      <tbody>
      { regions.map((regionObj, index) => (
      <tr ref={ regionObjectName === regionObj.name ? activeRef : null } className={ regionObjectName === regionObj.name ? 'selected' : '' } key={ index } onMouseEnter={ e => onMouseEnter(e, regionObj.name) } onMouseLeave={ e => onMouseLeave(e, regionObj.name) }>
        <td className="cv19Table__cell">{ regionObj.name }</td>
        <td className="cv19Table__cell cv19Table__cell--cases">{ regionObj.cases }</td>
        <td className="cv19Table__cell cv19Table__cell--recovered">{ regionObj.recovered }</td>
        <td className="cv19Table__cell cv19Table__cell--deaths">{ regionObj.deaths }</td>
      </tr>
      )) }
      </tbody>
    </table>
  </div>
}