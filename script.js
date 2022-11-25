 var request=new XMLHttpRequest();

 request.open("GET","https://restcountries.com/v3.1/all");

 request.send();

request.onload=function()

 {

var res=JSON.parse(request.response);

for (var i=0;i<res.length;i++)
{

    console.log("countryName:"+(res[i].name["common"])+" , "+"region:"+(res[i].region)+" , "+"subregion:"+(res[i].subregion)+" , "+"population:"+(res[i].population));

console.log(res[i].flags["png"]);
}
};