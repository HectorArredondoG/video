<script>
 import { push } from "svelte-spa-router";
</script>

<main>
<div>
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
            <img src="statics\nintendo.jpg" class="d-block w-100" alt="nintendo" id="nintendo" on:mousedown={()=> push('/Nintedo')}>
          </div>
          <div class="carousel-item">
            <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
            <img src="statics\play.jpg" class="d-block w-100" alt="play" id="play" on:mousedown={()=> push('/Ps')}>
          </div>
          <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
          <div class="carousel-item">
            <img src="statics\XboxLogo.jpg" class="d-block w-100" alt="xbox" id="xbox" on:mousedown={()=> push('/Xbox')}>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
</div>
</main>

<style>
#play{
    height:685px;
    width: 500px;
}
#xbox{
    height:685px;
    width: 500px;
}
#nintendo{
    height:685px;
    width: 500px;
}
</style>