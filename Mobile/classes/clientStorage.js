export class ClientStorage{
    constructor(clients){//clientsArr=[{id:101, fio:"Иванов И.И.", balance:200},{id:105, fio:"Сидоров С.С.", balance:250}]
        this._clients=clients;
        this.clientsView=clients;
        this.filtState="all";
    }
    addClient=()=>{
        this._clients = [...this._clients, {id:Math.random(), fio:"enter name", balance:0}];
        this.clientsView = [...this._clients];
        this.filterClient(this.filtState);
    };
    removeClient=(id)=>{
        let changed=false;
        const newClients=[...this._clients]; // копия самого массива клиентов
        newClients.forEach( (c,i) => {
            if ( c.id===id ) {
                newClients.splice(i,1);
                changed=true;
            }
        } );
        if ( changed ) {
            this._clients=newClients;
            this.clientsView=[...newClients];
            this.filterClient(this.filtState);
        }
    };
    editClient=(id, info)=>{
        let changed=false;
        const newClients=[...this._clients];
        newClients.forEach( (c,i) => {
            if ( c.id===id ) {
                newClients.splice(i,1,info);
                changed=true;
            }
        } );
        if ( changed ) {
            this._clients=newClients;
            this.clientsView=[...newClients];
            this.filterClient(this.filtState);
        }
    };
    filterClient = (filtState) =>{//filtState==="+"||"-"||"all"
        let tempArr=[...this._clients];
        if (filtState==="+"){
            tempArr=tempArr.filter(cl=>+cl.balance>0);
            this.clientsView=tempArr;
            this.filtState=filtState;
        }else if (filtState==="-"){
            tempArr=tempArr.filter(cl=>+cl.balance<=0);
            this.clientsView=tempArr;
            this.filtState=filtState;
        }else {
            this.clientsView=[...this._clients];
            this.filtState=filtState;
        }
    };
}
