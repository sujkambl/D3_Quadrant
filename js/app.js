
var selectchange=0;


$('#selectgeo').change(function() { selectchange=1; });
$('#selectx').change(function() { selectchange=1; });
$('#selecty').change(function() { selectchange=1; });
$('#selectz').change(function() { selectchange=1; });
$('#classify').change(function() { selectchange=1; });

var revert={};
      var newdataarray=[];  
      var newsetuparray={};

function filterrequest(){
  if(selectchange===1){
    submitbtn();
  }else{
    stylesubmit();
  }
}

function modal(){
  
  //create revert object in event of cancel button
  revert.i_height=$('#i_height').val();
  revert.i_width=$('#i_width').val();
  revert.i_topbuffer=$('#i_topbuffer').val();
  revert.i_bottombuffer=$('#i_bottombuffer').val();
  revert.i_leftbuffer=$('#i_leftbuffer').val();
  revert.i_rightbuffer=$('#i_rightbuffer').val();
  revert.i_title=$('#i_title').val();
  revert.i_titlefontsize=$('#i_titlefontsize').val();
  revert.i_titlefontcolor=$('#i_titlefontcolor').val();
  revert.i_xaxislabel=$('#i_xaxislabel').val();
  revert.i_yaxislabel=$('#i_yaxislabel').val();
  revert.i_axislabelfontsize=$('#i_axislabelfontsize').val();
  revert.i_axislabelcolor=$('#i_axislabelcolor').val();
  revert.i_axislineewidth=$('#i_axislineewidth').val();
  revert.i_axislinecolor=$('#i_axislinecolor').val();
  revert.i_axisopacity=$('#i_axisopacity').val();
  revert.i_axistextsize=$('#i_axistextsize').val();
  revert.i_axistextcolor=$('#i_axistextcolor').val();
  revert.i_quadrantaxiscolor=$('#i_quadrantaxiscolor').val();
  revert.i_quadrantaxiswidth=$('#i_quadrantaxiswidth').val();
  revert.i_defaultdotradius=$('#i_defaultdotradius').val();
  revert.i_dotminsize=$('#i_dotminsize').val();
  revert.i_dotmaxsize=$('#i_dotmaxsize').val();
  revert.i_dotcolor=$('#i_dotcolor').val();
  revert.i_dotlabel=$('#i_dotlabel').val();
  revert.i_dotlabelfontsize=$('#i_dotlabelfontsize').val();
  revert.i_dotlabelfontcolor=$('#i_dotlabelfontcolor').val();
  
$('#modal').modal('toggle');
}

function reset(){
  
  $('#i_height').val("600");
  $('#i_width').val("800");
  $('#i_topbuffer').val("60");
  $('#i_bottombuffer').val("60");
  $('#i_leftbuffer').val("100");
  $('#i_rightbuffer').val("40");
  $('#i_title').val("");
  $('#i_titlefontsize').val("24");
  $('#i_titlefontcolor').val("#000000");
  $('#i_xaxislabel').val("");
  $('#i_yaxislabel').val("");
  $('#i_axislabelfontsize').val("20");
  $('#i_axislabelcolor').val("#000000");
  $('#i_axislineewidth').val("1");
  $('#i_axislinecolor').val("#000000");
  $('#i_axisopacity').val("0.5");
  $('#i_axistextsize').val("10");
  $('#i_axistextcolor').val("#000000");
  $('#i_quadrantaxiscolor').val("#808080");
  $('#i_quadrantaxiswidth').val("2");
  $('#i_defaultdotradius').val("4");
  $('#i_dotminsize').val("2");
  $('#i_dotmaxsize').val("10");
  $('#i_dotcolor').val("#800000");
  $('#i_dotlabel').val("true");
  $('#i_dotlabelfontsize').val("10");
  $('#i_dotlabelfontcolor').val("#000000");
  
}

function cancel(){
  
  $('#i_height').val(revert.i_height);
  $('#i_width').val(revert.i_width);
  $('#i_topbuffer').val(revert.i_topbuffer);
  $('#i_bottombuffer').val(revert.i_bottombuffer);
  $('#i_leftbuffer').val(revert.i_leftbuffer);
  $('#i_rightbuffer').val(revert.i_rightbuffer);
  $('#i_title').val(revert.i_title);
  $('#i_titlefontsize').val(revert.i_titlefontsize);
  $('#i_titlefontcolor').val(revert.i_titlefontcolor);
  $('#i_xaxislabel').val(revert.i_xaxislabel);
  $('#i_yaxislabel').val(revert.i_yaxislabel);
  $('#i_axislabelfontsize').val(revert.i_axislabelfontsize);
  $('#i_axislabelcolor').val(revert.i_axislabelcolor);
  $('#i_axislineewidth').val(revert.i_axislineewidth);
  $('#i_axislinecolor').val(revert.i_axislinecolor);
  $('#i_axisopacity').val(revert.i_axisopacity);
  $('#i_axistextsize').val(revert.i_axistextsize);
  $('#i_axistextcolor').val(revert.i_axistextcolor);
  $('#i_quadrantaxiscolor').val(revert.i_quadrantaxiscolor);
  $('#i_quadrantaxiswidth').val(revert.i_quadrantaxiswidth);
  $('#i_defaultdotradius').val(revert.i_defaultdotradius);
  $('#i_dotminsize').val(revert.i_dotminsize);
  $('#i_dotmaxsize').val(revert.i_dotmaxsize);
  $('#i_dotcolor').val(revert.i_dotcolor);
  $('#i_dotlabel').val(revert.i_dotlabel);
  $('#i_dotlabelfontsize').val(revert.i_dotlabelfontsize);
  $('#i_dotlabelfontcolor').val(revert.i_dotlabelfontcolor);
  
}

