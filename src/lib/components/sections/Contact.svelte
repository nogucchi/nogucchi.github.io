<script lang="ts">
    import { Button, SectionTitle } from "$lib/components";
    import { t } from "$lib/i18n/index.svelte";
    import ContactLinksButton from "$lib/components/shared/ContactLinksButton.svelte";
    import { mode } from "mode-watcher";
    import { ArrowRightIcon } from "$lib/icons";
    import { reveal } from "$lib/actions/reveal";

    const socials = [
        { label: 'GitHub', handle: '/nogucchi', href: 'https://github.com/nogucchi'},
        { label: 'Linkedin', handle: '/in/mariana-noguti', href: 'https://www.linkedin.com/in/mariana-noguti/'},
        { label: 'Behance', handle: '/nogucchi', href: 'https://www.behance.net/nogucchi'},
        { label: 'Email', handle: 'mahnoguti@gmail.com', href: 'mailto:mahnoguti@gmail.com'},
    ]

</script>

<section id="contact" class=" py-10 lg:py-24 {mode.current === 'dark' ? 'bg-transparent' : 'bg-inverse'}">
    <div class="flex flex-col gap-4 container-layout  mb-2">
        <SectionTitle number="02" title={t('contact.title')} inverseBg={mode.current === 'light'} />
        <div class="flex flex-col gap-6 mx-8 lg:grid lg:grid-cols-2">
            <div use:reveal class="flex flex-col gap-8">
                <p class="font-body text-inverse-foreground-muted">{t('contact.text')}</p>
                <Button href="mailto:mahnoguti@gmail.com" variant="primary" size="lg" class="group rounded-none">
                    {t('contact.cta')}
                    <ArrowRightIcon class="w-5 h-5 stroke-foreground-muted -rotate-45 group-hover:rotate-0 transition-all duration-300"/>
                </Button>
            </div>
            <div use:reveal class="flex flex-col gap-1">
                {#each socials as social}
                    <ContactLinksButton label={social.label} handle={social.handle} href={social.href}/>
                {/each}
            </div>
        </div>
    </div>
</section>