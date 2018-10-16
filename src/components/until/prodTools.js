let prodTools = {};

let prods = JSON.parse(window.localStorage.getItem("prod")||"{}");


prodTools.addOrUpdate =function(p)
{
    if(prods[p.id] != undefined)
    {
        prods[p.id] += p.mun;
    }
    else
    {
        prods[p.id] = p.mun;
    }
    this.save(prods);

}
prodTools.delete =function(p)
{
    delete prods[p.id];
    this.save(prods);
}

prodTools.getProds = function(p)
{
    return JSON.parse(window.localStorage.getItem("prod")||"{}")[p.id];
} 
prodTools.getAllProds = function()
{
    return  JSON.parse(window.localStorage.getItem("prod")||"{}");
} 

prodTools.getCountProds = function()
{
    let sum = 0;
    for(let id in prods)
    {
        sum += prods[id];
    }
    return sum;
}

prodTools.save = function(prod)
{   
    window.localStorage.setItem("prod",JSON.stringify(prod));
}
export default prodTools;