$(document).ready(function(){
// var specified=[];
// specified[0]="0";
// specified[1]="1";
// specified[2]="2";
// specified[3]="3";
// specified[4]="4";
// specified[5]="5";

var packagejson=[
    {"id":"1","title":"a"},
    {"id":"2","title":"b"},
    {"id":"3","title":"c"},
    {"id":"4","title":"d"},
    {"id":"5","title":"e"},
]
renderToPachageDropDown(packagejson);
function renderToPachageDropDown(array){
    for(var i= 0;i<array.length;i++){
        document.querySelector("select#example").fstdropdown.rebind();
var html = '<option value="'+array[i].id+'" class="dropdown-menu-option">'+array[i].title+'</option>';
$('#example').append(html);
    }
}

})