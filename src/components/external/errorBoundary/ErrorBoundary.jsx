import React, { Component } from "react"
import Error from "../error"

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    //  log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
  }

  render() {
    const { hasError } = this.state
    const { children } = this.props
    if (hasError) {
      return <Error message="" />
    }
    return children
  }
}

export default ErrorBoundary
