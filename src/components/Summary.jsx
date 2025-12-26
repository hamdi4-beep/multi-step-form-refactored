import { useNavigate } from "react-router"

function Summary() {
    const navigate = useNavigate()

    return (
        <div className="step-4">
            <h1 className="title">Finishing up</h1>
            <p className="description">Double-check everything looks OK before confirming.</p>

            <div className="summary">
                <div className="plan-info">
                    <div>
                        <h4 className="plan-title">Arcade (Monthly)</h4>
                        <button className="change-button">Change</button>
                    </div>

                    <span className="plan-price">$9/mo</span>
                </div>

                <div className="addons-list">
                    <div className="item">
                        <p className="addon-title">Online service</p>
                        <span>+$1/mo</span>
                    </div>

                    <div className="item">
                        <p className="addon-title">Larger storage</p>
                        <span>+$2/mo</span>
                    </div>
                </div>
            </div>

            <div className="total-wrapper">
                <p className="total-label">Total (per month)</p>
                <span className="total-price">+$12/mo</span>
            </div>

            <div className="action-buttons">
                <button className="previous-button" onClick={() => navigate('/add-ons')}>Go back</button>
                <button className="cta-btn">Next Step</button>
            </div>
        </div>
    )
}

export default Summary