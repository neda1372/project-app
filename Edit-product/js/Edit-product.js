$(document).ready(function(){
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
            document.querySelector("select#ProductStatusModalInputDropdown").fstdropdown.rebind();
    var html = '<option value="'+array[i].id+'" class="dropdown-menu-option">'+array[i].title+'</option>';
    $('#ProductStatusModalInputDropdown').append(html);
        }
    }
    
})


$(document).ready(function(){
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
            document.querySelector("select#ProductUnitInputDropdown").fstdropdown.rebind();
    var html = '<option value="'+array[i].id+'" class="dropdown-menu-option">'+array[i].title+'</option>';
    $('#ProductUnitInputDropdown').append(html);
        }
    }
    
})



var packagejson=[
    {"id":"1","title":"a",status: false},
    {"id":"2","title":"b",status: false},
    {"id":"3","title":"c",status: false},
    {"id":"4","title":"d",status: false},
    {"id":"5","title":"e",status: false},
]
$(document).ready(function(e){
    renderToPachageDropDown(packagejson);
    function renderToPachageDropDown(array){
        for(var i= 0;i<array.length;i++){
            document.querySelector("select#HardnerDropdown").fstdropdown.rebind();
    var html = '<option value="'+array[i].id+'" class="dropdown-menu-option">'+array[i].title+'</option>';
    $('#HardnerDropdown').append(html);
        }
    }
    
})

$(document).ready(function () {
    $('#btnAddToHardnerList').click(function (e) {
        e.preventDefault();

        var HardnerDropdowText = $('select#HardnerDropdown option:selected').text();
       var option = $('select#HardnerDropdown option:selected')[0];
       var selectedOption = packagejson.find((o) => o.id === option.value);
       if (selectedOption.status){
        alert("مقدار وارد شده تکراری است");
      return;
      }
      selectedOption.status = true;
        row= row+1;
        table.push([HardnerDropdowText]);
        RenderToTable(table);
    });
    var table;
    table = new Array();
    var row=0;
    function RenderToTable(array) {
        for (var i = 0; i < array.length; i++) {
            col1=array[i][0];
            document.querySelector('#HardnerList');
            var html = '<tr> <td style="background-color:#E6E6E6; text-align: right; border:2px solid white;">'+row+'</td>' +
                '<td style="background-color:#E6E6E6; text-align: right; border:2px solid white;">' +  col1 + '</td>' +
                '<td style="background-color:#E6E6E6; text-align:right; border:2px solid white;"></td>' +
                '<td style="background-color:#ff675e;"> <button style="border: none; background: none;"><img src="../DiacoIcon/RecycleBin.svg" style=" width: 20px; height: 20px;"> </button> </td></tr>'
        }
        $('#HardnerList').append(html);
    }

});




$(document).ready(function(){
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
            document.querySelector("select#ThinnerDropdown").fstdropdown.rebind();
    var html = '<option value="'+array[i].id+'" class="dropdown-menu-option">'+array[i].title+'</option>';
    $('#ThinnerDropdown').append(html);
        }
    }
    
})







$(document).ready(function(){
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
            document.querySelector("select#ProductContainerDropdown").fstdropdown.rebind();
    var html = '<option value="'+array[i].id+'" class="dropdown-menu-option">'+array[i].title+'</option>';
    $('#ProductContainerDropdown').append(html);
        }
    }
    
})




$(document).ready(function(){
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
            document.querySelector("select#lable-themeDropdown").fstdropdown.rebind();
    var html = '<option value="'+array[i].id+'" class="dropdown-menu-option">'+array[i].title+'</option>';
    $('#lable-themeDropdown').append(html);
        }
    }
    
})



