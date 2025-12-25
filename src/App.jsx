import { Route, Routes } from "react-router"
import SelectPlan from "./components/SelectPlan"
import YourInfo from './components/YourInfo'
import { steps } from "./data"

function App() {
  return (
    <div className="App">
      <main className="container">
        <div className="sidebar">
          {steps.map(step => (
            <div className={`step ${step.order === 2 ? 'active' : ''}`} key={step.order}>
              <span>{step.order}</span>

              <div>
                <p>Step {step.order}</p>
                <h4>{step.title}</h4>
              </div>
            </div>
          ))}
        </div>

        <section className="main-content">
          <Routes>
            <Route index element={<YourInfo />} />
            <Route path="/select-plan" element={<SelectPlan />} />
          </Routes>
        </section>
      </main>
    </div>
  )
}

export default App