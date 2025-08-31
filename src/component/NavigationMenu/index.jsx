function NavigationMenu() {

  function handleClick() {
    alert("Button clicked!");
  }
const handleChange = (e) => {
  console.log(e.target.value);
}
    return (
      <>
        <div className="box">
          <nav>
            <h1>Navigation Menu</h1>
            <input   onChange={handleChange}/>
            <button onClick={handleClick}>Click me</button>
        </nav>
        </div>
      </>
    );
}

export default NavigationMenu;