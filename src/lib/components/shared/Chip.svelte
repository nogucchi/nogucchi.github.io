<script lang="ts" module>
    import { tv, cn, type VariantProps } from "tailwind-variants";

    const chipVariants = tv({
        base: "inline-flex items-center justify-center w-fit whitespace-nowrap rounded-full text-xs font-semibold transition-all select-none",
        variants: {
            variant: {
                default: "bg-inverse text-inverse-foreground hover:bg-inverse/70",
                outline: "bg-surface hover:bg-surface-hover border border-border text-surface-foreground",
                primary: "bg-primary text-primary-foreground hover:bg-primary-hover",
            },
            size: {
                sm: "px-4 py-2",
                default: "px-5 py-1.5 text-sm",
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        }
    });

    export type ChipVariant = VariantProps<typeof chipVariants>["variant"];
    export type ChipSize = VariantProps<typeof chipVariants>["size"];

    export type ChipProps = {
        variant?: ChipVariant;
        size?: ChipSize;
        class?: string;
        label: string;
    };
</script>

<script lang="ts">
    let { variant, size, class: className, label }: ChipProps = $props();
</script>

<div class={cn(chipVariants({ variant, size }), className)}>{label}</div>
