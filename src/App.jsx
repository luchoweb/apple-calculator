import { useState } from 'react'
import { Display } from './components/Display'
import { Button } from './components/Buttons'

import './App.css'

function App() {
  const [numbers, setNumbers] = useState(110)
  
  return (
    <div className="calculator">
      <div className="container">
        <Display numbers={ numbers } />

        <div className="buttons">
          <div className="row">
            <Button
              label="AC"
              color="gray"
              handleClick={() => setNumbers(0)}
            />

            <Button
              label="+/-"
              color="gray"
              handleClick={() => {}}
            />

            <Button
              label="%"
              color="gray"
              handleClick={() => {}}
            />

            <Button
              label="÷"
              color="orange"
              handleClick={() => {}}
            />
          </div>

          <div className="row">
            <Button
              label="7"
              color="dark"
              handleClick={() => {}}
            />

            <Button
              label="8"
              color="dark"
              handleClick={() => {}}
            />

            <Button
              label="9"
              color="dark"
              handleClick={() => {}}
            />

            <Button
              label="x"
              color="orange"
              handleClick={() => {}}
            />
          </div>

          <div className="row">
            <Button
              label="4"
              color="dark"
              handleClick={() => {}}
            />

            <Button
              label="5"
              color="dark"
              handleClick={() => {}}
            />

            <Button
              label="6"
              color="dark"
              handleClick={() => {}}
            />

            <Button
              label="-"
              color="orange"
              handleClick={() => {}}
            />
          </div>

          <div className="row">
            <Button
              label="1"
              color="dark"
              handleClick={() => {}}
            />

            <Button
              label="2"
              color="dark"
              handleClick={() => {}}
            />

            <Button
              label="3"
              color="dark"
              handleClick={() => {}}
            />

            <Button
              label="+"
              color="orange"
              handleClick={() => {}}
            />
          </div>

          <div className="row">
            <Button
              label="0"
              color="dark"
              handleClick={() => {}}
              double={true}
            />

            <Button
              label="."
              color="dark"
              handleClick={() => {}}
            />

            <Button
              label="="
              color="orange"
              handleClick={() => {}}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
