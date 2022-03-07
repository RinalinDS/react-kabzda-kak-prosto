import React, {useState} from "react";


export default {
    title: 'useState demo',
}



export const UseStateAdvancedStory = () => {
    function generateValue() {
        // какие-то сложные вычисления
        return 1
        // типо результат сложных вычислений
    }
    console.log('UseStateAdvancedStory');
    const [count, setCount] = useState(generateValue);

    // state это типо prevState который так же count , который СетКоунт засовывает сюда сам. и можно использовать такую запись вместо
    // вместо setCount(count + 1) которая берет каунт из замыкания. Это нужно запомнить для юзЭффекта, зачем-то.
    const changer = (state: number) => state + 1

    return (
        <>
            <button onClick={() => setCount(changer)}>+</button>
            {count}
        </>
    )
}