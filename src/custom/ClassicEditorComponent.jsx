import React from "react";

// Import utama CKEditor
import { CKEditor } from "@ckeditor/ckeditor5-react";
// BENAR
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

// Import plugin tambahan sesuai contoh di GitHub
import { Bold, Italic } from "@ckeditor/ckeditor5-basic-styles";
import { Essentials } from "@ckeditor/ckeditor5-essentials";
import { Paragraph } from "@ckeditor/ckeditor5-paragraph";
import { Heading } from "@ckeditor/ckeditor5-heading";
import { List } from "@ckeditor/ckeditor5-list";
import { BlockQuote } from "@ckeditor/ckeditor5-block-quote";
import { Link } from "@ckeditor/ckeditor5-link";
import { PasteFromOffice } from "@ckeditor/ckeditor5-paste-from-office";
import { Table, TableToolbar } from "@ckeditor/ckeditor5-table";
import { TextTransformation } from "@ckeditor/ckeditor5-typing";
import { CloudServices } from "@ckeditor/ckeditor5-cloud-services";

// Konfigurasi editor
const editorConfiguration = {
  // Daftar plugin yang digunakan di editor
  plugins: [
    Essentials,
    Bold,
    Italic,
    Paragraph,
    Heading,
    List,
    BlockQuote,
    Link,
    PasteFromOffice,
    Table,
    TableToolbar,
    TextTransformation,
    CloudServices,
  ],
  // Konfigurasi toolbar
  toolbar: [
    "heading",
    "|",
    "bold",
    "italic",
    "|",
    "link",
    "bulletedList",
    "numberedList",
    "|",
    "blockQuote",
    "insertTable",
    "|",
    "undo",
    "redo",
  ],
  // Konfigurasi tabel
  table: {
    contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
  },
  // Bahasa editor
  language: "en",
};

function ClassicEditorComponent({ data, onChange }) {
  return (
    <CKEditor
      editor={ClassicEditor}
      config={editorConfiguration}
      data={data}
      onChange={(event, editor) => {
        const data = editor.getData();
        onChange(data);
      }}
    />
  );
}

export default ClassicEditorComponent;
