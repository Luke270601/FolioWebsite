import "../css/Contact.css"

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact</h2>
      <p>You can reach me through the following channels:</p>
      <ul className="contact-list">
        <li>
          <strong>Email:</strong> luke.scott270601@gmail.com
        </li>
        <li>
          <strong>LinkedIn:</strong>{' '}
          <a href="https://www.linkedin.com/in/luke-scott-1831b61a7/">Luke Scott</a>
        </li>
        <li>
          <strong>GitHub:</strong> <a href="https://github.com/Luke270601">Luke270601</a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
