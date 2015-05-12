# D3_Quadrant
Quadrant-style scatterplot made with d3.js

##How to Add
Load as a Javascript Library 
'''html
<script src="pathto/createQuadrantChart.js" type="text/javascript"></script>
'''

##How to Call
Call as a function 
'''createQuadrantChart("svgcontainer", dataarray, setupobject);
Where <b>"svgcontainer"</b> is the name of the div to place the chart, <b>dataarray</b> is your datasource, and <b>setupobject</b> are the chart option settings

##What the Input Data Array format looks like:
The input data is an array of objects structure like the following:
'''var data=[{ label:'Adams', x:56270, y:186600, z:0, category:'5'},
'''{ label:'Eagle', x:74456, y:453300, z:0, category:'4'},
'''{ label:'Boulder', x:67956, y:350900, z:0, category:'6'}];

##What the Setup Object format looks like:
The setup array is a single object with multiple properties.  For clarity, you may want to write it in the following style:
'''var setup= {};
'''setup.width=800;
'''setup.height=600;
'''setup.dotRadius=4;

All setup properties are optional; they are preconfigured with smart defaults.
Here is an inventory of possible properties, along with descriptions:

<b>height<b>: Total Height of the Chart (px)
<b>width<b>: Total Width of the Chart (px)
