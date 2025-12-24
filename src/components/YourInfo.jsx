function YourInfo() {
  return (
    <div className="step-1">
      <h1 className="title">Personal Info</h1>
      <p className="description">Please provide your name, email address, and phone number.</p>

      <form action="#">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" placeholder="e.g. Stephen King" />
        <label htmlFor="emailAddress">Email Address</label>
        <input type="email" name="email" id="email" placeholder="e.g. stephenking@lorem.com" />
        <label htmlFor="phoneNumber">Phone Number</label>
        <input type="number" name="phone" id="phone" min='0' placeholder="e.g. +1 234 567 890" />
        <button className="cta-btn">Next Step</button>
      </form>
    </div>
  )
}

export default YourInfo