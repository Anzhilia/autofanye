auto();
console.show();
app.launchApp("学习通");
id("com.chaoxing.mobile:id/tv_main_tab_title").waitFor();
sleep(1000);
id("com.chaoxing.mobile:id/tv_main_tab_title").click();
//等待首页加载出来后再点击按钮
click("中国石油大学（北京）图书馆");
text("阅读积分").waitFor();
sleep(1000);
text("阅读积分").click();
//等待网页加载出来后再点击阅读积分
text("排行榜").waitFor();
sleep(1000);
text("排行榜").click();
//获取现在有的积分

text("排名").waitFor();
var 已有积分=depth(13).indexInParent(4).findOne().text();
print("已有积分："+已有积分);
if(已有积分>=500){
    print("已经完成啦")
    exit()
    }
depth(13).drawingOrder(1).findOne().click();
//学习轨迹
sleep(1000);
id("com.chaoxing.mobile:id/web_toolbar_right_action2").click();
//上面为学习轨迹
text("学习统计").waitFor();
//点击课程
var c=drawingOrder(0).depth(14).row(0).findOne().click();

depth(16).drawingOrder(0).waitFor();
//这一步错误
sleep(1500);
//课程内点击书籍
var c=depth(22).drawingOrder(0).row(-1).indexInParent(1).findOne();
click(c.bounds().centerX(),c.bounds().centerY());
//toast("请选择章节");
text("详情").waitFor();
sleep(1000);
print("请选择章节");
id("com.chaoxing.mobile:id/web_toolbar_right_action2").waitFor();
print("启动阅读功能")
a=device.width;
b=device.height;
var 时间开始 = new Date().getTime() 

while(true){
    m=random(1,3);
    sleep(m*1000);  
    syz=text("上一章").exists();
    xyz=text("下一章").exists();
    if(syz==true&&xyz==true){
       toast("中间章节");
       zjqd="下一章";
        }else if(syz==true){
            toast("最后一章");
            zjqd="上一章";
            }else{
                toast("第一章");
                zjqd="下一章";
                } 
                m=random(1,3);
    sleep(m*1000);      
    //第一步 设置上部分阅读时间
var mytop=text(zjqd).findOne().bounds().top;
if(mytop>60000){
    toast("长篇文章")
    }else if(mytop>20000){
    toast("中篇文章");
    }else{
    toast("短篇文章");
        }
 
       //计算一页滚动时间
//var ypgdtime=Math.round(topydtime*60*2040/(mytop-90));
   //上部分     
while(true){        
 //这里应该循环
     //开始滚动
    m=random(3,5);
    sleep(m*1000);
//var sjypgdtime=random(ypgdtime,ypgdtime+10);
var  shsx=random(0,20);//随机上下页
if(shsx<2){
    //向上
    toast("up");
    swipe(a/2,b/3*1,a/2,b/3*2,random(5,8)*1000);
    m=random(1,2);
    sleep(m*1000);
    }else{
        //向下
     toast("down");
     swipe(a/2,b/3*2,a/2,b/3*1,random(9,12)*1000);
     bdtop=text(zjqd).findOne().bounds().top;
     m=random(1,3);
    sleep(m*1000);
    var 时间结束 = new Date().getTime() 
    var 时间间隔 = Math.floor((时间结束 - 时间开始) / (1000*60));
    
  现有积分=parseInt(已有积分)+时间间隔*2
   toast("现有积分"+现有积分);
     if(现有积分>=500){
         sleep(1000);
    toast("已经完成啦")
    exit()
    }
     if(bdtop<2061){
       toast("跳出上部分,开始下部分");
       sleep(1000); 
       break;
       }
        }
 }      

//下部分
toast("下部分");
var xbfzc=text(zjqd).findOne().bounds().bottom;
while(true){
swipe(a/2,b/3*2,a/2,b/3*1,random(7,10)*1000);
m=random(1,2);
    sleep(m*1000);
//记录
var xbfxz=text(zjqd).findOne().bounds().bottom;
if(xbfxz==xbfzc){
    //到底了
    break;
    }else{
        xbfzc=xbfxz;
        m=random(1,3);
        sleep(m*1000);
        //继续循环
var 时间结束 = new Date().getTime() 
var 时间间隔 = Math.floor((时间结束 - 时间开始) / (1000*60));
  现有积分=parseInt(已有积分)+时间间隔*2
  toast("现有积分"+现有积分);
     if(现有积分>=500){
         sleep(1000);
    toast("已经完成啦")
    exit()
    }
        }        
        }

if(zjqd=="上一章"){
    toast("本书已读完");
    break;
    }else{
    toast("正在转至下一章");
    text(zjqd).findOne().click();
           }
    
    
  
  }   
