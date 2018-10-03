window.eventHub = {
    events: {},
    on(event, fn){
        if(!this.events[event]){
            this.events[event] = []
        }
        this.events[event].push(fn)
    },
    emit(event, data){
        for(let key in this.events){
            if(event === key){
                this.events[key].map((fn)=>{
                    fn.call(undefined,data)
                })
            }
        }
    }
}
