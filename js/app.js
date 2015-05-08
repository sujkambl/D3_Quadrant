

  
        //loop through - add all themes
        var i;
    
        for (i = 0; i < datatree.data.length; i=i+1) {
            $('#selectx').append('<option value="' + datatree.data[i].varcode + '">' + datatree.data[i].verbose + '</option>'); 
            $('#selecty').append('<option value="' + datatree.data[i].varcode + '">' + datatree.data[i].verbose + '</option>'); 
            $('#selectz').append('<option value="' + datatree.data[i].varcode + '">' + datatree.data[i].verbose + '</option>'); 
        }


    function submitbtn(){
      
      $( "svg" ).remove();
              
      var newsetuparray={};
      
    var tablelist='';

      
    var xval=$("#selectx").val(); 
    var yval=$("#selecty").val();
    var zval=$("#selectz").val();  
         
    var db='acs0913';
    var schema='data';
    var limit='10000';
      
      var sumlev;

    var geog=$("#selectgeo").val(); 
      
      if(geog=='cc'){sumlev="50";}
      if(geog=='cp'){
        sumlev="160";
      //too many labels
        newsetuparray.itemslabel='false';
      }            

      
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
      
    for(i=0;i<datatree.data.length;i=i+1){
        if(xval==datatree.data[i].varcode){
          fp=datatree.data[i];
          tablelist=fp.table;
          newsetuparray.xlabel=fp.verbose;
         xnumerator=fp.numerator;
         xdenominator=fp.denominator;  
          if(fp.type=="currency"){newsetuparray.xtype="$,.0f";}
          if(fp.type=="regular"){newsetuparray.xtype=".0f";}
          if(fp.type=="number"){newsetuparray.xtype=",.0f";}
          if(fp.type=="percent"){newsetuparray.xtype="%,.2";}          
        }
      
      
      
    }     
    for(i=0;i<datatree.data.length;i=i+1){
        if(yval==datatree.data[i].varcode){
          fp=datatree.data[i];
          tablelist=tablelist+","+fp.table;
          newsetuparray.ylabel=fp.verbose;
         ynumerator=fp.numerator;
         ydenominator=fp.denominator;   
          if(fp.type=="currency"){newsetuparray.ytype="$,.0f";}
          if(fp.type=="regular"){newsetuparray.ytype=".0f";}
          if(fp.type=="number"){newsetuparray.ytype=",.0f";}
          if(fp.type=="percent"){newsetuparray.ytype="%,.2";}     
        }
    }
    
      if(zval!=='none'){
        for(i=0;i<datatree.data.length;i=i+1){
          fp=datatree.data[i];
          if(zval==datatree.data[i].varcode){
            tablelist=tablelist+","+fp.table;
             znumerator=fp.numerator;
             zdenominator=fp.denominator; 
             //console.log(fp.type);
          if(fp.type=="currency"){newsetuparray.ztype="$,.0f";}
          if(fp.type=="regular"){newsetuparray.ztype=".0f";}
          if(fp.type=="number"){newsetuparray.ztype=",.0f";}
          if(fp.type=="percent"){newsetuparray.ztype="%,.2";}  
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
      
      var newdataarray=[];  
      var tempobj={};
      

      for(i=0;i<results.data.length;i=i+1){
          fp=results.data[i];       
          tempobj={};
          tempobj.x=((eval(xnumerator))/(eval(xdenominator)));  
          tempobj.y=((eval(ynumerator))/(eval(ydenominator)));    
          tempobj.z=((eval(znumerator))/(eval(zdenominator)));        
          tempobj.label=fp.geoname.replace(/ County, Colorado/g, "");    
          tempobj.category=lookupregion(tempobj.label);
          newdataarray.push(tempobj);
      }
        
        if($('#classify').val()=='pr'){newsetuparray.colorschemetype='unique';}
        if($('#classify').val()=='pq'){newsetuparray.colorschemetype='sequential';}
        if($('#classify').val()=='mhiq'){newsetuparray.colorschemetype='sequential';}
        if($('#classify').val()=='none'){newsetuparray.colorschemetype='none';}
        
      createQuadrantChart("svgcontainer", newdataarray, newsetuparray);
        

  //saveSvgAsPng(document.getElementById("svgel"), "diagram.png");
      
    });
      
     });     
      
      function lookupregion(county){

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
  
