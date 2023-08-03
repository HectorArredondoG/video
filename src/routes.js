import Inicio from './Principal/Inicio.svelte'
import Nintendo from './Principal/Nintendo.svelte'
import Noticias from './Principal/Noticias.svelte'
import Ps from './Principal/Ps.svelte'
import Xbox from './Principal/Xbox.svelte'


//Juegos
import breath from './Principal/breath.svelte'
import crossing from './Principal/crossing.svelte'
import elder from './Principal/elder.svelte'
import forza from './Principal/forza.svelte'
import mario_kart from './Principal/mario_kart.svelte'
import odyssey from './Principal/odyssey.svelte'
import persona5 from './Principal/persona5.svelte'
import ragnarok from './Principal/ragnarok.svelte'
import red from './Principal/red.svelte'
import sekiro from './Principal/sekiro.svelte'
import smash from './Principal/smash.svelte'
import fire from './Principal/fire.svelte'
import the_last from './Principal/the_last.svelte'
import halo from './Principal/Halo.svelte'
import gears from './Principal/Gears.svelte'

const routes = {
    '/':Inicio,
    '/Nintendo':Nintendo,
    '/Noticias':Noticias,
    '/Ps':Ps,

    //Juegos
    '/breath':breath,
    '/crossing':crossing,
    '/elder':elder,
    '/forza':forza,
    '/Xbox':Xbox,
    '/mario_kart':mario_kart,
    '/odyssey':odyssey,
    '/persona5':persona5,
    '/ragnarok':ragnarok,
    '/red':red,
    '/sekiro':sekiro,
    '/smash':smash,
    '/fire':fire,
    '/the_last':the_last,
    '/halo':halo,
    '/gears':gears
    
}

export default routes
