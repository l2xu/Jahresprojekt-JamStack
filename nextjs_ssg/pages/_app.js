import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  /* if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      btn_totop.style.display = "block";
    } else {
      btn_totop.style.display = "none";
    }
  */

  // TODO: Der Teil muss eine eigene Component werden ;)
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  return (
    <div className="wrapper">
      <Header />
      <Component {...pageProps} />
      <Footer />
      {/* // TODO: Der Teil muss eine eigene Component werden ;) */}
      <img
        id="btn_totop"
        src="/next (1).png"
        onClick={topFunction}
        className="btn_scroll"
        width="40px"
      />
    </div>
  );
}

export default MyApp;
