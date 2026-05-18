function moveBackdrop(target) {
    if (!target) return;
    const { offsetLeft, offsetWidth } = target;
    $backdrop.style.left = `${offsetLeft}px`;
    $backdrop.style.width = `${offsetWidth}px`;
}
