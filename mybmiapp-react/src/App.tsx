import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import './App.css';
import { Header } from './components/Header';
import { Input } from './components/Input';

export interface FormInputs {
  name: string
  weight: number
  height: number
}

function App() {
  const [bmi, setBmi] = useState(0) 

  const {register, handleSubmit} = useForm<FormInputs>()

  const handlerSubmit: SubmitHandler<FormInputs> = ({name, height, weight}) => {
    const result = weight / (height * height)

    setBmi(result)
  }

  return (<div id="container">
            <Header />
            <main>
              <h2>Type your data</h2>
              <form  onSubmit={handleSubmit(handlerSubmit)}>
                <div className="input-control">
                  <label htmlFor="name">Name: </label>
                  <Input name='name' register={register} />
                </div>
                <div className="input-control">
                  <label htmlFor="weight">Weight: </label>
                  <Input name='weight' register={register} />
                </div>
                <div className="input-control">
                  <label htmlFor="height">Height: </label>
                  <Input name='height' register={register} type="number" />
                </div>
                <input type="submit"  id="btn_calculate" value="Calculate" />
              </form>

              {
                bmi !== 0 &&
                (
                <h2>
                  <section id="result">
                    BMI: <span id="bmi">{bmi.toFixed(1)}</span>
                  </section>
                </h2>
                )
              }

              

            </main>
            <footer>
              <p>R1 Software @ 2023</p>
            </footer>
          </div>
          )
}

export default App
