import "./MainMenu.css";

function MainMenu(): JSX.Element {
    let myMenuItem = [
        {id: 1, name:"מתג בודד"},
        {id: 2, name:"מתג כפול"},
        {id: 3, name:"מתג 3 יציאות"},
        {id: 4, name:"מתג 9 יציאות"},
        {id: 5, name:"לוח בקרה"},
        {id: 6, name:"חיישן"},
        {id: 7, name:"תריסים"},
        {id: 8, name:"ייבוא"},
        {id: 9, name:"ייצוא"},
        {id: 10, name:"שליחה לשרת"},
    ]
    return (
        <div className="MainMenu">
			<b>Main menu</b>
            <hr/>
            {/* {myMenuItem.map(item=>
                <>                     
                    <span key={item.id}>{item.name}</span>                                    
                    {item.id==7 && <hr/>}                    
                    {item.id==9 && <hr/>}
                    <br/>
                </>
            )} */}
            TBC
        </div>
    );
}

export default MainMenu;
