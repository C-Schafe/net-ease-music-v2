console.log('eventHub');

window.eventHub = {
    events: {},
    on(event, fn){
        if(!this.events[event]){
            this.events[event] = []
        }
        this.events[event].push(fn)
    },
    emit(event, data){
        console.log('eventHub emit执行');
        console.log(event, data)
        console.log(this.events)
        for(let key in this.events){
            if(event === key){
                this.events[key].map((fn)=>{
                    fn.call(undefined,data)
                })
            }
        }
    }
}
