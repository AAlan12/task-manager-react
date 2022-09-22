import React from "react";
import style from './List.module.scss'

function List(){
    const tasks = [{
        task: 'Study react',
        time: '02:00:00'
    }, {
        task: 'Clean room',
        time: '01:47:00'
    }]
    return(
        <aside className={style.tasksList}>
            <h2>Tasks of the day</h2>
            <ul>
                {tasks.map((item, index) => (
                    <li key={index} className={style.item}>
                        <h3> {item.task} </h3>
                        <span> {item.time} </span>
                    </li>
                ))}
                
            </ul>
        </aside>
    )
}

export default List