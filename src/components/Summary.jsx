import { useLocation, useNavigate } from "react-router"

function Summary() {
    const navigate = useNavigate()
    const {pathname, state} = useLocation()

    const {selectedAddOns, selectedPlan, billingCycle} = state

    const handleChangeClick = () => {
        navigate(pathname, {
            replace: true,
            state: {
                ...state,
                billingCycle: billingCycle === 'monthly' ? 'yearly' : 'monthly'
            }
        })
    }

    const addOnsPrices = selectedAddOns.map(addon => addon.price[billingCycle])
    const totalPrice = addOnsPrices.reduce((prev, curr) => prev + curr) + selectedPlan.price[billingCycle]

    return (
        <div className="step-4">
            <h1 className="title">Finishing up</h1>
            <p className="description">Double-check everything looks OK before confirming.</p>

            <div className="summary">
                <div className="plan-info">
                    <div>
                        <h4 className="plan-title">
                            {selectedPlan.title}
                            <span> ({billingCycle.replace(billingCycle[0], billingCycle[0].toUpperCase())})</span>
                        </h4>

                        <button className="change-button" onClick={handleChangeClick}>Change</button>
                    </div>

                    <span className="plan-price">${selectedPlan.price[billingCycle]}/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
                </div>

                <div className="addons-list">
                    {selectedAddOns.map(addon => (
                        <div className="item" key={addon.title}>
                            <p className="addon-title">{addon.title}</p>
                            <span>+${addon.price[billingCycle]}/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="total-wrapper">
                <p className="total-label">Total (per {billingCycle === 'monthly' ? 'month' : 'year'})</p>
                <span className="total-price">+${totalPrice}/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
            </div>

            <div className="action-buttons">
                <button className="previous-button" onClick={() => navigate('/add-ons')}>Go Back</button>
                <button className="cta-btn">Next Step</button>
            </div>
        </div>
    )
}

export default Summary