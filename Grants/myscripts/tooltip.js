// Setup the tool tip.  Note that this is just one example, and that many styling options are available.
    // See original documentation for more details on styling: http://labratrevenge.com/d3-tip/
    var tool_tip = d3.tip()
      .attr("class", "d3-tip")
      .offset([-8, 0])
      .html(function(d) { 
        str="";
        str+="<b> Index card data: </b>"
        str+="<table border='0.5px'  style='width:100%'>"
        for (key in d) {
          if (key== "x" || key== "y" || key== "vx" || key== "vy" || key== "index")
              ;// Do nothing
          else if (key== "name")
            str+=  "<tr><td> Title</td> <td>  <span style='color:black'>" + d[key] + "</span> </td></tr>";
          else if (key== "Link")
            str+=  "<tr><td>"+key+"</td> <td>  <span style='color:blue'>" + d[key] + "</span> </td></tr>";
          else{
            str+=  "<tr><td>"+key+"</td> <td>  <span style='color:black'>" + d[key] + "</span> </td></tr>";
          }     
        } 
        str+="</table> <br>"

        str+="<span style='color:blue'><b> Please CLICK to go to the page </b></span> "
        return str; });
    svg.call(tool_tip);
    
