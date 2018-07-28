export class Debugger{
    static debug:boolean = true;

    public static DEBUT_FORCE_YES = 1;
    public static DEBUT_FORCE_NO = 0;
    public static DEBUT_FORCE_NOTHING = -1;

    static debugForce:number = Debugger.DEBUT_FORCE_NOTHING;

    static log( show:any[],debuging_override:boolean = null){
            if(Debugger.debugForce !== Debugger.DEBUT_FORCE_NOTHING){
                if(Debugger.debugForce === Debugger.DEBUT_FORCE_YES){ console.log.apply(console,show); }
                if(Debugger.debugForce === Debugger.DEBUT_FORCE_NO){ return false; }
            }
        if(debuging_override === false){ return false;}
        if(debuging_override === true || Debugger.debug === true){
                console.log.apply(console,show);
            }
        }
    }   