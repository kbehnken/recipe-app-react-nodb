import React from "react";
import { MdEdit, MdDelete } from "react-icons/md";

export default function Read(props) {
    
    const {setEditingFn, discardRecipeFn, id} = props;
    return (
        <div>
            <header>
                <div className="recipe-name">
                    {props.recipe.name}
                </div>
                <div><MdEdit className="react-icons" size={20} onClick={setEditingFn} /><MdDelete className="react-icons" size={20} onClick={() => discardRecipeFn(id)}/>
        </div>
            </header>
            <main>
                <div className="time-container">
                    <div className="time">
                        <label>
                            Prep Time: 
                        </label>
                        {props.recipe.prepTime}
                    </div>
                    <div className="time">
                        <label>
                            Cook Time:     
                        </label>
                        {props.recipe.cookTime}
                    </div>
                </div>
                <div>
                    <label>
                        Ingredients: 
                    </label>
                </div>
                <div>
                    {props.recipe.ingredients}
                </div>
                <div>
                    <label>
                        Directions:
                    </label>
                </div>
                <div>
                    {props.recipe.directions}
                </div>
            </main>
        </div>
    )  
}