module.exports = function (width) {
    return {  //중괄호는 객체를 나타냄
        width: width, //프로퍼티 width를 위의 width로 초기화
        area: function () {
            return this.width * this.width;
        },
        circum: function () {
            return 4*width;
        }
    };
};