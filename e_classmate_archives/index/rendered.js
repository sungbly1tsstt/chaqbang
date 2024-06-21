//渲染-加载列表
var tmp_card;
var Maindiv;
var Card_in_road;
Maindiv = document.getElementById("zj-main-table");
function renCard(time,list){
    var runed = 0;
    var i = 0;
    var limitcard = time;
    var oruned;
    console.log("运行"+time+"次");
    console.log("传入数据:");
    console.log(list);
    while(runed<time){
        runed = ++runed
        oruned = runed;
        Card_in_road = 0;
        Maindiv.innerHTML=Maindiv.innerHTML+"<tr id='"+runed+"tr'>";
        console.log("第"+runed+"次循环");
        console.warn(limitcard);
        while(limitcard<5&&limitcard!=0){
            i=i+1;
            --limitcard;
            if(typeof list["Number"+i] == "undefined"){
            }else{
                ++Card_in_road;
                if(Card_in_road == 1){
                    document.getElementById(runed+"tr").innerHTML="<td id='"+i+"td'>";
                }else{
                    document.getElementById(runed+"tr").innerHTML=document.getElementById(runed+"tr").innerHTML+"<td id='"+i+"td'>";
            }
                console.log(i);
                //document.getElementById(i).innnerHTML="&#60;div class='zj-256' id="+list["Number"+i]+"&#60;&#60;br&#60;&#60;br&#60;&#60;p style='text-align: center;width: 100%;'&#60;&#60;h1&#60;"+list["Name"+i]+"&#60;/h2&#60;&#60;/p&#60;&#60;br&#60;&#60;br&#60;&#60;h1&#60;&#60;span style='color:green;'&#60;"+list["Number"+i]+"号"+"&#62;/span&#60;&#62;/h1&#60;&#62;br&#60;&#62;p&#60; style='width: 100%;text-align: center;color: grey;'&#60;点击查看详情&#62;/p&#60;&#62;/div&#60;";
                document.getElementById(i+"td").innerHTML="<div class='zj-256' id='"+list["Number"+i]+"'>"
                document.getElementById(list["Number"+i]).innerHTML="<br><br><h1 style='color: black;text-align: center;width: 100%;'>"+list["Name"+i]+"<br><h2 style='color: green;text-align: center;width: 100%;'>"+list["Number"+i]+"号"+"</h2><p style='color: gray;text-align: center;width: 100%;'>点击查看详情</p>";
            }
        }
        /*i=i+1;
        Maindiv.innerHTML=Maindiv.innerHTML+"<tr id='"+runed+"tr'>";
        document.getElementById(runed+"tr").innerHTML="<td id='"+i+"td'>";
        console.log(i);
        //document.getElementById(i).innnerHTML="&#60;div class='zj-256' id="+list["Number"+i]+"&#60;&#60;br&#60;&#60;br&#60;&#60;p style='text-align: center;width: 100%;'&#60;&#60;h1&#60;"+list["Name"+i]+"&#60;/h2&#60;&#60;/p&#60;&#60;br&#60;&#60;br&#60;&#60;h1&#60;&#60;span style='color:green;'&#60;"+list["Number"+i]+"号"+"&#62;/span&#60;&#62;/h1&#60;&#62;br&#60;&#62;p&#60; style='width: 100%;text-align: center;color: grey;'&#60;点击查看详情&#62;/p&#60;&#62;/div&#60;";
        document.getElementById(i+"td").innerHTML="<div class='zj-256' id='"+list["Number"+i]+"'>"
        document.getElementById(list["Number"+i]).innerHTML="<br><br><h1 style='color: black;text-align: center;width: 100%;'>"+list["Name"+i]+"<br><h2 style='color: green;text-align: center;width: 100%;'>"+list["Number"+i]+"号"+"</h2><p style='color: gray;text-align: center;width: 100%;'>点击查看详情</p>";
        //console.log(document.getElementById(i).innnerHTML);
        //document.getElementById(i).innerHTML=document.getElementById(i).innerHTML+"&#62;/td&#60;";
        i=i+1;
        //Maindiv.innerHTML=Maindiv.innerHTML+"&#62;div class='zj-256' id="+list["Number"]+i+"]&#60;&#62;br&#60;&#62;br&#60;&#62;p style='text-align: center;width: 100%;'&#60;&#62;h1&#60;"+list["Name"+i]+"&#62;/h2&#60;&#62;/p&#60;&#62;br&#60;&#62;br&#60;&#62;h1&#60;&#62;span&#60; style='color:green;'"+list["Number"+i]+"号"+"&#62;/span&#60;&#62;/h1&#60;&#62;br&#60;&#62;p&#60; style='width: 100%;text-align: center;color: grey;'&#60;点击查看详情&#62;/p&#60;&#62;/div&#60;";
        document.getElementById(runed+"tr").innerHTML=document.getElementById(runed+"tr").innerHTML+"<td id='"+i+"td'>";
        document.getElementById(i+"td").innerHTML="<div class='zj-256' id='"+list["Number"+i]+"'>"
        document.getElementById(list["Number"+i]).innerHTML="<br><br><h1 style='color: black;text-align: center;width: 100%;'>"+list["Name"+i]+"<br><h2 style='color: green;text-align: center;width: 100%;'>"+list["Number"+i]+"号"+"</h2><p style='color: gray;text-align: center;width: 100%;'>点击查看详情</p>";
        //Maindiv.innerHTML=Maindiv.innerHTML+"&#62;/td&#60;";
        //Maindiv.innerHTML=Maindiv.innerHTML+"&#62;/tr&#60;";
        */
    }
    document.getElementById("loadText").innerHTML="<span style='color:green;'>加载完成</span>";
}