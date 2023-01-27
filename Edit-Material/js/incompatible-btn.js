$(document).ready(function () {
    $('#btnAddIncompatibility').click(function () {
        var IncompatibilityText = $('select#IncompatibilityDropdown option:selected').text();
        var textarea = $('#DescriptionIncompatibility').val();
        table.push([IncompatibilityText]);
        table.push([textarea]);
        RenderToTable(table);
    });
    var table;
    table = new Array();
    function RenderToTable(array) {
        debugger
        for (var i = 0; i < array.length; i++) {
            document.querySelector('#IncompatibilityList');
            var html = '<tr> <td style="background-color:#E6E6E6; text-align: right; border:2px solid white;">1</td>' +
                '<td style="background-color:#E6E6E6; text-align: right; border:2px solid white;">' +  array[0] + '</td>' +
                '<td style="background-color:#E6E6E6; text-align:right; border:2px solid white;">' +  array[1] + '</td>' +
                '<td style="background-color:#ff675e;"> <button style="border: none; background: none;"><img src="../DiacoIcon/RecycleBin.svg" style=" width: 20px; height: 20px;"> </button> </td></tr>'
        }
        $('#IncompatibilityList').append(html);
    }
});




