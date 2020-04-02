import React from 'react'
import ReactTooltip from 'react-tooltip'
import RegionTooltipContent from './RegionTooltipContent'

export default function RegionTooltip ({ id, regionObject }) {
  const getTooltipContent = () => {
    if (!regionObject) return 'Пока нет данных'
    return <RegionTooltipContent { ...regionObject } />
  }

  return <ReactTooltip id={ id } place="top" type="dark" effect="float" getContent={getTooltipContent} />
}

export function rebuild () {
  ReactTooltip.rebuild()
}