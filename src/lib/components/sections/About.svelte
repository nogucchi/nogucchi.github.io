<script lang="ts">
    import { t } from "$lib/i18n/index.svelte";
    import { Chip, SectionTitle } from "$lib/components";

    import type { ChipVariant } from "$lib/components/shared/Chip.svelte";
    import { reveal } from "$lib/actions/reveal";
    import StatsCard from "$lib/components/shared/cards/StatsCard.svelte";

    const skills: { label: string; variant: ChipVariant }[] = [
        { label: "Svelte", variant: "primary" },
        { label: "React", variant: "primary" },
        { label: "Tailwind CSS", variant: "outline" },
        { label: "Framer", variant: "outline" },
        { label: "Design Systems", variant: "outline" },
        { label: "HTML/CSS", variant: "outline" },
        { label: "JavaScript", variant: "outline" },
        { label: "User Research", variant: "outline" },
        { label: "Accessibility", variant: "outline" },
        { label: "Prototyping", variant: "outline" },
    ]

    const stats = [
        { label: "HCI", description: "Human Computer Interaction" },
        { label: "HCI", description: "Human Computer Interaction" },
        { label: "HCI", description: "Human Computer Interaction" },
    ]
</script>

<section id="about" class="py-10 lg:py-24">
    <div class="flex flex-col gap-4 container-layout">
        <SectionTitle number="01" title={t('about.title')} />
        <div class="grid gap-12 md:grid-cols-2 mx-8 my-4">
            <div use:reveal class="flex flex-col gap-5">
                <p class="text-[17px] leading-[1.75] text-foreground max-w-lg">
                    {@html t('about.bio1')}
                </p>
                <p class="text-[17px] leading-[1.75] text-foreground max-w-lg">
                    {@html t('about.bio1')}
                </p>
                <div class="grid grid-cols-2 gap-4">
                    {#each stats as stat}
                        <StatsCard label={stat.label} description={stat.description}/>
                    {/each}
                </div>

            </div>
            <div use:reveal class="flex flex-col gap-4 md:max-w-lg">
                <h3 class="uppercase font-bold text-xs text-muted-foreground">Toolkit</h3>
                <div class="flex flex-wrap gap-2">
                    {#each skills as skill}
                        <Chip variant={skill.variant} size="sm" label={skill.label}/>
                    {/each}
                </div>
            </div>
        </div>
    </div>
</section>