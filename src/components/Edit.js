import React from 'react'

import Button from './Button'

export default function Edit(props) {
    
    const {prepTime, cookTime, name, ingredients, directions} = props.recipe;
    const {setEditingFn, saveChangesFn, changeHandler} = props;
    return (
        <div>
            <div>
                <label>
                    Name: 
                </label>
                <input type="text" onChange={event => props.changeHandler("name", event.target.value)} value={name} />
            </div>
            <div className="time-container">
                <div className="time">
                    <label>
                        Prep Time: 
                    </label>
                    <input type="text" onChange={event => props.changeHandler("prepTime", event.target.value)} value={prepTime} />
                </div>
                <div className="time">
                    <label>
                        Cook Time:     
                    </label>
                    <input type="text" onChange={event => props.changeHandler("cookTime", event.target.value)} value={cookTime} />
                </div>
            </div>
                <div>
                    <label>
                        Ingredients: 
                    </label>
                </div>
                <div>
                    <textarea onChange={event => props.changeHandler("ingredients", event.target.value)} value={ingredients} />
                </div>
                <div>
                    <label>
                        Directions:
                    </label>
                </div>
                <div>
                    <textarea onChange={event => changeHandler("directions", event.target.value)} value={directions} />
                </div>
                <div>
                    <Button action={setEditingFn} label="Cancel" />
                    <Button action={saveChangesFn} label="Save" />
                </div>
        </div>
    )  
    
    // const {prepTime, cookTime, name, ingredients, directions} = props;
    // return (
    //     <form onSubmit={event => {
    //         event.preventDefault();
    //         props.addRecipe();
    //     }}>
    //         <label>Prep Time:</label> {" "}
    //         <input type="text" onChange={event => props.changeHandler(event.target.prepTime, event.target.value)} value={prepTime}  />
    //         <label>Cook Time:</label> {" "}
    //         <input type="text" onChange={event => props.changeHandler(event.target.cookTime, event.target.value)} value={cookTime}  />
    //         <label>Name:</label> {" "}
    //         <input type="text" onChange={event => props.changeHandler(event.target.name, event.target.value)} value={name}  />
    //         <label>Ingredients:</label> {" "}
    //         <input type="text" onChange={event => props.changeHandler(event.target.ingredients, event.target.value)} value={ingredients}  />
    //         <label>Directions:</label> {" "}
    //         <input type="text" onChange={event => props.changeHandler(event.target.directions, event.target.value)} value={directions}  />
    //         <Button />
    //     </form>
    // )
}