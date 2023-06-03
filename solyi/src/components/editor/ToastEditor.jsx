
// // Toast 에디터

import { useRef } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
// import 'tui-color-picker/dist/tui-color-picker.css';
// import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
// import '@toast-ui/chart/dist/toastui-chart.css';
// import chart from '@toast-ui/editor-plugin-chart';
// import colorSyntax from '@toast-ui/editor-plugin-color-syntax';

export default function ToastEditor() {
    const editorRef = useRef();

  // 등록 버튼 핸들러
  const handleRegisterButton = () => {
    // 입력창에 입력한 내용을 HTML 태그 형태로 취득 
    console.log(editorRef.current?.getInstance().getHTML());
    // 입력창에 입력한 내용을 MarkDown 형태로 취득
    console.log(editorRef.current?.getInstance().getMarkdown());
  };
  return(
    <div>

      <Editor
      ref={editorRef}
      initialValue="hello react editor world!"
      previewStyle="vertical"
      height="600px"
      initialEditType="markdown"
      useCommandShortcut={true}
      />
      <button onClick={handleRegisterButton}>등록</button>

    </div>
    
//       <Editor
//         ref={editorRef} // DOM 선택용 useRef
//         placeholder="내용을 입력해주세요."
//         previewStyle="vertical" // 미리보기 스타일 지정
//         height="300px" // 에디터 창 높이
//         initialEditType="wysiwyg" //
//         toolbarItems={[
//           // 툴바 옵션 설정
//           ['heading', 'bold', 'italic', 'strike'],
//           ['hr', 'quote'],
//           ['ul', 'ol', 'task', 'indent', 'outdent'],
//           ['table', 'image', 'link'],
//           ['code', 'codeblock']
//         ]}
//         // plugins={[colorSyntax, chart]}  // colorSyntax 플러그인 적용
//         useCommandShortcut={false} // 키보드 입력 컨트롤 방지
//       ></Editor>

//       <button onClick={handleRegisterButton}>등록</button>
    )
}
