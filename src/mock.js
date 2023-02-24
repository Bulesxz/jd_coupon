import Mock from 'mockjs';

const Random = Mock.Random;

const recommendsData = function(config) {
    var args = config.body
    var arr = args.split("&")
    var argsObj = {};
    arr.forEach(function(curr, index, arr) {
        argsObj[curr.split("=")[0]] = curr.split("=")[1];
    })
    console.log(argsObj)
        // 请求参数：args.body
        // 
    let articles = [];
    for (let i = 0; i < 100; i++) {
        let newArticleObject = {
            title: Random.csentence(5, 30), //  Random.csentence( min, max )
            imgURL: Random.dataImage('100x80'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
            author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
            date: Random.date() + ' ' + Random.time(), // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
            url: "https://item.jd.com/100015282921.html"
        }

        articles.push(newArticleObject)
    }
    return {
        articles: articles
    }
}

const goodsData = function(config) {
    let newArticleObject = {
        title: Random.csentence(5, 30), //  Random.csentence( min, max )
        imgURL: Random.dataImage('100x80'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
        author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
        articles: Random.paragraph(),
        url: "https://item.jd.com/100015282921.html"
    }
    return newArticleObject
}

Mock.mock('/recommends', 'post', recommendsData);
Mock.mock('/goods', 'post', goodsData);