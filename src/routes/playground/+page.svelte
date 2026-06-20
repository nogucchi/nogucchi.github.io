<script lang="ts">
    import {Button, Chip} from "$lib/components";
    import { SunIcon } from "$lib/icons";
</script>

<svelte:head>
    <title>Playground</title>
</svelte:head>

<main id="playground" class="flex flex-col items-center justify-start gap-4 p-4">
    <div class="flex flex-col gap-2 container-layout">
        <h1 class="text-2xl font-bold">Buttons</h1>
        <div class="flex flex-col gap-2">
            <h2 class="text-xl font-bold">small</h2>
            <div class="flex flex-col gap-4">
                <div class="flex flex-col gap-1">
                    <p class="text-sm font-medium">no icon</p>
                    <div class="flex flex-wrap gap-1">
                        <Button href="#contact" size="sm" variant="default">Default</Button>
                        <Button href="#contact" size="sm" variant="primary">Primary</Button>
                        <Button href="#contact" size="sm" variant="outline">Outline</Button>
                    </div>
                </div>
                <div class="flex flex-col gap-1">
                    <p class="text-sm font-medium">with icon</p>
                    <div class="flex flex-wrap gap-1">
                        <Button href="#contact" size="sm" variant="default">
                            <SunIcon/>
                            <span>this is sm-primary</span>
                        </Button>
                        <Button href="#contact" size="sm" variant="primary">
                            <SunIcon/>
                            <span>this is sm-primary</span>
                        </Button>
                        <Button href="#contact" size="sm" variant="outline">
                            <SunIcon/>
                            this is sm-primary
                        </Button>
                    </div>
                </div>
                <div class="flex flex-col gap-1">
                    <p class="text-sm font-medium">icon only</p>
                    <div class="flex flex-wrap gap-1">
                        <Button href="#contact" size="icon-sm" variant="default">
                            <SunIcon/>
                        </Button>
                        <Button href="#contact" size="icon-sm" variant="primary">
                            <SunIcon/>
                        </Button>
                        <Button href="#contact" size="icon-sm" variant="outline">
                            <SunIcon/>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="flex flex-col gap-2 container-layout">
        <h1 class="text-2xl font-bold">Chips</h1>
        <div class="flex flex-col gap-2">
            <h2 class="text-xl font-bold">small</h2>
            <div class="flex flex-row gap-1">
                <Chip variant="default" size="sm" label="Chip"/>
                <Chip variant="outline" size="sm" label="Chip"/>
                <Chip variant="primary" size="sm" label="Chip"/>
            </div>
        </div>
        <div class="flex flex-col gap-2">
            <h2 class="text-xl font-bold">default</h2>
            <div class="flex flex-row gap-1">
                <Chip variant="default" size="default" label="Chip"/>
                <Chip variant="outline" size="default" label="Chip"/>
                <Chip variant="primary" size="default" label="Chip"/>
            </div>
        </div>
    </div>
</main>
