import Editor from "ckeditor5-custom-build/build/ckeditor";
import { CKEditor } from "@ckeditor/ckeditor5-react";

const editorConfiguration = {
  toolbar:{items: [
    'heading',
    '|',
    'fontFamily',
    'fontSize',
    'fontColor',
    'bold',
    'underline',
    'italic',
    'blockQuote',
    'specialCharacters',
    '|',
    'bulletedList',
    'numberedList',
    'indent',
    'outdent',
    '|',
    'insertTable',
    'mediaEmbed',
    'link',
    'imageUpload',
    'undo',
    'redo',
    '|',
    'code',
    'codeBlock'
  ]},
  language: 'ko',
		image: {
			toolbar: [
				'imageTextAlternative',
				'imageStyle:full',
				'imageStyle:side'
			]
		},
		table: {
			contentToolbar: [
				'tableColumn',
				'tableRow',
				'mergeTableCells',
				'tableCellProperties',
				'tableProperties'
			]
		},
};

export const ResumeEditor = () => {
  return (
    <div>
      <CKEditor
        editor={Editor}
        config={editorConfiguration}
        data="<p>Hello from CKEditor 5!</p>"
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log({ event, editor, data });
        }}
        onBlur={(event, editor) => {
          console.log("Blur.", editor);
        }}
        onFocus={(event, editor) => {
          console.log("Focus.", editor);
        }}
      />
    </div>
  );
};
