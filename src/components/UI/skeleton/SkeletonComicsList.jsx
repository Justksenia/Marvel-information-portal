import React from "react"
import ContentLoader from "react-content-loader"

const SkeletonComicsList = (props) => (
  <ContentLoader 
    speed={3}
    width={253}
    height={421}
    viewBox="0 0 253 421"
    backgroundColor="#3a3636"
    foregroundColor="#912b2b"
    {...props}
  >
    <rect x="8" y="359" rx="0" ry="0" width="185" height="14" /> 
    <rect x="95" y="278" rx="0" ry="0" width="13" height="0" /> 
    <rect x="3" y="2" rx="0" ry="0" width="225" height="345" /> 
    <rect x="9" y="385" rx="0" ry="0" width="45" height="22" />
  </ContentLoader>
)

export default SkeletonComicsList