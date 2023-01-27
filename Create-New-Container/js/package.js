$(document).ready(function () {
    // var package =[];
    // package[0]="0";
    // package[1]="1";
    // package[2]="2";
    // package[3]="3";
    // package[4]="4";
    // package[5]="5";

    var packageJson = [
        {"id": "1", "title": "a" },
        {"id": "2", "title": "b" },
        {"id": "3", "title": "c" },
        {"id": "4", "title": "d" },
        {"id": "5", "title": "e" },
    ]

    renderToPachageDropDown(packageJson);
    function renderToPachageDropDown(array) {
        for (var i = 0; i < array.length; i++) {
            document.querySelector("select#PackingNameDropdown").fstdropdown.rebind();
            var html = '<option value="' + array[i].id + '" class="dropdown-menu-option">' + array[i].title + '</option>';
            $('#PackingNameDropdown').append(html);
        }
    }
})
