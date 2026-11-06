<script lang="ts" module>
    /** Um trecho de texto dentro de uma linha do fundo. */
    export type MarqueePart = { text: string; bold?: boolean };

    /** Uma linha animada do texto de fundo. */
    export type MarqueeLine = {
        /** Trechos que se repetem em loop (alterne `bold` para variar o peso). */
        parts: MarqueePart[];
        /** Duração de um ciclo completo, em segundos (menor = mais rápido). */
        duration: number;
        /** Atraso inicial negativo, em segundos, para desencontrar as linhas. */
        offset?: number;
        /** `true` faz a linha andar da esquerda para a direita. */
        reverse?: boolean;
    };

    /*
     * ✏️ TEXTO DE FUNDO EDITÁVEL
     * Cada item é uma linha com seu próprio texto e velocidade.
     * Rolam da direita para a esquerda em loop (use `reverse: true` para inverter).
     */
    export const defaultBgLines: MarqueeLine[] = [
        {
            parts: [{ text: "NOGUTI" }, { text: "NOGUTI" }, { text: "NOGUTI", bold: true }],
            duration: 180,
        },
        {
            parts: [{ text: "DESIGN" }, { text: "FRONT-END", bold: true }, { text: "UI/UX" }],
            duration: 220,
            reverse: true,
            offset: -60,
        },
        {
            parts: [{ text: "NOGUTI", bold: true }, { text: "NOGUTI" }, { text: "NOGUTI" }],
            duration: 150,
            offset: -30,
        },
    ];
</script>

