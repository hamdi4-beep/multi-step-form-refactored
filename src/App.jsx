const YourInfo = () => {
  return (
    <div className="step-1">
      <h1>Personal Info</h1>
      <p>Please provide your name, email address, and phone number.</p>

      <form action="#">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" placeholder="e.g. Stephen King" />
        <label htmlFor="emailAddress">Email Address</label>
        <input type="email" name="email" id="email" placeholder="e.g. stephenking@lorem.com" />
        <label htmlFor="phoneNumber">Phone Number</label>
        <input type="number" name="phone" id="phone" />
        <button>Next Step</button>
      </form>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="sidebar">
          <div className="step one">
            <span className="active">1</span>

            <div>
              <p>Step 1</p>
              <h4>Your Info</h4>
            </div>
          </div>

          <div className="step two">
            <span>2</span>

            <div>
              <p>Step 2</p>
              <h4>Select Plan</h4>
            </div>
          </div>

          <div className="step three">
            <span>3</span>

            <div>
              <p>Step 3</p>
              <h4>Add-Ons</h4>
            </div>
          </div>

          <div className="step four">
            <span>4</span>

            <div>
              <p>Step 4</p>
              <h4>Summary</h4>
            </div>
          </div>
        </div>

        <section className="main-content">
          <YourInfo />
        </section>
      </div>
    </div>
  )
}

export default App