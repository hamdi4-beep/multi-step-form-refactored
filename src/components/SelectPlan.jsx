import { useState } from "react"
import { plans } from "../data"
import { useLocation, useNavigate } from "react-router"

function SelectPlan() {
  const {state} = useLocation()
  const navigate = useNavigate()
  const [selectedPlan, setSelectedPlan] = useState(null)
  const [billingCycle, setBillingCycle] = useState('monthly')

  const handleNextClick = () => {
    if (selectedPlan)
      navigate('/add-ons', {
        state: {
          ...state,
          billingCycle,
          selectedPlan
        }
      })
  }

  return (
    <div className="step">
      <h1 className="heading">Select your plan</h1>
      <p className="text-neutral-grey-500">You have the option of monthly or yearly billing.</p>

      <div className="flex gap-4">
        {plans.map(plan => (
          <div className={`border-neutral-purple-200 border rounded-md p-4 shrink-0 grow mt-8 ${selectedPlan && selectedPlan.title == plan.title ? 'border-primary-blue-950 bg-neutral-blue-100' : ''}`} onClick={e => setSelectedPlan(plan)} key={plan.title}>
            <div className="mb-8">
              <img src={`${import.meta.env.BASE_URL + plan.iconUrl}`} alt={plan.title} />
            </div>

            <div className="info">
              <h4 className="text-primary-blue-950 font-bold">{plan.title}</h4>
              <p className="text-neutral-grey-500">${plan.price[billingCycle]}/{billingCycle === 'monthly' ? 'mo' : 'yr'}</p>

              {billingCycle === 'yearly' && (
                <span>2 months free</span>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className={`justify-center mt-8 flex gap-4 ${billingCycle === 'yearly' ? 'active' : ''}`}>
        <p className={`cursor-pointer ${billingCycle === 'monthly' ? 'font-bold text-primary-blue-950' : ''}`} onClick={() => setBillingCycle('monthly')}>Monthly</p>
        
        <div className={`bg-primary-blue-950 w-12 p-1 rounded-full flex ${billingCycle === 'yearly' ? 'justify-end' : ''}`}>
          <div className="bg-white h-4 w-4 rounded-full"></div>
        </div>

        <p className={`cursor-pointer ${billingCycle === 'yearly' ? 'font-bold text-primary-blue-950' : ''}`} onClick={() => setBillingCycle('yearly')}>Yearly</p>
      </div>

      <div className="">
        <button className="btn" onClick={() => navigate('/')}>Go Back</button>
        <button className="cta-btn md:absolute bottom-4 right-24" onClick={handleNextClick}>Next Step</button>
      </div>
    </div>
  )
}

export default SelectPlan