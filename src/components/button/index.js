import styles from './Button.module.css';

const Button = (props) => {
  return (
    <div>
        <h1 className={styles.button}>
            Botão {props.name} {props.children}
        </h1>
    </div>
  );
}

export default Button;
