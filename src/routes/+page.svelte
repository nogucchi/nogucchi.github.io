<script lang="ts">
    import { Hero, About, Projects } from "$lib/components";
</script>

<svelte:head>
    <title>Noguti</title>
    <meta name="description" content="Portfólio de Noguti — UI/UX Designer e Front-End Developer. Criando experiências digitais com propósito." />
</svelte:head>

<main class="w-full flex flex-col gap-8">
    <Hero />
    <About />
    <Projects />
</main>