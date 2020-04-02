import { geoConicConformal } from 'd3-geo'

const projection = geoConicConformal()
  .scale(600)
  .rotate([-105, 0])
  .center([0, 65])
  .parallels([30, 62]);

export default projection