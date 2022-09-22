import React from "react";
import Item from "./Item";
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
                    <Item
                        key={index}
                        {...item}
                    />
                ))}
                
            </ul>
        </aside>
    )
}

export default List