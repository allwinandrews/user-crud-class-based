import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }

  componentDidCatch(error) {
    this.setState({ hasError: true });
  }

  render() {
    return this.state.hasError ? (
      <p>Something went WRONG</p>
    ) : (
      this.props.children
    );
  }
}