<script lang="ts">
    import { t } from "$lib/i18n/index.svelte";
    import { Button } from "$lib/components/index";
    import { GithubIcon, LinkedinIcon, InstagramIcon } from "$lib/icons";
    import { mode } from "mode-watcher";
    import MariposaPng from "$lib/assets/images/mariposa-hero.png";
    import HeroX from "$lib/assets/images/hero-x.svg";

    let { bgLines = defaultBgLines }: { bgLines?: MarqueeLine[] } = $props();

    // Quantas vezes os trechos se repetem em cada metade da faixa,
    // para cobrir telas largas sem deixar buraco no loop.
    const REPEAT = 6;

    // ── Paralaxe com o mouse ──
    // Intensidade (em px) de cada camada; valores negativos andam ao contrário.
    const PARALLAX = { card: 14, x: 32, bg: -22 };
    const EASE = 0.08; // suavização (0–1, menor = mais suave)

    let px = $state(0); // posição atual suavizada, de -1 a 1
    let py = $state(0);
    let targetX = 0;
    let targetY = 0;
    let raf = 0;

    function canAnimate() {
        return (
            typeof window !== "undefined" &&
            !window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
            window.matchMedia("(pointer: fine)").matches
        );
    }

    function tick() {
        px += (targetX - px) * EASE;
        py += (targetY - py) * EASE;
        if (Math.abs(targetX - px) > 0.001 || Math.abs(targetY - py) > 0.001) {
            raf = requestAnimationFrame(tick);
        } else {
            px = targetX;
            py = targetY;
            raf = 0;
        }
    }

    function start() {
        if (!raf) raf = requestAnimationFrame(tick);
    }

    function onPointerMove(e: PointerEvent) {
        if (e.pointerType !== "mouse" || !canAnimate()) return;
        const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
        targetX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        targetY = ((e.clientY - rect.top) / rect.height) * 2 - 1;
        start();
    }

    function onPointerLeave() {
        targetX = 0;
        targetY = 0;
        start();
    }

    $effect(() => () => cancelAnimationFrame(raf));

    const shift = (amount: number) =>
        `transform: translate3d(${(px * amount).toFixed(2)}px, ${(py * amount).toFixed(2)}px, 0);`;
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<section aria-label="Hero" class="relative h-[calc(100svh-4rem)] min-h-[640px] overflow-hidden flex flex-col"
         onpointermove={onPointerMove}
         onpointerleave={onPointerLeave}>
    <!-- Título -->
    <div class="relative z-20 container-layout p-4 lg:p-6 flex flex-col gap-[15px] items-start">
        <p class="font-body font-normal text-3xl lg:text-5xl tracking-[-0.08em] text-foreground animate-slide-up">
            {t('hero.greeting')}
        </p>
        <h1 class="font-display font-black uppercase text-7xl md:text-8xl lg:text-[128px] leading-[0.73] tracking-[-0.04em] text-foreground">
            <span class="inline-block animate-slide-up">Noguti</span>
        </h1>
        <div class="flex items-center justify-center h-12 lg:h-14 px-4 rounded-[2px] bg-primary text-primary-foreground font-label font-bold uppercase text-sm md:text-lg lg:text-[22px] tracking-[2px] whitespace-pre opacity-0 animate-fade-in">{t('hero.role')}</div>
        <div class="flex items-center gap-3 opacity-0 animate-fade-in">
            <Button href="https://www.linkedin.com/in/mariana-noguti/" target="_blank" aria-label="LinkedIn (opens in new tab)" size="icon-lg" variant={mode.current === "dark" ? "outline" : "default"} class="rounded-[4px]">
                <LinkedinIcon aria-hidden="true" />
            </Button>
            <Button href="https://github.com/nogucchi" target="_blank" aria-label="GitHub (opens in new tab)" size="icon-lg" variant={mode.current === "dark" ? "outline" : "default"} class="rounded-[4px]">
                <GithubIcon aria-hidden="true" />
            </Button>
        </div>
    </div>

    <!-- Palco: imagem centralizada com o texto de fundo atrás -->
    <div class="relative flex-1 flex items-end justify-center pb-8 lg:absolute lg:inset-0 lg:items-center lg:pb-0">
        <div class="relative">
            <!-- Texto de fundo animado (largura total da tela) -->
            <div aria-hidden="true" class="absolute bottom-[15px] left-1/2 -translate-x-1/2 w-screen flex flex-col pointer-events-none select-none opacity-40 text-foreground" style={shift(PARALLAX.bg)}>
                {#each bgLines as line, i (i)}
                    <div class="overflow-hidden">
                        <div class="marquee-track flex w-max" style="--duration: {line.duration}s; --offset: {line.offset ?? 0}s; --direction: {line.reverse ? 'reverse' : 'normal'};">
                            {#each [0, 1] as half (half)}
                                <span class="flex shrink-0">
                                    {#each Array(REPEAT) as _, r (r)}
                                        {#each line.parts as part, p (p)}
                                            <span class="bg-text {part.bold ? 'font-bold' : 'font-light'}">{part.text}</span>
                                        {/each}
                                    {/each}
                                </span>
                            {/each}
                        </div>
                    </div>
                {/each}
            </div>

            <!-- Imagem -->
            <div class="relative z-10" style={shift(PARALLAX.card)}>
            <div class="relative w-[240px] h-[362px] lg:w-[348px] lg:h-[525px] bg-media border border-media-border overflow-hidden opacity-0 animate-fade-in">
                <img src={MariposaPng} alt={t('hero.illustrationAlt')} class="absolute left-1/2 -translate-x-1/2 top-[-21%] w-[224%] h-[187%] max-w-none object-cover pointer-events-none" />
                <Button href="https://www.instagram.com/piratezyte/" target="_blank" size="sm" variant="primary" class="absolute bottom-3 left-3 opacity-80 rounded-none z-10">
                    <InstagramIcon />
                    {t('hero.artBy')} @piratezyte
                </Button>
                <div class="absolute inset-0"
                     role="presentation"
                     oncontextmenu={(e) => e.preventDefault()}
                     ondragstart={(e) => e.preventDefault()}>
                </div>
            </div>
            </div>

            <!-- X decorativo -->
            <div class="absolute z-20 top-[-40px] right-[-26px] lg:top-[-58px] lg:right-[-38px] pointer-events-none" style={shift(PARALLAX.x)}>
                <img src={HeroX} alt="" aria-hidden="true" width="77.4139" height="82.7935" class="w-[54px] h-auto lg:w-[77.4139px] opacity-0 animate-fade-in-late" />
            </div>
        </div>
    </div>
</section>

<style>
    .bg-text {
        font-family: var(--font-display);
        font-size: clamp(64px, 9vw, 128px);
        line-height: 0.84;
        letter-spacing: -0.094em;
        white-space: nowrap;
    }

    .marquee-track {
        animation: marquee var(--duration) linear infinite;
        animation-delay: var(--offset);
        animation-direction: var(--direction);
        will-change: transform;
    }

    @keyframes marquee {
        from { transform: translateX(0); }
        to { transform: translateX(-50%); }
    }

    @media (prefers-reduced-motion: reduce) {
        .marquee-track { animation: none; }
    }
</style>
