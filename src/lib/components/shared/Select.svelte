<script lang="ts" generics="T">
    import { cn } from 'tailwind-variants';
    import Button from '$lib/components/shared/Button.svelte';
    import { clickOutside } from '$lib/actions/clickOutside';

    interface SelectOption<T> {
        value: T;
        label: string;
    }

    type SelectProps = {
        options: SelectOption<T>[];
        value: T;
        onchange: (value: T) => void;
        class?: string;
    };

    let { options, value, onchange, class: className }: SelectProps = $props();

    let open = $state(false);
</script>

<div use:clickOutside={() => (open = false)} class={cn("relative", className)}>
    <Button variant="outline" size="sm" onclick={() => (open = !open)} aria-expanded={open}>
        {options.find(o => o.value === value)?.label ?? ''}
    </Button>

    {#if open}
        <div class="absolute mt-1 flex flex-col rounded-lg border border-border bg-surface shadow-md overflow-hidden z-50">
            {#each options as opt}
                <button
                    onclick={() => { onchange(opt.value); open = false; }}
                    class={cn(
                        "px-3 py-3 text-xs font-medium tracking-wider text-muted hover:bg-surface-hover transition-colors",
                        value === opt.value && "text-accent font-bold dark:text-primary"
                    )}
                >
                    {opt.label}
                </button>
            {/each}
        </div>
    {/if}
</div>
