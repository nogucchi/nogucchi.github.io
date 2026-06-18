<script>
    import { t } from "$lib/i18n/index.svelte";

</script>

<div class="flex flex-col gap-2 container-layout px-6">
    <div class="flex flex-col gap-2">
        <p class="font-body text-4xl animate-slide-up ">{t('hero.greeting')}</p>
        <h1 class="font-display font-black uppercase text-[80px] lg:text-[128px] leading-[0.73] tracking-[-0.03em] relative z-10">
            <span class="inline-block animate-slide-up text-foreground-accent">Noguti</span>
        </h1>
    </div>

</div>