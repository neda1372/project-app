$(document).ready(function () {
    $('#btnAddToHardnerList').click(function () {
        var HardnerDropdowText = $('select#HardnerDropdown option:selected').text();
        row = row +1;
        table.push([HardnerDropdowText]);
        RenderToTable(table);
    });
    var table;
    table = new Array();
    var row =0 ;
    function RenderToTable(array) {
        for (var i = 0; i < array.length; i++) {
            var col1 = array[i][0];
            document.querySelector('#HardnerList');
            var html = '<tr> <td style="background-color:#E6E6E6; text-align: right; border:2px solid white;">'+row+'</td>' +
                '<td style="background-color:#E6E6E6; text-align: right; border:2px solid white;">' +  col1 + '</td>' +
                '<td style="background-color:#E6E6E6; text-align:right; border:2px solid white;"></td>' +
                '<td style="background-color:#ff675e;"> <button style="border: none; background: none;"><img src="../DiacoIcon/RecycleBin.svg" style=" width: 20px; height: 20px;"> </button> </td></tr>'
        }
        $('#HardnerList').append(html);
    }
});



var table;
table = new Array();
var row =0 ;
$(document).ready(function () {
    $('#btnAddToPackingList').click(function () {
        var ProductContainerText = $('select#ProductContainerDropdown option:selected').text();
        var PackingWeighttext = $('#PackingWeight').val();
        var themeDropdownText = $('select#lable-themeDropdown option:selected').text();
        row = row +1;
        table.push([ProductContainerText,PackingWeighttext,themeDropdownText,row]);
        RenderToTable(table);
    });
    function RenderToTable(array) {
        for (var i = 0; i < array.length; i++) {
            var col1 = array[i][0];
            var col2 = array[i][1];
            var col3 = array[i][2];
            // var row = array[i][3];
            document.querySelector('#PackingList');
            var html = '<tr> <td style="background-color:#E6E6E6; text-align: right; border:2px solid white;">'+row+'</td>' +
                '<td style="background-color:#E6E6E6; text-align: right; border:2px solid white;"></td>' +
                '<td style="background-color:#E6E6E6; text-align:right; border:2px solid white;">' + col1 + '</td>' +
                '<td style="background-color:#E6E6E6; text-align:right; border:2px solid white;">' +  col2+'</td>' +
                '<td style="background-color:#E6E6E6; text-align:right; border:2px solid white;">' +  col3+'</td>' +
                '<td style="background-color:#00e18b ;"> <button style="border: none; background: none;"><img src="../DiacoIcon/Attach.svg" style=" width: 20px; height: 20px;"> </button> </td>'+
                '<td style="background-color:#ff675e;"> <button style="border: none; background: none;"><img src="../DiacoIcon/RecycleBin.svg" style=" width: 20px; height: 20px;"> </button> </td></tr>'
        }
        $('#PackingList').append(html);
    }
});





$(document).ready(function () {
    $('#btnAddToUseFor').click(function () {
        var UseForDropdownText = $('select#UseForDropdown option:selected').text();
        var PersianUseForDesctext = $('#PersianUseForDesc').val();
        var EnglishUseForDesctext = $('#EnglishUseForDesc').val();
        row = row+1;

        table.push([UseForDropdownText,PersianUseForDesctext,EnglishUseForDesctext]);
        RenderToTable(table);
    });
    var table;
    table = new Array();
    var row=0;
    function RenderToTable(array) {
        debugger
        for (var i = 0; i < array.length; i++) {
            var col1= array[i][0];
            var col2= array[i][1];
            var col3= array[i][2];
            document.querySelector('#UseForList');
            var html = '<tr> <td style="background-color:#E6E6E6; text-align: right; border:2px solid white;">'+row+'</td>' +
                '<td style="background-color:#E6E6E6; text-align: right; border:2px solid white;">'+  col1 + '</td>' +
                '<td style="background-color:#E6E6E6; text-align:right; border:2px solid white;">' + col2 + '</td>' +
                '<td style="background-color:#E6E6E6; text-align:right; border:2px solid white;">' +  col3 + '</td>' +
                '<td style="background-color:#ff675e;"> <button style="border: none; background: none;"><img src="../DiacoIcon/RecycleBin.svg" style=" width: 20px; height: 20px;"> </button> </td></tr>'
        }
        $('#UseForList').append(html);
    }UseForList
});




