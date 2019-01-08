anime.timeline({loop: true}) 
  // Entra el texto
  .add({
    targets: '.anitext .word',
    scale: [14,1],
    opacity: [0,1],
    easing: "easeInQuart",
    duration: 800,
    // afecta a cada elemento por separado
    delay: function(el, i) {
      return 600 * i;
    }
  })
  // Entra la línea
  .add({
    targets: '.anitext .line',
    opacity: [0.5,1],
    scaleX: [0, 1],
    easing: "easeInOutExpo",
    duration: 700
  })
  // Sale todo 
  .add({
    targets: '.anitext',
    opacity: [1,0],
    duration: 4000,
    easing: "easeOutQuart",
    delay: 1000
  })

;