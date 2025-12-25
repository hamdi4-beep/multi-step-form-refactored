import { Route, Routes, useLocation } from "react-router"
import SelectPlan from "./components/SelectPlan"
import YourInfo from './components/YourInfo'
import { steps } from "./data"

const paths = {
  '/': 1,
  '/select-plan': 2
}

function App() {
  const location = useLocation()
  const currentStepOrder = paths[location.pathname]

  return (
    <div className="App">
      <main className="container">
        <div className="sidebar">
          {steps.map(step => (
            <div className={`step ${step.order === currentStepOrder ? 'active' : ''}`} key={step.order}>
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