$(document).ready(function () {
    $('#btnAddToPackingList').click(function () {
        var ProductContainerText = $('select#ProductContainerDropdown option:selected').text();
        var PackingWeighttext = $('#PackingWeight').val();
        var themeDropdownText = $('select#lable-themeDropdown option:selected').text();
        row= row+1;

        table.push([ProductContainerText,PackingWeighttext,themeDropdownText]);
        RenderToTable(table);
    });
    var table;
    table = new Array();
    var row=0;
    function RenderToTable(array) {
        for (var i = 0; i < array.length; i++) {
            col1=array[i][0];
            col2=array[i][1];
            col3=array[i][2];
            document.querySelector('#PackingList');
            var html = '<tr> <td style="background-color:#E6E6E6; text-align: right; border:2px solid white;">'+row+'</td>' +
                '<td style="background-color:#E6E6E6; text-align: right; border:2px solid white;"></td>' +
                '<td style="background-color:#E6E6E6; text-align:right; border:2px solid white;">' + col1+ '</td>' +
                '<td style="background-color:#E6E6E6; text-align:right; border:2px solid white;">' + col2+'</td>' +
                '<td style="background-color:#E6E6E6; text-align:right; border:2px solid white;">' + col3+'</td>' +
                '<td style="background-color:#aabbbe  ;"> <button style="border: none; background: none;"><img src="../DiacoIcon/PdfFile.svg" style=" width: 20px; height: 20px;"> </button> </td>'+
                '<td style="background-color:#00e18b ;"> <button style="border: none; background: none;"><img src="../DiacoIcon/Attach.svg" style=" width: 20px; height: 20px;"> </button> </td>'+
                '<td style="background-color:#ff675e;"> <button style="border: none; background: none;"><img src="../DiacoIcon/RecycleBin.svg" style=" width: 20px; height: 20px;"> </button> </td></tr>'
        }
        $('#PackingList').append(html);
    }
});


$(document).ready(function(){
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
            document.querySelector("select#ProductLayerTypeDropdown").fstdropdown.rebind();
    var html = '<option value="'+array[i].id+'" class="dropdown-menu-option">'+array[i].title+'</option>';
    $('#ProductLayerTypeDropdown').append(html);
        }
    }
    
})


$(document).ready(function(){
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
            document.querySelector("select#ProductStructureDropdown").fstdropdown.rebind();
    var html = '<option value="'+array[i].id+'" class="dropdown-menu-option">'+array[i].title+'</option>';
    $('#ProductStructureDropdown').append(html);
        }
    }
    
})


$(document).ready(function(){
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
            document.querySelector("select#OpacityDropdown").fstdropdown.rebind();
    var html = '<option value="'+array[i].id+'" class="dropdown-menu-option">'+array[i].title+'</option>';
    $('#OpacityDropdown').append(html);
        }
    }
})



$(document).ready(function(){
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
            document.querySelector("select#UseForDropdown").fstdropdown.rebind();
    var html = '<option value="'+array[i].id+'" class="dropdown-menu-option">'+array[i].title+'</option>';
    $('#UseForDropdown').append(html);
        }
    }
    
})

$(document).ready(function () {
    $('#btnAddToUseFor').click(function () {
        var UseForDropdownText = $('select#UseForDropdown option:selected').text();
        var PersianUseForDesctext = $('#PersianUseForDesc').val();
        var EnglishUseForDesctext = $('#EnglishUseForDesc').val();
        row=row+1;

        table.push([UseForDropdownText,PersianUseForDesctext,EnglishUseForDesctext]);
        RenderToTable(table);
    });
    var table;
    table = new Array();
    var row=0;
    function RenderToTable(array) {
        for (var i = 0; i < array.length; i++) {
            col1=array[i][0];
            col2=array[i][1];
            col3=array[i][2];
            document.querySelector('#UseForList');
            var html = '<tr> <td style="background-color:#E6E6E6; text-align: right; border:2px solid white;">'+row+'</td>' +
                '<td style="background-color:#E6E6E6; text-align: right; border:2px solid white;">'+ col1 + '</td>' +
                '<td style="background-color:#E6E6E6; text-align:right; border:2px solid white;">' + col2 + '</td>' +
                '<td style="background-color:#E6E6E6; text-align:right; border:2px solid white;">' + col3 + '</td>' +
                '<td style="background-color:#ff675e;"> <button style="border: none; background: none;"><img src="../DiacoIcon/RecycleBin.svg" style=" width: 20px; height: 20px;"> </button> </td></tr>'
        }
        $('#UseForList').append(html);
    }UseForList
});




