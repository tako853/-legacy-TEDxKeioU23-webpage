//ロード画面
/*
$(function(){
    console.log("ready!");
    $(window).on('load', function(){
        $('.loading').delay(0).fadeOut(500);
    });
    function stopload(){
        console.log("timeout!");
        $('.loading').delay(0).fadeOut(500);
    }
    setTimeout('stopload()',5000);
});
*/

// ページの読み込み完了時にローディング画面をフェードアウト
$(window).on("load", function () {
    $(".loading").delay(0).fadeOut(500); // 画像をフェードアウト
    console.log("ready!");
  });
// ページの読み込みが完了しなくても3秒経ったら強制的にローディング画面をフェードアウト
setTimeout("stoploading()", 2000);
function stoploading() {
console.log("timeout!");
$(".loading").fadeOut(500);
}