import { useRef } from 'react';


import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import prism from 'prismjs';
import 'prismjs/themes/prism.css';

export default function ToastViewer() {
  // Editor DOM 선택용
  const editorRef = useRef();
  
    // 등록 버튼 핸들러
  const handleRegisterButton = () => {
    // 입력창에 입력한 내용을 HTML 태그 형태로 취득
    console.log(editorRef.current?.getInstance().getHTML());
    // 입력창에 입력한 내용을 MarkDown 형태로 취득
    console.log(editorRef.current?.getInstance().getMarkdowne());
  };

  return (
    <div>
    {/* {content && (
      <Viewer
        initialValue={JSON.parse(content)}
        plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
        />
    )} */}
  </div>
  );
}