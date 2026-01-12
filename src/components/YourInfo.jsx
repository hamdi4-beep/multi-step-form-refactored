import { useNavigate } from "react-router"

function YourInfo() {
  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()

    navigate('/select-plan', {
      state: {
        isAccessAllowed: true
      }
    })
  }

  return (
    <div className="step-1">
      <h1 className="text-5xl">Personal info</h1>
      <p className="description">Please provide your name, email address, and phone number.</p>

      <form action="#" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" className="block" name="name" id="name" placeholder="e.g. Stephen King" required />
        <label htmlFor="emailAddress">Email Address</label>
        <input type="email" className="block" name="email" id="email" placeholder="e.g. stephenking@lorem.com" required />
        <label htmlFor="phoneNumber">Phone Number</label>
        <input type="number" className="block" name="phone" id="phone" min='0' placeholder="e.g. +1 234 567 890" required />
        
        <div className="action-buttons">
          <button className="cta-btn">Next Step</button>
        </div>
      </form>
    </div>
  )
}

export default YourInfo