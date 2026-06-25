<script lang="ts">
import {mode} from "mode-watcher";

type ContactLinksButtonProps = {
    href: string;
    handle: string;
    label: string;
}

let { href, handle, label }: ContactLinksButtonProps = $props();
</script>

<a {href} target="_blank" rel="noopener noreferrer" class="group relative flex justify-between items-center text-inverse-foreground-accent py-4 pl-3 pr-5 lg:px-5 border-b border-border-inverse no-underline transition-all duration-300 hover:pl-7">
    <span class="uppercase font-display font-bold text-2xl">{label}</span>
    <span class="text-xs lg:text-sm text-inverse-foreground-muted duration-300 group-hover:text-inverse-foreground-accent">{handle}</span>
    <div class="absolute bottom-0 left-0 h-0.75 w-0 bg-primary-hover transition-all duration-400 group-hover:w-full"></div>
</a>