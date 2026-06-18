export function clickOutside(node: HTMLElement, onOutside: () => void) {
    function handler(e: MouseEvent) {
        if (!node.contains(e.target as Node)) {
            onOutside();
        }
    }

    window.addEventListener('click', handler, true);

    return {
        destroy() {
            window.removeEventListener('click', handler, true);
        }
    };
}
