function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export async function flipAnimation() {
    const grids = document.querySelectorAll(".grid-item.enabled");

    for (const grid of grids)
    {
        grid.style.animationPlayState = "running";
        await sleep(1000);
    }
}
