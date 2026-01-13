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
    <div className="step">
      <h1 className="heading">Personal info</h1>
      <p className="text-neutral-grey-500">Please provide your name, email address, and phone number.</p>

      <form action="#" className="grid mt-8" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" className="input-field" name="name" id="name" placeholder="e.g. Stephen King" required />
        <label htmlFor="emailAddress">Email Address</label>
        <input type="email" className="input-field" name="email" id="email" placeholder="e.g. stephenking@lorem.com" required />
        <label htmlFor="phoneNumber">Phone Number</label>
        <input type="number" className="input-field" name="phone" id="phone" min='0' placeholder="e.g. +1 234 567 890" required />
        
        <div className="md:absolute bottom-4 right-24">
          <button className="cta-btn">Next Step</button>
        </div>
      </form>
    </div>
  )
}

export default YourInfo