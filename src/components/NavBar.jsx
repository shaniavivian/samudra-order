// src/components/NavBar.jsx

export default function NavBar() {
    return (
        <nav style={{ display: "flex", gap: 10px, padding: "0px 16px"}}>
            <a href="#menu">Menu</a>
            <a href="#beans">Beans</a>
            <a href="#story">Story</a>
        </nav>
    );
}