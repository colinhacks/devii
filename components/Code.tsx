import React from 'react';
import darcula from 'react-syntax-highlighter/dist/cjs/styles/prism/darcula';
import { PrismLight, PrismAsyncLight } from "react-syntax-highlighter"

const SyntaxHighlighter =
  typeof window === "undefined" ? PrismLight : PrismAsyncLight

export default class Code extends React.PureComponent<{
  language: string;
  value?: string;
}> {
  render() {
    const { language, value } = this.props;
    return (
      <SyntaxHighlighter
        language={(language === 'ts' ? 'typescript' : language) || 'typescript'}
        style={darcula}
      >
        {value}
      </SyntaxHighlighter>
    );
  }
}
