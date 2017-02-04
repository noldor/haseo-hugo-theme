HaSEO
=====

This is a HUGO theme for Japanese blog.

これは静的サイトジェネレータ [Hugo](http://gohugo.io/) のブログ向けテーマです。

ショートコード
------------

### image

```
{{< image src="file.jpg" />}}
```

画像を表示します。

srcの相対パスは、記事のmdファイルからの相対パスです。絶対パスを利用する場合はスラッシュから始めてください。

画像のURLにはファイルのmd5ハッシュがつきますので、CDN経由でキャッシュをさせても、画像を差し替えた際に古いキャッシュが表示されるのを回避できます。

注意点
-----

画像のハッシュを取得する都合上、publicディレクトリの生成は2回連続で行ってください。


利用ライブラリ・素材
-----------------

CSSフレームワークには [Materialize](http://materializecss.com/) を利用しています。

画像表示には[Lightbox](http://lokeshdhakar.com/projects/lightbox2/) を利用しています。

ogp画像デフォルト `static/img/ogp.jpg` には次の画像を利用しています。

https://pixabay.com/ja/%E3%82%BF%E3%83%B3%E3%83%9D%E3%83%9D-%E7%B7%91-%E8%87%AA%E7%84%B6-%E8%8A%B1-%E5%A4%8F-%E9%BB%84%E8%89%B2-1737324/

License
-------

[GPLv2](LICENSE.txt)
