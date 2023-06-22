import React from 'react';
import Code from './Code';
import ReactMarkdown from 'react-markdown/with-html';

export const Markdown: React.FC<{ source: string }> = (props) => {
  return (
    <div style={{ width: '100%' }} className="devii-markdown">
      <ReactMarkdown
        key="content"
        source={props.source}
        renderers={{
          code: Code,
          table: (props) => {
            // console.log(props.children);
            // each td should have data-label
            return (
              <div className="table-container">
                <table>{props.children}</table>
              </div>
            );
          }
        }}
        escapeHtml={false}
      />
    </div>
  );
};
