var row, col, i, j, table;

$("#go").click(function () {

    row = Number($("#lines").val());
    col = Number($("#colums").val());

    table = '';

    for (i = 0; i < row; i++) {

        table += `<tr>`;

        for (j = 0; j < col; j++) {
            table += `<td row="${i}" col="${j}"></td>`;
            // table += `<td row="${i}" col="${j}"></td>`;
        }
        table += `</tr>`;

    }

    rx = Math.floor(Math.random() * row);
    ry = Math.floor(Math.random() * col);


    $("#table").html(table).ready(function () {
        $("[row=" + rx + "][col=" + ry + "]").addClass('person')
    });


});

$(window).keydown(function (e) {

    var y = Number($(".person").attr('row'));
    var x = Number($(".person").attr('col'));
    $(".person").removeClass("person");


    if (e.keyCode === 37) {

        if (x != 0) {
            $(`[row=${y}][col=${x - 1}]`).addClass("person");
        }
        else {
            $(`[row=${y}][col=${x}]`).addClass("person");
        }

    }

    if (e.keyCode === 39) {
        if (x != (col - 1)) {
            $(`[row=${y}][col=${x + 1}]`).addClass("person");
        }
        else {
            $(`[row=${y}][col=${x}]`).addClass("person");
        }

    }

    if (e.keyCode === 38) {
        if (y != 0) {
            $(`[row=${y - 1}][col=${x}]`).addClass("person");
        }
        else {
            $(`[row=${y}][col=${x}]`).addClass("person");
        }

    }
    if (e.keyCode === 40) {
        if (y != (row - 1)) {
            $(`[row=${y + 1}][col=${x}]`).addClass("person");
        }
        else {
            $(`[row=${y}][col=${x}]`).addClass("person");
        }

    }

});


