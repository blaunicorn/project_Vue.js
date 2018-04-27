# portugal

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
我:
根据分类ID、获取的条目数、偏移量（忽略掉多少条），获取图片文章列表
http://yimi100.top:8080/api.php?r=gallery/get-list&cat1=1&offset=1&limit=5
 * * int $cat1 一级分类ID
 * * int $limit 返回的条目数限制，如果不传此项或者为0，则返回所有数据
 * * int $offset 忽略掉最前面多少条，如果不传此项或者为0，则不忽略数据

cat1分类值：
0 => 'N/A',
1 => '龙泉寺图片',
2 => '学诚法师',
3 => '漫画'

根据分类ID获取文章总数
http://yimi100.top:8080/api.php?r=gallery/get-sum&cat1=1

page10视频栏目，获取文章总数
http://yimi100.top:8080/api.php?r=video/get-sum

page10视频栏目，根据获取的条目数、偏移量（忽略掉多少条），获取视频文章列表
http://yimi100.top:8080/api.php?r=video/get-list&limit=1&offset=1
* * int $limit 返回的条目数限制，如果不传此项或者为0，则返回所有数据
* * int $offset 忽略掉最前面多少条，如果不传此项或者为0，则不忽略数据

http://yimi100.top:8080/api.php?r=summary-article/get-list&cat1=1&offset=8&limit=2
根据分类ID、获取的条目数、偏移量（忽略掉多少条），获取文章列表并返回。
* * int $cat1 一级分类ID
 * * int $cat2 二级分类ID，非必须
 * * int $limit 返回的条目数限制，如果不传此项或者为0，则返回所有数据
 * * int $offset 忽略掉前面多少条，如果不传此项或者为0，则不忽略前面的数据

http://yimi100.top:8080/api.php?r=summary-article/get-sum&cat1=1
根据分类ID，获取文章总数

http://yimi100.top:8080/api.php?r=summary-article/get-article-info&article_id=2
根据文章ID，获取文章详情

后台CMS登录地址：
http://yimi100.top:8080/admin/
用户名口令admin/123456