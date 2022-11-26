var obj1={name:"person1",age:5};
var obj2={age:5,name:"person1"};
var json1=JSON.stringify(obj1);
var json2=JSON.stringify(obj2);
if(json1 === json2)
{
    console.log("json are equal");
}
else
{
    console.log("json are not equal");
}
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true);
request.send();
request.onload = function(){
    var data = request.response;
    var result = JSON.parse(data);
    for(var i=0;i<result.length;i++)
    {
        console.log(result[i].name.png);
    }
}
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true);
request.send();
request.onload = function(){
    var data = request.response;
    var result = JSON.parse(data);
    for(var obj of result)
    {
        console.log(obj.name.common,obj.region,obj.subregion,obj.population);
    }
}