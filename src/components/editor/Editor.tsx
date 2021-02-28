import React from 'react';

import AceEditor from 'react-ace';
import 'brace/mode/html';
import 'brace/theme/monokai';

interface Props {
  value: string;
  setValue: (value: string) => void;
  height?: string;
  width?: string;
}

const Editor: React.FC<Props> = ({
  value,
  setValue,
  height = '400px',
  width = '100%',
}) => {
  return (
    <AceEditor
      onChange={setValue}
      value={value}
      name="editor"
      editorProps={{ $blockScrolling: true }}
      mode="html"
      theme="monokai"
      highlightActiveLine={true}
      setOptions={{
        highlightActiveLine: true,
        highlightSelectedWord: true,
        readOnly: false,
        displayIndentGuides: true,
        showPrintMargin: false,
        printMarginColumn: 80,
        showGutter: false,
        fontSize: 12,
        fontFamily: undefined,
        useSoftTabs: true,
        tabSize: 2,
        wrap: false,
      }}
      onLoad={(editor) => {
        editor.renderer.setScrollMargin(20, 20, 0, 0);
        editor.renderer.setPadding(20);
      }}
      className="rounded font-mono"
      width={width}
      height={height}
    />
  );
};

export default Editor;
