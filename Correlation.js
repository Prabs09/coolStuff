require('./Record');
let Record=[];
function addRecord(event,val){
    Record.push({event,val});
}

function eventsList(record){
    let allEvents=[];
    for(let rec of record)
    {
        for(let event of rec.events)
        {
            if(!allEvents.includes(event))
            {
                allEvents.push(event);
            }
        }
    }
    return allEvents;
}

function table(event,record)
{
    let table=[0,0,0,0];
    for(let rec of record)
    {
        let index=0;
        if(rec.events.includes(event)) index+=1;
        if(rec.activity) index+=2;
        table[index]+=1;
    }
    return table;
}

function corelation([a00,a01,a10,a11]){
    let num=a11*a00-a10*a01;
    let den=Math.sqrt((a00+a01)*(a10+a11)*(a00+a10)*(a01+a11));
    let coef=num/den;
    return coef;
}

for (let event of eventsList(Record)) {
let cor = corelation(table(event, Record));
console.log(event + ":" + cor);
            }