import "./gang1.css";

interface Gang1Props {
    nodeId:number;
    name:String;
    location:String;
    totalEpid:number;
}

function Gang1(props: Gang1Props): JSX.Element {
    //const isNotWorking="bla bla";
    return (
        <div className="gang1 Box">
			nodeId:{props.nodeId} <br/>name:{props.name} <br/>location:{props.location}<hr/>
            {[...Array(props.totalEpid)].map(index=><><input key={index} type="text"/><br/></>)}
            <input type="text"/><br/>
            <input type="submit" value="send"/>
        </div>
    );
}

export default Gang1;
