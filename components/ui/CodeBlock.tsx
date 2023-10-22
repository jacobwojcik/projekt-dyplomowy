import React from 'react';
import { CopyBlock, googlecode } from 'react-code-blocks';

interface Props {
  code: string;
  highlight?: string;
}

const CodeBlock = ({ code, highlight }: Props) => {
  return (
    <div className="border rounded-lg p-1 text-xs md:text-sm font-code relative">
      <div className=" overflow-x-auto">
        <CopyBlock
          // @ts-ignore
          text={code}
          language="typescript"
          showLineNumbers={true}
          theme={googlecode}
          highlight={highlight}
        />
      </div>
    </div>
  );
};

export default CodeBlock;
