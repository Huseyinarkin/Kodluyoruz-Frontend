import React, { useEffect } from 'react'
import EmojiResultRow from './EmojiResultRow'
import Clipboard from 'clipboard'

function EmojiResults(props) {

    useEffect(() => {
        const clipboard = new Clipboard(".copy-to-clipboard");
        return () => clipboard.destroy();
    }, [])

    return (
        <div className="component-emoji-results">
            {props.emojiData.map(emojiData => (
                <EmojiResultRow
                    key={emojiData.title}
                    symbol={emojiData.symbol}
                    title={emojiData.title}
                />
            ))}
        </div>
    )
}

export default EmojiResults