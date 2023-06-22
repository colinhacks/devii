import React from 'react';

export default class Table extends React.PureComponent{
  render() {
    console.log(this.props)
    return (
        this.props
    //   <SyntaxHighlighter
    //     language={(language === 'ts' ? 'typescript' : language) || 'typescript'}
    //     style={darcula}
    //   >
    //     {value}
    //   </SyntaxHighlighter>
    );
  }
}
