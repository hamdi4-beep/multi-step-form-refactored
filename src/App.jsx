import YourInfo from "./components/YourInfo"

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="sidebar">
          <div className="step one active">
            <span>1</span>

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