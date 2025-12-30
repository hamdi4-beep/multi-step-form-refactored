import { useState } from "react"
import { plans } from "../data"
import { useNavigate } from "react-router"

function SelectPlan() {
  const navigate = useNavigate()
  const [selectedPlan, setSelectedPlan] = useState({})
  const [billingCycle, setBillingCycle] = useState('monthly')

  return (
    <div className="step-2">
      <h1 className="title">Select your plan</h1>
      <p className="description">You have the option of monthly or yearly billing.</p>

      <div className="plans-list">
        {plans.map(plan => (
          <div className={`plan-item ${selectedPlan.title === plan.title ? 'active' : ''}`} onClick={e => setSelectedPlan(plan)} key={plan.title}>
            <div className="icon-img">
              <img src={`${import.meta.env.BASE_URL + plan.iconUrl}`} alt={plan.title} />
            </div>

            <div className="info">
              <h4>{plan.title}</h4>
              <p>${plan.price[billingCycle]}/{billingCycle === 'monthly' ? 'mo' : 'yr'}</p>

              {billingCycle === 'yearly' && (
                <span>2 months free</span>
              )}
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
        <button className="previous-btn" onClick={() => navigate('/')}>Go Back</button>
        <button className="cta-btn" onClick={() => navigate('/add-ons', {
          state: {
            billingCycle,
            selectedPlan
          }
        })}>Next Step</button>
      </div>
    </div>
  )
}

export default SelectPlan