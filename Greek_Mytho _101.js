window.addEventListener('load', () => {
    let isDarkModeEnabled = false;

    let tooltip = document.getElementById('tooltip');

    let select = document.getElementById('select');

    let selectForm = document.getElementById('faveGod');

    let titluPrincipal = {
        titlu: 'Greek Mythology 101',

        h1: document.getElementById('titluPrincipal'),

        adaugaTitlu: () => {
            titluPrincipal.h1.innerHTML = titluPrincipal.titlu;
        }

    }
    
    function darkLinkH3(a, h3) {
        a.classList.toggle('dark-a');
        h3.classList.toggle('dark-h3');

    }
        
    function change() {
        if(isDarkModeEnabled){
            tooltip.innerHTML = 'Enable Light Mode';
            document.getElementById('button').src="bec-alb.png";
        }
        else{
            tooltip.innerHTML = 'Enable Dark Mode';
            document.getElementById('button').src="pngwing.com-2.png";

        }
    }

    titluPrincipal.adaugaTitlu();


    document.getElementById('button').addEventListener('mouseover', () => {
        document.getElementById('tooltip').style.visibility = 'visible';
    })

    document.getElementById('button').addEventListener('mouseout', () => {
        document.getElementById('tooltip').style.visibility = 'hidden';
    })

    document.getElementById('button').addEventListener('click', () => {
        
        document.getElementById('banner2').classList.toggle('dark-banner2');

        document.getElementById('main-page').classList.toggle('dark-main');

        document.getElementsByTagName('table')[0].classList.toggle('dark-table');
        document.getElementsByTagName('table')[1].classList.toggle('dark-table');

        document.getElementById('info').classList.toggle('dark-info');

        for(i=1; i<=4; i++){
            darkLinkH3(document.getElementsByTagName('a')[i], document.getElementsByTagName('h3')[i-1]);
        }

        isDarkModeEnabled = !isDarkModeEnabled;

        change();



    })

    select.addEventListener('change', () => {
        if(select.value == 'other'){
            document.getElementById('inputOther').style.display = 'block';
        }
        else {
            document.getElementById('inputOther').style.display = 'none';
        }
    })

})
