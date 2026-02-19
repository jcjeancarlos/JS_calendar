let month_max_days = [
    31, 28, 31, 30, 31, 30,
    31, 31, 30, 31, 30, 31
];

let month_names = [
    "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
    "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
];


function print_table_month(month_max_days) {
    document.write('<table>');
    let day = 1;
    for (let line = 1; line <= 5; line++) {
        document.write('<tr>');

        for (let col = 1; col <= 7; col++) {
            if (day <= month_max_days) {

                document.write('<td>' + day + '</td>');
                ++day
            }
        }

        document.write('</tr>');
    }
    document.write('</table>');
}


function calendar() {
    for (let i = 0; i < 12; i++) {
        document.write("<h3>" + month_names[i] + "</h3>");

        print_table_month(month_max_days[i])
    }
}
