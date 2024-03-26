import "./Header.css";

function Header(): JSX.Element {
    const userName = "zeev mindali";
    const totalSongs = 6;
    return (
        <div className="Header">
			<h1>Songs for shanti banti</h1>
            <h2>Hello {userName}, you have {totalSongs} songs</h2>
        </div>
    );
}

export default Header;
