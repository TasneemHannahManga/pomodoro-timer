import "./components.css";

function Footer(props) {
  return (
    <footer>
      <a href={`${props.attributionLink}`}>{props.attributionText}</a>
      <p>
        Sound by <a href="https://pixabay.com/">Pixabay</a>
      </p>
    </footer>
  );
}

export default Footer;
