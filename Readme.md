# Fundamental Of State Management

Welcome to your next journey — Be a Redux Reaper 🔥


Before we dive into Redux itself, it's crucial to master the foundation of state management. That’s exactly what this first module is all about.



🧠 From understanding what state really is, to how it triggers re-renders, works behind the scenes, and when to use useState vs useReducer — we’ll break down the core concepts of state in React like never before.



Whether you're new to state or looking to solidify your fundamentals, this module will sharpen your instincts — so when Redux enters the scene, you’ll already be ahead.

Let’s begin by decoding the essence of UI logic — the State.

## 20-1 What is State? Understanding the Core of UI Logic

#### What is state?
- Sate Means Present situation. Where data is for long run. data is not state

#### Types Of State 
1. Local state (Initially we will deal with local state)
2. remote state 
3. server state 

- When a user comes to a website and takes action the state changes 
- In single page application we just have index.htm and <div id=""> </div> inside it content changes because of state changes like different page appears inside the div.
- React's default state management is not that robust. so fo this reason we use third party state management tool like redux. 
- Here we can say state is current situation's data. based on the state change different interaction happens. 

## 20-2 How State Triggers Renders in React

#### What is Render? 
- Render Means Showing something inside browser's frame. Its like we will do something that will trigger browser rendering and show something in our ui

#### What is the relation between state and render? 
- For each state change correspondingly we need to trigger a render. 

```html

<!DOCTYPE html>
<html lang="en">
<head>
  <title>Document</title>
  <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
</head>
<body>
  <div id="app" class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="flex items-center gap-6 bg-white p-8 rounded-lg shadow-lg">
      
      <button id="decrement" class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition">
        Decrement
      </button>

      <span id="count" class="text-3xl font-bold w-12 text-center">0</span>

      <button id="increment" class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">
        Increment
      </button>

    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>

```


```js
let count = 0; // state

const render = () => {
    document.getElementById("count").innerHTML = count;
};

const increment = () => {
    count++;
    render(); // ← call render after incrementing
};

const decrement = () => {
    count--;
    render(); // ← call render after decrementing
};

document.getElementById("increment").addEventListener("click", increment);
document.getElementById("decrement").addEventListener("click", decrement);

// render initially to display the starting count
render();


```


## 20-3 React State & Re-Renders: Stateless vs Stateful
- Lets Understand State Change and render Inside React
- Chrome Dev Tool -> Components -> settings -> Highlight updates when components render. check this 
- We can see if a state changes whole react component re render happens. not the specific element 

![alt text](image.png)

- And this is rendered by createRoot 

![alt text](image-1.png)

![alt text](image-2.png)

- states, useEffect are hold inside hooks. Hooks are traced using link list inside fiber. 
- The summary is react renders component when any state changes. 
- Re render triggering and changing content inside a component is not same thing.

#### Why Fiber is required? 
- React used to run on class based component. but now a days react uses functional based. 
- When we work with object oriented programming- object is by default stateful and that means we can keep state inside it. 

```js
const counter = {
    count: 0,
    increment(newCount) {
        this.count += newCount
        console.log(this.count)
    }
}

counter.increment(1)
counter.increment(3)
counter.increment(5)
```

- Inside Functional programming function is stateless and we can not hold any sate inside it. Function works based on the inputs. 

```js 
const counter2 = (newCount) =>{
    let count = 0;
    return count + newCount
}

console.log(counter2(1))
console.log(counter2(3))
console.log(counter2(5))
```

- here we can see there is not scope to trace the state.
- To trace the state we need to declare the count outside the block. Here comes the help of state of react which is handled outside the function and is traced. 