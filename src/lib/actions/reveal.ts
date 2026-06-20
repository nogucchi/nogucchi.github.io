export function reveal(node: HTMLElement) {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    node.style.opacity = "1";
                    node.style.transform = "translateY(0)";
                }
            });
        },
        { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );

    node.style.opacity = "0";
    node.style.transform = "translateY(30px)";
    node.style.transition = "all 0.8s cubic-bezier(0.16,1,0.3,1)";

    observer.observe(node);

    return {
        destroy() {
            observer.disconnect();
        },
    };
}