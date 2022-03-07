import React, {memo, useCallback, useMemo, useState} from "react";


export default {
    title: 'useMemo',
}

//

export const DifficultCalculating = () => {
    const [a, setA] = useState(0)
    const [b, setB] = useState(0)

    let resultA = 1
    let resultB = 1
    const DifficultCalcForA = useMemo(() => {
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 100000000) {
                fake++
                const fakeValue = Math.random()
            }
            resultA *= i
        }
        return resultA
    }, [a])

    for (let i = 1; i <= b; i++) {
        resultB *= i
    }


    return (
        <>
            <input value={a} onChange={(e) => {
                setA(+e.currentTarget.value)
            }}/>
            <input value={b} onChange={(e) => {
                setB(+e.currentTarget.value)
            }}/>
            <hr/>
            <div>Result for A : {DifficultCalcForA}</div>
            <div> Result for B : {resultB}</div>
        </>

    )
}


//

export const UseMemoPlusReactMemoWithFilteredArray = () => {
    console.log('UseMemoPlusReactMemoWithFilteredArray');
    const [count, setCount] = useState(0);
    const [users, setUsers] = useState(['Denis', 'Pasha', 'Masha', 'Dasha'])

    const addUser = () => {
        setUsers([...users, 'Jora' + new Date()])
    }
    // не укажешь в массиве зависимостей users , не будет обращать внимания на то что юзерс поменялись
    const filteredUsers = useMemo(() => {
        return users.filter(f => f.toLowerCase().indexOf('a') > -1)
    }, [users])

    return (
        <>
            <Counter count={count}/>
            <Users users={filteredUsers}/>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={addUser}>adduser</button>


        </>
    )
}
const Users = memo((props: { users: Array<string> }) => {
    console.log('users');
    return (
        <div>
            {props.users.map((m, i) => <div key={i}>{m}</div>)}
        </div>
    )
})
const Counter = React.memo((props: { count: number }) => {
    console.log('counter');
    return (
        <div>
            {props.count}
        </div>
    )
})


//

export const UseCallbackStory = () => {
    console.log('UseCallbackStory');
    const [count, setCount] = useState(0);
    const [books, setBooks] = useState(['React', 'Js', 'Ts', 'CSS'])

    const addBook = useCallback(() => {
        console.log(books)
        setBooks([...books, 'Angular' + new Date()])
    }, [books])


    return (
        <>
            <CounterForUseCallbackSotry count={count}/>
            <Books addBook={addBook}/>
            <button onClick={() => setCount(count + 1)}>+</button>


        </>
    )
}
const Books = memo((props: { addBook: () => void }) => {
    console.log('users');
    return (
        <div>
            <button onClick={props.addBook}>adduser</button>

        </div>
    )
})
const CounterForUseCallbackSotry = React.memo((props: { count: number }) => {
    console.log('counter');
    return (
        <div>
            {props.count}
        </div>
    )
})


//


export const TupoiSposobUseMemoVmestoUseCallback = () => {
    console.log('UseCallbackStory');
    const [count, setCount] = useState(0);
    const [books, setBooks] = useState(['React', 'Js', 'Ts', 'CSS'])


    // длиннее синтаксис за счет колбэк функции и ретурна самой функции, лучше юзать useCallback
    const addBook = useMemo(()=> {
        return () => {
            console.log(books)
            setBooks([...books, 'Angular' + new Date()])
        }
    }, [books])


    return (
        <>
            <CounterForUseCallbackSotry1 count={count}/>
            <Books1 addBook={addBook}/>
            <button onClick={() => setCount(count + 1)}>+</button>


        </>
    )
}
const Books1 = memo((props: { addBook: () => void }) => {
    console.log('users');
    return (
        <div>
            <button onClick={props.addBook}>adduser</button>

        </div>
    )
})
const CounterForUseCallbackSotry1 = React.memo((props: { count: number }) => {
    console.log('counter');
    return (
        <div>
            {props.count}
        </div>
    )
})
//