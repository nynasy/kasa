import  "../styles/components/Layout.scss"
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout({ children }) {
    return (
        <div className="rootContainer">
            <header>
                <Header/>
            </header>
            <main>
                { children }
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
}