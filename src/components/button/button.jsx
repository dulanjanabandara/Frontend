import "./button.css";

function Button(props) {
  if (props.title) {
    return (
      <div>
        <button type="button">{props.title}</button>
      </div>
    );
  } else {
    return (
      <div>
        <button type="button">
          <img src={props.img} alt="" />
        </button>
      </div>
    );
  }
}

export default Button;
