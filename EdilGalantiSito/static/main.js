var typed;
var cont=0;
var width = screen.width;
var height = screen.height;

const possible_callers = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth']

function showDescription(caller)
{
    console.log(caller);
    switch(caller)
    {
        default:
            break;
    }
}

function VisuallyHiddenToggler(caller)
{
    // typed = new Typed('#'+caller+'ExpandElement');

    // console.log(caller+'ExpandElement');
    // for (var i = 0; i < possible_callers.length; i++)
    // {
    //     document.getElementById(possible_callers[i] + 'ExpandElement').innerHTML = '';
    //     typed.destroy();
    // }
    cont+=1;

    // for (var i = 0; i < possible_callers.length; i++)
    //     if(document.getElementById(possible_callers[i] + 'ExpandElementContainer').style.width == '90%')
    //         document.getElementById(possible_callers[i] + 'ExpandElementContainer').style.width = '30%';
    
    
    for(var i=0; i<possible_callers.length; i++)
    {
        if(possible_callers[i] != caller)
        document.getElementById(possible_callers[i]+'ExpandElementContainer').classList.toggle('visually-hidden');
        else
        {
            document.getElementById(caller + 'ExpandElement').classList.toggle('visually-hidden');
            document.getElementById(caller + 'ExpandElementContainer').style.width = '90%';
        }
    }

    for (var i = 0; i < possible_callers.length; i++)
        if (document.getElementById(possible_callers[i] + 'ExpandElementContainer').style.width == '90%' && cont%2==0 && screen.width>=1000)
            document.getElementById(possible_callers[i] + 'ExpandElementContainer').style.width = '30%';
        else if(screen.width<=1000)
            document.getElementById(possible_callers[i] + 'ExpandElementContainer').style.width = '100%';

    

    // typed = new Typed('#secondExpandElement', 
    // {
    //     strings: ['Portiamo nuova vita al tuo edificio con maestria e cura dei dettagli. Dalla pulizia delle tegole alla riparazione delle fondamenta, assicuriamo uno spazio solido e affidabile che protegge la tua casa mantenendone lo stile e assicurandone sicurezza.'],
    //     typeSpeed: 10,
    // });
    
}   

function initMap()
{
    var map = L.map('map').setView([43.669781, 12.852502], 13);

    var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });
    osm.addTo(map);

    var marker = L.marker([43.669781, 12.852502]);
    marker.addTo(map);

    marker.bindPopup("Vieni a trovarci qui!!<br>Via Ada Negri, 31 - Fossombrone PU").openPopup();
}


AOS.init();
initMap();
