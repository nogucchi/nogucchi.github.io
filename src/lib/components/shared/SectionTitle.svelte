<script lang="ts">
   import { reveal } from "$lib/actions/reveal";

   type SectionTitleProps = {
       title: string;
       number: string;
   }

   let { title, number }: SectionTitleProps = $props();
</script>

<div use:reveal class="flex flex-col items-start gap-2 pb-4 border-b border-border mx-8">
    <div class="text-2xl font-black bg-primary text-primary-foreground pl-2 pr-8">#{number}</div>
    <h2 class="text-5xl font-black uppercase text-foreground">{title}</h2>
</div>