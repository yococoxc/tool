
// 后台音乐列表
var musicData = ["世界初见的奇迹，二人的物语_20241025_71.mp3","世界初见的奇迹，二人的物语_20241025_b9.mp3","漫溢的心，永远为你_20241024_00.mp3","天空的颜色.mp3","四月的谎言_20240628_9f.mp3", "好想你_20240628_4a.mp3", "二人的物语_20240628_00.mp3", "只能够_20240627_e9.mp3", "我们的故事_20240615_bc.mp3", "二人的物语_20240613_be.mp3", "奇迹Full_20240609_92.mp3", "她的故事Most_20240608_ea.mp3", "她的故事Lost_20240608_8e.mp3", "我和你Full_20240607_7c.mp3", "我和你Full_20240607_4a.mp3", "我和你Full_20240607_5a.mp3", "我和你Full_20240607_5e.mp3", "我和你_20240603_23.mp3", "她的故事_20240603_e1.mp3", "二人的物语_20240531_f5.mp3", "四月的谎言_20240520_1c.mp3", "只能够_20240520_20.mp3", "好想你_20240517_2b.mp3", "随笔01_20240515_af.mp3", "遥远的梦_20240514_88.mp3", "会いたかった_20240510_90.mp3", "好想你_20240510_85.mp3", "黑色的天空_20240502_ae.mp3", "一辈子爱的人_20240502_d4.mp3", "黒い空_20240428_87.mp3", "黑色的天空_20240428_77.mp3", "黑色的天空_20240428_21.mp3", "彼女の物語は （腾讯翻译）_20240419_7b.mp3", "只能够_20240418_13.mp3", "星空_20240418_9c.mp3", "奇迹_20240418_90.mp3", "奇迹_20240418_9a.mp3", "奇迹_20240418_18.mp3", "思念你_20240418_34.mp3", "思念你_20240418_cd.mp3", "朦胧里_20240418_c6.mp3", "她的故事_20240418_9d.mp3", "她的故事_20240418_50.mp3", "思念你_20240418_5b.mp3", "思念你_20240418_e7.mp3", "她的故事_20240328_36.mp3", "她的故事（中间部分1分钟）_20240327_4c.mp3", "我和你_20240326_fa.mp3", "我和你_20240326_23.mp3", "她的故事_20240326_cc.mp3"];
var all_list = document.getElementById("all-list");
for (let i = 0; i < musicData.length; i++) {
    let newDiv = document.createElement('div');
    newDiv.textContent = musicData[i];
    newDiv.id = "music"+i;
    all_list.appendChild(newDiv);

    //暴力捆绑列表音乐
    document.getElementById(newDiv.id).addEventListener('click', function (event) {
        musicId = i;
        initAndPlay();
    });
}


function preloadImages(sources) {
    for (var i = 0; i < sources.length; i++) {
        var img = new Image();
        img.src = 'img/'+sources[i];
        // 可选：监听图片加载完成事件
        img.onload = function() {
            console.log('图片预加载完成：', this.src);
        };
        // 可选：监听图片加载失败事件
        img.onerror = function() {
            console.error('图片预加载失败：', this.src);
        };
    }
}

// 使用示例
var images = [
    'bg0.png', 'bg1.png', 'bg2.png', 'bg3.png',
    'record0.jpg','record1.jpg','record2.jpg','record3.jpg',
    'mode1.png','mode2.png','mode3.png',
    '继续播放.png', '静音.png', '列表.png', '上一首.png', '下一首.png', '音量.png', '暂停.png'
];
preloadImages(images);
