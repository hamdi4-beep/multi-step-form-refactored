import { Route, Routes, useLocation } from "react-router"
import SelectPlan from "./components/SelectPlan"
import YourInfo from './components/YourInfo'
import { steps } from "./data"
import AddOns from "./components/AddOns"
import Summary from "./components/Summary"
import ProtectedRoute from "./components/ProtectedRoute"

function App() {
  const location = useLocation()
  const {state} = location
  
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

            {/* users are only allowed access when they navigate with the updated state*/}
            {/* state is lost when you redirect to a different route with the url so this is safe */}
            <Route element={<ProtectedRoute isAccessAllowed={state?.isAccessAllowed} />}>
              <Route path="/select-plan" element={<SelectPlan />} />
              <Route path="/add-ons" element={<AddOns />} />
              <Route path="/summary" element={<Summary />} />
            </Route>
          </Routes>
        </section>
      </main>
    </div>
  )
}

export default App