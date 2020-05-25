import React from 'react';
import ReactMarkdown from 'react-markdown/with-html';
import Code from './Code';

export const Markdown: React.FC<{ source: string }> = (props) => {
  return (
    <div style={{ width: '100%' }}>
      <ReactMarkdown
        key="content"
        source={props.source}
        renderers={{
          code: Code,
        }}
        escapeHtml={false}
      />
      <MarkdownStyles key="styles" />
    </div>
  );
};

const MarkdownStyles = () => {
  return (
    <style jsx global>{`
      p,
      li {
        line-height: 1.7;
        color: #333;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        margin: 0px;
        padding: 0px;
      }

      h1 > a,
      h2 > a,
      h3 > a,
      h4 > a,
      h5 > a,
      h6 > a {
        text-decoration: none;
      }

      hr {
        margin: 20px 0px;
        opacity: 0.35;
      }

      h1 {
        padding-top: 30px;
        padding-bottom: 10px;
        margin-top: 30px;
        margin-bottom: 30px;
      }

      h2 {
        padding-top: 25px;
        padding-bottom: 10px;
        margin-top: 25px;
        margin-bottom: 25px;
      }

      h3 {
        padding-top: 20px;
        padding-bottom: 10px;
        margin-top: 20px;
        margin-bottom: 20px;
      }

      h4 {
        padding-top: 15px;
        padding-bottom: 10px;
        margin-top: 15px;
        margin-bottom: 15px;
      }

      h5 {
        padding-top: 10px;
        padding-bottom: 10px;
        margin-top: 10px;
        margin-bottom: 10px;
      }

      h6 {
        padding-top: 5px;
        padding-bottom: 10px;
        margin-top: 5px;
        margin-bottom: 5px;
      }

      p {
        padding: 10px 0px;
        margin: 10px 0px;
      }

      li {
        padding: 10px 0px;
      }

      img {
        width: 100%;
        border-radius: 8px;
        box-shadow: 0px 4px 30px #00000040;
      }

      code {
        background-color: #00000010;
        padding: 3px 3px;
        border-radius: 2px;
      }

      pre {
        margin: 20px 0px !important;
      }
    `}</style>
  );
};
