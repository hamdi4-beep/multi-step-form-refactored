import { useState } from "react"
import { addons } from "../data"
import { useLocation, useNavigate } from "react-router"

function AddOns() {
    const [selectedAddOns, setSelectedAddOns] = useState([])
    const {state} = useLocation()
    const navigate = useNavigate()

    const selectAddOn = addon =>
        setSelectedAddOns(prev =>
            prev.find(it => it.title === addon.title) ?
                prev.filter(it => it.title !== addon.title) : Array.from(new Set([...prev, addon]))
        )


    console.log(selectedAddOns)

    return (
        <div className="step-3">
            <h1 className="title">Pick add-ons</h1>
            <p className="description">Add-ons help improve your gaming experience.</p>

            <div className="addons-list">
                {addons.map(addon => (
                    <div className={`addon-item ${selectedAddOns.find(it => it.title === addon.title) ? 'active' : ''}`} key={addon.title} onClick={() => selectAddOn(addon)}>
                        <input type="checkbox" name="addon" id="addon" checked={selectedAddOns.includes(addon.title)} onChange={() => {}} />

                        <div className="addon-info">
                            <h4>{addon.title}</h4>
                            <p>{addon.description}</p>
                        </div>

                        <span className="addon-price">+${addon.price[state.billingCycle]}/{state.billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
                    </div>
                ))}
            </div>

            <div className="action-buttons">
                <button className="previous-btn" onClick={() => navigate('/select-plan')}>Go Back</button>
                <button className="cta-btn" onClick={() => navigate('/summary', {
                    state: {
                        ...state,
                        selectedAddOns
                    }
                })}>Next Step</button>
            </div>
        </div>
    )
}

export default AddOns