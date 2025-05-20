// 计算并设置header-inner的位置
function adjustHeaderInnerPosition() {
  // 只在移动端视口下调整
  if (window.innerWidth > 479) return;
  
  const headerInner = document.getElementById('header-inner');
  if (!headerInner) return;
  
  // 获取header-inner的高度
  const headerInnerHeight = headerInner.getBoundingClientRect().height;
  
  // 获取header的高度
  const header = document.getElementById('header');
  if (!header) return;
  const headerHeight = header.getBoundingClientRect().height;
  
  // 计算偏移量，使header-inner底部与banner底部对齐
  // 我们需要将header-inner向下移动，使其底部与header底部对齐
  const offset = headerHeight - headerInnerHeight - 100; // 减去20px的边距
  
  // 设置CSS变量
  headerInner.style.setProperty('--header-inner-offset', Math.max(0, offset) + 'px');
  
  console.log('Header height:', headerHeight);
  console.log('Header inner height:', headerInnerHeight);
  console.log('Offset applied:', Math.max(0, offset));
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
  // 初始调整
  setTimeout(adjustHeaderInnerPosition, 100); // 延迟一点执行，确保DOM完全渲染
  
  // 窗口大小改变时重新调整
  window.addEventListener('resize', adjustHeaderInnerPosition);
  
  // 图片加载可能会改变布局，所以在所有图片加载后再次调整
  window.addEventListener('load', adjustHeaderInnerPosition);
}); 