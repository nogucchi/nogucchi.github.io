<script lang="ts">
    import { t } from "$lib/i18n/index.svelte";
    import { Chip, SectionTitle } from "$lib/components";

    import type { ChipVariant } from "$lib/components/shared/Chip.svelte";
    import { reveal } from "$lib/actions/reveal";
    import StatsCard from "$lib/components/shared/cards/StatsCard.svelte";
    import maruImg from "$lib/assets/images/maru.jpg";
    import niroImg from "$lib/assets/images/niro.jpg";
    import morganaImg from "$lib/assets/images/morgana.jpg";

    const skills: { label: string; variant: ChipVariant }[] = [
        { label: "Svelte", variant: "primary" },
        { label: "Typescript", variant: "primary" },
        { label: "React", variant: "primary" },
        { label: "Next.js", variant: "outline" },
        { label: "Node.js", variant: "outline" },
        { label: "Tailwind CSS", variant: "outline" },
        { label: "Accessibility", variant: "outline" },
        { label: "Design Systems", variant: "outline" },
        { label: "HTML/CSS", variant: "outline" },
        { label: "JavaScript", variant: "outline" },
        { label: "User Research", variant: "outline" },
        { label: "Prototyping", variant: "outline" },
        { label: "Framer", variant: "outline" },
    ]

    const stats = [
        { label: "HCI", description: "Human Computer Interaction" },
        { label: "HCD", description: "Human Centered Design" },
        { label: "CODE", description: "Front-end development" },
    ]

    const petImages = [
        { name: "Maru", src: maruImg, altKey: "about.cats.maru" as const },
        { name: "Niro", src: niroImg, altKey: "about.cats.niro" as const },
        { name: "Morgana", src: morganaImg, altKey: "about.cats.morgana" as const },
    ]
</script>

<section id="about" class="py-10 lg:py-24">
    <div class="flex flex-col gap-4 container-layout">
        <SectionTitle number="01" title={t('about.title')} />
        <div class="grid gap-12 md:grid-cols-2 mx-8">
            <div use:reveal class="flex flex-col gap-5">
                <p class="text-default leading-[1.75] text-foreground max-w-lg">
                    {@html t('about.bio1')}
                </p>
                <p class="font-bold">{t('about.bio2_title')}</p>
                <p class="text-default leading-[1.75] text-foreground max-w-lg">
                    {@html t('about.bio2')}
                </p>
                <div class="grid grid-cols-2 gap-4">
                    {#each stats as stat}
                        <StatsCard label={stat.label} description={stat.description}/>
                    {/each}
                </div>

            </div>
            <div use:reveal class="flex flex-col gap-8 md:max-w-lg">
                <div class="flex flex-col gap-4">
                    <h3 class="uppercase font-bold text-xs text-muted-foreground">Toolkit</h3>
                    <ul class="flex flex-wrap gap-2 list-none p-0 m-0">
                        {#each skills as skill}
                            <li><Chip variant={skill.variant} size="sm" label={skill.label}/></li>
                        {/each}
                    </ul>
                </div>
                <div class="flex flex-col gap-4">
                    <h3 class="uppercase font-bold text-xs text-muted-foreground">Cats :)</h3>
                    <div class="flex flex-row gap-2">
                        {#each petImages as petImage}
                            <div class="group flex-1 aspect-2/3 transition-all duration-200 lg:hover:-translate-y-0.5">
                                <div class="relative w-full h-full border border-primary lg:border-border rounded-lg overflow-hidden transition-colors duration-200 lg:group-hover:border-primary">
                                    <img src={petImage.src} alt={t(petImage.altKey)} class="w-full h-full object-cover transition-all duration-200 lg:hover:scale-105 lg:grayscale lg:group-hover:filter-none" />
                                    <div class="absolute px-2 bottom-0 lg:-bottom-6 w-full h-fit font-mono transition-all duration-200 bg-primary lg:group-hover:bottom-0 text-primary-foreground">{petImage.name}</div>
                                </div>
                            </div>
                        {/each}
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>