<script lang="ts" module>
    import {type VariantProps, tv, cn} from "tailwind-variants";
    import type { HTMLAnchorAttributes, HTMLButtonAttributes } from "svelte/elements";
    import type {Snippet} from "svelte";

    type WithElementRef<T> = T & { ref?: HTMLElement | null };

    const buttonVariants = tv({
        base: "focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 rounded-lg border border-transparent bg-clip-padding text-sm font-medium focus-visible:ring-3 active:not-aria-[haspopup]:translate-y-px aria-invalid:ring-3 [&_svg:not([class*='size-'])]:size-6 group/button inline-flex shrink-0 items-center justify-center whitespace-nowrap transition-all outline-none select-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        variants: {
            variant: {
                default: "bg-inverse text-inverse-foreground hover:bg-inverse/70",
                outline: "border border-border bg-surface text-foreground hover:bg-surface-hover",
                ghost: "text-muted hover:text-foreground",
                primary: "bg-primary text-primary-foreground hover:bg-primary-hover",
            },
            size: {
                sm: "h-9 rounded-md px-3 gap-1.5 has-[svg:first-child]:pl-2 has-[svg:last-child]:pr-2",
                default: "h-10 px-4 gap-2 has-[svg:first-child]:pl-2 has-[svg:last-child]:pr-2",
                lg: "h-11 rounded-md px-4 gap-2 text-md",
                icon: "w-10 h-10",
                "icon-sm": "w-9 h-9",
                "icon-lg": "w-11 h-11",
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        }
    })

    export type buttonVariant = VariantProps<typeof buttonVariants>["variant"];
    export type buttonSize = VariantProps<typeof buttonVariants>["size"];

    export type ButtonProps = WithElementRef<HTMLButtonAttributes> &
        WithElementRef<HTMLAnchorAttributes> & {
            variant?: buttonVariant;
            size?: buttonSize;
            class?: string;
            children?: Snippet;
            leading?: Snippet;
            trailing?: Snippet;
        };
</script>

<script lang="ts">
    let { variant, size, href, class: className, children, leading, trailing, ref = null, ...restProps }: ButtonProps = $props();
</script>

{#snippet content()}
    {#if leading}
        <span data-icon="inline-start">{@render leading()}</span>
    {/if}
    {@render children?.()}
    {#if trailing}
        <span data-icon="inline-end">{@render trailing()}</span>
    {/if}
{/snippet}

{#if href}
    <a bind:this={ref} {href} class={cn(buttonVariants({ variant, size }), className)} {...restProps}>
        {@render content()}
    </a>
{:else}
    <button bind:this={ref} class={cn(buttonVariants({ variant, size }), className)} {...restProps}>
        {@render content()}
    </button>
{/if}
