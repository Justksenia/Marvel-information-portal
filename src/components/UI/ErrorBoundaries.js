import React from "react"

class ErrorBoundaries extends React.Component {
    state={
        error:false

    }
    componentDidCatch (error, errorInfo) {
        this.setState({
            error:true
        })
    }
    render () {
        if (this.state.error) {
            return <h3>sorry there was an error, please reload the page</h3>
        }
        return this.props.children
    }
}
export default ErrorBoundaries