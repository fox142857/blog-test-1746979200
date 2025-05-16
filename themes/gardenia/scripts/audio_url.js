/**
 * Audio URL Helper
 * 
 * This script fixes audio asset URLs in posts, ensuring they correctly point to the theme's audio directory
 */

'use strict';

hexo.extend.filter.register('after_post_render', function(data) {
  // 正则表达式匹配音频标签中的src属性
  const audioRegex = /<source\s+src=["']{{ root }}audio\/([^"']+)["']/g;
  
  // 替换音频标签中的src路径
  data.content = data.content.replace(audioRegex, function(match, audioPath) {
    // 使用Hexo的url_for函数构建正确的音频资源URL
    return `<source src="${hexo.extend.helper.get('url_for').call(hexo, 'audio/' + audioPath)}"`;
  });
  
  return data;
}); 