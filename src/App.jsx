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
      <main className="bg-neutral-white md:flex max-w-5xl md:p-4 md:pr-0 mx-auto rounded-xl">
        <img src={import.meta.env.BASE_URL + "/images/bg-sidebar-desktop.svg"} className="md:inline hidden" alt="" />
        <img src={import.meta.env.BASE_URL + "/images/bg-sidebar-mobile.svg"} className="md:hidden inline w-full" alt="" />

        <div className="absolute inset-0 md:inset-auto flex gap-2 md:pb-0 justify-center md:block md:p-4 md:pl-8">
          {steps.map(step => (
            <div className="flex items-start md:items-center gap-4 mt-8 md:mt-4" key={step.id}>
              <span className={`rounded-full border border-white leading-1 p-3.5 ${location.pathname === step.path ? 'bg-neutral-white text-black' : 'text-white'}`}>{step.id}</span>

              <div className="hidden md:block">
                <p className="text-neutral-purple-200 uppercase">Step {step.id}</p>
                <h4 className="text-neutral-white uppercase font-medium">{step.title}</h4>
              </div>
            </div>
          ))}
        </div>

        <section className="mx-4 shadow-[4px_5px_31px_-9px_rgba(0,0,0,0.75)] md:shadow-none rounded-xl md:rounded-none relative px-8 pt-8 shrink-0 grow -mt-24 md:mt-0 md:px-24 md:pt-10 bg-neutral-white z-50">
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