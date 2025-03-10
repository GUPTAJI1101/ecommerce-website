const footerHTML =`
  <footer class="section-footer">
       <div class="footer-container container">
          <div class="content_1">
            <img src="./public/images/logo.png" alt="logo">
            <p>
              Welcome to BENTLEY eComStore, your ultimate destination for cutting-edge gadgets!
            </p>
            <img src="./public/images/kit.png" alt="logo">
          </div>
          <div class="content_2">
            <h4>SHOPPING</h4>
            <a href="#">accessories</a>
            <a href="#">parts</a>
            <a href="#">Sales & Discount</a>
            <a href="#">Engine parts</a>
          </div>
          <div class="content_3">
            <h4>Experience</h4>
            <a href="./contact.html">Contact Us</a>
            <a href="#" target="_blank">Payment Method</a>
            <a href="#" target="_blank">Delivery</a>
            <a href="#" target="_blank">Return and Exchange</a>
          </div>
          <div class="content_4">
            <h4>NEWSLETTER</h4>
            <p>Be the first to know about new <br /> arrivals, sales & promos!</p>
            <div class="f-mail">
              <input type="email" placeholder="your email">
              <i class="bx bx-envelope"></i>
            </div>
            <hr />
          </div>
       </div>
       <div class="f-design">
        <div class="f-design-txt">
          <p>Design and code by Ansh Gupta</p>
        </div>
       </div>
     </footer>`;

     const footerElem = document.querySelector(".section-footer")
     footerElem.insertAdjacentHTML("afterbegin", footerHTML)