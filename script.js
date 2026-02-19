let today = new Date();
let current_month = today.getMonth();
let current_day = today.getDate();


let month_max_days = [
    31, 28, 31, 30, 31, 30,
    31, 31, 30, 31, 30, 31
];

let month_index = [
    0, 1, 2, 3, 4, 5,
    6, 7, 8, 9, 10, 11
];

let month_names = [
    "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
    "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
];

for (let i = 0; i < 12; i++) {
    document.write("<h3>" + month_names[i] + "</h3>");
    if(current_month == i){
        print_table_month(month_max_days[i], current_day);

    }
    else{
        print_table_month(month_max_days[i]);

    }
}

function print_table_month(max_days, today) {
    let day = 1;

    document.write('<table>');

    for (let line = 1; line <= 5; line++) {
        document.write('<tr>');

        for (let col = 1; col <= 7; col++) {
            if (day <= max_days) {
                if (today == day) {
                    document.write('<td style="background:red">' + day + '</td>');
                }
                else
                    document.write('<td>' + day + '</td>');
                day++;
            }
        }

        document.write('</tr>');
    }

    document.write('</table>');
}



