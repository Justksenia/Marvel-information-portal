import React from "react"
import ContentLoader from "react-content-loader"

const SkeletonRandom = (props) => (
  <ContentLoader 
    speed={3}
    width={480}
    height={180}
    viewBox="0 0 480 200"
    backgroundColor="#3a3636"
    foregroundColor="#912b2b"
    {...props}
  >
    <rect x="11" y="9" rx="0" ry="0" width="180" height="180" /> 
    <rect x="217" y="11" rx="0" ry="0" width="289" height="21" /> 
    <rect x="218" y="69" rx="0" ry="0" width="279" height="30" /> 
    <rect x="223" y="143" rx="0" ry="0" width="100" height="40" /> 
    <rect x="381" y="141" rx="0" ry="0" width="100" height="40" />
  </ContentLoader>
)

export default SkeletonRandom