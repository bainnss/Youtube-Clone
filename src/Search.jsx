import React from "react";

import { useState } from 'react';

export default function Search() {

    const [inputText, setInputText] = useState('')

    const search = (e) => {
        e.preventDefault();
        // window.location.replace(`https://www.youtube.com/results?search_query=${inputText}`);
        window.open(`https://www.youtube.com/results?search_query=${inputText}`, "_blank", "noreferrer");
    }

    return (
        <div className="App">
            <form onSubmit={search}>

                <input className="input" placeholder="Search" onChange={(e) => setInputText(e.target.value)} />
            </form>

        </div>
    );
}

