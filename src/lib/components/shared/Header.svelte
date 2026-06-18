<script lang="ts">
import { t } from '$lib/i18n/index.svelte';
import ToggleThemeBtn from "$lib/components/shared/ToggleThemeBtn.svelte";
import Button from "$lib/components/shared/Button.svelte";

const navItems = $derived([
    {label: t('nav.about'), href: '#about'},
    {label: t('nav.projects'), href: '#projects'},
    {label: t('nav.process'), href: '#process'},
    {label: t('nav.contact'), href: '#contact'},
    {label: "Playground", href: "/playground"}
]);
</script>

<header class="fixed top-0 left-0 w-full h-16 backdrop-blur-md bg-background border-b border-border z-50 grid grid-cols-4 gap-4 px-8 lg:px-16">
    <a href="/" class="flex items-center gap-2">
        <span class="font-display font-black text-2xl tracking-[0.15em]">noguti</span>
        <span class="w-1.5 h-1.5 bg-primary rounded-sm"></span>
    </a>
    <nav class="col-span-2 flex items-center justify-center">
        {#each navItems as item}
            <Button href={item.href} variant="ghost" size="sm" class="lowercase">{item.label}</Button>
        {/each}
    </nav>
    <div class="flex items-center justify-end gap-2">
        <ToggleThemeBtn />
        <Button size="iconSm" variant="outline">

        </Button>
    </div>
</header>