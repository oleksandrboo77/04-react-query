import css from "./ErrorMessage.module.css";

type ErrorMessageProps = {
  error: Error;
};

export default function ErrorMessage({ error }: ErrorMessageProps) {
  return (
    <div className={css.error}>
      <p className={css.text}>
        {error
          ? `Error: ${error.message}`
          : "There was an error, please try again..."}
      </p>
    </div>
  );
}
