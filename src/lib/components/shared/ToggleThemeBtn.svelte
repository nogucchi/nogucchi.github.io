<script lang="ts">
    import { SunIcon, MoonIcon } from "$lib/icons/index"
    import { toggleMode } from "mode-watcher";
    import Button from "$lib/components/shared/Button.svelte";
</script>

<Button onclick={toggleMode} variant="outline" size="icon-sm">
    <SunIcon class="scale-100 rotate-0 transition-all! dark:scale-0 dark:-rotate-90"/>
    <MoonIcon class="absolute scale-0 rotate-90 transition-all! dark:scale-100 dark:rotate-0"/>
    <span class="sr-only">Toggle theme</span>
</Button>