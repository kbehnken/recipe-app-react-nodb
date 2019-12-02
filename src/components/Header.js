import React from "react";

export default function Header(props) {
    return (
        <div className="header-container">
            <header>
                <div className="header-div">
                    <div>
                        <h1>Recipe Box</h1>
                    </div>
                    <div>
                        <input className="filter-input" type="text" name="filter" placeholder="Filter by name" value={props.filterText} onChange={props.filterInputFn} />
                        <span className="add-recipe" onClick={() => {
                            props.setActionFn(true)
                        }}>
                            +Recipe
                        </span>
                    </div>
                </div> 
            </header>
        </div>
    )
}