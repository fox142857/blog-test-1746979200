# Gardenia

一个简洁、美观的 [Hexo] 主题，特别适合个人博客和作品展示。

## 安装

### 安装主题

通过 git 安装:

```bash
git clone --depth 1 https://github.com/your-username/hexo-theme-gardenia themes/gardenia
```

如果你想启用 RSS，还需要安装 [hexo-generator-feed](https://github.com/hexojs/hexo-generator-feed) 插件。

### 启用主题

修改博客根目录下的 `_config.yml` 中的 `theme` 设置为 `gardenia`。

```diff
_config.yml
- theme: some-theme
+ theme: gardenia
```

### 更新

通过 git 更新到最新版本:

```bash
cd themes/gardenia
git pull
```

## 配置

主题的配置文件是仓库中的 `_config.yml`。为了防止在主题升级过程中丢失或覆盖你对主题配置文件的修改，**我们不建议直接修改这个默认配置文件**。你可以将主题的 `_config.yml` 复制到你的博客根目录，并重命名为 `_config.gardenia.yml`，然后按照其中的文档配置选项进行配置（参见 [Alternate Theme Config](https://hexo.io/docs/configuration#Alternate-Theme-Config)）。

以下将详细介绍一些选项的用法。

## 特性

### 自定义首页

Gardenia 主题支持自定义首页，可以展示作者信息而不是文章列表。你可以通过以下两种方式自定义首页：

#### 1. 通过主题配置

在主题配置文件中设置作者信息和打赏方式：

```yml
# 作者信息配置
author:
  # 作者头像
  avatar: /img/avatar.jpg
  # 作者简介
  bio: 这里是作者的个人简介，可以写一些关于自己的介绍。
  # 联系方式
  contacts:
    github: https://github.com/your-github
    email: mailto:your-email@example.com
    # 可以添加更多联系方式
    # twitter: https://twitter.com/your-twitter
    # facebook: https://facebook.com/your-facebook
    # weibo: https://weibo.com/your-weibo

# 打赏配置
reward:
  # 微信收款码图片路径
  wechat: /img/wechat-pay.jpg
  # 支付宝收款码图片路径
  alipay: /img/alipay.jpg
```

#### 2. 通过自定义HTML文件

你也可以通过自定义HTML文件完全控制首页的显示内容。在主题配置文件中设置：

```yml
# 首页配置
home:
  # 自定义HTML文件路径（相对于主题的layout目录）
  html_file: 'custom-home'
```

然后在 `themes/gardenia/layout/` 目录下创建对应的 `.ejs` 文件（例如 `custom-home.ejs`）。

### 图片资源

主题使用的图片资源需要放在 `themes/gardenia/source/img/` 目录下，包括：

- `avatar.jpg`: 作者头像 (推荐尺寸: 150px × 150px)
- `default-avatar.png`: 默认头像
- `wechat-pay.jpg`: 微信支付收款码 (推荐尺寸: 200px × 200px)
- `alipay.jpg`: 支付宝收款码 (推荐尺寸: 200px × 200px)
- `custom-avatar.jpg`: 自定义HTML页面的作者头像 (推荐尺寸: 180px × 180px)
- `custom-wechat-pay.jpg`: 自定义HTML页面的微信支付收款码
- `custom-alipay.jpg`: 自定义HTML页面的支付宝收款码

### FancyBox

Gardenia 使用 [Fancybox] 来展示你的照片。你可以使用 Markdown 语法或 fancybox 标签插件来添加照片。

```
![img caption](img url)

{% fancybox img_url [img_thumbnail] [img_caption] %}
```

### 侧边栏

你可以通过编辑 `sidebar` 设置将侧边栏放在网站的左侧、右侧或底部。

Gardenia 提供 5 个内置小部件:

- category (分类)
- tag (标签)
- tagcloud (标签云)
- archives (归档)
- recent_posts (最近文章)

你可以在 `widget` 设置中编辑它们。

### 页眉链接

你可以在页眉区域添加带有图标的链接。

```yml
links:
  github: https://github.com/your_github_account
  twitter: https://twitter.com/your_twitter_account
  telegram: https://t.me/your_telegram_account
```

## 归档页面排除功能

主题支持通过配置文件指定哪些文章或目录不在归档页面显示。

### 配置方法

在主题配置文件 `_config.yml` 中，可以设置 `archive_exclude` 选项：

```yaml
# 归档页面排除设置
archive_exclude:
  # 排除特定文章（通过文章路径）
  posts: 
    - '2023/01/01/specific-post/'
    - 'another-post-path'
  # 排除特定目录（通过目录路径）
  directories:
    - 'home'
    - 'drafts'
```

### 配置说明

- `posts`: 指定要排除的文章路径列表。路径格式应与文章的永久链接格式相匹配。
- `directories`: 指定要排除的目录路径列表。这些目录下的所有文章都将从归档页面中排除。

这个功能对于隐藏特定类型的内容（如草稿、关于页面或私人笔记）非常有用，同时保持这些内容在其他页面可见。

[Hexo]: https://hexo.io/
[Fancybox]: https://github.com/fancyapps/fancyBox
