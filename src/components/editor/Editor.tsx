import AceEditor from 'react-ace';
import React, { useEffect, useState } from 'react';
import { Resizable, ResizeCallback } from 're-resizable';
import 'brace/mode/html';
import 'brace/theme/monokai';

interface Props {
  value: string;
  setValue: (value: string) => void;
  solution: string;
  height?: number;
  saveManually?: boolean;
}

const Editor: React.FC<Props> = ({
  value,
  setValue,
  solution,
  height = 400,
  saveManually = false,
}) => {
  const [code, setCode] = useState<string>();
  const [save, setSave] = useState<boolean>(true);
  const [resizing, setResizing] = useState<boolean>(false);
  const [resizingHeight, setResizingHeight] = useState<number>(
    Math.max(height, 150)
  );
  const [prevHeight, setPrevHeight] = useState<number>(Math.max(height, 150));
  const [initialValue, _] = useState<string>(value);

  const resizableSize = {
    width: '100%',
    height: resizingHeight,
  };
  const enabledResize = {
    top: false,
    right: false,
    bottom: true,
    left: false,
    topRight: false,
    bottomRight: false,
    bottomLeft: false,
    topLeft: false,
  };

  const handleResizeStart = () => setResizing(true);

  const handleResize: ResizeCallback = (_event, _direction, _ref, delta) => {
    setResizingHeight(Math.max(prevHeight + delta.height, 150));
  };

  const handleResizeStop: ResizeCallback = (
    _event,
    _direction,
    _ref,
    delta
  ) => {
    setPrevHeight(Math.max(prevHeight + delta.height, 150));
    setResizing(false);
  };

  const toggleSave = (): void => {
    setSave(true);
  };

  const handleReset = (): void => {
    setValue(initialValue);
    setCode(initialValue);
  };

  const handleShowSolution = (): void => {
    setValue(solution);
    setCode(solution);
  };

  useEffect(() => {
    if (save) {
      setCode(value);
      setSave(false);
    }
  }, [save]);

  return (
    <div className="flex flex-col">
      <div>
        <button
          className="p-1 mr-2 hover:text-primary transition-colors focus:outline-none"
          onClick={handleReset}
        >
          Zurücksetzen
        </button>
        <button
          className="p-1 hover:text-primary transition-colors focus:outline-none"
          onClick={handleShowSolution}
        >
          Lösung
        </button>
      </div>
      <Resizable
        size={resizableSize}
        onResizeStart={handleResizeStart}
        onResize={handleResize}
        onResizeStop={handleResizeStop}
        enable={enabledResize}
        minHeight={150}
      >
        <div
          className="flex rounded border-gray-900 border-2"
          style={{
            height: `calc(${resizing ? resizingHeight : prevHeight} + 4px)`,
          }}
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
              wrap: true,
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
            height={`${resizing ? resizingHeight : prevHeight}px`}
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
      </Resizable>
    </div>
  );
};

export default Editor;
