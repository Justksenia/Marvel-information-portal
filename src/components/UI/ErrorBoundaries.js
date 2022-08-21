import React from "react"

class ErrorBoundaries extends React.Component {
    constructor(props) {
        super (props)
        this.state={
            error:false
        }
    }
   
    static getDerivedStateFromError(error) {
     
        return { error: true };
      }
    componentDidCatch (error, errorInfo) {
        console.log(error, errorInfo)
      
    }
    render () {
        if (this.state.error) {
            return <h3>sorry there was an error, please reload the page</h3>
        }
        return this.props.children
    }
}
export default ErrorBoundaries