<script lang="ts">
import { SectionTitle } from "$lib/components";
import ProjectCard from "$lib/components/shared/cards/ProjectCard.svelte";

// TODO(human): preencha seus projetos reais abaixo
const projects = [
    { num:"001", name: "Project 1", skills: "Svelte, Tailwind, Typescript", href: "", preview: "/mariposas.png" },
    { num:"001", name: "Project 1", skills: "Svelte, Tailwind, Typescript", href: "", preview: "/mariposas.png" },
    { num:"001", name: "Project 1", skills: "Svelte, Tailwind, Typescript", href: "", preview: "/mariposas.png" },
];

</script>

<section id="projects" class="w-full">
    <SectionTitle title="Projects" number="02" />
    <div class="flex flex-col mx-8 my-4">
        {#each projects as project}
            <ProjectCard num={project.num} name={project.name} skills={project.skills} href={project.href} preview={project.preview} />
        {/each}
    </div>
</section>
