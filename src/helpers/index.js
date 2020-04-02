/*
  Empty function filler
  used in props as default value
*/
export function noop () {}

/*
  Add zero before digit
*/
export function zfill (num) {
  if (num < 10) {
    return `0${num}`
  }
  return num
}

/*
  convert timestamp to d.m.Y H:i:s
*/
export function formatUpdateDate (timestamp) {
  const date = new Date(timestamp)
  return `${zfill(date.getDate())}.${zfill(date.getMonth() + 1)}.${zfill(date.getFullYear())}, ${zfill(date.getHours())}:${zfill(date.getMinutes())}:${zfill(date.getSeconds())}`
}

/*
  Find concrette regionObject by name
*/
export function findRegionObjectByName (name, regions) {
  return regions.find(region => region.name.localeCompare(name) === 0)
}