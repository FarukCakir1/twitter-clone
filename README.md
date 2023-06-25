
# Vue3, Typescript ve Tailwind ile Twitter Clone Projesi

Bu proje twitter uygulamasının ana sayfasının bir klonudur. Yeni tweet atabilir, atılmış tweetleri okuyabilir ve tweete tıklayarak tweete verilmiş cevapları görebilirsiniz. Tamamen responsivedir. Twitter iconlarını kullanır. Aynı zamanda daha gerçekçi bir senaryo olması hedeflenerek json-server ile fake api oluşturulmuştur. Bu sayede en azından GET/POST gibi temel backend bağlantı süreçleri gösterilmek istenmiştir.


## Bilgisayarınızda Çalıştırın 💻

Projeyi klonlayın

```bash
  git clone https://github.com/FarukCakir1/twitter-clone.git
```

Proje dizinine gidin

```bash
  cd twitter-clone
```

Gerekli paketleri yükleyin

```bash
  npm install
```

json-server'ı çalıştırın

```bash
  json-server --watch fakeData.js
```

Sunucuyu çalıştırın

```bash
  npm run dev
```

## Nasıl Çalışır ?

App.vue içinde RouterView çağırılır.

```javascript
<template>
    <RouterView></RouterView>
</template>
```
Route'a denk gelen Layout Componenti render edilir.

```javascript
    path: '/',
      name: 'main',
      component: () => import('../layouts/MainLayout.vue'),
```

Bu layout'un içinde gerekli diğer Componentler çağırılır.

```javascript
<template>
    <div class="w-screen h-screen bg-black overflow-hidden">
        <div class="main-layout mx-auto px-0 laptop:px-10 tablet:px-5">
            <sidebar-el :menu-items="menuItems" />
            <div class="w-full flex">
                <router-view></router-view>
            </div>
            <discover-side />
        </div>
    </div>
</template>
```

MainLayout için Sidebar ve DiscoverSide componentleri her zaman render edilir. İkisinin arasında yeniden router-view çağrılır ve yine route'a göre bu kısım değişir. Feed ve TweetDetail gibi componentler burada çağrılır.

Feed Componenti render edildiğinde onMounted hooku içinde asenkron olarak bir callback function çalıştırırız.

```javascript
onMounted(async () => {
    loading.value = true
    await store.fetchTweets()
    tweets.value = store.getTweets
    loading.value = false
})
```

```javascript
actions: {
        async fetchTweets(state:any) {
            const res = await apiService.get('/tweets')
            this.$state.tweets = res.data.map((item:any) => {
                return TweetModel.fromFetch({...item})
            })
        },
        async postTweet(newTweet:ITweet) {
            const res = await apiService.post('/tweets',
                {...newTweet}
            )
            this.$state.tweets = [res.data, ...this.$state.tweets]
        }
    },
```

Store'umuzda hazırladığımız fetchTweets() action'ını sayesinde verimizi api'ımızdan alır ve state.tweets'e kaydederiz. Ardından getTweets fonksiyonu ile componentimiz içinde oluşturduğumuz "tweets" değişkenine atarız. Bu sayede v-for direktifi ile değişkenimizi iterate ederek her bir eleman için Tweet componentini çağırabiliriz.

```javascript
            <Tweet
                v-for="(tweet, index) in tweets"
                :key="index"
                :user="tweet.user"
                :id="tweet.id"
                :media="tweet.media"
                :fav="tweet.fav"
                :retweet="tweet.retweet"
                :comment="tweet.comment"
                :comments="tweet.comments"
                :created_at="tweet.created_at"
            >
                <template v-slot:tweet>
                    {{tweet.tweet}}
                </template>
            </Tweet>
```
## Fake Tweetler Nasıl Generate Edilir ?

fakeData.js içinde yazılmış belli fonksiyonlar json-server sayesinde localhost üzerinde çalışan fake api'dan dönen verilere dönüşür. Projeyi çalıştırmadan önce json-server'ı çalıştırmayı unutmayın.

```bash
  json-server --watch fakeData.js
```

Detaylı bilgi için [fakeData.js](https://github.com/FarukCakir1/twitter-clone/blob/main/fakeData.js) dosyasını inceleyebilrsiniz.
## Tweet Detay Hakkında

Her tweet bir router-link ile sarmalanmıştır bu yüzden tıklandığında tweet detayına gider ve o tweete cevap olarak atılmış diğer tweetleri görebilrisiniz. Ayrıca kendinizde bu tweete cevap bir tweet atabilirsiniz. Burda dikkat edilmesi gereken nokta şudur ki; json-server bize yarattığı fake api'lar için UPDATE methodu sunmaz bu yüzden attığımız tweetler'i ilgili main tweetin nested tweetlerine kaydedemeyiz. Atılan tweetler store'a eklenir ve store yenilendiğinde yok olur. Bunu test etmek için tweet detay sayfasındayken sayfayı yenilemeden feed'e dönebilir ve ardından aynı tweetin detayına gidebilirsiniz. Store yenilenmediği (sayfa refresh olmadığı) sürece attığınız tweete nested bir şekilde görebilirsiniz.
## Kullanılan Yardımcı Paketler

- date-fns
- lodash
- axios
- json-server

Package.json vb dosyalar kasten gizlenmemiştir.
  