import YourInfo from "./components/YourInfo"
import { steps } from "./data"

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="sidebar">
          {steps.map(step => (
            <div className={`step ${step.order === 1 ? 'active' : ''}`} key={step.order}>
              <span>{step.order}</span>

              <div>
                <p>Step {step.order}</p>
                <h4>{step.title}</h4>
              </div>
            </div>
          ))}
        </div>

        <section className="main-content">
          <YourInfo />
        </section>
      </div>
    </div>
  )
}

export default App