function stylesubmit(){
  $( "#svgcontainer" ).empty();

  
  newsetuparray.height=Number($('#i_height').val());
  newsetuparray.width=Number($('#i_width').val());
  newsetuparray.topspace=Number($('#i_topbuffer').val());
  newsetuparray.bottomspace=Number($('#i_bottombuffer').val());
  newsetuparray.lbuffer=Number($('#i_leftbuffer').val());
  newsetuparray.rbuffer=Number($('#i_rightbuffer').val());
  newsetuparray.title=$('#i_title').val();
  newsetuparray.titlefontsize=$('#i_titlefontsize').val()+"px";
  newsetuparray.titlefontcolor=$('#i_titlefontcolor').val();
  newsetuparray.xlabel=$('#i_xaxislabel').val();
  newsetuparray.ylabel=$('#i_yaxislabel').val();
  newsetuparray.axislabelsize=$('#i_axislabelfontsize').val()+"px";
  newsetuparray.axislabelcolor=$('#i_axislabelcolor').val();
  newsetuparray.axislineewidth=$('#i_axislineewidth').val()+"px";
  newsetuparray.axislinecolor=$('#i_axislinecolor').val();
  newsetuparray.axisopacity=Number($('#i_axisopacity').val());
  newsetuparray.axistextsize=$('#i_axistextsize').val()+"px";
  newsetuparray.axistextcolor=$('#i_axistextcolor').val();
  newsetuparray.quadrantaxiscolor=$('#i_quadrantaxiscolor').val();
  newsetuparray.quadrantaxiswidth=$('#i_quadrantaxiswidth').val()+"px";
  newsetuparray.dotRadius=Number($('#i_defaultdotradius').val());
  newsetuparray.item_min_ptsize=Number($('#i_dotminsize').val());
  newsetuparray.item_max_ptsize=Number($('#i_dotmaxsize').val());
  newsetuparray.dotcolor=$('#i_dotcolor').val();
  newsetuparray.itemslabel=$('#i_dotlabel').val();
  newsetuparray.itemsfontsize=$('#i_dotlabelfontsize').val()+"px";
  newsetuparray.itemsfontcolor=$('#i_dotlabelfontcolor').val();

 createQuadrantChart("svgcontainer", newdataarray, newsetuparray);
  
}



        //loop through - add all themes
        var i;
    
        for (i = 0; i < datatree.data.length; i=i+1) {
            $('#selectx').append('<option value="' + datatree.data[i].varcode + '">' + datatree.data[i].verbose + '</option>'); 
            $('#selecty').append('<option value="' + datatree.data[i].varcode + '">' + datatree.data[i].verbose + '</option>'); 
            $('#selectz').append('<option value="' + datatree.data[i].varcode + '">' + datatree.data[i].verbose + '</option>'); 
        }


    function submitbtn(){
      
      selectchange=0;
      
  $( "#svgcontainer" ).empty();

      
    var tablelist='';
    newdataarray=[];
      
    var xval=$("#selectx").val(); 
    var yval=$("#selecty").val();
    var zval=$("#selectz").val();  
         
    var db='acs0913';
    var schema='data';
    var limit='10000';
      
      var sumlev;

    var geog=$("#selectgeo").val(); 
      
      if(geog=='cc'){sumlev="50";}
      if(geog=='cp'){sumlev="160";}            

      
      var state="8";
      
      var fp;
      
      var xnumerator;
      var xdenominator;
      var xtype;
      
      var ynumerator;
      var ydenominator;
      var ytype;
      
      var znumerator;
      var zdenominator;
      
      var xminval, xmininc, yminval, ymininc, zminval, zmininc;
      var sigdig;
      
    for(i=0;i<datatree.data.length;i=i+1){
        if(xval==datatree.data[i].varcode){
          fp=datatree.data[i];
          tablelist=fp.table;
          newsetuparray.xlabel=fp.verbose;
         xnumerator=fp.numerator;
         xdenominator=fp.denominator;  
          xminval=fp.minval;
          xmininc=fp.mininc;    
          sigdig=0;
          if(xmininc.indexOf(".") !== -1){
              sigdig=xmininc.toString().split(".")[1].length;
          }else{
            sigdig=0;
          }
          if(fp.type=="currency"){newsetuparray.xtype="$,."+sigdig+"f";}
          if(fp.type=="regular"){newsetuparray.xtype="."+sigdig+"f";}
          if(fp.type=="number"){newsetuparray.xtype=",."+sigdig+"f";}
          if(fp.type=="percent"){newsetuparray.xtype=".2p";}  
         }
    }     
      
    for(i=0;i<datatree.data.length;i=i+1){
        if(yval==datatree.data[i].varcode){
          fp=datatree.data[i];
          tablelist=tablelist+","+fp.table;
          newsetuparray.ylabel=fp.verbose;
         ynumerator=fp.numerator;
         ydenominator=fp.denominator;   
          yminval=fp.minval;
          ymininc=fp.mininc;      
          sigdig=0;
          if(ymininc.indexOf(".") !== -1){
              sigdig=ymininc.toString().split(".")[1].length;
          }else{
            sigdig=0;
          }
          if(fp.type=="currency"){newsetuparray.ytype="$,."+sigdig+"f";}
          if(fp.type=="regular"){newsetuparray.ytype="."+sigdig+"f";}
          if(fp.type=="number"){newsetuparray.ytype=",."+sigdig+"f";}
          if(fp.type=="percent"){newsetuparray.ytype=".2p";}    
        }
    }
    
      if(zval!=='none'){
        for(i=0;i<datatree.data.length;i=i+1){
          fp=datatree.data[i];
          if(zval==datatree.data[i].varcode){
            tablelist=tablelist+","+fp.table;
             znumerator=fp.numerator;
             zdenominator=fp.denominator; 
          zminval=fp.minval;
          zmininc=fp.mininc;
          sigdig=0;
          if(zmininc.indexOf(".") !== -1){
              sigdig=zmininc.toString().split(".")[1].length;
          }else{
            sigdig=0;
          }
          if(fp.type=="currency"){newsetuparray.ztype="$,."+sigdig+"f";}
          if(fp.type=="regular"){newsetuparray.ztype="."+sigdig+"f";}
          if(fp.type=="number"){newsetuparray.ztype=",."+sigdig+"f";}
          if(fp.type=="percent"){newsetuparray.ztype=".2p";}   
          }
          }           
        }


    newsetuparray.title=newsetuparray.xlabel + ' by ' + newsetuparray.ylabel ;

//first call query for CO AVG - encapsulate main call

    $.get( "../CensusAPI/demog.php?db="+db+"&schema="+schema+"&table="+tablelist+"&geonum=108", function( prelim ) {

      //get state avg data
          fp=prelim.data[0];       

          newsetuparray.quadrantxaxis=((eval(xnumerator))/(eval(xdenominator)));  
          newsetuparray.quadrantyaxis=((eval(ynumerator))/(eval(ydenominator)));    

      $.get( "../CensusAPI/demog.php?db="+db+"&schema="+schema+"&limit="+limit+"&table="+tablelist+"&sumlev="+sumlev+"&state="+state, function( results ) {
      
        //get individual data
        
      //console.log(results);
      

      var tempobj={};
      

      for(i=0;i<results.data.length;i=i+1){
          fp=results.data[i];       
          tempobj={};
          tempobj.x=((eval(xnumerator))/(eval(xdenominator))) || 0;  
          tempobj.y=((eval(ynumerator))/(eval(ydenominator))) || 0;    
          tempobj.z=((eval(znumerator))/(eval(zdenominator))) || 0;        
          tempobj.label=fp.geoname.replace(/ County, Colorado/g, "").replace(/, Colorado/g, ""); 

        //if geography = colorado counties
          if(geog=="cc"){tempobj.category=lookupcounty(tempobj.label);}
        //if geography = colorado places
          if(geog=="cp"){tempobj.category=lookupplace(tempobj.label);}
        //if null value or value lower than minval, don't add to final data set
        if(tempobj.x<xminval || tempobj.y<yminval || tempobj.z<zminval){}else{newdataarray.push(tempobj);}
          
      }
        
        if($('#classify').val()=='pr'){newsetuparray.colorschemetype='unique';}
        if($('#classify').val()=='pq'){newsetuparray.colorschemetype='sequential';}
        if($('#classify').val()=='mhiq'){newsetuparray.colorschemetype='sequential';}
        if($('#classify').val()=='none'){newsetuparray.colorschemetype='none';}
        
      createQuadrantChart("svgcontainer", newdataarray, newsetuparray);
        

  //saveSvgAsPng(document.getElementById("svgel"), "diagram.png");
      
    });
      
     });     
 
            function lookupplace(place){

        var found={};
        
        switch(place){
          case 'Crisman CDP': found = {'pr':'3','w':'','pq':'4','mhiq':'1'}; break;
case 'Cherry Hills Village city': found = {'pr':'3','w':'','pq':'2','mhiq':'1'}; break;
case 'Castle Pines Village CDP': found = {'pr':'3','w':'','pq':'2','mhiq':'1'}; break;
case 'St. Ann Highlands CDP': found = {'pr':'3','w':'','pq':'4','mhiq':'1'}; break;
case 'Bow Mar town': found = {'pr':'3','w':'','pq':'3','mhiq':'1'}; break;
case 'Sunshine CDP': found = {'pr':'3','w':'','pq':'5','mhiq':'1'}; break;
case 'Lazy Acres CDP': found = {'pr':'3','w':'','pq':'3','mhiq':'1'}; break;
case 'Columbine Valley town': found = {'pr':'3','w':'','pq':'3','mhiq':'1'}; break;
case 'Paragon Estates CDP': found = {'pr':'3','w':'','pq':'3','mhiq':'1'}; break;
case 'Genesee CDP': found = {'pr':'3','w':'','pq':'2','mhiq':'1'}; break;
case 'Castle Pines city': found = {'pr':'3','w':'','pq':'1','mhiq':'1'}; break;
case 'Pine Brook Hill CDP': found = {'pr':'3','w':'','pq':'3','mhiq':'1'}; break;
case 'Perry Park CDP': found = {'pr':'3','w':'','pq':'2','mhiq':'1'}; break;
case 'The Pinery CDP': found = {'pr':'3','w':'','pq':'1','mhiq':'1'}; break;
case 'Bark Ranch CDP': found = {'pr':'3','w':'','pq':'4','mhiq':'1'}; break;
case 'Brick Center CDP': found = {'pr':'3','w':'','pq':'4','mhiq':'1'}; break;
case 'Woodmoor CDP': found = {'pr':'4','w':'','pq':'1','mhiq':'1'}; break;
case 'Timnath town': found = {'pr':'2','w':'','pq':'3','mhiq':'1'}; break;
case 'Stonegate CDP': found = {'pr':'3','w':'','pq':'1','mhiq':'1'}; break;
case 'Greenwood Village city': found = {'pr':'3','w':'','pq':'1','mhiq':'1'}; break;
case 'Foxfield town': found = {'pr':'3','w':'','pq':'3','mhiq':'1'}; break;
case 'Highlands Ranch CDP': found = {'pr':'3','w':'','pq':'1','mhiq':'1'}; break;
case 'Superior town': found = {'pr':'3','w':'','pq':'1','mhiq':'1'}; break;
case 'Lone Tree city': found = {'pr':'3','w':'','pq':'1','mhiq':'1'}; break;
case 'Black Forest CDP': found = {'pr':'4','w':'','pq':'1','mhiq':'1'}; break;
case 'Tabernash CDP': found = {'pr':'12','w':'','pq':'4','mhiq':'1'}; break;
case 'Coal Creek CDP': found = {'pr':'3','w':'','pq':'2','mhiq':'1'}; break;
case 'Roxborough Park CDP': found = {'pr':'3','w':'','pq':'1','mhiq':'1'}; break;
case 'Erie town': found = {'pr':'2','w':'','pq':'1','mhiq':'1'}; break;
case 'Floyd Hill CDP': found = {'pr':'3','w':'','pq':'3','mhiq':'1'}; break;
case 'Watkins CDP': found = {'pr':'3','w':'','pq':'3','mhiq':'1'}; break;
case 'Peoria CDP': found = {'pr':'3','w':'','pq':'5','mhiq':'1'}; break;
case 'Gleneagle CDP': found = {'pr':'4','w':'','pq':'1','mhiq':'1'}; break;
case 'Cherry Creek CDP': found = {'pr':'3','w':'','pq':'1','mhiq':'1'}; break;
case 'Todd Creek CDP': found = {'pr':'3','w':'','pq':'2','mhiq':'1'}; break;
case 'Upper Bear Creek CDP': found = {'pr':'3','w':'','pq':'3','mhiq':'1'}; break;
case 'Parker town': found = {'pr':'3','w':'','pq':'1','mhiq':'1'}; break;
case 'Fairmount CDP': found = {'pr':'3','w':'','pq':'1','mhiq':'1'}; break;
case 'Niwot CDP': found = {'pr':'3','w':'','pq':'2','mhiq':'1'}; break;
case 'Altona CDP': found = {'pr':'3','w':'','pq':'3','mhiq':'1'}; break;
case 'Ponderosa Park CDP': found = {'pr':'5','w':'','pq':'2','mhiq':'1'}; break;
case 'Maysville CDP': found = {'pr':'13','w':'','pq':'5','mhiq':'1'}; break;
case 'Chacra CDP': found = {'pr':'11','w':'','pq':'4','mhiq':'1'}; break;
case 'Loma CDP': found = {'pr':'11','w':'','pq':'2','mhiq':'1'}; break;
case 'Inverness CDP': found = {'pr':'3','w':'','pq':'2','mhiq':'1'}; break;
case 'Gypsum town': found = {'pr':'12','w':'','pq':'1','mhiq':'1'}; break;
case 'Sugarloaf CDP': found = {'pr':'3','w':'','pq':'4','mhiq':'1'}; break;
case 'Centennial city': found = {'pr':'3','w':'','pq':'1','mhiq':'1'}; break;
case 'Lyons town': found = {'pr':'3','w':'','pq':'2','mhiq':'1'}; break;
case 'Ophir town': found = {'pr':'10','w':'','pq':'4','mhiq':'1'}; break;
case 'Monument town': found = {'pr':'4','w':'','pq':'2','mhiq':'1'}; break;
case 'Mead town': found = {'pr':'2','w':'','pq':'2','mhiq':'1'}; break;
case 'Redvale CDP': found = {'pr':'10','w':'','pq':'4','mhiq':'1'}; break;
case 'Castle Rock town': found = {'pr':'3','w':'','pq':'1','mhiq':'1'}; break;
case 'Acres Green CDP': found = {'pr':'3','w':'','pq':'2','mhiq':'1'}; break;
case 'Ken Caryl CDP': found = {'pr':'3','w':'','pq':'1','mhiq':'1'}; break;
case 'Seven Hills CDP': found = {'pr':'3','w':'','pq':'5','mhiq':'1'}; break;
case 'Evergreen CDP': found = {'pr':'3','w':'','pq':'1','mhiq':'1'}; break;
case 'Louisville city': found = {'pr':'3','w':'','pq':'1','mhiq':'1'}; break;
case 'Severance town': found = {'pr':'2','w':'','pq':'2','mhiq':'1'}; break;
case 'Morgan Heights CDP': found = {'pr':'1','w':'','pq':'4','mhiq':'1'}; break;
case 'Windsor town': found = {'pr':'2','w':'','pq':'1','mhiq':'1'}; break;
case 'Holly Hills CDP': found = {'pr':'3','w':'','pq':'2','mhiq':'1'}; break;
case 'El Jebel CDP': found = {'pr':'12','w':'','pq':'2','mhiq':'1'}; break;
case 'St. Mary\'s CDP': found = {'pr':'3','w':'','pq':'5','mhiq':'1'}; break;
case 'Indian Hills CDP': found = {'pr':'3','w':'','pq':'3','mhiq':'1'}; break;
case 'Edwards CDP': found = {'pr':'12','w':'','pq':'1','mhiq':'1'}; break;
case 'Dakota Ridge CDP': found = {'pr':'3','w':'','pq':'1','mhiq':'1'}; break;
case 'Idledale CDP': found = {'pr':'3','w':'','pq':'4','mhiq':'1'}; break;
case 'Columbine CDP': found = {'pr':'3','w':'','pq':'1','mhiq':'1'}; break;
case 'Frederick town': found = {'pr':'2','w':'','pq':'1','mhiq':'1'}; break;
case 'Snowmass Village town': found = {'pr':'12','w':'','pq':'2','mhiq':'1'}; break;
case 'Grand View Estates CDP': found = {'pr':'3','w':'','pq':'4','mhiq':'1'}; break;
case 'Loghill Village CDP': found = {'pr':'10','w':'','pq':'3','mhiq':'1'}; break;
case 'Eagle town': found = {'pr':'12','w':'','pq':'1','mhiq':'1'}; break;
case 'Firestone town': found = {'pr':'2','w':'','pq':'1','mhiq':'1'}; break;
case 'Tall Timber CDP': found = {'pr':'3','w':'','pq':'4','mhiq':'1'}; break;
case 'Morrison town': found = {'pr':'3','w':'','pq':'4','mhiq':'1'}; break;
case 'Gunbarrel CDP': found = {'pr':'3','w':'','pq':'1','mhiq':'1'}; break;
case 'Broomfield city': found = {'pr':'3','w':'','pq':'1','mhiq':'1'}; break;
case 'Winter Park town': found = {'pr':'12','w':'','pq':'3','mhiq':'1'}; break;
case 'Rollinsville CDP': found = {'pr':'3','w':'','pq':'5','mhiq':'1'}; break;
case 'Air Force Academy CDP': found = {'pr':'4','w':'','pq':'2','mhiq':'1'}; break;
case 'Johnstown town': found = {'pr':'2','w':'','pq':'1','mhiq':'1'}; break;
case 'East Pleasant View CDP': found = {'pr':'3','w':'','pq':'4','mhiq':'1'}; break;
case 'Blue River town': found = {'pr':'12','w':'','pq':'3','mhiq':'1'}; break;
case 'Vail town': found = {'pr':'12','w':'','pq':'2','mhiq':'2'}; break;
case 'Wellington town': found = {'pr':'2','w':'','pq':'2','mhiq':'2'}; break;
case 'Aspen Park CDP': found = {'pr':'3','w':'','pq':'3','mhiq':'2'}; break;
case 'Aspen city': found = {'pr':'12','w':'','pq':'1','mhiq':'2'}; break;
case 'Strasburg CDP': found = {'pr':'3','w':'','pq':'2','mhiq':'2'}; break;
case 'Black Hawk city': found = {'pr':'3','w':'','pq':'5','mhiq':'2'}; break;
case 'Frisco town': found = {'pr':'12','w':'','pq':'2','mhiq':'2'}; break;
case 'Stonewall Gap CDP': found = {'pr':'14','w':'','pq':'5','mhiq':'2'}; break;
case 'Lafayette city': found = {'pr':'3','w':'','pq':'1','mhiq':'2'}; break;
case 'Basalt town': found = {'pr':'12','w':'','pq':'2','mhiq':'2'}; break;
case 'Applewood CDP': found = {'pr':'3','w':'','pq':'1','mhiq':'2'}; break;
case 'Franktown CDP': found = {'pr':'3','w':'','pq':'4','mhiq':'2'}; break;
case 'Battlement Mesa CDP': found = {'pr':'11','w':'','pq':'2','mhiq':'2'}; break;
case 'Meridian CDP': found = {'pr':'3','w':'','pq':'2','mhiq':'2'}; break;
case 'Downieville-Lawson-Dumont CDP': found = {'pr':'3','w':'','pq':'4','mhiq':'2'}; break;
case 'Eaton town': found = {'pr':'2','w':'','pq':'2','mhiq':'2'}; break;
case 'Arvada city': found = {'pr':'3','w':'','pq':'1','mhiq':'2'}; break;
case 'Leadville North CDP': found = {'pr':'13','w':'','pq':'2','mhiq':'2'}; break;
case 'Kittredge CDP': found = {'pr':'3','w':'','pq':'3','mhiq':'2'}; break;
case 'Woody Creek CDP': found = {'pr':'12','w':'','pq':'4','mhiq':'2'}; break;
case 'Silverthorne town': found = {'pr':'12','w':'','pq':'2','mhiq':'2'}; break;
case 'Telluride town': found = {'pr':'10','w':'','pq':'2','mhiq':'2'}; break;
case 'Georgetown town': found = {'pr':'3','w':'','pq':'3','mhiq':'2'}; break;
case 'Milliken town': found = {'pr':'2','w':'','pq':'2','mhiq':'2'}; break;
case 'Redlands CDP': found = {'pr':'11','w':'','pq':'1','mhiq':'2'}; break;
case 'Pueblo West CDP': found = {'pr':'7','w':'','pq':'1','mhiq':'2'}; break;
case 'Jamestown town': found = {'pr':'3','w':'','pq':'4','mhiq':'2'}; break;
case 'Westminster city': found = {'pr':'3','w':'','pq':'1','mhiq':'2'}; break;
case 'Minturn town': found = {'pr':'12','w':'','pq':'3','mhiq':'2'}; break;
case 'Comanche Creek CDP': found = {'pr':'3','w':'','pq':'4','mhiq':'2'}; break;
case 'Thornton city': found = {'pr':'3','w':'','pq':'1','mhiq':'2'}; break;
case 'Cascade-Chipita Park CDP': found = {'pr':'4','w':'','pq':'2','mhiq':'2'}; break;
case 'Rangely town': found = {'pr':'11','w':'','pq':'2','mhiq':'2'}; break;
case 'Red Cliff town': found = {'pr':'12','w':'','pq':'4','mhiq':'2'}; break;
case 'Southern Ute CDP': found = {'pr':'9','w':'','pq':'4','mhiq':'2'}; break;
case 'Berthoud town': found = {'pr':'2','w':'','pq':'2','mhiq':'2'}; break;
case 'Ouray city': found = {'pr':'10','w':'','pq':'3','mhiq':'2'}; break;
case 'Portland CDP': found = {'pr':'10','w':'','pq':'4','mhiq':'2'}; break;
case 'Commerce City city': found = {'pr':'3','w':'','pq':'1','mhiq':'2'}; break;
case 'New Castle town': found = {'pr':'11','w':'','pq':'2','mhiq':'2'}; break;
case 'Nederland town': found = {'pr':'3','w':'','pq':'3','mhiq':'2'}; break;
case 'Keystone CDP': found = {'pr':'12','w':'','pq':'3','mhiq':'2'}; break;
case 'Atwood CDP': found = {'pr':'1','w':'','pq':'4','mhiq':'2'}; break;
case 'Brighton city': found = {'pr':'3','w':'','pq':'1','mhiq':'2'}; break;
case 'Hot Sulphur Springs town': found = {'pr':'12','w':'','pq':'3','mhiq':'2'}; break;
case 'Eldorado Springs CDP': found = {'pr':'3','w':'','pq':'3','mhiq':'2'}; break;
case 'Woodland Park city': found = {'pr':'4','w':'','pq':'1','mhiq':'2'}; break;
case 'Palmer Lake town': found = {'pr':'4','w':'','pq':'2','mhiq':'2'}; break;
case 'Kit Carson town': found = {'pr':'5','w':'','pq':'4','mhiq':'2'}; break;
case 'Cokedale town': found = {'pr':'14','w':'','pq':'4','mhiq':'2'}; break;
case 'Byers CDP': found = {'pr':'3','w':'','pq':'3','mhiq':'2'}; break;
case 'Estes Park town': found = {'pr':'2','w':'','pq':'2','mhiq':'2'}; break;
case 'Aetna Estates CDP': found = {'pr':'3','w':'','pq':'3','mhiq':'2'}; break;
case 'Ridgway town': found = {'pr':'10','w':'','pq':'3','mhiq':'2'}; break;
case 'Littleton city': found = {'pr':'3','w':'','pq':'1','mhiq':'2'}; break;
case 'Bonanza Mountain Estates CDP': found = {'pr':'3','w':'','pq':'4','mhiq':'2'}; break;
case 'Granby town': found = {'pr':'12','w':'','pq':'2','mhiq':'2'}; break;
case 'Crested Butte town': found = {'pr':'10','w':'','pq':'2','mhiq':'2'}; break;
case 'Steamboat Springs city': found = {'pr':'11','w':'','pq':'1','mhiq':'2'}; break;
case 'Longmont city': found = {'pr':'3','w':'','pq':'1','mhiq':'2'}; break;
case 'Bayfield town': found = {'pr':'9','w':'','pq':'2','mhiq':'2'}; break;
case 'Golden city': found = {'pr':'3','w':'','pq':'1','mhiq':'2'}; break;
case 'Dove Valley CDP': found = {'pr':'3','w':'','pq':'2','mhiq':'2'}; break;
case 'Midland CDP': found = {'pr':'4','w':'','pq':'4','mhiq':'2'}; break;
case 'Security-Widefield CDP': found = {'pr':'4','w':'','pq':'1','mhiq':'2'}; break;
case 'Lakewood city': found = {'pr':'3','w':'','pq':'1','mhiq':'2'}; break;
case 'Fountain city': found = {'pr':'4','w':'','pq':'1','mhiq':'2'}; break;
case 'Yampa town': found = {'pr':'11','w':'','pq':'4','mhiq':'2'}; break;
case 'Boulder city': found = {'pr':'3','w':'','pq':'1','mhiq':'2'}; break;
case 'Carbondale town': found = {'pr':'11','w':'','pq':'1','mhiq':'2'}; break;
case 'Larkspur town': found = {'pr':'3','w':'','pq':'4','mhiq':'2'}; break;
case 'Elizabeth town': found = {'pr':'5','w':'','pq':'3','mhiq':'2'}; break;
case 'Ward town': found = {'pr':'3','w':'','pq':'5','mhiq':'2'}; break;
case 'Fruitvale CDP': found = {'pr':'11','w':'','pq':'1','mhiq':'2'}; break;
case 'Shaw Heights CDP': found = {'pr':'3','w':'','pq':'2','mhiq':'2'}; break;
case 'Platteville town': found = {'pr':'2','w':'','pq':'2','mhiq':'2'}; break;
case 'Lochbuie town': found = {'pr':'2','w':'','pq':'2','mhiq':'2'}; break;
case 'Dillon town': found = {'pr':'12','w':'','pq':'3','mhiq':'2'}; break;
case 'Loveland city': found = {'pr':'2','w':'','pq':'1','mhiq':'2'}; break;
case 'Breckenridge town': found = {'pr':'12','w':'','pq':'2','mhiq':'2'}; break;
case 'Durango city': found = {'pr':'9','w':'','pq':'1','mhiq':'2'}; break;
case 'Meeker town': found = {'pr':'11','w':'','pq':'2','mhiq':'2'}; break;
case 'Pierce town': found = {'pr':'2','w':'','pq':'3','mhiq':'2'}; break;
case 'Hudson town': found = {'pr':'2','w':'','pq':'2','mhiq':'2'}; break;
case 'Colorado Springs city': found = {'pr':'4','w':'','pq':'1','mhiq':'2'}; break;
case 'Fort Collins city': found = {'pr':'2','w':'','pq':'1','mhiq':'2'}; break;
case 'Fruita city': found = {'pr':'11','w':'','pq':'1','mhiq':'3'}; break;
case 'Hayden town': found = {'pr':'11','w':'','pq':'2','mhiq':'3'}; break;
case 'Glenwood Springs city': found = {'pr':'11','w':'','pq':'1','mhiq':'3'}; break;
case 'Bennett town': found = {'pr':'3','w':'','pq':'2','mhiq':'3'}; break;
case 'De Beque town': found = {'pr':'11','w':'','pq':'4','mhiq':'3'}; break;
case 'Lake City town': found = {'pr':'10','w':'','pq':'4','mhiq':'3'}; break;
case 'Northglenn city': found = {'pr':'3','w':'','pq':'1','mhiq':'3'}; break;
case 'Beulah Valley CDP': found = {'pr':'7','w':'','pq':'3','mhiq':'3'}; break;
case 'Kremmling town': found = {'pr':'12','w':'','pq':'2','mhiq':'3'}; break;
case 'Rifle city': found = {'pr':'11','w':'','pq':'1','mhiq':'3'}; break;
case 'Twin Lakes CDP': found = {'pr':'3','w':'','pq':'1','mhiq':'3'}; break;
case 'Jansen CDP': found = {'pr':'14','w':'','pq':'5','mhiq':'3'}; break;
case 'Idaho Springs city': found = {'pr':'3','w':'','pq':'2','mhiq':'3'}; break;
case 'Aurora city': found = {'pr':'3','w':'','pq':'1','mhiq':'3'}; break;
case 'Mount Crested Butte town': found = {'pr':'10','w':'','pq':'3','mhiq':'3'}; break;
case 'Orchard Mesa CDP': found = {'pr':'11','w':'','pq':'1','mhiq':'3'}; break;
case 'Silt town': found = {'pr':'11','w':'','pq':'2','mhiq':'3'}; break;
case 'Howard CDP': found = {'pr':'13','w':'','pq':'3','mhiq':'3'}; break;
case 'Cimarron Hills CDP': found = {'pr':'4','w':'','pq':'1','mhiq':'3'}; break;
case 'Denver city': found = {'pr':'3','w':'','pq':'1','mhiq':'3'}; break;
case 'Fort Lupton city': found = {'pr':'2','w':'','pq':'1','mhiq':'3'}; break;
case 'Gilcrest town': found = {'pr':'2','w':'','pq':'3','mhiq':'3'}; break;
case 'Craig city': found = {'pr':'11','w':'','pq':'1','mhiq':'3'}; break;
case 'Westcreek CDP': found = {'pr':'3','w':'','pq':'5','mhiq':'3'}; break;
case 'Ignacio town': found = {'pr':'9','w':'','pq':'3','mhiq':'3'}; break;
case 'Brookside town': found = {'pr':'13','w':'','pq':'4','mhiq':'3'}; break;
case 'Valmont CDP': found = {'pr':'3','w':'','pq':'5','mhiq':'3'}; break;
case 'Ault town': found = {'pr':'2','w':'','pq':'2','mhiq':'3'}; break;
case 'Gerrard CDP': found = {'pr':'8','w':'','pq':'4','mhiq':'3'}; break;
case 'Sherrelwood CDP': found = {'pr':'3','w':'','pq':'1','mhiq':'3'}; break;
case 'Kersey town': found = {'pr':'2','w':'','pq':'3','mhiq':'3'}; break;
case 'La Salle town': found = {'pr':'2','w':'','pq':'2','mhiq':'3'}; break;
case 'Wheat Ridge city': found = {'pr':'3','w':'','pq':'1','mhiq':'3'}; break;
case 'Marble town': found = {'pr':'10','w':'','pq':'5','mhiq':'3'}; break;
case 'Mulford CDP': found = {'pr':'11','w':'','pq':'4','mhiq':'3'}; break;
case 'Kiowa town': found = {'pr':'5','w':'','pq':'3','mhiq':'3'}; break;
case 'Nunn town': found = {'pr':'2','w':'','pq':'4','mhiq':'3'}; break;
case 'Snyder CDP': found = {'pr':'1','w':'','pq':'4','mhiq':'3'}; break;
case 'El Moro CDP': found = {'pr':'14','w':'','pq':'4','mhiq':'3'}; break;
case 'Penrose CDP': found = {'pr':'13','w':'','pq':'2','mhiq':'3'}; break;
case 'Haswell town': found = {'pr':'6','w':'','pq':'5','mhiq':'3'}; break;
case 'Evans city': found = {'pr':'2','w':'','pq':'1','mhiq':'3'}; break;
case 'Grand Junction city': found = {'pr':'11','w':'','pq':'1','mhiq':'3'}; break;
case 'Rico town': found = {'pr':'9','w':'','pq':'4','mhiq':'3'}; break;
case 'Paoli town': found = {'pr':'1','w':'','pq':'5','mhiq':'3'}; break;
case 'Paonia town': found = {'pr':'10','w':'','pq':'3','mhiq':'3'}; break;
case 'Walsh town': found = {'pr':'6','w':'','pq':'3','mhiq':'3'}; break;
case 'Laporte CDP': found = {'pr':'2','w':'','pq':'2','mhiq':'3'}; break;
case 'Greeley city': found = {'pr':'2','w':'','pq':'1','mhiq':'3'}; break;
case 'Allenspark CDP': found = {'pr':'3','w':'','pq':'3','mhiq':'3'}; break;
case 'Englewood city': found = {'pr':'3','w':'','pq':'1','mhiq':'3'}; break;
case 'Hoehne CDP': found = {'pr':'14','w':'','pq':'5','mhiq':'3'}; break;
case 'Burlington city': found = {'pr':'5','w':'','pq':'2','mhiq':'3'}; break;
case 'Keenesburg town': found = {'pr':'2','w':'','pq':'2','mhiq':'3'}; break;
case 'Alma town': found = {'pr':'4','w':'','pq':'4','mhiq':'3'}; break;
case 'Bonanza town': found = {'pr':'8','w':'','pq':'5','mhiq':'3'}; break;
case 'Williamsburg town': found = {'pr':'13','w':'','pq':'3','mhiq':'3'}; break;
case 'West Pleasant View CDP': found = {'pr':'3','w':'','pq':'2','mhiq':'3'}; break;
case 'Dacono city': found = {'pr':'2','w':'','pq':'2','mhiq':'3'}; break;
case 'Calhan town': found = {'pr':'4','w':'','pq':'3','mhiq':'3'}; break;
case 'Silver Plume town': found = {'pr':'3','w':'','pq':'4','mhiq':'3'}; break;
case 'Cattle Creek CDP': found = {'pr':'11','w':'','pq':'3','mhiq':'3'}; break;
case 'Smeltertown CDP': found = {'pr':'13','w':'','pq':'4','mhiq':'3'}; break;
case 'Fairplay town': found = {'pr':'4','w':'','pq':'3','mhiq':'3'}; break;
case 'North Washington CDP': found = {'pr':'3','w':'','pq':'4','mhiq':'3'}; break;
case 'Fort Garland CDP': found = {'pr':'8','w':'','pq':'3','mhiq':'3'}; break;
case 'Wray city': found = {'pr':'1','w':'','pq':'2','mhiq':'3'}; break;
case 'Hasty CDP': found = {'pr':'6','w':'','pq':'4','mhiq':'3'}; break;
case 'Genoa town': found = {'pr':'5','w':'','pq':'5','mhiq':'3'}; break;
case 'Manitou Springs city': found = {'pr':'4','w':'','pq':'2','mhiq':'3'}; break;
case 'Berkley CDP': found = {'pr':'3','w':'','pq':'1','mhiq':'3'}; break;
case 'Stratton town': found = {'pr':'5','w':'','pq':'3','mhiq':'3'}; break;
case 'Starkville town': found = {'pr':'14','w':'','pq':'5','mhiq':'3'}; break;
case 'Padroni CDP': found = {'pr':'1','w':'','pq':'4','mhiq':'3'}; break;
case 'Edgewater city': found = {'pr':'3','w':'','pq':'2','mhiq':'3'}; break;
case 'Weston CDP': found = {'pr':'14','w':'','pq':'5','mhiq':'3'}; break;
case 'Laird CDP': found = {'pr':'1','w':'','pq':'5','mhiq':'3'}; break;
case 'Copper Mountain CDP': found = {'pr':'12','w':'','pq':'4','mhiq':'3'}; break;
case 'Sanford town': found = {'pr':'8','w':'','pq':'3','mhiq':'3'}; break;
case 'Eldora CDP': found = {'pr':'3','w':'','pq':'5','mhiq':'3'}; break;
case 'Pritchett town': found = {'pr':'6','w':'','pq':'5','mhiq':'3'}; break;
case 'Fleming town': found = {'pr':'1','w':'','pq':'3','mhiq':'3'}; break;
case 'Montrose city': found = {'pr':'10','w':'','pq':'1','mhiq':'3'}; break;
case 'Blende CDP': found = {'pr':'7','w':'','pq':'3','mhiq':'3'}; break;
case 'Branson town': found = {'pr':'14','w':'','pq':'5','mhiq':'3'}; break;
case 'North La Junta CDP': found = {'pr':'6','w':'','pq':'4','mhiq':'3'}; break;
case 'Gold Hill CDP': found = {'pr':'3','w':'','pq':'4','mhiq':'4'}; break;
case 'Avon town': found = {'pr':'12','w':'','pq':'2','mhiq':'4'}; break;
case 'Alamosa East CDP': found = {'pr':'8','w':'','pq':'2','mhiq':'4'}; break;
case 'Lewis CDP': found = {'pr':'9','w':'','pq':'4','mhiq':'4'}; break;
case 'Welby CDP': found = {'pr':'3','w':'','pq':'1','mhiq':'4'}; break;
case 'Twin Lakes CDP': found = {'pr':'13','w':'','pq':'5','mhiq':'4'}; break;
case 'Oak Creek town': found = {'pr':'11','w':'','pq':'3','mhiq':'4'}; break;
case 'Colorado City CDP': found = {'pr':'7','w':'','pq':'2','mhiq':'4'}; break;
case 'Buena Vista town': found = {'pr':'13','w':'','pq':'2','mhiq':'4'}; break;
case 'Orchard City town': found = {'pr':'10','w':'','pq':'2','mhiq':'4'}; break;
case 'Fraser town': found = {'pr':'12','w':'','pq':'3','mhiq':'4'}; break;
case 'Palisade town': found = {'pr':'11','w':'','pq':'2','mhiq':'4'}; break;
case 'Fort Carson CDP': found = {'pr':'4','w':'','pq':'1','mhiq':'4'}; break;
case 'Akron town': found = {'pr':'1','w':'','pq':'2','mhiq':'4'}; break;
case 'Grand Lake town': found = {'pr':'12','w':'','pq':'4','mhiq':'4'}; break;
case 'Poncha Springs town': found = {'pr':'13','w':'','pq':'3','mhiq':'4'}; break;
case 'Wiggins town': found = {'pr':'1','w':'','pq':'3','mhiq':'4'}; break;
case 'Norwood town': found = {'pr':'10','w':'','pq':'3','mhiq':'4'}; break;
case 'Conejos CDP': found = {'pr':'8','w':'','pq':'5','mhiq':'4'}; break;
case 'Derby CDP': found = {'pr':'3','w':'','pq':'1','mhiq':'4'}; break;
case 'Delta city': found = {'pr':'10','w':'','pq':'1','mhiq':'4'}; break;
case 'Fort Morgan city': found = {'pr':'1','w':'','pq':'1','mhiq':'4'}; break;
case 'Haxtun town': found = {'pr':'1','w':'','pq':'3','mhiq':'4'}; break;
case 'Clifton CDP': found = {'pr':'11','w':'','pq':'1','mhiq':'4'}; break;
case 'Wiley town': found = {'pr':'6','w':'','pq':'4','mhiq':'4'}; break;
case 'Hotchkiss town': found = {'pr':'10','w':'','pq':'3','mhiq':'4'}; break;
case 'Phippsburg CDP': found = {'pr':'11','w':'','pq':'4','mhiq':'4'}; break;
case 'Montezuma town': found = {'pr':'12','w':'','pq':'5','mhiq':'4'}; break;
case 'Pagosa Springs town': found = {'pr':'9','w':'','pq':'2','mhiq':'4'}; break;
case 'Avondale CDP': found = {'pr':'7','w':'','pq':'3','mhiq':'4'}; break;
case 'Green Mountain Falls town': found = {'pr':'4','w':'','pq':'3','mhiq':'4'}; break;
case 'Cheyenne Wells town': found = {'pr':'5','w':'','pq':'3','mhiq':'4'}; break;
case 'Joes CDP': found = {'pr':'1','w':'','pq':'5','mhiq':'4'}; break;
case 'Central City city': found = {'pr':'3','w':'','pq':'3','mhiq':'4'}; break;
case 'Sawpit town': found = {'pr':'10','w':'','pq':'5','mhiq':'4'}; break;
case 'Aristocrat Ranchettes CDP': found = {'pr':'2','w':'','pq':'2','mhiq':'4'}; break;
case 'Gunnison city': found = {'pr':'10','w':'','pq':'2','mhiq':'4'}; break;
case 'Leadville city': found = {'pr':'13','w':'','pq':'2','mhiq':'4'}; break;
case 'Bethune town': found = {'pr':'5','w':'','pq':'4','mhiq':'4'}; break;
case 'Yuma city': found = {'pr':'1','w':'','pq':'2','mhiq':'4'}; break;
case 'Merino town': found = {'pr':'1','w':'','pq':'4','mhiq':'4'}; break;
case 'Empire town': found = {'pr':'3','w':'','pq':'4','mhiq':'4'}; break;
case 'Lincoln Park CDP': found = {'pr':'13','w':'','pq':'2','mhiq':'4'}; break;
case 'Towner CDP': found = {'pr':'6','w':'','pq':'5','mhiq':'4'}; break;
case 'Dotsero CDP': found = {'pr':'12','w':'','pq':'3','mhiq':'4'}; break;
case 'Cortez city': found = {'pr':'9','w':'','pq':'1','mhiq':'4'}; break;
case 'Holyoke city': found = {'pr':'1','w':'','pq':'2','mhiq':'4'}; break;
case 'Monte Vista city': found = {'pr':'8','w':'','pq':'2','mhiq':'4'}; break;
case 'Hillrose town': found = {'pr':'1','w':'','pq':'4','mhiq':'4'}; break;
case 'Silverton town': found = {'pr':'9','w':'','pq':'3','mhiq':'4'}; break;
case 'Salida city': found = {'pr':'13','w':'','pq':'2','mhiq':'4'}; break;
case 'Arriba town': found = {'pr':'5','w':'','pq':'4','mhiq':'4'}; break;
case 'Crook town': found = {'pr':'1','w':'','pq':'5','mhiq':'4'}; break;
case 'Coaldale CDP': found = {'pr':'13','w':'','pq':'4','mhiq':'4'}; break;
case 'South Fork town': found = {'pr':'8','w':'','pq':'3','mhiq':'4'}; break;
case 'Mountain View town': found = {'pr':'3','w':'','pq':'4','mhiq':'4'}; break;
case 'Nucla town': found = {'pr':'10','w':'','pq':'3','mhiq':'4'}; break;
case 'Arboles CDP': found = {'pr':'9','w':'','pq':'4','mhiq':'4'}; break;
case 'Trinidad city': found = {'pr':'14','w':'','pq':'1','mhiq':'4'}; break;
case 'Cañon City city': found = {'pr':'13','w':'','pq':'1','mhiq':'4'}; break;
case 'Walden town': found = {'pr':'12','w':'','pq':'3','mhiq':'4'}; break;
case 'Federal Heights city': found = {'pr':'3','w':'','pq':'1','mhiq':'4'}; break;
case 'Deer Trail town': found = {'pr':'3','w':'','pq':'4','mhiq':'4'}; break;
case 'Cripple Creek city': found = {'pr':'4','w':'','pq':'2','mhiq':'4'}; break;
case 'Julesburg town': found = {'pr':'1','w':'','pq':'3','mhiq':'4'}; break;
case 'Mancos town': found = {'pr':'9','w':'','pq':'3','mhiq':'4'}; break;
case 'Stratmoor CDP': found = {'pr':'4','w':'','pq':'1','mhiq':'4'}; break;
case 'Peetz town': found = {'pr':'1','w':'','pq':'4','mhiq':'4'}; break;
case 'Ellicott CDP': found = {'pr':'4','w':'','pq':'3','mhiq':'4'}; break;
case 'Brush city': found = {'pr':'1','w':'','pq':'2','mhiq':'4'}; break;
case 'Coal Creek town': found = {'pr':'13','w':'','pq':'4','mhiq':'4'}; break;
case 'La Junta city': found = {'pr':'6','w':'','pq':'1','mhiq':'4'}; break;
case 'Swink town': found = {'pr':'6','w':'','pq':'3','mhiq':'4'}; break;
case 'Victor city': found = {'pr':'4','w':'','pq':'4','mhiq':'4'}; break;
case 'Pitkin town': found = {'pr':'10','w':'','pq':'5','mhiq':'4'}; break;
case 'Olathe town': found = {'pr':'10','w':'','pq':'2','mhiq':'4'}; break;
case 'Glendale city': found = {'pr':'3','w':'','pq':'2','mhiq':'4'}; break;
case 'Mountain Village town': found = {'pr':'10','w':'','pq':'3','mhiq':'4'}; break;
case 'Parachute town': found = {'pr':'11','w':'','pq':'3','mhiq':'4'}; break;
case 'Raymer (New Raymer) town': found = {'pr':'2','w':'','pq':'5','mhiq':'4'}; break;
case 'Collbran town': found = {'pr':'11','w':'','pq':'3','mhiq':'4'}; break;
case 'Mountain Meadows CDP': found = {'pr':'3','w':'','pq':'5','mhiq':'4'}; break;
case 'Crawford town': found = {'pr':'10','w':'','pq':'4','mhiq':'4'}; break;
case 'Rockvale town': found = {'pr':'13','w':'','pq':'4','mhiq':'4'}; break;
case 'Seibert town': found = {'pr':'5','w':'','pq':'4','mhiq':'4'}; break;
case 'No Name CDP': found = {'pr':'11','w':'','pq':'4','mhiq':'4'}; break;
case 'Sterling city': found = {'pr':'1','w':'','pq':'1','mhiq':'5'}; break;
case 'Springfield town': found = {'pr':'6','w':'','pq':'3','mhiq':'5'}; break;
case 'Manassa town': found = {'pr':'8','w':'','pq':'3','mhiq':'5'}; break;
case 'Limon town': found = {'pr':'5','w':'','pq':'2','mhiq':'5'}; break;
case 'Crowley town': found = {'pr':'6','w':'','pq':'4','mhiq':'5'}; break;
case 'Pueblo city': found = {'pr':'7','w':'','pq':'1','mhiq':'5'}; break;
case 'Naturita town': found = {'pr':'10','w':'','pq':'4','mhiq':'5'}; break;
case 'Ramah town': found = {'pr':'4','w':'','pq':'5','mhiq':'5'}; break;
case 'Florence city': found = {'pr':'13','w':'','pq':'2','mhiq':'5'}; break;
case 'Dove Creek town': found = {'pr':'9','w':'','pq':'3','mhiq':'5'}; break;
case 'Simla town': found = {'pr':'5','w':'','pq':'4','mhiq':'5'}; break;
case 'Vilas town': found = {'pr':'6','w':'','pq':'4','mhiq':'5'}; break;
case 'Salt Creek CDP': found = {'pr':'7','w':'','pq':'3','mhiq':'5'}; break;
case 'La Jara town': found = {'pr':'8','w':'','pq':'3','mhiq':'5'}; break;
case 'Cedaredge town': found = {'pr':'10','w':'','pq':'2','mhiq':'5'}; break;
case 'Dinosaur town': found = {'pr':'11','w':'','pq':'4','mhiq':'5'}; break;
case 'Eckley town': found = {'pr':'1','w':'','pq':'4','mhiq':'5'}; break;
case 'Rye town': found = {'pr':'7','w':'','pq':'4','mhiq':'5'}; break;
case 'Cheraw town': found = {'pr':'6','w':'','pq':'4','mhiq':'5'}; break;
case 'Kim town': found = {'pr':'14','w':'','pq':'5','mhiq':'5'}; break;
case 'Ovid town': found = {'pr':'1','w':'','pq':'4','mhiq':'5'}; break;
case 'Iliff town': found = {'pr':'1','w':'','pq':'4','mhiq':'5'}; break;
case 'Vineland CDP': found = {'pr':'7','w':'','pq':'5','mhiq':'5'}; break;
case 'Fowler town': found = {'pr':'6','w':'','pq':'3','mhiq':'5'}; break;
case 'Sheridan city': found = {'pr':'3','w':'','pq':'2','mhiq':'5'}; break;
case 'Otis town': found = {'pr':'1','w':'','pq':'4','mhiq':'5'}; break;
case 'Hugo town': found = {'pr':'5','w':'','pq':'3','mhiq':'5'}; break;
case 'Jackson Lake CDP': found = {'pr':'1','w':'','pq':'5','mhiq':'5'}; break;
case 'Eads town': found = {'pr':'6','w':'','pq':'3','mhiq':'5'}; break;
case 'La Veta town': found = {'pr':'14','w':'','pq':'3','mhiq':'5'}; break;
case 'Blanca town': found = {'pr':'8','w':'','pq':'4','mhiq':'5'}; break;
case 'Lamar city': found = {'pr':'6','w':'','pq':'1','mhiq':'5'}; break;
case 'Las Animas city': found = {'pr':'6','w':'','pq':'2','mhiq':'5'}; break;
case 'Aguilar town': found = {'pr':'14','w':'','pq':'4','mhiq':'5'}; break;
case 'Olney Springs town': found = {'pr':'6','w':'','pq':'4','mhiq':'5'}; break;
case 'City of Creede town': found = {'pr':'8','w':'','pq':'4','mhiq':'5'}; break;
case 'Elbert CDP': found = {'pr':'5','w':'','pq':'4','mhiq':'5'}; break;
case 'Sheridan Lake town': found = {'pr':'6','w':'','pq':'5','mhiq':'5'}; break;
case 'Red Feather Lakes CDP': found = {'pr':'2','w':'','pq':'5','mhiq':'5'}; break;
case 'Manzanola town': found = {'pr':'6','w':'','pq':'4','mhiq':'5'}; break;
case 'Valdez CDP': found = {'pr':'14','w':'','pq':'5','mhiq':'5'}; break;
case 'Weldona CDP': found = {'pr':'1','w':'','pq':'5','mhiq':'5'}; break;
case 'Hartman town': found = {'pr':'6','w':'','pq':'5','mhiq':'5'}; break;
case 'Center town': found = {'pr':'8','w':'','pq':'2','mhiq':'5'}; break;
case 'Granada town': found = {'pr':'6','w':'','pq':'3','mhiq':'5'}; break;
case 'Walsenburg city': found = {'pr':'14','w':'','pq':'2','mhiq':'5'}; break;
case 'Towaoc CDP': found = {'pr':'9','w':'','pq':'3','mhiq':'5'}; break;
case 'Saguache town': found = {'pr':'8','w':'','pq':'3','mhiq':'5'}; break;
case 'Sedgwick town': found = {'pr':'1','w':'','pq':'5','mhiq':'5'}; break;
case 'Dolores town': found = {'pr':'9','w':'','pq':'3','mhiq':'5'}; break;
case 'Log Lane Village town': found = {'pr':'1','w':'','pq':'3','mhiq':'5'}; break;
case 'Alamosa city': found = {'pr':'8','w':'','pq':'1','mhiq':'5'}; break;
case 'Flagler town': found = {'pr':'5','w':'','pq':'4','mhiq':'5'}; break;
case 'Piedra CDP': found = {'pr':'10','w':'','pq':'5','mhiq':'5'}; break;
case 'Sedalia CDP': found = {'pr':'3','w':'','pq':'5','mhiq':'5'}; break;
case 'Holly town': found = {'pr':'6','w':'','pq':'3','mhiq':'5'}; break;
case 'Florissant CDP': found = {'pr':'4','w':'','pq':'5','mhiq':'5'}; break;
case 'Maybell CDP': found = {'pr':'11','w':'','pq':'5','mhiq':'5'}; break;
case 'Westcliffe town': found = {'pr':'13','w':'','pq':'3','mhiq':'5'}; break;
case 'Silver Cliff town': found = {'pr':'13','w':'','pq':'3','mhiq':'5'}; break;
case 'Del Norte town': found = {'pr':'8','w':'','pq':'2','mhiq':'5'}; break;
case 'Garden City town': found = {'pr':'2','w':'','pq':'4','mhiq':'5'}; break;
case 'Two Buttes town': found = {'pr':'6','w':'','pq':'5','mhiq':'5'}; break;
case 'Sugar City town': found = {'pr':'6','w':'','pq':'4','mhiq':'5'}; break;
case 'Boone town': found = {'pr':'7','w':'','pq':'4','mhiq':'5'}; break;
case 'Moffat town': found = {'pr':'8','w':'','pq':'5','mhiq':'5'}; break;
case 'Ordway town': found = {'pr':'6','w':'','pq':'3','mhiq':'5'}; break;
case 'Guffey CDP': found = {'pr':'4','w':'','pq':'5','mhiq':'5'}; break;
case 'Campo town': found = {'pr':'6','w':'','pq':'5','mhiq':'5'}; break;
case 'Rocky Ford city': found = {'pr':'6','w':'','pq':'2','mhiq':'5'}; break;
case 'Idalia CDP': found = {'pr':'1','w':'','pq':'5','mhiq':'5'}; break;
case 'Romeo town': found = {'pr':'8','w':'','pq':'4','mhiq':'5'}; break;
case 'Segundo CDP': found = {'pr':'14','w':'','pq':'5','mhiq':'5'}; break;
case 'Kirk CDP': found = {'pr':'1','w':'','pq':'5','mhiq':'5'}; break;
case 'Vona town': found = {'pr':'5','w':'','pq':'5','mhiq':'5'}; break;
case 'San Luis town': found = {'pr':'8','w':'','pq':'3','mhiq':'5'}; break;
case 'Antonito town': found = {'pr':'8','w':'','pq':'3','mhiq':'5'}; break;
case 'Crestone town': found = {'pr':'8','w':'','pq':'4','mhiq':'5'}; break;
case 'Capulin CDP': found = {'pr':'8','w':'','pq':'5','mhiq':'5'}; break;
case 'Orchard CDP': found = {'pr':'1','w':'','pq':'5','mhiq':'5'}; break;
case 'Hooper town': found = {'pr':'8','w':'','pq':'5','mhiq':'5'}; break;
case 'San Acacio CDP': found = {'pr':'8','w':'','pq':'5','mhiq':'5'}; break;
case 'Louviers CDP': found = {'pr':'3','w':'','pq':'5','mhiq':'5'}; break;
case 'Catherine CDP': found = {'pr':'11','w':'','pq':'4','mhiq':'5'}; break;
case 'Grover town': found = {'pr':'2','w':'','pq':'5','mhiq':'5'}; break;
case 'Parshall CDP': found = {'pr':'12','w':'','pq':'5','mhiq':'6'}; break;
case 'Peyton CDP': found = {'pr':'4','w':'','pq':'5','mhiq':'6'}; break;
case 'Glendale CDP': found = {'pr':'3','w':'','pq':'5','mhiq':'6'}; break;
case 'Divide CDP': found = {'pr':'4','w':'','pq':'5','mhiq':'6'}; break;
case 'Johnson Village CDP': found = {'pr':'13','w':'','pq':'5','mhiq':'6'}; break;
case 'Heeney CDP': found = {'pr':'12','w':'','pq':'5','mhiq':'6'}; break;
case 'Alpine CDP': found = {'pr':'8','w':'','pq':'5','mhiq':'6'}; break;
case 'Leyner CDP': found = {'pr':'3','w':'','pq':'5','mhiq':'6'}; break;
case 'La Junta Gardens CDP': found = {'pr':'6','w':'','pq':'5','mhiq':'6'}; break;
case 'Rock Creek Park CDP': found = {'pr':'4','w':'','pq':'5','mhiq':'6'}; break;
case 'Goldfield CDP': found = {'pr':'4','w':'','pq':'5','mhiq':'6'}; break;
case 'Colona CDP': found = {'pr':'10','w':'','pq':'5','mhiq':'6'}; break;
case 'Amherst CDP': found = {'pr':'1','w':'','pq':'5','mhiq':'6'}; break;
case 'Cotopaxi CDP': found = {'pr':'13','w':'','pq':'5','mhiq':'6'}; break;
case 'Cathedral CDP': found = {'pr':'10','w':'','pq':'5','mhiq':'6'}; break;
case 'McCoy CDP': found = {'pr':'12','w':'','pq':'5','mhiq':'6'}; break;
case 'Redstone CDP': found = {'pr':'12','w':'','pq':'5','mhiq':'6'}; break;
case 'Brandon CDP': found = {'pr':'6','w':'','pq':'5','mhiq':'6'}; break;
case 'Saddle Ridge CDP': found = {'pr':'1','w':'','pq':'5','mhiq':'6'}; break;
case 'Vernon CDP': found = {'pr':'1','w':'','pq':'5','mhiq':'6'}; break;
case 'Lynn CDP': found = {'pr':'14','w':'','pq':'5','mhiq':'6'}; break;
case 'Lakeside town': found = {'pr':'3','w':'','pq':'5','mhiq':'6'}; break;
case 'Trail Side CDP': found = {'pr':'1','w':'','pq':'5','mhiq':'6'}; break;
case 'Blue Sky CDP': found = {'pr':'1','w':'','pq':'5','mhiq':'6'}; break;
case 'Fulford CDP': found = {'pr':'12','w':'','pq':'5','mhiq':'6'}; break;
case 'Garfield CDP': found = {'pr':'13','w':'','pq':'5','mhiq':'6'}; break;
case 'Hidden Lake CDP': found = {'pr':'3','w':'','pq':'5','mhiq':'6'}; break;
case 'Norrie CDP': found = {'pr':'12','w':'','pq':'5','mhiq':'6'}; break;
case 'Wolcott CDP': found = {'pr':'12','w':'','pq':'5','mhiq':'6'}; break;

            
  }
        if($("#classify").val()=='none'){return '5';}
        if($("#classify").val()=='pr'){return found.pr;}
        if($("#classify").val()=='w'){return found.w;}
        if($("#classify").val()=='pq'){return found.pq;}
        if($("#classify").val()=='mhiq'){return found.mhiq;}
        
}
      
      function lookupcounty(county){

        var found={};
        
        switch(county){
          case 'Adams': found = {'pr':'3','w':'','pq':'1','mhiq':'2'}; break;
          case 'Alamosa': found = {'pr':'8','w':'','pq':'3','mhiq':'5'}; break;
            case 'Arapahoe': found = {'pr':'3','w':'','pq':'1','mhiq':'2'}; break;
            case 'Archuleta': found = {'pr':'9','w':'','pq':'3','mhiq':'3'}; break;
            case 'Baca': found = {'pr':'6','w':'','pq':'5','mhiq':'5'}; break;
            case 'Bent': found = {'pr':'6','w':'','pq':'4','mhiq':'5'}; break;
            case 'Boulder': found = {'pr':'3','w':'','pq':'1','mhiq':'1'}; break;
            case 'Broomfield': found = {'pr':'3','w':'','pq':'1','mhiq':'1'}; break;
            case 'Chaffee': found = {'pr':'13','w':'','pq':'3','mhiq':'3'}; break;
            case 'Cheyenne': found = {'pr':'5','w':'','pq':'5','mhiq':'3'}; break;
            case 'Clear Creek': found = {'pr':'3','w':'','pq':'3','mhiq':'1'}; break;
            case 'Conejos': found = {'pr':'8','w':'','pq':'4','mhiq':'5'}; break;
            case 'Costilla': found = {'pr':'8','w':'','pq':'5','mhiq':'5'}; break;
            case 'Crowley': found = {'pr':'6','w':'','pq':'4','mhiq':'5'}; break;
            case 'Custer': found = {'pr':'13','w':'','pq':'5','mhiq':'5'}; break;
            case 'Delta': found = {'pr':'10','w':'','pq':'2','mhiq':'4'}; break;
            case 'Denver': found = {'pr':'3','w':'','pq':'1','mhiq':'3'}; break;
            case 'Dolores': found = {'pr':'9','w':'','pq':'5','mhiq':'5'}; break;
            case 'Douglas': found = {'pr':'3','w':'','pq':'1','mhiq':'1'}; break;
            case 'Eagle': found = {'pr':'12','w':'','pq':'2','mhiq':'1'}; break;
            case 'Elbert': found = {'pr':'5','w':'','pq':'2','mhiq':'1'}; break;
            case 'El Paso': found = {'pr':'4','w':'','pq':'1','mhiq':'2'}; break;
            case 'Fremont': found = {'pr':'13','w':'','pq':'2','mhiq':'4'}; break;
            case 'Garfield': found = {'pr':'11','w':'','pq':'1','mhiq':'2'}; break;
            case 'Gilpin': found = {'pr':'3','w':'','pq':'4','mhiq':'1'}; break;
            case 'Grand': found = {'pr':'12','w':'','pq':'3','mhiq':'1'}; break;
            case 'Gunnison': found = {'pr':'10','w':'','pq':'3','mhiq':'3'}; break;
            case 'Hinsdale': found = {'pr':'10','w':'','pq':'5','mhiq':'2'}; break;
            case 'Huerfano': found = {'pr':'14','w':'','pq':'4','mhiq':'5'}; break;
            case 'Jackson': found = {'pr':'12','w':'','pq':'5','mhiq':'4'}; break;
            case 'Jefferson': found = {'pr':'3','w':'','pq':'1','mhiq':'1'}; break;
            case 'Kiowa': found = {'pr':'6','w':'','pq':'5','mhiq':'4'}; break;
            case 'Kit Carson': found = {'pr':'5','w':'','pq':'4','mhiq':'3'}; break;
            case 'Lake': found = {'pr':'13','w':'','pq':'4','mhiq':'3'}; break;
            case 'La Plata': found = {'pr':'9','w':'','pq':'2','mhiq':'2'}; break;
            case 'Larimer': found = {'pr':'2','w':'','pq':'1','mhiq':'2'}; break;
            case 'Las Animas': found = {'pr':'14','w':'','pq':'3','mhiq':'4'}; break;
            case 'Lincoln': found = {'pr':'5','w':'','pq':'4','mhiq':'4'}; break;
            case 'Logan': found = {'pr':'1','w':'','pq':'2','mhiq':'4'}; break;
            case 'Mesa': found = {'pr':'11','w':'','pq':'1','mhiq':'3'}; break;
            case 'Mineral': found = {'pr':'8','w':'','pq':'5','mhiq':'3'}; break;
            case 'Moffat': found = {'pr':'11','w':'','pq':'3','mhiq':'2'}; break;
            case 'Montezuma': found = {'pr':'9','w':'','pq':'2','mhiq':'4'}; break;
            case 'Montrose': found = {'pr':'10','w':'','pq':'2','mhiq':'3'}; break;
            case 'Morgan': found = {'pr':'1','w':'','pq':'2','mhiq':'3'}; break;
            case 'Otero': found = {'pr':'6','w':'','pq':'2','mhiq':'5'}; break;
            case 'Ouray': found = {'pr':'10','w':'','pq':'4','mhiq':'1'}; break;
            case 'Park': found = {'pr':'4','w':'','pq':'3','mhiq':'2'}; break;
            case 'Phillips': found = {'pr':'1','w':'','pq':'5','mhiq':'4'}; break;
            case 'Pitkin': found = {'pr':'12','w':'','pq':'3','mhiq':'1'}; break;
            case 'Prowers': found = {'pr':'6','w':'','pq':'3','mhiq':'5'}; break;
            case 'Pueblo': found = {'pr':'7','w':'','pq':'1','mhiq':'4'}; break;
            case 'Rio Blanco': found = {'pr':'11','w':'','pq':'4','mhiq':'2'}; break;
            case 'Rio Grande': found = {'pr':'8','w':'','pq':'3','mhiq':'4'}; break;
            case 'Routt': found = {'pr':'11','w':'','pq':'2','mhiq':'2'}; break;
            case 'Saguache': found = {'pr':'8','w':'','pq':'4','mhiq':'5'}; break;
            case 'San Juan': found = {'pr':'9','w':'','pq':'5','mhiq':'4'}; break;
            case 'San Miguel': found = {'pr':'10','w':'','pq':'4','mhiq':'1'}; break;
            case 'Sedgwick': found = {'pr':'1','w':'','pq':'5','mhiq':'4'}; break;
            case 'Summit': found = {'pr':'12','w':'','pq':'2','mhiq':'1'}; break;
            case 'Teller': found = {'pr':'4','w':'','pq':'2','mhiq':'2'}; break;
            case 'Washington': found = {'pr':'1','w':'','pq':'4','mhiq':'3'}; break;
            case 'Weld': found = {'pr':'2','w':'','pq':'1','mhiq':'2'}; break;
            case 'Yuma': found = {'pr':'1','w':'','pq':'3','mhiq':'3'}; break;
            
  }
        if($("#classify").val()=='none'){return '5';}
        if($("#classify").val()=='pr'){return found.pr;}
        if($("#classify").val()=='w'){return found.w;}
        if($("#classify").val()=='pq'){return found.pq;}
        if($("#classify").val()=='mhiq'){return found.mhiq;}
        
}
      
     
    } //end submitbtn
  

//its go time
{

  //default as Median HH Income VS Median Home Value
$('#selectx option:eq(0)').attr('selected', 'selected');
$('#selecty option:eq(1)').attr('selected', 'selected');
  
submitbtn();
  
}