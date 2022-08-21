import React from "react"
import ContentLoader from "react-content-loader"

const SkeletonCharList = (props) => (
  <ContentLoader 
    speed={4}
    width={200}
    height={318}
    viewBox="0 0 200 318"
    backgroundColor="#3a3636"
    foregroundColor="#912b2b"
    {...props}
  >
    <rect x="-7" y="4" rx="0" ry="0" width="200" height="200" /> 
    <rect x="6" y="222" rx="0" ry="0" width="185" height="50" /> 

  </ContentLoader>
)

export default SkeletonCharList