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
                billingCycle: state.billingCycle === 'monthly' ? 'yearly' : 'monthly'
            }
        })
    }

    return (
        <div className="step-4">
            <h1 className="title">Finishing up</h1>
            <p className="description">Double-check everything looks OK before confirming.</p>

            <div className="summary">
                <div className="plan-info">
                    <div>
                        <h4 className="plan-title">{selectedPlan.title} (<span className="upper-case">{billingCycle}</span>)</h4>
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
                <p className="total-label">Total (per month)</p>
                <span className="total-price">+$12/mo</span>
            </div>

            <div className="action-buttons">
                <button className="previous-button" onClick={() => navigate('/add-ons')}>Go Back</button>
                <button className="cta-btn">Next Step</button>
            </div>
        </div>
    )
}

export default Summary