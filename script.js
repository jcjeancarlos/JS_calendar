let day = 1;
let max_day = prompt('Combien de jours compte votre mois ?')

max_day = parseInt(max_day)


function calendar(max_day) {
        document.write('<table>');
        for (let line = 1; line <= 5; line++){
            document.write('<tr>');
            
            for (let col = 1; col <= 7; col++){
                if (day<=max_day) {
                    
                document.write('<td>'+day+'</td>');
                ++day 
                }  
            }

            document.write('</tr>');
        }
        document.write('</table>');
    }