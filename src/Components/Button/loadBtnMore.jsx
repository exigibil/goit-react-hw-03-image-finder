import styles from "../Button/LoadBtnMore.module.css";
import PropTypes from "prop-types";

function LoadBtnMore({ onClick, children }) {
  children = children || "Load more";
  return (
    <button className={styles.Button} onClick={onClick}>
      {children}
    </button>
  );
}

LoadBtnMore.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default LoadBtnMore;
