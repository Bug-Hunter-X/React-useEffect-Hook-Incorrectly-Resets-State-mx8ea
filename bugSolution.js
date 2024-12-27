```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Perform side effects here, if needed
    // But avoid setting the count state here
    console.log('Component mounted');
  }, []);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```