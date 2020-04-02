import { useState, useEffect } from 'react'

export default function useDataLoader (url) {
  const [ regions, setRegions ] = useState([])
  const [ updated, setUpdated ] = useState(0)

  useEffect(() => {
    async function fetchInitialData () {
      const response = await fetch(url)
      const json = await response.json()

      setUpdated(json.updated)
      setRegions(json.regions)
    }
    fetchInitialData()
  }, [])

  return {
    regions,
    updated
  }
}