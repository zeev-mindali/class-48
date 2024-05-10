//npm install notyf
//remmber to add the css and script to index.html in public folder.....

import { Notyf } from "notyf";

class Notify{
    private notification = new Notyf({duration:4000, position:{x:"center", y:"top"}});
    public success(message:string){
        this.notification.success(message)
    }

    public error(message:string){
        this.notification.error(message)
    }
}

const notify = new Notify();
export default notify;