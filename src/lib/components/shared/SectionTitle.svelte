<script lang="ts">
   import { reveal } from "$lib/actions/reveal";

   type SectionTitleProps = {
       title: string;
       number: string;
       inverseBg?: boolean;
   }

   let { title, number, inverseBg }: SectionTitleProps = $props();
</script>

<div use:reveal class="flex flex-col items-start gap-2 pb-4 mx-8">
    <div class="text-2xl font-black bg-primary text-primary-foreground pl-2 pr-8">#{number}</div>
    <div class="flex flex-col items-start w-full gap-6">
        <h2 class="text-5xl font-black uppercase {inverseBg ? 'text-inverse-foreground' : 'text-foreground'}">{title}</h2>
        <div class="w-full h-px {inverseBg ? 'bg-border-inverse' : 'bg-border'}"></div>
    </div>
</div>