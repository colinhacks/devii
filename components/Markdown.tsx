import React from 'react';
import ReactMarkdown from 'react-markdown/with-html';
import Code from './Code';

export const Markdown: React.FC<{ source: string }> = (props) => {
  return (
    <div style={{ width: '100%' }} className="devii-markdown">
      <ReactMarkdown
        key="content"
        source={props.source}
        renderers={{
          code: Code,
        }}
        escapeHtml={false}
      />
      <style jsx global>{`
        .devii-markdown p,
        .devii-markdown li {
          line-height: 1.7;
          color: #333;
        }

        .devii-markdown h1,
        .devii-markdown h2,
        .devii-markdown h3,
        .devii-markdown h4,
        .devii-markdown h5,
        .devii-markdown h6 {
          margin: 0px;
          padding: 0px;
        }

        .devii-markdown h1 > a,
        .devii-markdown h2 > a,
        .devii-markdown h3 > a,
        .devii-markdown h4 > a,
        .devii-markdown h5 > a,
        .devii-markdown h6 > a {
          text-decoration: none;
        }

        .devii-markdown hr {
          margin: 20px 0px;
          opacity: 0.35;
        }

        .devii-markdown h1 {
          padding-top: 30px;
          padding-bottom: 10px;
          margin-top: 30px;
          margin-bottom: 30px;
        }

        .devii-markdown h2 {
          padding-top: 25px;
          padding-bottom: 10px;
          margin-top: 25px;
          margin-bottom: 25px;
        }

        .devii-markdown h3 {
          padding-top: 20px;
          padding-bottom: 10px;
          margin-top: 20px;
          margin-bottom: 20px;
        }

        .devii-markdown h4 {
          padding-top: 15px;
          padding-bottom: 10px;
          margin-top: 15px;
          margin-bottom: 15px;
        }

        .devii-markdown h5 {
          padding-top: 10px;
          padding-bottom: 10px;
          margin-top: 10px;
          margin-bottom: 10px;
        }

        .devii-markdown h6 {
          padding-top: 5px;
          padding-bottom: 10px;
          margin-top: 5px;
          margin-bottom: 5px;
        }

        .devii-markdown p {
          padding: 10px 0px;
          margin: 10px 0px;
        }

        .devii-markdown li {
          padding: 10px 0px;
        }

        .devii-markdown img {
          width: 100%;
          border-radius: 8px;
          box-shadow: 0px 4px 30px #00000040;
        }

        .devii-markdown code {
          background-color: #00000010;
          padding: 3px 3px;
          border-radius: 2px;
        }

        .devii-markdown pre {
          margin: 20px 0px !important;
        }

        .devii-markdown ol pre {
          margin: 0px 0px !important;
        }
      `}</style>
    </div>
  );
};
