const Footer = () => {
    return (
      <div>
        <footer>
          <div className="container">
            <p>Contact Us</p>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows="4" required />
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </footer>
      </div>
    );
  };
  
  export default Footer;
  