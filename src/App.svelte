<script>
  import Router from 'svelte-spa-router'
  import routes from './routes'
  import Header from './Principal/header.svelte';
  if (window.location.hash !== '#/') {
    window.location.href = '?#' + window.location.hash.slice(1);
    }
</script>

<main>
  <Header/>
  <Router {routes}/>
</main>
