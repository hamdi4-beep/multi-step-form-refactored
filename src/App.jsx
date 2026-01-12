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
      <main className="bg-neutral-white md:flex max-w-4xl md:p-4 mx-auto rounded-xl">
        <img src={import.meta.env.BASE_URL + "/images/bg-sidebar-desktop.svg"} className="md:inline hidden" alt="" />
        <img src={import.meta.env.BASE_URL + "/images/bg-sidebar-mobile.svg"} className="md:hidden inline w-full" alt="" />

        <div className="absolute inset-0 md:inset-auto flex gap-2 pb-44 md:pb-0 justify-center md:block md:p-4">
          {steps.map(step => (
            <div className={`flex items-start gap-2 mt-8 md:mt-0 ${step.path === location.pathname ? 'active' : ''}`} key={step.id}>
              <span className="rounded-full border text-white leading-1 p-3.5">{step.id}</span>

              <div className="hidden md:block">
                <p>Step {step.id}</p>
                <h4>{step.title}</h4>
              </div>
            </div>
          ))}
        </div>

        <section className="relative md:mx-auto mx-4 -mt-24 md:mt-0 bg-neutral-white z-50">
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