function Menu() {
  const menu = ["Trang chu", "Chi tiet"];
  return (
    <div className="box">
      <nav>
        <h1>Menu</h1>
        <ul>
          {menu.map((item, index) => (
            <li key={index}>
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Menu;



