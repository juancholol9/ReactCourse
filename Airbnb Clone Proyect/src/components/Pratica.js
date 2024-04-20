import React from "react";

export default function Pratica() {
    const colors = ["Red", "Blue", "White"];
    return (
        <div>
            {colors.map(col => <p key={col}>{col}</p>)}
        </div>
    );
}
