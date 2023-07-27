import Inicio from './Principal/Inicio.svelte'
import Nintendo from './Principal/Nintendo.svelte'
import Noticias from './Principal/Noticias.svelte'
import Ps from './Principal/Ps.svelte'
import Videojuegos from './Principal/Videojuegos.svelte'
import Xbox from './Principal/Xbox.svelte'

const routes = {
    '/':Inicio,
    '/Nintendo':Nintendo,
    '/Noticias':Noticias,
    '/Ps':Ps,
    '/Videojuegos':Videojuegos,
    '/Xbox':Xbox,
    
}

export default routes
