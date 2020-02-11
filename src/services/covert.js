function parsetoJson(string){
    let arr = string.split(',');
    let finalobj = {}
    arr.forEach(str => {
        let newarr = str.split('=');
        let val = newarr[0].trim();
        let key = newarr[1].trim();
        finalobj[key]=val
    })
   console.log(finalobj)
}

parsetoJson(`1-2 = 1,
2-4 = 2,
5-10 = 3,
10+ = 4 `)

parsetoJson(`$ = 1,
$$ = 2,
$$$ = 3,
$$$$ = 4`)

parsetoJson(`Casual = 1,
Formal = 2,
Semi-formal = 3`)