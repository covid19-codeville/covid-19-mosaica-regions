import React from 'react'
import ReactTooltip from 'react-tooltip'
import RegionTooltipContent from './RegionTooltipContent'

export default function RegionTooltip ({ id, regionObject, ...props }) {
  const getTooltipContent = () => {
    if (!regionObject) return 'Пока нет данных'
    return <RegionTooltipContent { ...regionObject } />
  }

  return <ReactTooltip id={ id } { ...props } getContent={getTooltipContent} />
}

export function rebuild () {
  ReactTooltip.rebuild()
}
export function show (ref) {
  ReactTooltip.show(ref)
}