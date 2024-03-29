import { useState } from "react";
import "./AddCategory.css";
import { youtube } from "../../../redux/store";
import { addCatFunction } from "../../../redux/CatReducer";
import { useNavigate } from "react-router-dom";

function AddCategory(): JSX.Element {
    const [catName,setName] = useState("");
    const navigate = useNavigate();
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
                        localStorage.setItem("cat",JSON.stringify(catList));
                    }                    
                    //redux handler
                    youtube.dispatch(addCatFunction(catName));
                    //move to main page
                    navigate("/");
                }}/>
            </div>
        </div>
    );
}

export default AddCategory;
