//npm install notyf
//remmber to add the css and script to index.html in public folder.....

import { Notyf } from "notyf";

class Notify{
    private notification = new Notyf({duration:1500, position:{x:"left", y:"top"}});
    public success(message:string){
        this.notification.success(message)
    }

    public error(message:string){
        this.notification.error(message)
    }
}

const notify = new Notify();
export default notify;