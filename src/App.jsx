import { Route, Routes, useLocation } from "react-router"
import SelectPlan from "./components/SelectPlan"
import YourInfo from './components/YourInfo'
import { steps } from "./data"
import AddOns from "./components/AddOns"
import Summary from "./components/Summary"



function App() {
  const location = useLocation()
  console.log(location.state)
  
  return (
    <div className="App">
      <main className="container">
        <div className="sidebar">
          {steps.map(step => (
            <div className={`step ${step.path === location.pathname ? 'active' : ''}`} key={step.id}>
              <span>{step.id}</span>

              <div className="step-info">
                <p>Step {step.id}</p>
                <h4>{step.title}</h4>
              </div>
            </div>
          ))}
        </div>

        <section className="main-content">
          <Routes>
            <Route index element={<YourInfo />} />
            <Route path="/select-plan" element={<SelectPlan />} />
            <Route path="/add-ons" element={<AddOns />} />
            <Route path="/summary" element={<Summary />} />
          </Routes>
        </section>
      </main>
    </div>
  )
}

export default App