images=["MOM.jpg","GIRL.png","DAD.png"];
Textt=["Mom","Me","Dad"];
var i=0;
function Next(){
    if (i==3) {
     i=0;   
    }
    document.getElementById("image1").src=images[i];
    document.getElementById("names").innerHTML=Textt[i];
    i++;
}
