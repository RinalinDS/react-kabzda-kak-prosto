import React, {memo, useState} from "react";


export default {
    title: 'React.memo',
}



export const Example = () => {
    console.log('example');
    const [count, setCount] = useState(0);
    const [users, setUsers] = useState(['Denis', 'Pasha', 'Masha' , 'Dasha'])

    const addUser = () => {
        setUsers([...users , 'Jora' + new Date()])
    }
// намеренная ошибка, чтобы показать, что если ссылка на объект , то сами внутренности объекта реакт.мемо проверять не будет и перерисовку не запустит
    users.push('Jora' + new Date())
    return (
        <>
            <Counter count={count}/>
            <Users users={users} />
            <button onClick={()=> setCount(count + 1)}>+</button>
            <button onClick={addUser}>adduser</button>



        </>
    )
}

const Users = memo((props: {users: Array<string>}) => {
    console.log('users');
    return (
        <div>
            {props.users.map((m,i) => <div key={i}>{m}</div> )}
        </div>
    )
})

const Counter =  React.memo((props: { count: number}) => {
    console.log('counter');
    return (
        <div>
            {props.count}
        </div>
    )
})
