const express= require('express')

const app=express()


const data=[
    {id:'1',name:'alma',miqdar:'aegbe',qiymet:12},
    {id:'2',name:'armud',miqdar:'ilhd',qiymet:5},
    {id:'3',name:'banan',miqdar:'aha',qiymet:18},
    {id:'4',name:'kivi',miqdar:'ahefr',qiymet:13},
    {id:'5',name:'nar',miqdar:'f9irf',qiymet:852},
    {id:'6',name:'portagal',smiqdar:'tgtrgtrha',qiymet:152},
    {id:'7',name:'uzum',miqdar:'ahaggt',qiymet:1632},
    {id:'8',name:'qarpiz',miqdar:'ahagg',qiymet:18972},
    {id:'9',name:'ciyelek',miqdar:'ahagg',qiymet:1298},
    {id:'10',name:'gilas',miqdar:'ahagg',qiymet:1231},
]
app.get('/',(req,res)=>{
    res.json(data)
})
app.get('/user',(req,res)=>{
    const{count,offset}=(req.query)
    console.log(count,offset)
    let dataWo=data.slice(offset,offset+count)
    console.log(dataWo)
    res.json(dataWo)
})

app.get('/details/:id',(req,res)=>{
    let  id=req.params.id
    let newData=data.find(item=>item.id===id)
    console.log(newData)
    if(newData){
        return res.json(newData)
    }

    res.send('bele bir istifadeci tapilmayib')
})
app.listen(5000,(error)=>{
    if(!error){
        console.log('server is runnig')
        return 
    }
    console.log('xeta bas sverdi')
})