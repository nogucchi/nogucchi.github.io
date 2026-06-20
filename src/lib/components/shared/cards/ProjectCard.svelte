<script lang="ts">
    import { ArrowRightIcon } from "$lib/icons/index";
    import { mode } from "mode-watcher";

    type ProjectCardProps = {
        num: string;
        name: string;
        skills: string;
        href: string;
        preview: string;
    }

    let { num, name, skills, href, preview }: ProjectCardProps = $props();

    let previewVisible = $state(false);
    let previewSrc = $state('');
    let previewX = $state(0);
    let previewY = $state(0);

    function onMouseEnter(src: string) {
        if (window.innerWidth < 1024) return;
        previewSrc = src;
        previewVisible = true;
    }

    function onMouseMove(e: MouseEvent) {
        previewX = e.clientX + 24;
        previewY = e.clientY - 120;
    }

    function onMouseLeave() {
        previewVisible = false;
    }
</script>

<a
        {href}
        target="_blank"
        rel="noopener noreferrer"
        class="group grid grid-cols-[60px_1fr_auto] lg:grid-cols-[80px_1fr_200px_60px] items-center py-6 pl-3 pr-5 lg:px-5 border-b border-border no-underline text-foreground-accent transition-all duration-300 hover:bg-inverse hover:text-inverse-foreground-accent hover:pl-7 {mode.current === 'dark' ? 'hover:bg-transparent' : ''}"
        onmouseenter={() => onMouseEnter(preview)}
        onmousemove={onMouseMove}
        onmouseleave={onMouseLeave}
>
    <span class="font-mono text-xs text-foreground-muted tracking-wide group-hover:text-primary transition-colors">{num}</span>
    <span class="font-display font-black text-project uppercase">{name}</span>
    <span class="hidden lg:block font-mono text-[10px] uppercase tracking-wide text-foreground-neutral group-hover:text-inverse-foreground-neutral transition-colors">{skills}</span>
    <ArrowRightIcon class="w-5 h-5 stroke-foreground-muted -rotate-45 group-hover:rotate-0 group-hover:text-primary transition-all duration-300"/>
</a>

{#if previewVisible && previewSrc}
    <div
        class="fixed z-50 pointer-events-none rounded-lg overflow-hidden shadow-2xl border border-border"
        style="left: {previewX}px; top: {previewY}px; width: 280px; height: 180px;"
    >
        <img src={previewSrc} alt={name} class="w-full h-full object-cover" />
    </div>
{/if}
