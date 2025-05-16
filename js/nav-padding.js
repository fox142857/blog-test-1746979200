document.addEventListener('DOMContentLoaded', function() {
  // 获取所有导航链接
  const navLinks = document.querySelectorAll('#main-nav .main-nav-link');
  if (navLinks.length === 0) return;

  // 第一次遍历：测量所有链接的宽度，找到最大的那个
  let maxWidth = 0;
  navLinks.forEach(link => {
    const rect = link.getBoundingClientRect();
    if (rect.width > maxWidth) {
      maxWidth = rect.width;
    }
  });

  // 第二次遍历：为每个链接计算并设置左右 padding
  navLinks.forEach(link => {
    const currWidth = link.getBoundingClientRect().width;
    const gap = maxWidth - currWidth;          // 需要补齐的总宽度
    const pad = Math.max(0, gap / 2);          // 每侧补齐的一半（px）
    link.style.paddingLeft  = `${pad}px`;
    link.style.paddingRight = `${pad}px`;
  });
});
