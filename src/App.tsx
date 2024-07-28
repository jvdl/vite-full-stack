import './App.css'

function App() {

  return (
    <>
      <h1>Vite Full Stack template</h1>
      <p>This template has a configuration for a client side and server side Vite application to make it easier to develop a full stack application.</p>
      <p>It uses TypeScript, React, and Fastify.</p>
      <button onClick={async () => {
        const res = await fetch('/api/ping');
        const data = await res.json();
        console.log(data.msg);
      }}>Click me for a message from the server</button>
    </>
  )
}

export default App
