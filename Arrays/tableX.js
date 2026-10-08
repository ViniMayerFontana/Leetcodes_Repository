function createTable(n) {
    var table = [];

    for (let lines = 0; lines < n; lines++) {
        var line = [];
        for (var columns = 0; columns < n; columns++) {
            if (lines == columns || lines == n - 1 - columns) {
                line.push("X");
            }
            else {
                line.push(0);
            }
        }

    table.push(line);
    }

    return table;
}

function showTable(table) {
    visibleLine = "";
    for (n = 0; n < table.length; n++){
        visibleLine += table[n].join(" ") + "\n";
    }
    return visibleLine;
}

n = parseInt(prompt("De o numero da dimensao da sua tabela: "), 10)
let myTable = createTable(n)
p = showTable(myTable)
alert(p)