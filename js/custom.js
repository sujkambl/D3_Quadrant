
  var revert={};
  var newdataarray=[];  
  var newsetuparray={};

var rawcsvdata=[];

 $(document).ready(function() {
    if(isAPIAvailable()) {
      $('#files').bind('change', handleFileSelect);
    }
  });

  function isAPIAvailable() {
    // Check for the various File API support.
    if (window.File && window.FileReader && window.FileList && window.Blob) {
      // Great success! All the File APIs are supported.
      return true;
    } else {
      // source: File API availability - https://caniuse.com/#feat=fileapi
      // source: <output> availability - https://html5doctor.com/the-output-element/
      document.writeln('The HTML5 APIs used in this form are only available in the following browsers:<br />');
      // 6.0 File API & 13.0 <output>
      document.writeln(' - Google Chrome: 13.0 or later<br />');
      // 3.6 File API & 6.0 <output>
      document.writeln(' - Mozilla Firefox: 6.0 or later<br />');
      // 10.0 File API & 10.0 <output>
      document.writeln(' - Internet Explorer: Not supported (partial support expected in 10.0)<br />');
      // ? File API & 5.1 <output>
      document.writeln(' - Safari: Not supported<br />');
      // ? File API & 9.2 <output>
      document.writeln(' - Opera: Not supported');
      return false;
    }
  }

  function handleFileSelect(evt) {
    var files = evt.target.files; // FileList object
    var file = files[0];

    // read the file contents
    printTable(file);


  }


  function printTable(file) {
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function(event){
      var csv = event.target.result;
      var data = $.csv.toArrays(csv);

      //unhide the rest of controls
      $('.hiddendiv').show();
      
      //for(var row in data) {
        //create JSON file
        rawcsvdata=data;
        var numcolumns=data[0].length;
        //console.log(numcolumns)	  ;

        for(var i=0;i<numcolumns;i=i+1){
          //populate selects
          
          //dont include label field
          if(data[0][i]!=='label' && data[0][i]!=='LABEL' && data[0][i]!=='Label'){
            $('#selectx').append($('<option value="'+i+'">'+data[0][i]+'</option>')); 
            $('#selecty').append($('<option value="'+i+'">'+data[0][i]+'</option>'));           
            $('#selectz').append($('<option value="'+i+'">'+data[0][i]+'</option>'));    
            $('#classify').append($('<option value="'+i+'">'+data[0][i]+'</option>')); 
          }
        }

    };
    
    reader.onerror = function(){ alert('Unable to read ' + file.fileName); };
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
  revert.i_axislinewidth=$('#i_axislinewidth').val();
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
  revert.i_x_axis_decimals=$('#i_x_axis_decimals').val();
  revert.i_y_axis_decimals=$('#i_y_axis_decimals').val(); 
  revert.i_dotoutlinesize=$('#i_dotoutlinesize').val();
  revert.i_dotoutlinecolor=$('#i_dotoutlinecolor').val();   
  
$('#modal').modal('toggle');
}

function resetform(){
  
  $('#i_height').val("600");
  $('#i_width').val("800");
  $('#i_topbuffer').val("60");
  $('#i_bottombuffer').val("60");
  $('#i_leftbuffer').val("100");
  $('#i_rightbuffer').val("40");
  $('#i_titlefontsize').val("24");
  $('#i_titlefontcolor').val("#000000");
  $('#i_axislabelfontsize').val("20");
  $('#i_axislabelcolor').val("#000000");
  $('#i_axislinewidth').val("1");
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
  $('#i_dotoutlinesize').val("0");
  $('#i_dotoutlinecolor').val("#000000");
  
  $('#i_x_axis_decimals').val("0");
  $('#i_y_axis_decimals').val("0");
  
  $('#i_xaxislabel').val(newsetuparray.xlabel);
  $('#i_yaxislabel').val(newsetuparray.ylabel);      
  $('#i_title').val(newsetuparray.title);
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
  $('#i_axislinewidth').val(revert.i_axislinewidth);
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
  $('#i_dotoutlinesize').val(revert.i_dotoutlinesize);
  $('#i_dotoutlinecolor').val(revert.i_dotoutlinecolor);
  $('#i_x_axis_decimals').val(revert.i_x_axis_decimals);
  $('#i_y_axis_decimals').val(revert.i_y_axis_decimals);  
}

