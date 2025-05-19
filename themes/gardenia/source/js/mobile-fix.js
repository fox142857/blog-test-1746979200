// 移动端页面加载优化脚本

// 添加页面加载类
document.documentElement.classList.add('js-loading');

// 页面完全加载后移除加载类
window.addEventListener('load', function() {
  document.documentElement.classList.remove('js-loading');
  document.documentElement.classList.add('js-loaded');
  
  // 修复背景图片
  var banner = document.getElementById('banner');
  if (banner) {
    banner.style.backgroundImage = "url('https://s2.loli.net/2025/05/12/lvRs7VKSpwTh5bA.jpg')";
  }
});

// 确保移动端视口正确设置
(function() {
  // 检测是否为移动设备
  var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
  if (isMobile) {
    // 强制立即显示页面内容
    document.body.style.visibility = 'visible';
    document.body.style.opacity = '1';
    
    // 修复可能的滚动问题
    document.addEventListener('DOMContentLoaded', function() {
      // 确保容器可见
      var container = document.getElementById('container');
      if (container) {
        container.style.opacity = '1';
        container.style.visibility = 'visible';
        container.style.display = 'block';
      }
      
      // 修复移动导航
      var mobileNav = document.getElementById('mobile-nav');
      if (mobileNav) {
        mobileNav.style.transform = 'none';
      }
      
      // 修复导航栏切换按钮
      var navToggle = document.getElementById('main-nav-toggle');
      if (navToggle) {
        navToggle.addEventListener('click', function(e) {
          e.preventDefault();
          e.stopPropagation();
          
          document.body.classList.toggle('mobile-nav-on');
        });
      }
      
      // 点击页面内容区域关闭导航栏
      var wrap = document.getElementById('wrap');
      if (wrap) {
        wrap.addEventListener('click', function() {
          if (document.body.classList.contains('mobile-nav-on')) {
            document.body.classList.remove('mobile-nav-on');
          }
        });
      }
      
      // 优化图片加载
      var images = document.querySelectorAll('img');
      for (var i = 0; i < images.length; i++) {
        images[i].addEventListener('error', function() {
          this.style.display = 'none';
        });
      }
      
      // 处理移动端列表样式
      var listItems = document.querySelectorAll('.blog-intro ul li, .author-bio ul li');
      for (var i = 0; i < listItems.length; i++) {
        listItems[i].style.listStyleType = 'none';
        listItems[i].style.paddingLeft = '0';
      }
    });
  }
})(); 