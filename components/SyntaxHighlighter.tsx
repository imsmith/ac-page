import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwlLight';

const SyntaxHighlighter = ({ children }: any) => {
  const code = children.props.children;

  // return (
  //   <Highlight {...defaultProps} code={code} theme={theme}>
  //     {({ className, style, tokens, getLineProps, getTokenProps }) => (
  //       <pre className={className} style={{ ...style }}>
  //         {tokens.slice(0, -1).map((line, i) => (
  //           <div {...getLineProps({ line, key: i })}>
  //             {line.map((token, key) => (
  //               <span {...getTokenProps({ token, key })} />
  //             ))}
  //           </div>
  //         ))}
  //       </pre>
  //     )}
  //   </Highlight>
  // );
};

export default SyntaxHighlighter;
