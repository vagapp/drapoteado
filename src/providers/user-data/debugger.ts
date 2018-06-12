export class Debugger{
    static debug:boolean = true;

    static log( show:any[],debuging_override:boolean = null){
        if(debuging_override === true || Debugger.debug === true){
                console.log.apply(console,show);
            }
        }
    }   