import React from "react";
import { ITask } from "../../types/tasks";
import Button from "../Button";
import style from './Form.module.scss' 
import {v4 as uuidv4} from 'uuid'

class Form extends React.Component<{
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}>{
    state = {
        task: "",
        time: "00:00"
    }

    addTask(event: React.FocusEvent<HTMLFormElement>){
        event.preventDefault();
        this.props.setTasks(oldTasks => 
            [...oldTasks,
                 {
                    ...this.state,
                    selected: false,
                    completed: false,
                    id: uuidv4()
                }])
        this.setState({
            task: "",
            time: "00:00"
        })
    }

    render(){
        return(
            <form className={style.newTask} onSubmit={this.addTask.bind(this)}>
                <div className={style.inputContainer}>
                    <label>
                        Add a new task
                    </label>
                    <input
                        type="text"
                        name="task"
                        id="task"
                        onChange={event => this.setState({...this.state, task: event.target.value})}
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
                        value={this.state.time}
                        onChange={event => this.setState({...this.state, time: event.target.value})}
                        min="00:00:00"
                        max="07:00:00"
                        required
                    />
                </div>
                <Button type="submit">
                    Add
                </Button>
            </form>
        )
    }
}

export default Form