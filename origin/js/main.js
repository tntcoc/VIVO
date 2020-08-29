// 先拿到标签
// let frist_list = document.getElementById("f_f_first_list");

// //写个随机函数
// function rrr(nums) {
//     var str = "";
//     for(var i = 0; i < nums; i++) {
//         str += Math.floor(Math.random() * 10);   
//     }
//     console.log(str);
//     return str;
// }
// var ress = rrr(13);
// console.log(ress);
// console.log(typeof(ress));
// let url = "https://shop.vivo.com.cn/api/v1/prodList/phone?pageNum=1&pageSize=12&t=" + rrr(13);
// console.log(url);


// https://shop.vivo.com.cn/product/10005601?skuId=118482
// https://shop.vivo.com.cn/product/relaSpuId?skuId=id

(function () {
    // self.location.href='../html/data_list01.html';
    let url = "../json/data_list.json";
    console.log(url);
    let request = new XMLHttpRequest();
    request.open("get", url);
    request.send(null);
    request.onload = function () {
        if (request.status == 200) {
            let json = JSON.parse(request.responseText);
            // console.log(json.data.dataList);
            // console.log(json.data.navigateVos[0]);
            // console.log(json.data.navigateVos[0].firstCategory); //二级菜单的手机
            // console.log(json.data.navigateVos[0].subCategories); //二级菜单的手机里面的东西

            let ul = document.getElementById("datalist_01");
            let firstCategory = json.data.dataList;
            // console.log(firstCategory);
            console.log("+++++++++++++++++++++++++++++");
            // let str = 
            firstCategory.forEach(index => {
                // console.log(index);
                // console.log(index.skuName);

                // for (var i = 0; i < firstCategory.length; i++) {
                // console.log(json[i].navigateVos);
                // console.log(index);
                // console.log(index);
                // console.log(index.skuName);
                // console.log(index.images[0].bigPic);
                ul.innerHTML += `
                        <li class="spu-item"><a target="_blank" href="https://shop.vivo.com.cn/product/${index.relaSpuId}?skuId=${index.id}"
                        title="${index.skuName}"
                        data-clickparams=""
                        gwd_tip_bind="1">
                        <div class="crner-good"><img alt
                                src="${index.corner.thumbnailPic}">
                        </div>
                        <div class="figure"><img alt
                                data-src="${index.images[0].bigPic}.webp"
                                src="${index.images[0].bigPic}.webp"
                                lazy="loaded"></div>
                        <div class="spu-info">
                            <p class="name">${index.skuName}</p>
                            <p title="${index.promotion}"
                                class="feature"><span
                                    class="sale-point">${index.promotion}</span>

                            </p>
                            <p class="price rmb-symbol">${"￥" + index.salePrice}</p>
                        </div>
                        </a>
                        </li>`
                // }
            });
            ul.style.zoom = "1";
            ul.style.width = 100 + "%";
        }
    }

})();



// 第二个
(function () {

    let url = "../json/data04.json";
    console.log(url);
    let request = new XMLHttpRequest();
    request.open("get", url);
    request.send(null);
    request.onload = function () {
        if (request.status == 200) {
            let json = JSON.parse(request.responseText);
            // console.log(json.data.dataList);
            let ul = document.getElementById("swiper-slide-visible");
            let firstCategory = json.data.actSkuInfoVos;
            // console.log(firstCategory);
            // console.log("+++++++++++++++++++++++++++++");
            // let str = 
            firstCategory.forEach(index => {
                // console.log(index.cornerImg);
                // console.log(index.skuName);

                ul.innerHTML += `
                        <div class="item swiper-slide swiper-slide-active" style="width: 300px;">
                            <div class="box swiper-slide swiper-slide-visible swiper-slide-active">
                                <img
                                src="${index.cornerImg}"
                                alt="" class="corner-img"><a target="_blank"
                                href="../html/V_qinaggou.html"
                                class="J_prod-link"
                                data-showparamsapp="{&quot;cfrom&quot;:&quot;5021&quot;,&quot;skuid&quot;:100739}"
                                data-clickparamsapp="{&quot;cfrom&quot;:&quot;5020&quot;,&quot;skuid&quot;:100739}"><img
                                    class="swiper-lazy prod-img"
                                    data-src="${index.skuImg}.webp"
                                    src="${index.skuImg}.webp"
                                    lazy="loaded"></a>
                                <div class="prod-info">
                                    <p class="name">${index.skuName}</p>
                                    <p class="desc">${index.promotion}</p>${index.marketPrice}
                                    <p class="price"><span class="text"><dfn>￥</dfn>${index.actPrice}</span><span
                                        class="text disabled"><dfn>￥</dfn>${index.marketPrice}
                                </span></p>
                            </div>
                        </div>`

            });
            // ul.style.zoom = "1";
            // ul.style.width = 100 + "%";
        }
    }

})();


