import React from 'react';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

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
