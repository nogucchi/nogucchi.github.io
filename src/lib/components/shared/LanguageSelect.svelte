<script lang="ts">
    import { language } from '$lib/i18n/index.svelte';
    import type { Locale } from '$lib/i18n/index.svelte';
    import Select from '$lib/components/shared/Select.svelte';

    const locales = [
        { value: 'en' as Locale, label: 'EN' },
        { value: 'pt-br' as Locale, label: 'PT' },
    ];
</script>

<Select
    options={locales}
    value={language.current}
    onchange={(locale) => language.set(locale)}
/>
