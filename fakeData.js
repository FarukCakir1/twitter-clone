module.exports = () => {
    const data = { tweets: []}
    let id = 1
    for (let i = 0; i < 20; i++) {
        const commentTweets = []
        const deepTweets = []
        for (let k = 1; k < 2; k++) {
            deepTweets.push({
                "id": id + k + 1,
                "user": {
                    "full_name": "Faruk Çakır",
                    "user_name": "@ffDev",
                    "avatar": "/src/assets/image/avatar.png"
                },
                "tweet": "What we had was a total lie.",
                "tweet_media": null,
                "fav": 65,
                "retweet": 123,
                "comment": 3,
                "created_at": new Date()
            },)
        }
        for (let j = 1; j < 5; j++) {
            commentTweets.push(
                {
                    "id": id + j,
                    "user": {
                        "full_name": "Faruk Çakır",
                        "user_name": "@ffDev",
                        "avatar": "/src/assets/image/avatar.png"
                    },
                    "tweet": "What we had was a total lie.",
                    "tweet_media": null,
                    "fav": 65,
                    "retweet": 123,
                    "comment": 3,
                    "comment_tweets": j % 2 === 0 ? deepTweets : null,
                    "created_at": new Date()
                },
            )
        }
        const currentDate = new Date()
        const randomFuture = Math.floor(Math.random() * 10) + 1
        const futreDate = new Date(currentDate.getTime() + (randomFuture * 60 * 60 * 1000))
        data.tweets.push({
            "id": id,
            "user": {
                "full_name": "Faruk Çakır",
                "user_name": "@ffDev",
                "avatar": "/src/assets/image/avatar.png"
            },
            "tweet": "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
            "tweet_media": i % 3 === 0 ? "/src/assets/image/legolas.JPG" : null,
            "fav": i * Math.floor(Math.random() * 10),
            "retweet": 123,
            "comment": commentTweets.length,
            "comment_tweets": commentTweets,
            "created_at": futreDate,
            "displaying": i * Math.floor(Math.random() * 100)
        })
        id += 5;
    }
    return data
}