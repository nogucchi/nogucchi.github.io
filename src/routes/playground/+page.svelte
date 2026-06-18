<script lang="ts">
    import Button from "$lib/components/shared/Button.svelte";
    import { SunIcon } from "$lib/icons";
</script>

<svelte:head>
    <title>Playground</title>
</svelte:head>

<main class="w-auto h-screen flex flex-col items-center justify-start gap-4 mx-6 pt-24">
    <div class="flex flex-col gap-2">
        <h1 class="text-2xl font-bold">Buttons</h1>
        <div class="flex flex-col gap-2">
            <h2 class="text-xl font-bold">small</h2>
            <div class="flex flex-col gap-4">
                <div class="flex flex-col gap-1">
                    <p class="text-sm font-medium">no icon</p>
                    <div class="flex flex-wrap gap-2">
                        <Button href="#contact" size="sm" variant="default">Default</Button>
                        <Button href="#contact" size="sm" variant="primary">Primary</Button>
                        <Button href="#contact" size="sm" variant="outline">Outline</Button>
                    </div>
                </div>
                <div class="flex flex-col gap-1">
                    <p class="text-sm font-medium">with icon</p>
                    <div class="flex flex-wrap gap-2">
                        <Button href="#contact" size="sm" variant="default">
                            <span data-icon="inline-start"><SunIcon/></span>
                            <span>this is sm-primary</span>
                        </Button>
                        <Button href="#contact" size="sm" variant="primary">
                            <span data-icon="inline-start"><SunIcon/></span>
                            <span>this is sm-primary</span>
                        </Button>
                        <Button href="#contact" size="sm" variant="outline">
                            <span data-icon="inline-start"><SunIcon/></span>
                            <span>this is sm-primary</span>
                        </Button>
                    </div>
                </div>
                <div class="flex flex-col gap-1">
                    <p class="text-sm font-medium">icon only</p>
                    <div class="flex flex-wrap gap-1">
                        <Button href="#contact" size="iconSm" variant="default">
                            <SunIcon/>
                        </Button>
                        <Button href="#contact" size="iconSm" variant="primary">
                            <SunIcon/>
                        </Button>
                        <Button href="#contact" size="iconSm" variant="outline">
                            <SunIcon/>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>