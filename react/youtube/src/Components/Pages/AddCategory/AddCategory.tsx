import { useState } from "react";
import "./AddCategory.css";

function AddCategory(): JSX.Element {
    const [catName,setName] = useState("");
    return (
        <div className="AddCategory">
			<div className="Box">
                <input type="text" placeholder="Category name..." onKeyUp={(args)=>{
                    setName(args.currentTarget.value);
                }}/>
                <br/>
                <input type="button" value="add Category" onClick={()=>{
                    //local storage handler
                    try{
                        let catList = JSON.parse(localStorage.getItem("cat")||"");
                        catList.push(catName);
                        localStorage.setItem("cat",JSON.stringify(catList));
                    } catch (err){
                        let catList = [];
                        catList.push(catName);
                        localStorage.setItem("cat",JSON.stringify(catName));
                    }
                    //redux handler
                    
                }}
            </div>
        </div>
    );
}

export default AddCategory;
