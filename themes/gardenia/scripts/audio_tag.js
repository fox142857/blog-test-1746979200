/**
 * Audio tag helper
 * 
 * This script provides a tag for easily embedding audio files in posts
 * Syntax:
 *   {% audio /path/to/audio_file [optional_description] %}
 */

'use strict';

hexo.extend.tag.register('audio', function(args) {
  const audioPath = args.shift();
  const description = args.join(' ') || '你的浏览器不支持 audio 标签。';
  
  return `<audio controls preload="none" style="width:100%;">
  <source src="${hexo.extend.helper.get('url_for').call(hexo, audioPath)}" type="audio/mp4">
  ${description}
</audio>`;
}); 