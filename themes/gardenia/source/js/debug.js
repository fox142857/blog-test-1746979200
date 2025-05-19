document.addEventListener('DOMContentLoaded', function() {
  // 为所有元素添加点击事件监听
  document.addEventListener('click', function(event) {
    const element = event.target;
    
    // 获取元素的详细信息
    const tagName = element.tagName.toLowerCase();
    const classList = Array.from(element.classList).join('.');
    const id = element.id ? `#${element.id}` : '';
    const selector = tagName + (classList ? `.${classList}` : '') + id;
    
    // 获取伪元素信息
    const beforeComputed = window.getComputedStyle(element, '::before');
    const afterComputed = window.getComputedStyle(element, '::after');
    const hasBeforePseudo = beforeComputed.content !== 'none';
    const hasAfterPseudo = afterComputed.content !== 'none';
    
    // 构建输出信息
    console.group('Element Clicked:');
    console.log('Element:', {
      selector: selector,
      element: element,
      tag: tagName,
      classes: element.classList.length ? Array.from(element.classList) : 'none',
      id: element.id || 'none',
      text: element.textContent.trim() || 'empty',
      href: element.href || 'none',
      hasBeforePseudo: hasBeforePseudo,
      hasAfterPseudo: hasAfterPseudo,
      zIndex: window.getComputedStyle(element).zIndex,
      position: window.getComputedStyle(element).position,
      display: window.getComputedStyle(element).display
    });
    
    // 输出元素路径
    let path = [];
    let currentElement = element;
    while (currentElement !== document.body && currentElement !== null) {
      let elementDesc = currentElement.tagName.toLowerCase();
      if (currentElement.id) elementDesc += `#${currentElement.id}`;
      if (currentElement.classList.length) {
        elementDesc += `.${Array.from(currentElement.classList).join('.')}`;
      }
      path.unshift(elementDesc);
      currentElement = currentElement.parentElement;
    }
    console.log('DOM Path:', path.join(' > '));
    
    // 输出事件信息
    console.log('Event Details:', {
      type: event.type,
      bubbles: event.bubbles,
      cancelable: event.cancelable,
      clientX: event.clientX,
      clientY: event.clientY
    });
    
    console.groupEnd();
  }, true);
  
  console.log('Debug mode enabled - Click any element to see details in console');
}); 