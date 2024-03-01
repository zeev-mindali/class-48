import "./gang1.css";

interface Gang1Props {
    nodeId:number;
    name:String;
    location:String;
}

function Gang1(props: Gang1Props): JSX.Element {
    return (
        <div className="gang1 Box">
			nodeId:{props.nodeId} <br/>name:{props.name} <br/>location:{props.location}<hr/>
            <input type="text"/>
            <input type="submit" value="send"/>
        </div>
    );
}

export default Gang1;
