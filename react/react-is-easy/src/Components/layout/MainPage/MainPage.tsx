import "./MainPage.css";

function MainPage(): JSX.Element {
    let bestStudent:String = "Matti";
    let complicatedStudent:String = "Gabriel";

    return (
        <div className="MainPage">
			Welcome to our REACT project<br/><br/>
            our best studet is:{bestStudent}  and complicated one is: {complicatedStudent}
        </div>
    );
}

export default MainPage;
