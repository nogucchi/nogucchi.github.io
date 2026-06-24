<script lang="ts">
    import { t } from '$lib/i18n/index.svelte';
    import ToggleThemeBtn from "$lib/components/shared/ToggleThemeBtn.svelte";
    import Button from "$lib/components/shared/Button.svelte";
    import LanguageSelect from "$lib/components/shared/LanguageSelect.svelte";
    import { MenuIcon, XIcon } from "$lib/icons/index";
    import { onMount } from "svelte";

    const navItems = $derived([
        {label: t('nav.about'), href: '#about'},
        // {label: t('nav.projects'), href: '#projects'},
        {label: t('nav.contact'), href: '#contact'},
    ]);

    let menuOpen = $state(false);
    let activeSection = $state('');

    function toggleMenu() { menuOpen = !menuOpen; }
    function closeMenu() { menuOpen = false; }

    onMount(() => {
        const sections = document.querySelectorAll('section[id]');
        const onScroll = () => {
            let current = '';
            sections.forEach((s) => {
                if (scrollY >= (s as HTMLElement).offsetTop - 200) {
                    current = s.getAttribute('id') || '';
                }
            });
            activeSection = current;
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    });
</script>

<header class="flex items-center justify-center sticky top-0 left-0 w-full h-16 z-50 backdrop-blur-md bg-background border-b border-border">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 container-layout px-4 lg:px-8">
        <a href="/" class="flex items-center gap-2 ">
            <span class="font-display font-black text-2xl tracking-[0.15em]">noguti</span>
            <span class="w-1.5 h-1.5 bg-primary rounded-sm"></span>
        </a>

        <nav class="col-span-2 hidden md:flex items-center justify-center">
            {#each navItems as item}
                <Button
                    href={item.href}
                    variant="ghost"
                    size="sm"
                    class="lowercase {activeSection === item.href.slice(1) ? 'text-foreground' : 'text-muted-foreground'}"
                >{item.label}</Button>
            {/each}
        </nav>

        <div class="flex items-center justify-end gap-2">
            <div class="hidden md:flex md:items-center md:gap-2 ">
                <Button hidden href="/playground" variant="outline" class="uppercase text-xs">Playground</Button>
                <ToggleThemeBtn />
            </div>
            <LanguageSelect/>
            <span class="md:hidden">
                <Button onclick={toggleMenu} variant="outline" size="icon-sm" aria-label="Toggle menu">
                    <MenuIcon class="transition-all! {menuOpen ? 'scale-0 -rotate-45' : 'scale-100 rotate-0'}"/>
                    <XIcon class="absolute transition-all! {menuOpen ? 'scale-100 rotate-0' : 'scale-0 rotate-45'}"/>
                </Button>
            </span>
        </div>
    </div>
</header>

{#if menuOpen}
    <div class="fixed inset-0 top-16 z-40 bg-background border-t border-border flex flex-col p-6 gap-6 md:hidden">
        <nav class="flex flex-col gap-1">
            {#each navItems as item}
                <Button href={item.href} variant="ghost" size="lg" class="p-0 lowercase justify-start text-lg text-muted-foreground" onclick={closeMenu}>
                    {item.label}
                </Button>
            {/each}
        </nav>
        <div class="flex items-center gap-2 pt-4 border-t border-border">
            <ToggleThemeBtn />
            <Button href="/playground" variant="outline" class="uppercase text-xs" onclick={closeMenu}>Playground</Button>
        </div>
    </div>
{/if}