$(document).ready(function () {
    $('#btnAddToSpecification').click(function () {
        var SpecificationDropdownText = $('select#SpecificationDropdown option:selected').text();
        row= row+1; 
        table.push([SpecificationDropdownText]);
        RenderToTable(table);
    });
    var table;
    table = new Array();
    var row=0;
    function RenderToTable(array) {
        debugger
        for (var i = 0; i < array.length; i++) {
            var col1=array[i][0];
            document.querySelector('#SpecificationList');
            var html = '<tr> <td style="background-color:#E6E6E6; text-align: right; border:2px solid white;">'+row+'</td>' +
                '<td style="background-color:#E6E6E6; text-align: right; border:2px solid white;">' +  col1 + '</td>' +
                '<td style="background-color:#ff675e;"> <button style="border: none; background: none;"><img src="../DiacoIcon/RecycleBin.svg" style=" width: 20px; height: 20px;"> </button> </td></tr>'
        }
        $('#SpecificationList').append(html);
    }
});






$(document).ready(function () {
    $('#btnAddToApplication').click(function () {
        var ApplicationDropdownText = $('select#ApplicationDropdown option:selected').text();
        var PersianApplicationtext = $('#PersianApplicationDesc').val();
        var EnglishApplicationtext = $('#EnglishApplicationDesc').val();
        row=row+1;
debugger
        table.push([ApplicationDropdownText,PersianApplicationtext,EnglishApplicationtext]);
        RenderToTable(table);
    });
    var table;
    table = new Array();
    var row=0;
    function RenderToTable(array) {
        debugger
        for (var i = 0; i < array.length; i++) {
            col1=array[i][0];
            col2= array[i][1];
            col3= array[i][2]
            document.querySelector('#ApplicationList');
            var html = '<tr> <td style="background-color:#E6E6E6; text-align: right; border:2px solid white;">'+row+'</td>' +
                '<td style="background-color:#E6E6E6; text-align: right; border:2px solid white;">'+  col1 + '</td>' +
                '<td style="background-color:#E6E6E6; text-align:right; border:2px solid white;">' +  col2 + '</td>' +
                '<td style="background-color:#E6E6E6; text-align:right; border:2px solid white;">' +  col3 + '</td>' +
                '<td style="background-color:#ff675e;"> <button style="border: none; background: none;"><img src="../DiacoIcon/RecycleBin.svg" style=" width: 20px; height: 20px;"> </button> </td></tr>'
        }
        $('#ApplicationList').append(html);
    }UseForList
});




$(document).ready(function () {
    $('#btnAddToRecomendedSys').click(function () {
        var recommendedSysDescText = $('#recommendedSysDesc').val();
        row=row+1;
        table.push([recommendedSysDescText]);
        RenderToTable(table);
    });
    var table;
    table = new Array();
    var row=0;
    function RenderToTable(array) {
        debugger
        for (var i = 0; i < array.length; i++) {
            col1=array[i][0];
            document.querySelector('#RecommendedSysList');
            var html = '<tr> <td style="background-color:#E6E6E6; text-align: right; border:2px solid white;">'+row+'</td>' +
                '<td style="background-color:#E6E6E6; text-align: right; border:2px solid white;">' +  col1 + '</td>' +
                '<td style="background-color:#ff675e;"> <button style="border: none; background: none;"><img src="../DiacoIcon/RecycleBin.svg" style=" width: 20px; height: 20px;"> </button> </td></tr>'
        }
        $('#RecommendedSysList').append(html);
    }
});
