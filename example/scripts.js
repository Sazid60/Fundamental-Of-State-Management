
const React = (() => {
    let state = [] // behind the scene react uses link list to hold multiple state data 

    let index = 0;

    const useState = (initialValue) => {

        let hookIndex = index;
        index++


        if (state[hookIndex] === undefined) {
            state[hookIndex] = initialValue
        }
        const setter = (newSate) => {
            state[hookIndex] = newSate
        }
        return [state[hookIndex], setter]
    };

    const resetIndex = () => {
        index = 0
    }

    return {
        useState,
        resetIndex
    }
})()

const { useState, resetIndex } = React //export component

// component 
const Component = () => {
    const [count, setCount] = useState(1)
    const [name, setName] = useState("Sazid")
    console.log(count)
    console.log(name)
    setCount(2)
    setName("Mazid")
}

Component() // render the component
resetIndex()
Component() // gain calling for re render after setting the value