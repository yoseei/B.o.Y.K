import React, { useState } from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import marked from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/androidstudio.css";
import scss from "./MarkDown.module.scss";

// delete file name
marked.setOptions({
  highlight: function (code, lang) {
    return hljs.highlightAuto(code, [lang.split(":")[0]]).value;
  },
});

const MarkDown = () => {
  const [markdown, setMarkdown] = useState("");

  return (
    <div className={scss.root}>
      <div className={scss.mde}>
        <SimpleMDE onChange={(e) => setMarkdown(e)} />
      </div>
      <div id="body" className={scss.preview}>
        <span dangerouslySetInnerHTML={{ __html: marked(markdown) }} />
      </div>
    </div>
  );
};

export default MarkDown;
