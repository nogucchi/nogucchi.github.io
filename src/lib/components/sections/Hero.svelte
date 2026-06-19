<script lang="ts">
    import { t } from "$lib/i18n/index.svelte";
    import { Button } from "$lib/components/index";
    import { GithubIcon, LinkedinIcon } from "$lib/icons";
    import { mode } from 'mode-watcher';

</script>

<div class="h-[calc(100svh-4rem)] flex flex-col gap-4 container-layout p-2">
    <div class="flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
        <div class="flex flex-col gap-4 md:flex-row md:items-end">
            <div class="flex flex-col gap-2">
                <p class="font-body tracking-tighter text-2xl lg:text-4xl animate-slide-up">{t('hero.greeting')}</p>
                <h1 class="font-display font-black uppercase text-7xl md:text-8xl lg:text-[128px] leading-[0.73] tracking-[-0.03em] relative z-10">
                    <span class="inline-block animate-slide-up text-foreground-accent">Noguti</span>
                </h1>
            </div>
            <div class="py-2 px-4 w-fit min-h-11 uppercase font-bold tracking-wider bg-primary text-primary-foreground opacity-0 animate-fade-in">{t('hero.role')}</div>
        </div>

        <div class="flex flex-row gap-1 opacity-0 animate-fade-in">
            <Button href="https://github.com/nogucchi" target="_blank" size="icon-lg" variant={mode.current === "dark" ? 'outline' : 'default'}>
                <GithubIcon />
            </Button>
            <Button href="https://www.linkedin.com/in/mariana-noguti/" target="_blank" size="icon-lg" variant={mode.current === "dark" ? 'outline' : 'default'}>
                <LinkedinIcon />
            </Button>
        </div>
    </div>
    <div class="w-full h-full opacity-0 border {mode.current === 'dark' ? 'bg-background' : 'bg-inverse'} border-border overflow-hidden animate-fade-in">
        <img src="/mariposa-test.png" alt="hero" class="w-full h-full object-cover opacity-0 animate-fade-in-late" />
    </div>
</div>