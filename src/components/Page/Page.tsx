import React, { useState } from "react";
import { marked } from "marked";
import "./Page.css";

export default function Page() {
    const [text, setText] = useState<string>("");
    const [preview, setPreview] = useState<string>("");

    function handleTextChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        setText(e.target.value);
        setPreview(marked(e.target.value));
    }

    return (
        <div className="Page">
            <div className="Page__editor">
                <textarea
                    className="Page__editor-textarea"
                    value={text}
                    onChange={handleTextChange}
                />
            </div>
            <div className="Page__preview">
                <div
                    className="Page__preview-content"
                    dangerouslySetInnerHTML={{ __html: preview }}
                />
            </div>
        </div>
    );
}