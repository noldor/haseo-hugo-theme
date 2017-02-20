// リンク加工
$(function(){
    // リンクのはてなブログカード化
    // URL単一の段落をはてなブログカードに差し替える。
    $('.article-body > p').each(function(){
        var m;
        if (m = $(this).html().match(/^<a href="(.+?)">\1<\/a>$/)) {
            $(this).html('<iframe class="hatena-blogcard card" src="https://hatenablog-parts.com/embed?url=' + m[1] + '"></iframe>');
        }
    });

    // 外部リンクにはtarget="_blank"をつける。
    // 他のリンク加工後に実行しないとリンク加工が動かなくなることに注意。
    $('.article-body a[href^="http"]').not('[href*="//' + location.hostname + '"]').attr('target', '_blank');
});

// facebookのカウント数取得
$(function(){
    $('.facebook-balloon .counter').each(function(){
        var counter = this;
        $.getJSON('https://graph.facebook.com/' + $(this).data('url'), {}, function(data){
            var count = 0;
            if (data.share !== undefined && data.share.share_count !== undefined) {
                count = data.share.share_count;
            }
            $(counter).text(String(count));
            $(counter).addClass('counted');
        });
    });
});

// はてなブックマークのカウント数取得
$(function(){
    $('.hatebu-balloon .counter').each(function(){
        var counter = this;
        $.getJSON('https://b.hatena.ne.jp/entry.count?callback=?', { url: $(this).data('url') }, function(data){
            $(counter).text(data);
            $(counter).addClass('counted');
        });
    });
});
