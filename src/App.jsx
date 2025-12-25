import { useState } from "react"
import YourInfo from "./components/YourInfo"
import { steps, plans } from "./data"

const SelectPlan = () => {
  const [selectedPlan, setSelectedPlan] = useState('')
  const [billingCycle, setBillingCycle] = useState('monthly')

  return (
    <div className="step-2">
      <h1 className="title">Select your plan</h1>
      <p className="description">You have the option of monthly or yearly billing.</p>

      <div className="plans-list">
        {plans.map(plan => (
          <div className={`plan-item ${selectedPlan === plan.title ? 'active' : ''}`} onClick={e => setSelectedPlan(plan.title)} key={plan.title}>
            <div className="icon-img">
              <img src={`${import.meta.env.BASE_URL + plan.iconUrl}`} alt={plan.title} />
            </div>

            <div className="info">
              <h4>{plan.title}</h4>
              <p>${plan.price.monthly}/mo</p>
            </div>
          </div>
        ))}
      </div>

      <div className={`toggle ${billingCycle === 'yearly' ? 'active' : ''}`}>
        <p className="monthly" onClick={() => setBillingCycle('monthly')}>Monthly</p>
        <div className="switch"></div>
        <p className="yearly" onClick={() => setBillingCycle('yearly')}>Yearly</p>
      </div>

      <div className="action-buttons">
        <button className="previous-btn">Go Back</button>
        <button className="cta-btn">Next Step</button>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <main className="container">
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
      </main>
    </div>
  )
}

export default App