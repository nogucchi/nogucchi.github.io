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
    let triggerId = $state(`select-trigger-${Math.random().toString(36).slice(2)}`);
    let listboxId = $state(`select-listbox-${Math.random().toString(36).slice(2)}`);

    function getOptionEls() {
        return Array.from(document.getElementById(listboxId)?.querySelectorAll<HTMLElement>('[role="option"]') ?? []);
    }

    function getTriggerEl() {
        return document.getElementById(triggerId) as HTMLElement | null;
    }

    function handleTriggerKeydown(e: KeyboardEvent) {
        if (e.key === 'Escape') {
            open = false;
        }
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            e.preventDefault();
            if (!open) open = true;
            setTimeout(() => {
                const opts = getOptionEls();
                if (!opts.length) return;
                (e.key === 'ArrowDown' ? opts[0] : opts[opts.length - 1]).focus();
            }, 0);
        }
    }

    function handleOptionKeydown(e: KeyboardEvent, index: number) {
        if (e.key === 'Escape') {
            e.preventDefault();
            open = false;
            getTriggerEl()?.focus();
        }
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            const opts = getOptionEls();
            opts[index + 1]?.focus();
        }
        if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (index === 0) {
                open = false;
                getTriggerEl()?.focus();
            } else {
                getOptionEls()[index - 1]?.focus();
            }
        }
    }
</script>

<div use:clickOutside={() => (open = false)} class={cn("relative", className)}>
    <Button
        id={triggerId}
        variant="outline"
        size="sm"
        onclick={() => (open = !open)}
        onkeydown={handleTriggerKeydown}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listboxId}
        aria-label="Select language"
    >
        {options.find(o => o.value === value)?.label ?? ''}
    </Button>

    {#if open}
        <div
            id={listboxId}
            role="listbox"
            tabindex="-1"
            aria-labelledby={triggerId}
            class="absolute mt-1 flex flex-col rounded-lg border border-border bg-surface shadow-md overflow-hidden z-50"
        >
            {#each options as opt, i}
                <button
                    role="option"
                    aria-selected={value === opt.value}
                    onclick={() => { onchange(opt.value); open = false; getTriggerEl()?.focus(); }}
                    onkeydown={(e) => handleOptionKeydown(e, i)}
                    class={cn(
                        "px-3 py-3 text-xs font-medium tracking-wider text-muted-foreground hover:bg-surface-hover transition-colors",
                        value === opt.value && "text-accent font-bold dark:text-primary"
                    )}
                >
                    {opt.label}
                </button>
            {/each}
        </div>
    {/if}
</div>
