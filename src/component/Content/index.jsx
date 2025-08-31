
function Content(props) {
  console.log(props);
    return (
      <>
        <div className={"box" + (props.active ? "box--active" : "")}>
          <main>
            <h1>{props.text}</h1>
        </main>
        </div>
      </>
    );
}

export default Content;
