import { useState } from "react"


function App() {
  const [color, setColor] = useState("red");


  return (
    <>
      <div className="w-full h-screen duration-200" style={{ background: color }}>
        <div className="flex flex-wrap bottom-12 justify-center">
          <div className="flex flex-wrap justify-center gap-3 bg-white rounded-full px-3 py-2">
            <button onClick={() => { setColor('black') }} className="outline-none rounded-full px-3 py-2 text-white" style={{ background: 'black' }}>Black</button>
            <button onClick={() => { setColor('blue') }} className="outline-none rounded-full px-3 py-2 text-white" style={{ background: 'blue' }}>Blue</button>
            <button onClick={() => { setColor('yellow') }} className="outline-none rounded-full px-3 py-2 text-white" style={{ background: 'yellow' }}>Yellow</button>
            <button onClick={() => { setColor('pink') }} className="outline-none rounded-full px-3 py-2 text-white" style={{ background: 'pink' }}>Pink</button>
            <button onClick={() => { setColor('green') }} className="outline-none rounded-full px-3 py-2 text-white" style={{ background: 'green' }}>Green</button>
            <button onClick={() => { setColor('orange') }} className="outline-none rounded-full px-3 py-2 text-white" style={{ background: 'orange' }}>Orange</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
