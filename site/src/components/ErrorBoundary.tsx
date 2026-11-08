import { Component, type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  error: Error | null;
}

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  render() {
    if (this.state.error) {
      return (
        <div className="mx-auto max-w-6xl px-6 pt-32 text-white">
          <h1 className="heading-3">Something went wrong</h1>
          <pre className="mt-4 overflow-auto rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-200">
            {this.state.error.message}
            {"\n"}
            {this.state.error.stack}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}