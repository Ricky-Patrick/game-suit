//pilihan player
var player = prompt('batu,gunting,kertas');

//angka random komputer
var computer = Math.random();

if( computer < 0.33 ) {
    computer = 'batu';
} else if( computer >= 0.33 && computer < 0.75) {
    computer = 'kertas';
} else {
    computer = 'gunting';
}
//aturan
var hasil = '';

if( player == computer ) {
    hasil = 'seri';
} 
else if( player == 'batu' ) {
    hasil = ( computer == 'gunting' ) ? 'menang' : 'kalah';
}
else if( player == 'gunting') {
    hasil = ( computer == 'kertas') ? 'menang' : 'kalah';
}
else if( player == 'kertas') {
    hasil = ( computer == 'batu') ? 'menang' : 'kalah';
}
else {
    hasil = 'silahkan memilih pilihan batu , gunting , atau kertas jangan masukkan yang lain!';
}

//hasil
alert('player :' + player + '\ncomputer :' + computer + '\nhasil :' + hasil);