$(document).ready(function(){
    var packagejson=[
        {"id":"1","title":"a"},
        {"id":"2","title":"b"},
        {"id":"3","title":"c"},
        {"id":"4","title":"d"},
        {"id":"5","title":"e"},
    ]
    renderToPachageDropDown(packagejson);      
    function renderToPachageDropDown(array){
    for (var i=0; i<array.length; i++){
        document.querySelector("select#SpecificationDropdown").fstdropdown.rebind();
        var html = '<option value="'+array[i].id+'" class="dropdown-menu-option">'+array[i].title+'</option>';
        $('#SpecificationDropdown').append(html);
    }
    }

})


$(document).ready(function () {
    $('#btnAddToSpecification').click(function () {
        var SpecificationDropdownText = $('select#SpecificationDropdown option:selected').text();
        row=row+1;
        table.push([SpecificationDropdownText]);
        RenderToTable(table);
    });
    var table;
    table = new Array();
    var row=0;
    function RenderToTable(array) {
        
        for (var i = 0; i < array.length; i++) {
            col1=array[i][0];
            document.querySelector('#SpecificationList');
            var html = '<tr> <td style="background-color:#E6E6E6; text-align: right; border:2px solid white;">'+row+'</td>' +
                '<td style="background-color:#E6E6E6; text-align: right; border:2px solid white;">' + col1 + '</td>' +
                '<td style="background-color:#ff675e;"> <button style="border: none; background: none;"><img src="../DiacoIcon/RecycleBin.svg" style=" width: 20px; height: 20px;"> </button> </td></tr>'
        }
        $('#SpecificationList').append(html);
    }
});




$(document).ready(function(){
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
            document.querySelector("select#ApplicationDropdown").fstdropdown.rebind();
    var html = '<option value="'+array[i].id+'" class="dropdown-menu-option">'+array[i].title+'</option>';
    $('#ApplicationDropdown').append(html);
        }
    }
    
})


$(document).ready(function () {
    $('#btnAddToApplication').click(function () {
        debugger
        var ApplicationDropdownText = $('select#ApplicationDropdown option:selected').text();
        var PersianApplicationtext = $('#PersianApplicationDesc').val();
        var EnglishApplicationtext = $('#EnglishApplicationDesc').val();
        row=row+1;
        table.push([ApplicationDropdownText,PersianApplicationtext,EnglishApplicationtext]);
        RenderToTable(table);
    });
    var table;
    table = new Array();
    var row=0;
    function RenderToTable(array) {
        
        for (var i = 0; i < array.length; i++) {
            col1=array[i][0];
            col2=array[i][1];
            col3=array[i][2];
            document.querySelector('#ApplicationList');
            var html = '<tr> <td style="background-color:#E6E6E6; text-align: right; border:2px solid white;">'+row+'</td>' +
                '<td style="background-color:#E6E6E6; text-align: right; border:2px solid white;">'+  col1 + '</td>' +
                '<td style="background-color:#E6E6E6; text-align:right; border:2px solid white;">' +  col2 + '</td>' +
                '<td style="background-color:#E6E6E6; text-align:right; border:2px solid white;">' + col3 + '</td>' +
                '<td style="background-color:#ff675e;"> <button style="border: none; background: none;"><img src="../DiacoIcon/RecycleBin.svg" style=" width: 20px; height: 20px;"> </button> </td></tr>'
        }
        $('#ApplicationList').append(html);
    }UseForList
});






$(document).ready(function(){
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
            document.querySelector("select#themeDropdown-8-20").fstdropdown.rebind();
    var html = '<option value="'+array[i].id+'" class="dropdown-menu-option">'+array[i].title+'</option>';
    $('#themeDropdown-8-20').append(html);
        }
    }
    
})



$(document).ready(function(){
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
            document.querySelector("select#themeDropdown-11-4").fstdropdown.rebind();
    var html = '<option value="'+array[i].id+'" class="dropdown-menu-option">'+array[i].title+'</option>';
    $('#themeDropdown-11-4').append(html);
        }
    }
    
})
