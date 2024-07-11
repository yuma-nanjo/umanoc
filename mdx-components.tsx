import type { MDXComponents } from "mdx/types";
import CopyButton from "./app/(main)/(tool)/shiki/_components/copy-button";
import Children from "react-children-utilities";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    pre: (props) => {
      const text = Children.onlyText(props.children);

      return (
        <div className="relative">
          <pre {...props}></pre>
          <CopyButton text={text} className="absolute top-2 right-2" />
        </div>
      );
    },
  };
}