function stylesubmit(){
  
  if(document.getElementById('i_height').validity.valid && document.getElementById('i_width').validity.valid && document.getElementById('i_topbuffer').validity.valid && document.getElementById('i_bottombuffer').validity.valid && document.getElementById('i_leftbuffer').validity.valid && document.getElementById('i_rightbuffer').validity.valid && document.getElementById('i_title').validity.valid && document.getElementById('i_titlefontsize').validity.valid && document.getElementById('i_titlefontcolor').validity.valid && document.getElementById('i_xaxislabel').validity.valid && document.getElementById('i_yaxislabel').validity.valid && document.getElementById('i_axislabelfontsize').validity.valid && document.getElementById('i_axislabelcolor').validity.valid && document.getElementById('i_axislinewidth').validity.valid && document.getElementById('i_axislinecolor').validity.valid && document.getElementById('i_axisopacity').validity.valid && document.getElementById('i_axistextsize').validity.valid && document.getElementById('i_axistextcolor').validity.valid && document.getElementById('i_quadrantaxiscolor').validity.valid && document.getElementById('i_quadrantaxiswidth').validity.valid && document.getElementById('i_defaultdotradius').validity.valid && document.getElementById('i_dotminsize').validity.valid && document.getElementById('i_dotmaxsize').validity.valid && document.getElementById('i_dotcolor').validity.valid && document.getElementById('i_dotlabel').validity.valid && document.getElementById('i_dotlabelfontsize').validity.valid && document.getElementById('i_dotlabelfontcolor').validity.valid && document.getElementById('i_x_axis_decimals').validity.valid && document.getElementById('i_y_axis_decimals').validity.valid && document.getElementById('i_dotoutlinesize').validity.valid && document.getElementById('i_dotoutlinecolor').validity.valid){
  
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
  newsetuparray.axislinewidth=$('#i_axislinewidth').val()+"px";
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
  newsetuparray.dotstrokewidth=$('#i_dotoutlinesize').val()+"px";
  newsetuparray.dotstroke=$('#i_dotoutlinecolor').val();    
  
    //format axis precision logic
  newsetuparray.xtype='.' + $('#i_x_axis_decimals').val() +'f';
  newsetuparray.ytype='.' + $('#i_y_axis_decimals').val() +'f';

 createQuadrantChart("svgcontainer", newdataarray, newsetuparray);
    
    $('#modal').modal('hide');  
    
    //success, create new chart, hide modal
    
    }else{console.log('false')}  //form validation failed, nothing happens
  
}



    function submitbtn(){
      
        $( "#svgcontainer" ).empty();
      
      newdataarray=[];
      
      //unhide chart and submit/png buttons
      $('.hiddendiv2').show();
      
 
      
      var labelindex;
      for(var j=0;j<rawcsvdata[0].length;j=j+1){
        if(rawcsvdata[0][j]==='label' || rawcsvdata[0][j]==='LABEL' || rawcsvdata[0][j]==='Label'){
          labelindex=j;
        }
      }
      
      //find index for x and y and z element
      var xindex=$('#selectx').val();
      var yindex=$('#selecty').val();
      var zindex=$('#selectz').val();
      var cindex=$('#classify').val();
      
      console.log(labelindex);
      console.log(xindex);
      console.log(yindex);
      console.log(zindex);
      console.log(cindex);
      
      for(var i=1; i<rawcsvdata.length; i=i+1){
        
        //push the right items in array.  if no z or no category, dont push those elements
        
        if($('#selectz').val()==="none" && $('#classify').val()==="none"){
          //no category or z value
            newdataarray.push({label: rawcsvdata[i][labelindex], x: Number(rawcsvdata[i][xindex]), y: Number(rawcsvdata[i][yindex])})
          }else if($('#selectz').val()==="none" && $('#classify').val()!=="none"){
            //no z value
            newdataarray.push({label: rawcsvdata[i][labelindex], x: Number(rawcsvdata[i][xindex]), y: Number(rawcsvdata[i][yindex]), category: (rawcsvdata[i][cindex])})
          }else if($('#selectz').val()==="none" && $('#classify').val()!=="none"){
          //no category
            newdataarray.push({label: rawcsvdata[i][labelindex], x: Number(rawcsvdata[i][xindex]), y: Number(rawcsvdata[i][yindex]), z: Number(rawcsvdata[i][zindex])})
          }else{
          //everything
            newdataarray.push({label: rawcsvdata[i][labelindex], x: Number(rawcsvdata[i][xindex]), y: Number(rawcsvdata[i][yindex]), z: Number(rawcsvdata[i][zindex]), category: (rawcsvdata[i][cindex])})
        }
        

      }
      
      console.log(newdataarray);
      console.log(newsetuparray);
         createQuadrantChart("svgcontainer", newdataarray, newsetuparray);
    } //end submitbtn
  

  //its go time
  //submitbtn();
