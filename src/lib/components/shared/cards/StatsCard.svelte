<script lang="ts">
    export type SkillCardProps = {
        label: string;
        description: string;
    }

    let { label, description }: SkillCardProps = $props();
</script>

<div class="group border border-border bg-surface text-shadow-surface-foreground p-4 rounded-md transition-all duration-300 hover:border-primary-hover hover:bg-primary hover:-translate-y-0.5">
    <div class="absolute bottom-0 left-0 h-0.75 w-0 bg-primary-hover transition-all duration-400 group-hover:w-full"></div>
    <div class="font-display font-black text-4xl md:text-5xl leading-none group-hover:text-primary-foreground">{label}</div>
    <div class="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground mt-1 group-hover:text-primary-foreground">{description}</div>
</div>