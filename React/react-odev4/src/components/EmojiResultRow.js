import React from 'react'
import "./EmojiResultRow.css";

function EmojiResultRow(props) {

    const codePointHex = props.symbol.codePointAt(0).toString(16);
    const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;
    return (
        <div
            className="component-emoji-result-row copy-to-clipboard"
            data-clipboard-text={props.symbol}
        >
            <img alt={props.title} src={src} />
            <span className="title">{props.title}</span>
            <span className="info">Click to copy emoji</span>
        </div>
    )
}

export default EmojiResultRow