//Problem: It look gross in smaller browser widths and small devices
//Solution: To hide the text links and swap them out with a more appropriate navigation

//create a $select and .append in #menu
var $select = $("<select></select>");
$("#menu").append($select);
             
//cycle over menu links
$("#menu a").each(function() {
  var $anchor = $(this);
  
  //create an option
  var $option = $("<option></option>");
  
  //deal with selected options depending on current page
  if($anchor.parent().hasClass(".selected"))  {
    $option.prop("selected", true);
  }

  //option value is the href
  $option.val($anchor.attr("href"));
  
  //option text is text of link
  $option.text($anchor.text());
  
  //append option to select
  $select.append($option);
  //$select.show();
});

//bind 'change listener' to the select


//when click
$select.change(function() {
  //go to 'select' location
  window.location = $select.val(); 
});
    
