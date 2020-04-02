import React from 'react'

import './RegionTooltipContent.css'

export default function RegionTooltipContent ({ name, cases, recovered, deaths }) {
  const haveData = [cases,recovered,deaths].some(x => !!x)

  return <>
    <h4 className="RegionTooltipContent__title">{ name }</h4>
    { cases ? <p className="RegionTooltipContent__label RegionTooltipContent__label--cases">Случаев заражений: <strong>{ cases }</strong></p> : '' }
    { recovered ? <p className="RegionTooltipContent__label RegionTooltipContent__label--recovered">Вылечилось: <strong>{ recovered }</strong></p> : '' }
    { deaths ? <p className="RegionTooltipContent__label RegionTooltipContent__label--deaths">Умерло: <strong>{ deaths }</strong></p> : '' }

    { !haveData ? <p className="RegionTooltipContent__label">Нет данных</p> : ''}
  </>
}