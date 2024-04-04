import CSS from './SendForm.module.css';

const SendForm = () => {
  return (
    <div className={CSS.sendForm}>
      <p>Book your campervan now</p>
      <p>Stay connected! We are always ready to help you.</p>
      <form className={CSS.formContainer}>
        <input className={CSS.inputSend} type="text" placeholder="Name" />
        <input className={CSS.inputSend} type="email" placeholder="Email" />
        <input className={CSS.inputSend} type="date" placeholder="Date" />
        <textarea
          className={CSS.inputSendTextarea}
          placeholder="Comment"
        ></textarea>
      </form>
      <button type="submit" className={CSS.sendBtn}>
        Send
      </button>
    </div>
  );
};
export default SendForm;
