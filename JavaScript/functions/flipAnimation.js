function sleep(ms)
{
    return new Promise(resolve => setTimeout(resolve, ms));
}


export async function flipAnimation()
{
    var grids = document.querySelectorAll(".grid-item.enabled");

    for (var grid of grids)
    {
        grid.style.animationPlayState = "running";

        await sleep(500);
    }
}