// 第三个
(function () {
    let url = "../json/data02.json";
    console.log(url);
    let request = new XMLHttpRequest();
    request.open("get", url);
    request.send(null);
    request.onload = function () {
        if (request.status == 200) {
            let json = JSON.parse(request.responseText);
            // console.log(json.data.dataList);
            let ul = document.getElementById("box-list_01");
            let firstCategory = json.data.homeMetaVO.homeFloorList[1].elementList;
            console.log(firstCategory);
            console.log("+++++++++++++++++++++++++++++");

            firstCategory.forEach(index => {
                console.log(index.name);


                ul.innerHTML += `
        <li class="box"><a target="_blank"
                href="../html/data_list_xiangqing.html"
                data-showparams="{&quot;cfrom&quot;:&quot;5117&quot;,&quot;name&quot;:&quot;iQOO Neo3  &quot;,&quot;position&quot;:1,&quot;source&quot;:&quot;热卖专区&quot;}"
                data-clickparams="{&quot;cfrom&quot;:&quot;5118&quot;,&quot;name&quot;:&quot;iQOO Neo3  &quot;,&quot;position&quot;:1,&quot;source&quot;:&quot;热卖专区&quot;}"
                gwd_tip_bind="1"><img alt=""
                    data-src="${index.picSrc}.webp"
                    src="${index.picSrc}.webp"
                    lazy="loaded"></a>
            <div class="prodinfo">
                <p class="name">${index.name} </p>
                <p class="feature"> ${index.spec}</p>
                <p class="price rmb-symbol">${index.salePrice}.00</p>
            </div>
        </li>`

            });
            // ul.style.zoom = "1";
            // ul.style.width = 100 + "%";
        }
    }

})();




// 第四个
(function () {
    let url = "../json/data02.json";
    console.log(url);
    let request = new XMLHttpRequest();
    request.open("get", url);
    request.send(null);
    request.onload = function () {
        if (request.status == 200) {
            let json = JSON.parse(request.responseText);
            // console.log(json.data.dataList);
            let ul = document.getElementById("box-list_02");
            // console.log(ul);
            let firstCategory = json.data.homeMetaVO.homeFloorList[2].elementList;
            // console.log(firstCategory);
            // console.log("________________________________");

            firstCategory.forEach(index => {
                // console.log(index.name);


                ul.innerHTML += `
        <li class="box"><a target="_blank"
                href="${index.href}"
                data-showparams="{&quot;cfrom&quot;:&quot;5117&quot;,&quot;name&quot;:&quot;iQOO 3 5G版  &quot;,&quot;position&quot;:2,&quot;source&quot;:&quot;精品手机&quot;}"
                data-clickparams="{&quot;cfrom&quot;:&quot;5118&quot;,&quot;name&quot;:&quot;iQOO 3 5G版  &quot;,&quot;position&quot;:2,&quot;source&quot;:&quot;精品手机&quot;}"><img
                    alt=""
                    data-src="${index.picSrc}.webp"
                    src="${index.picSrc}.webp"
                    lazy="loaded"></a>
            <div class="prodinfo">
                <p class="name">${index.name} </p>
                <p class="feature">${index.spec}</p>
                <p class="price rmb-symbol">${index.salePrice}.00</p>
            </div>
        </li>`

            });
            // ul.style.zoom = "1";
            // ul.style.width = 100 + "%";
        }
    }

})();



// 最后一个
(function () {
    let url = "../json/data02.json";
    console.log(url);
    let request = new XMLHttpRequest();
    request.open("get", url);
    request.send(null);
    request.onload = function () {
        if (request.status == 200) {
            let json = JSON.parse(request.responseText);
            // console.log(json.data.dataList);
            let ul = document.getElementById("box-list_03");
            console.log(ul);
            let firstCategory = json.data.homeMetaVO.homeFloorList[3].elementList;
            console.log(firstCategory);
            console.log("________________________________");

            firstCategory.forEach(index => {
                console.log(index.name);


                ul.innerHTML += `
                <li class="box"><a target="_blank"
                    href="${index.href}"
                    data-showparams="{&quot;cfrom&quot;:&quot;5117&quot;,&quot;name&quot;:&quot;iQOO 3 5G版  &quot;,&quot;position&quot;:2,&quot;source&quot;:&quot;精品手机&quot;}"
                    data-clickparams="{&quot;cfrom&quot;:&quot;5118&quot;,&quot;name&quot;:&quot;iQOO 3 5G版  &quot;,&quot;position&quot;:2,&quot;source&quot;:&quot;精品手机&quot;}"><img
                        alt=""
                        data-src="${index.picSrc}.webp"
                        src="${index.picSrc}.webp"
                        lazy="loaded"></a>
                    <div class="prodinfo">
                        <p class="name">${index.name} </p>
                        <p class="feature">${index.spec}</p>
                        <p class="price rmb-symbol">${index.salePrice}.00</p>
                    </div>
                </li>`

            });
            // ul.style.zoom = "1";
            // ul.style.width = 100 + "%";
        }
    }

})();