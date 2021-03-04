function computer() {

    const computer = Math.random();

    if( computer < 0.33 ) return 'batu';
    if( computer >= 0.33 && computer < 0.75 ) return 'kertas';
    return 'gunting';
}

function hasil(computer,player) {

    if( player == computer ) return 'seri'; 

    if( player == 'batu' ) return ( computer == 'gunting' ) ? 'menang' : 'kalah';

    if( player == 'gunting') return ( computer == 'kertas') ? 'menang' : 'kalah';

    if( player == 'kertas') return ( computer == 'batu') ? 'menang' : 'kalah';
}


const pilihan = document.querySelectorAll('button img');
pilihan.forEach(function(pilih){
    pilih.addEventListener('click',function(){

        const hasilplayer = pilih.className;
        const hasilcomputer = computer();
        const hasilakhir = hasil(hasilcomputer,hasilplayer);
        
        const gbrcomputer = document.querySelector('.gbr-computer');
        gbrcomputer.setAttribute('src', 'gambar/' + hasilcomputer + '.png');
        
        const hasilpermainan = document.querySelector('.hasilpermainan');
        hasilpermainan.innerHTML = hasilakhir;
    })
});

