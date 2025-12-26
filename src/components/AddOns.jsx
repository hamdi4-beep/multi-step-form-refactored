import { addons } from "../data"

function AddOns() {
    return (
        <div className="step-3">
            <h1 className="title">Pick add-ons</h1>
            <p className="description">Add-ons help improve your gaming experience.</p>

            <div className="addons-list">
                {addons.map(addon => (
                    <div className="addon-item">
                        <input type="checkbox" name="addon" id="addon" />

                        <div className="addon-info">
                            <h4>{addon.title}</h4>
                            <p>{addon.description}</p>
                        </div>

                        <span className="addon-price">+${addon.price.monthly}/mo</span>
                    </div>
                ))}
            </div>

            <div className="action-buttons">
                <button className="previous-btn">Go back</button>
                <button className="cta-btn">Next Step</button>
            </div>
        </div>
    )
}

export default AddOns