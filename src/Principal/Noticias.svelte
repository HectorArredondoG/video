<script>
    let noticias = [
        {
            titulo: "Jujutsu Kaisen en Fortnite",
            descripcion: "El día de hoy Fortnite dio a conocer su próxima colaboración",
            imagen: "./statics/juju.png",
        },
        {
            
            titulo: "Solución para el drift de tu control",
            descripcion: "No hay we",
            imagen: "./statics/gatosorpresa.png",
        },
        {
            titulo: "Ya no se me ocurrió",
            descripcion: "ji ji ji ja",
            imagen: "./statics/jiji.png",
        },
    ];
</script>

<main>
    {#each noticias as noticia}
        <article>
            <h2>{noticia.titulo}</h2>
            <img src={noticia.imagen} alt={noticia.titulo} />
            <p>{noticia.descripcion}</p>
        </article>
    {/each}
</main>

<style>
    main {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
    }

    article {
        margin-bottom: 30px;
        border: 1px solid #ccc;
        padding: 10px;
        border-radius: 8px;
    }

    h2 {
        margin-top: 0;
    }

    img {
        max-width: 100%;
        border-radius: 8px;
    }
</style>
