import React from 'react';
import './OnlineCompiler.css';
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-github";
import 'brace/ext/language_tools';
import 'ace-builds/src-noconflict/ext-language_tools';
import { addCompleter } from 'ace-builds/src-noconflict/ext-language_tools';

class OnlineCompiler extends React.Component {
    onChange(newValue) {
        console.log("change", newValue);
    }

    componentDidMount() {
        const LIST_SUGGESTION_KEY = [
            'console.log', 'map', 'filter', 'find', 'some', 'any'
        ];
        const LIST_SYMBOL_KEY = [

        ];
        const listSuggestion = LIST_SUGGESTION_KEY.map(key => { return { name: key, value: key, caption: key, score: 1000 } }).concat(LIST_SYMBOL_KEY);
        addCompleter({
            getCompletions: function (editor, session, pos, prefix, callback) {
                callback(null,
                    listSuggestion
                );
            },
        });
    }

    render() {
        return (
            <div className='body-container'>
                <AceEditor
                    mode="javascript"
                    theme="github"
                    onChange={this.onChange}
                    name="UNIQUE_ID_OF_DIV"
                    editorProps={{ $blockScrolling: true }}
                    setOptions={{
                        enableBasicAutocompletion: true,
                        enableLiveAutocompletion: true,
                        enableSnippets: true
                    }}
                />
            </div>
        );
    }
}

export default OnlineCompiler;