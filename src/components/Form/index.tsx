import React from "react";
import Button from "../Button";
import style from './Form.module.scss' 

class Form extends React.Component{
    render(){
        return(
            <form className={style.newTask}>
                <div className={style.inputContainer}>
                    <label>
                        Add a new task
                    </label>
                    <input
                        type="text"
                        name="task"
                        id="task"
                        placeholder="What will your new task be?"
                        required
                    />
                </div>
                <div className={style.inputContainer}>
                    <label>
                        Time
                    </label>
                    <input
                        type="time"
                        name="time"
                        id="time"
                        step="1"
                        min="00:00:00"
                        max="07:00:00"
                        required
                    />
                </div>
                <Button/>
            </form>
        )
    }
}

export default Form