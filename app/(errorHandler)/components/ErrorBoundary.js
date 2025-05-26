"use client";

import { Component } from "react";
import ErrorMessage from "./ErrorMessage";
import { logError } from "@/lib/utils/errorLogger";

export default class ErrorBoundary extends Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    logError({ ...error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorMessage error={this.state.error} />;
    }
    return this.props.children;
  }
}
