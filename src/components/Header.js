import React from "react";

export default function Header(props) {
    return (
        <div>
            <header>
                <div>
                    <h1>Recipe Box</h1>
                    <input className="filter-input" type="text" name="filter" placeholder="Filter by name" />
                    <span className="add-recipe" onClick={() => {
                        props.setAddingFn(true)
                    }}>
                        +Recipe
                    </span>
                </div> 
            </header>
        </div>
    )
}