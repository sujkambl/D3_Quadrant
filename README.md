# D3_Quadrant
Quadrant-style scatterplot made with d3.js

##How to Add
Load as a Javascript Library 
```html
<script src="pathto/createQuadrantChart.js" type="text/javascript"></script>
```

##How to Call
Call as a function 
```javascript
createQuadrantChart("svgcontainer", dataarray, setupobject);
```
Where <b>"svgcontainer"</b> is the name of the div to place the chart, <b>dataarray</b> is your datasource, and <b>setupobject</b> are the chart option settings

##What the Input Data Array format looks like:
The input data is an array of objects structure like the following:
```javascript
var data=[{ label:'Adams', x:56270, y:186600, z:0, category:'5'},
{ label:'Eagle', x:74456, y:453300, z:0, category:'4'},
{ label:'Boulder', x:67956, y:350900, z:0, category:'6'}];
```
##What the Setup Object format looks like:
The setup array is a single object with multiple properties.  For clarity, you may want to write it in the following style:
```javascript
var setup= {};
setup.width=800;
setup.height=600;
setup.dotRadius=4;
```
All setup properties are optional; they are preconfigured with smart defaults.
Here is an inventory of possible properties, along with descriptions.  Defaults are in *italic*:

<b>height</b>: Total Height of the Chart *600*<br />
<b>width</b>: Total Width of the Chart *800*<br />
<b>dotRadius</b>: Default dot radius if no Z Value is given in data array *4*<br />
<b>dotcolor</b>: Default dot color if no categorization is given in data array *'#800000'*<br />
<b>xtype</b>: Data Format according to <a href="https://github.com/mbostock/d3/wiki/Formatting" >D3 Format</a> string for x-axis data *".0f"*<br />
<b>ytype</b>: Data Format according to <a href="https://github.com/mbostock/d3/wiki/Formatting" >D3 Format</a> string for y-axis data *".0f"*<br />
<b>ztype</b>: Data Format according to <a href="https://github.com/mbostock/d3/wiki/Formatting" >D3 Format</a> string for z value data *".0f"*<br />
<b>gridSpacing</b>: Spacing of fine background grid. In pixels rather than chart units. (Apologies, not a smart grid currently) *10*<br />
<b>gridlinesstroke</b>: Fine background grid line color *'steelblue'*<br />
<b>gridlineswidth</b>: Fine background grid line width *'0.5px'*<br />
<b>gridlinesopacity</b>: Fine background grid line opacity on a 0 to 1 scale *'0.5'*<br />
<b>topspace</b>: Whitespace between the top of the chart outline and where the chart grid begins *60*<br />
<b>lbuffer</b>: Whitespace between the left side of the chart outline and where the chart grid begins *100*<br />
<b>rbuffer</b>: Whitespace between the right side of the chart outline and where the chart grid ends *40*<br />
<b>bottomspace</b>: Whitespace between the bottom of the chart outline and where the chart grid ends *60*<br />
<b>title</b>: Main Chart Title *""*<br />
<b>xlabel</b>: Main X-Axis Label *""*<br />
<b>ylabel</b>: Main Y-Axis Label *""*<br />
<b>quadrantxaxis</b>: Numeric value of the X Quadrant Axis *0*<br />
<b>quadrantyaxis</b>: Numeric value of the Y Quadrant Axis *0*<br />
<b>quadrantaxiscolor</b>: Quadrant Axis Color *'#808080'*<br />
<b>quadrantaxiswidth</b>: Quadrant Axis Width *'2px'*<br />
<b>quadrantaxisopacity</b>: Quadrant Axis Opacity on a 0 to 1 scale *'0.5'*<br />
<b>svgborderwidth</b>: Chart outline border width *'2px'*<br />
<b>svgbordercolor</b>: Chart outline border color *'#ccc'*<br />
<b>axislinewidth</b>: Main Axes line width *'1px'*<br />
<b>axislinecolor</b>: Main Axes line color *'#000000'*<br />
<b>axisopacity</b>: Main Axes opacity on a 0 to 1 scale *'0.5'*<br />
<b>axistextsize</b>: Axes unit label text size *'10px'*<br />
<b>axistextcolor</b>: Axes unit label text color *'#000000'*<br />
<b>item_min_ptsize</b>: If z-values are given, dot minimum size *2*<br />
<b>item_max_ptsize</b>: If z-values are given, dot maximum size *10*<br />
<b>dotstroke</b>: Dot outline color *'none'*<br />
<b>dotstrokewidth</b>: Dot outline width *'0px'*<br />
<b>itemslabel</b>: 'true' or 'false' (as string, not boolean)  Whether dot labels will be on or off *'true'*<br />
<b>itemsfontsize</b>: Font size for dot labels *'10px'*<br />
<b>itemsfontcolor</b>: Color of dot labels *'#000000'*<br />
<b>titlefontsize</b>: Font size of main title *'24px'*<br />
<b>titlefontcolor</b>: Font color of main title *'#000000'*<br />
<b>axislabelsize</b>: Font size of axis labels *'20px'*<br />
<b>axislabelcolor</b>: Font color of axis labels *'#000000'*<br />
<b>colorschemetype</b>: 'unique' or 'sequential' - whether to use a unique value color scheme or a gradient color scheme for category values (which are sorted smartly alphanumerically so that '10' comes after '9' rather than after '1' during the sort) *'unique'*<br />

In Progress
