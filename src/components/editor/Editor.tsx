import AceEditor from 'react-ace';
import React, { useEffect, useState } from 'react';
import 'brace/mode/html';
import 'brace/theme/monokai';

interface Props {
  value: string;
  setValue: (value: string) => void;
  height?: string;
  saveManually?: boolean;
}

const Editor: React.FC<Props> = ({
  value,
  setValue,
  height = '400px',
  saveManually = false,
}) => {
  const [code, setCode] = useState<string>();
  const [save, setSave] = useState<boolean>(true);

  const toggleSave = (): void => {
    setSave(true);
  };

  useEffect(() => {
    if (save) {
      setCode(value);
      setSave(false);
    }
  }, [save]);

  return (
    <div
      className="flex rounded border-gray-900 border-2"
      style={{ height: `calc(${height} + 4px)` }}
    >
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
        commands={[
          {
            name: 'saveRequestForLater',
            bindKey: { win: 'Ctrl-s', mac: 'Command-s' },
            exec: toggleSave,
          },
        ]}
        className="font-mono"
        height={height}
        width="50%"
      />
      <div className="w-1/2 flex flex-col">
        {saveManually && code !== value && (
          <div
            className="p-2 bg-primary text-center text-white cursor-pointer text-sm"
            onClick={toggleSave}
          >
            Änderungen übernehmen (Ctrl + S)
          </div>
        )}
        <iframe
          srcDoc={saveManually ? code : value}
          width="100%"
          className="flex-grow"
        />
      </div>
    </div>
  );
};

export default Editor;
