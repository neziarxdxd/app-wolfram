# Lesson I've Learned 


## UseState vs UseEffect
```
 const [name, setName] = useState(null);
  const fetchName = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/albums');
    setName(await response.json());
  }
```
In this part I've learned that just use **fetchName** Function to call the response in the **onClick**

Instead of using useEffect because **useEffect** will initialize or load all the data at the first place
It acts like initialize in Flutter 


