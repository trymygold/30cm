for (let r = 0; r < rows; r++) {
  for (let c = 0; c < cols; c++) {
    const tile = document.createElement('a-plane');
    // ... (your attribute settings for width, height, position)

    // Define the function right here so it "captures" this specific tile
    const removeTile = () => {
      // Prevent double-triggering if already animating
      if (tile.getAttribute('animation')) return; 

      tile.setAttribute('animation', 'property: scale; to: 0 0 0; dur: 300; easing: easeInBack');
      
      setTimeout(() => {
        if (tile.parentNode) {
          tile.parentNode.removeChild(tile);
        }
      }, 300);
    };

    tile.addEventListener('mouseenter', removeTile);
    tile.addEventListener('click', removeTile);

    scratchLayer.appendChild(tile);
  }
}