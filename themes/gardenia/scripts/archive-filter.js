'use strict';

/**
 * 归档页面文章过滤器
 * 根据配置排除指定的文章或目录
 */
hexo.extend.filter.register('template_locals', function(locals) {
  // 仅在归档页面应用过滤
  if (!locals.page || !locals.page.archive) return locals;

  // 获取主题配置
  const config = hexo.theme.config;
  
  // 如果没有配置排除项，直接返回
  if (!config.archive_exclude) return locals;
  
  const excludePosts = config.archive_exclude.posts || [];
  const excludeDirs = config.archive_exclude.directories || [];
  
  // 如果没有设置排除项，直接返回
  if (excludePosts.length === 0 && excludeDirs.length === 0) return locals;
  
  // 输出调试信息
  console.log('归档页面排除配置:', config.archive_exclude);
  
  // 过滤文章
  if (locals.page.posts) {
    // 输出调试信息
    if (locals.page.posts.length > 0) {
      console.log('第一篇文章的路径信息:');
      console.log('- post.path:', locals.page.posts.data[0].path);
      console.log('- post.source:', locals.page.posts.data[0].source);
      console.log('- post.full_source:', locals.page.posts.data[0].full_source);
    }
    
    locals.page.posts = locals.page.posts.filter(post => {
      // 检查文章路径是否在排除列表中
      const inExcludePosts = excludePosts.some(path => {
        return post.path.startsWith(path);
      });
      
      // 检查文章所在目录是否在排除列表中
      const inExcludeDirs = excludeDirs.some(dir => {
        // 直接检查 source 属性是否包含指定目录路径
        // 例如：_posts/home/file.md 包含 /home/
        return post.source.includes(`_posts/${dir}/`);
      });
      
      // 如果文章路径或所在目录在排除列表中，则排除该文章
      return !(inExcludePosts || inExcludeDirs);
    });
  }
  
  return locals;
}); 