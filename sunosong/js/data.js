
// 后台音乐列表
var musicData = [
  
  {
    "mp3": "https://cdn1.suno.ai/69801f27-a677-4e1c-accb-34971c883571.mp3",
    "name": "世界初见的奇迹，二人的物语",
    "name2": "世界初见的奇迹，二人的物语_20241025_71",
    "name3": "世界初见的奇迹，二人的物语_20241025_71.mp3",
    "id": "69801f27-a677-4e1c-accb-34971c883571",
    "created_at": "2024-10-25T02:04:41.514Z"
  },
  {
    "mp3": "https://cdn1.suno.ai/b5534507-c3e8-4829-ab27-85e7161a27b9.mp3",
    "name": "世界初见的奇迹，二人的物语",
    "name2": "世界初见的奇迹，二人的物语_20241025_b9",
    "name3": "世界初见的奇迹，二人的物语_20241025_b9.mp3",
    "id": "b5534507-c3e8-4829-ab27-85e7161a27b9",
    "created_at": "2024-10-25T02:04:41.514Z"
  },


  {
    "mp3": "https://cdn1.suno.ai/6e00ae5b-2c0f-4c14-a3e4-ecf7640b6f9f.mp3",
    "name": "漫溢的心，永远为你",
    "name2": "漫溢的心，永远为你_20241024_00",
    "name3": "漫溢的心，永远为你_20241024_00.mp3",
    "id": "6e00ae5b-2c0f-4c14-a3e4-ecf7640b6f9f",
    "created_at": "2024-10-24T00:54:40.389Z"
  },
    {
      "mp3": "https://cdn1.suno.ai/6814556c-c2f8-4e6c-9935-c7d9a0c9e49f.mp3",
      "name": "四月的谎言",
      "name2": "四月的谎言_20240628_9f",
      "name3": "四月的谎言_20240628_9f.mp3",
      "id": "6814556c-c2f8-4e6c-9935-c7d9a0c9e49f",
      "created_at": "2024-06-28T05:13:20.522Z"
    },
    {
      "mp3": "https://cdn1.suno.ai/2a618aab-641e-4516-b5de-04fee44a844a.mp3",
      "name": "好想你",
      "name2": "好想你_20240628_4a",
      "name3": "好想你_20240628_4a.mp3",
      "id": "2a618aab-641e-4516-b5de-04fee44a844a",
      "created_at": "2024-06-28T05:05:08.841Z"
    },
    {
      "mp3": "https://cdn1.suno.ai/e8784da5-83ae-4003-92d6-7963c4d79100.mp3",
      "name": "二人的物语",
      "name2": "二人的物语_20240628_00",
      "name3": "二人的物语_20240628_00.mp3",
      "id": "e8784da5-83ae-4003-92d6-7963c4d79100",
      "created_at": "2024-06-28T04:49:30.530Z"
    },
    {
      "mp3": "https://cdn1.suno.ai/74ff1981-0912-49ba-a38e-949d418bdde9.mp3",
      "name": "只能够",
      "name2": "只能够_20240627_e9",
      "name3": "只能够_20240627_e9.mp3",
      "id": "74ff1981-0912-49ba-a38e-949d418bdde9",
      "created_at": "2024-06-27T07:06:31.284Z"
    },
    {
      "mp3": "https://cdn1.suno.ai/f0c200fe-5526-4fbb-ac8b-19cb1be753bc.mp3",
      "name": "我们的故事",
      "name2": "我们的故事_20240615_bc",
      "name3": "我们的故事_20240615_bc.mp3",
      "id": "f0c200fe-5526-4fbb-ac8b-19cb1be753bc",
      "created_at": "2024-06-15T16:32:21.745Z"
    },
    {
      "mp3": "https://cdn1.suno.ai/c019d825-8644-4877-b091-260d9cfbf4be.mp3",
      "name": "二人的物语",
      "name2": "二人的物语_20240613_be",
      "name3": "二人的物语_20240613_be.mp3",
      "id": "c019d825-8644-4877-b091-260d9cfbf4be",
      "created_at": "2024-06-13T04:06:28.031Z"
    },
    {
      "mp3": "https://cdn1.suno.ai/0ea7e3ae-3a6f-4917-9898-c4fd42bb3a92.mp3",
      "name": "奇迹Full",
      "name2": "奇迹Full_20240609_92",
      "name3": "奇迹Full_20240609_92.mp3",
      "id": "0ea7e3ae-3a6f-4917-9898-c4fd42bb3a92",
      "created_at": "2024-06-09T08:16:28.879Z"
    },
    {
      "mp3": "https://cdn1.suno.ai/f2fb0ca1-38e1-4b08-a0e8-cefdd30dedea.mp3",
      "name": "她的故事Most",
      "name2": "她的故事Most_20240608_ea",
      "name3": "她的故事Most_20240608_ea.mp3",
      "id": "f2fb0ca1-38e1-4b08-a0e8-cefdd30dedea",
      "created_at": "2024-06-08T03:36:17.555Z"
    },
    {
      "mp3": "https://cdn1.suno.ai/d46ca8ec-aa77-43d3-ae45-7018807a148e.mp3",
      "name": "她的故事Lost",
      "name2": "她的故事Lost_20240608_8e",
      "name3": "她的故事Lost_20240608_8e.mp3",
      "id": "d46ca8ec-aa77-43d3-ae45-7018807a148e",
      "created_at": "2024-06-08T03:30:37.513Z"
    },
    {
      "mp3": "https://cdn1.suno.ai/b02210f3-4d9f-4531-8a95-43fa9ccc047c.mp3",
      "name": "我和你Full",
      "name2": "我和你Full_20240607_7c",
      "name3": "我和你Full_20240607_7c.mp3",
      "id": "b02210f3-4d9f-4531-8a95-43fa9ccc047c",
      "created_at": "2024-06-07T04:56:06.325Z"
    },
    {
      "mp3": "https://cdn1.suno.ai/645f7977-923d-4f02-a1df-2a26bae1234a.mp3",
      "name": "我和你Full",
      "name2": "我和你Full_20240607_4a",
      "name3": "我和你Full_20240607_4a.mp3",
      "id": "645f7977-923d-4f02-a1df-2a26bae1234a",
      "created_at": "2024-06-07T04:47:28.101Z"
    },
    {
      "mp3": "https://cdn1.suno.ai/28024927-2f25-4956-a17f-c57bb334de5a.mp3",
      "name": "我和你Full",
      "name2": "我和你Full_20240607_5a",
      "name3": "我和你Full_20240607_5a.mp3",
      "id": "28024927-2f25-4956-a17f-c57bb334de5a",
      "created_at": "2024-06-07T04:17:01.444Z"
    },
    {
      "mp3": "https://cdn1.suno.ai/ab5b7160-4564-4602-96cc-962fb29ba95e.mp3",
      "name": "我和你Full",
      "name2": "我和你Full_20240607_5e",
      "name3": "我和你Full_20240607_5e.mp3",
      "id": "ab5b7160-4564-4602-96cc-962fb29ba95e",
      "created_at": "2024-06-07T04:17:01.444Z"
    },
    {
      "mp3": "https://cdn1.suno.ai/09116e1b-564d-4387-9804-df52208fff23.mp3",
      "name": "我和你",
      "name2": "我和你_20240603_23",
      "name3": "我和你_20240603_23.mp3",
      "id": "09116e1b-564d-4387-9804-df52208fff23",
      "created_at": "2024-06-03T03:50:36.980Z"
    },
    {
      "mp3": "https://cdn1.suno.ai/69e963df-c278-43b6-a841-0e823371fee1.mp3",
      "name": "她的故事",
      "name2": "她的故事_20240603_e1",
      "name3": "她的故事_20240603_e1.mp3",
      "id": "69e963df-c278-43b6-a841-0e823371fee1",
      "created_at": "2024-06-03T03:32:38.097Z"
    },
    {
      "mp3": "https://cdn1.suno.ai/2863111e-ac97-4f7f-b532-86b5c41ff0f5.mp3",
      "name": "二人的物语",
      "name2": "二人的物语_20240531_f5",
      "name3": "二人的物语_20240531_f5.mp3",
      "id": "2863111e-ac97-4f7f-b532-86b5c41ff0f5",
      "created_at": "2024-05-31T03:21:58.499Z"
    },
    {
      "mp3": "https://cdn1.suno.ai/804553f9-1a5a-4c7a-81bc-2a8c1b44ac1c.mp3",
      "name": "四月的谎言",
      "name2": "四月的谎言_20240520_1c",
      "name3": "四月的谎言_20240520_1c.mp3",
      "id": "804553f9-1a5a-4c7a-81bc-2a8c1b44ac1c",
      "created_at": "2024-05-20T12:01:37.359Z"
    },
    {
      "mp3": "https://cdn1.suno.ai/800d4c24-07bf-4bf5-a4cf-2ed21907fe20.mp3",
      "name": "只能够",
      "name2": "只能够_20240520_20",
      "name3": "只能够_20240520_20.mp3",
      "id": "800d4c24-07bf-4bf5-a4cf-2ed21907fe20",
      "created_at": "2024-05-20T00:47:06.474Z"
    },
    {
      "mp3": "https://cdn1.suno.ai/15f66e54-5853-45ad-ba83-4a9d18c6502b.mp3",
      "name": "好想你",
      "name2": "好想你_20240517_2b",
      "name3": "好想你_20240517_2b.mp3",
      "id": "15f66e54-5853-45ad-ba83-4a9d18c6502b",
      "created_at": "2024-05-17T07:23:02.984Z"
    },
    {
      "mp3": "https://cdn1.suno.ai/915c46fd-b36b-4aff-984f-0517e33286af.mp3",
      "name": "随笔01",
      "name2": "随笔01_20240515_af",
      "name3": "随笔01_20240515_af.mp3",
      "id": "915c46fd-b36b-4aff-984f-0517e33286af",
      "created_at": "2024-05-15T00:54:13.605Z"
    },
    {
      "mp3": "https://cdn1.suno.ai/47283f54-030b-4e2a-84ce-e22526662588.mp3",
      "name": "遥远的梦",
      "name2": "遥远的梦_20240514_88",
      "name3": "遥远的梦_20240514_88.mp3",
      "id": "47283f54-030b-4e2a-84ce-e22526662588",
      "created_at": "2024-05-14T01:13:16.962Z"
    },
    {
      "mp3": "https://cdn1.suno.ai/1da2465c-21da-4cfe-bd95-c16d2ca1a890.mp3",
      "name": "会いたかった",
      "name2": "会いたかった_20240510_90",
      "name3": "会いたかった_20240510_90.mp3",
      "id": "1da2465c-21da-4cfe-bd95-c16d2ca1a890",
      "created_at": "2024-05-10T00:44:28.451Z"
    },
    {
      "mp3": "https://cdn1.suno.ai/7b2493ab-29e0-4090-b318-f9edccfe3e85.mp3",
      "name": "好想你",
      "name2": "好想你_20240510_85",
      "name3": "好想你_20240510_85.mp3",
      "id": "7b2493ab-29e0-4090-b318-f9edccfe3e85",
      "created_at": "2024-05-10T00:42:19.428Z"
    },
    {
      "mp3": "https://cdn1.suno.ai/99032033-73d8-4f89-9f9b-39e5015de6ae.mp3",
      "name": "黑色的天空",
      "name2": "黑色的天空_20240502_ae",
      "name3": "黑色的天空_20240502_ae.mp3",
      "id": "99032033-73d8-4f89-9f9b-39e5015de6ae",
      "created_at": "2024-05-02T02:49:33.835Z"
    },
    {
      "mp3": "https://cdn1.suno.ai/61e92e8c-7149-4216-92d4-d8cda8b4bcd4.mp3",
      "name": "一辈子爱的人",
      "name2": "一辈子爱的人_20240502_d4",
      "name3": "一辈子爱的人_20240502_d4.mp3",
      "id": "61e92e8c-7149-4216-92d4-d8cda8b4bcd4",
      "created_at": "2024-05-02T02:46:53.788Z"
    },
    {
      "mp3": "https://cdn1.suno.ai/96781c78-b5b6-45b6-ada1-dd0f34003a87.mp3",
      "name": "黒い空",
      "name2": "黒い空_20240428_87",
      "name3": "黒い空_20240428_87.mp3",
      "id": "96781c78-b5b6-45b6-ada1-dd0f34003a87",
      "created_at": "2024-04-28T12:27:09.346Z"
    },
    {
      "mp3": "https://cdn1.suno.ai/e0d6738a-39dd-4b93-be36-6582e9a7ef77.mp3",
      "name": "黑色的天空",
      "name2": "黑色的天空_20240428_77",
      "name3": "黑色的天空_20240428_77.mp3",
      "id": "e0d6738a-39dd-4b93-be36-6582e9a7ef77",
      "created_at": "2024-04-28T12:19:25.758Z"
    },
    {
      "mp3": "https://cdn1.suno.ai/f64ce0db-5100-416e-b348-48291da9f221.mp3",
      "name": "黑色的天空",
      "name2": "黑色的天空_20240428_21",
      "name3": "黑色的天空_20240428_21.mp3",
      "id": "f64ce0db-5100-416e-b348-48291da9f221",
      "created_at": "2024-04-28T12:15:15.093Z"
    },
    {
      "mp3": "https://cdn1.suno.ai/60af5cb5-aca3-4cae-bf3f-b592bda2e37b.mp3",
      "name": "彼女の物語は （腾讯翻译）",
      "name2": "彼女の物語は （腾讯翻译）_20240419_7b",
      "name3": "彼女の物語は （腾讯翻译）_20240419_7b.mp3",
      "id": "60af5cb5-aca3-4cae-bf3f-b592bda2e37b",
      "created_at": "2024-04-19T07:50:54.772Z"
    },
    {
      "mp3": "https://cdn1.suno.ai/b291b851-2b75-41a8-8bdc-7b5fc23f8213.mp3",
      "name": "只能够",
      "name2": "只能够_20240418_13",
      "name3": "只能够_20240418_13.mp3",
      "id": "b291b851-2b75-41a8-8bdc-7b5fc23f8213",
      "created_at": "2024-04-18T05:59:31.706Z"
    },
    {
      "mp3": "https://cdn1.suno.ai/114ce8da-c599-4cd2-95bd-35879382a49c.mp3",
      "name": "星空",
      "name2": "星空_20240418_9c",
      "name3": "星空_20240418_9c.mp3",
      "id": "114ce8da-c599-4cd2-95bd-35879382a49c",
      "created_at": "2024-04-18T05:17:04.998Z"
    },
    {
      "mp3": "https://cdn1.suno.ai/45bb3244-ebc8-48e6-8597-3f4141d9d590.mp3",
      "name": "奇迹",
      "name2": "奇迹_20240418_90",
      "name3": "奇迹_20240418_90.mp3",
      "id": "45bb3244-ebc8-48e6-8597-3f4141d9d590",
      "created_at": "2024-04-18T05:03:35.918Z"
    },
    {
      "mp3": "https://cdn1.suno.ai/48c41a0a-9090-48e1-97a8-46f788da759a.mp3",
      "name": "奇迹",
      "name2": "奇迹_20240418_9a",
      "name3": "奇迹_20240418_9a.mp3",
      "id": "48c41a0a-9090-48e1-97a8-46f788da759a",
      "created_at": "2024-04-18T05:03:35.918Z"
    },
    {
      "mp3": "https://cdn1.suno.ai/27de49a2-2c58-49b3-bd64-ff92442ac018.mp3",
      "name": "奇迹",
      "name2": "奇迹_20240418_18",
      "name3": "奇迹_20240418_18.mp3",
      "id": "27de49a2-2c58-49b3-bd64-ff92442ac018",
      "created_at": "2024-04-18T04:58:56.139Z"
    },
    {
      "mp3": "https://cdn1.suno.ai/34050eed-d22d-414a-866f-8dc0c1fc5334.mp3",
      "name": "思念你",
      "name2": "思念你_20240418_34",
      "name3": "思念你_20240418_34.mp3",
      "id": "34050eed-d22d-414a-866f-8dc0c1fc5334",
      "created_at": "2024-04-18T04:23:50.489Z"
    },
    {
      "mp3": "https://cdn1.suno.ai/97cffb99-0e8a-4eb8-ae35-1aec03c1d3cd.mp3",
      "name": "思念你",
      "name2": "思念你_20240418_cd",
      "name3": "思念你_20240418_cd.mp3",
      "id": "97cffb99-0e8a-4eb8-ae35-1aec03c1d3cd",
      "created_at": "2024-04-18T04:13:44.561Z"
    },
    {
      "mp3": "https://cdn1.suno.ai/09f78d66-fe99-4e92-b565-3a2f8d5db8c6.mp3",
      "name": "朦胧里",
      "name2": "朦胧里_20240418_c6",
      "name3": "朦胧里_20240418_c6.mp3",
      "id": "09f78d66-fe99-4e92-b565-3a2f8d5db8c6",
      "created_at": "2024-04-18T03:53:39.263Z"
    },
    {
      "mp3": "https://cdn1.suno.ai/41ff1d34-3309-4736-9c83-f1ddc905829d.mp3",
      "name": "她的故事",
      "name2": "她的故事_20240418_9d",
      "name3": "她的故事_20240418_9d.mp3",
      "id": "41ff1d34-3309-4736-9c83-f1ddc905829d",
      "created_at": "2024-04-18T03:36:54.064Z"
    },
    {
      "mp3": "https://cdn1.suno.ai/31021dcd-701e-455d-8efb-69ccd9d01650.mp3",
      "name": "她的故事",
      "name2": "她的故事_20240418_50",
      "name3": "她的故事_20240418_50.mp3",
      "id": "31021dcd-701e-455d-8efb-69ccd9d01650",
      "created_at": "2024-04-18T03:36:54.064Z"
    },
    {
      "mp3": "https://cdn1.suno.ai/6336ef87-03e4-4f15-be6b-c4ef294bd75b.mp3",
      "name": "思念你",
      "name2": "思念你_20240418_5b",
      "name3": "思念你_20240418_5b.mp3",
      "id": "6336ef87-03e4-4f15-be6b-c4ef294bd75b",
      "created_at": "2024-04-18T03:18:00.478Z"
    },
    {
      "mp3": "https://cdn1.suno.ai/a7500e41-d397-479e-9f5a-9ce03743c0e7.mp3",
      "name": "思念你",
      "name2": "思念你_20240418_e7",
      "name3": "思念你_20240418_e7.mp3",
      "id": "a7500e41-d397-479e-9f5a-9ce03743c0e7",
      "created_at": "2024-04-18T02:57:37.100Z"
    },
    {
      "mp3": "https://cdn1.suno.ai/bc56cd7c-da1f-46a0-af34-382820c3a736.mp3",
      "name": "她的故事",
      "name2": "她的故事_20240328_36",
      "name3": "她的故事_20240328_36.mp3",
      "id": "bc56cd7c-da1f-46a0-af34-382820c3a736",
      "created_at": "2024-03-28T03:12:57.472Z"
    },
    {
      "mp3": "https://cdn1.suno.ai/dace4b7a-654c-4a4b-9ea2-8c8dc7f4ed4c.mp3",
      "name": "她的故事（中间部分1分钟）",
      "name2": "她的故事（中间部分1分钟）_20240327_4c",
      "name3": "她的故事（中间部分1分钟）_20240327_4c.mp3",
      "id": "dace4b7a-654c-4a4b-9ea2-8c8dc7f4ed4c",
      "created_at": "2024-03-27T04:08:27.637Z"
    },
    {
      "mp3": "https://cdn1.suno.ai/7fa72244-0d85-4149-a354-b961fe6441fa.mp3",
      "name": "我和你",
      "name2": "我和你_20240326_fa",
      "name3": "我和你_20240326_fa.mp3",
      "id": "7fa72244-0d85-4149-a354-b961fe6441fa",
      "created_at": "2024-03-26T05:29:00.812Z"
    },
    {
      "mp3": "https://cdn1.suno.ai/6cf5ff98-6d98-45e2-8ccc-7f196a1b2823.mp3",
      "name": "我和你",
      "name2": "我和你_20240326_23",
      "name3": "我和你_20240326_23.mp3",
      "id": "6cf5ff98-6d98-45e2-8ccc-7f196a1b2823",
      "created_at": "2024-03-26T05:29:00.812Z"
    },
    {
      "mp3": "https://cdn1.suno.ai/adcaf958-39c1-4ce5-b57f-cfb23623ebcc.mp3",
      "name": "她的故事",
      "name2": "她的故事_20240326_cc",
      "name3": "她的故事_20240326_cc.mp3",
      "id": "adcaf958-39c1-4ce5-b57f-cfb23623ebcc",
      "created_at": "2024-03-26T04:58:12.209Z"
    }
  ];


var all_list = document.getElementById("all-list");
for (let i = 0; i < musicData.length; i++) {
    let newDiv = document.createElement('div');
    newDiv.textContent = musicData[i]['name2'];
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
        img.src = './../song/img/'+sources[i];
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
