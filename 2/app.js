var starbucks = {

    tea:{
        кокЧай:'Из зеленых чайных листьев которую пьют все аташки и апашки в кыргызстане',

        караЧай:'те же зеленые чайные листья,но только уже высушенные 16-18 часов',

        фруктовыйЧай:'Состоит из фруктов особенно цитрусовые и добавляется еще мята,лично сам его готовлю дома,better than кокЧай и караЧай'
    },

    coffee : {
        Lungo:"espresso with an increased amount of water.",

        Glace:"is a chilled coffee with an ice cream scoop. The drink is served in an Irish glass with a straw",

        LatteMacchiato:'is a macchiato where there is 2-3 times more milk than espresso',

        IceCoffee:'cold espresso with ice, garnished with cream, if desired add a cinnamon stick, sugar'
    }
};

console.log(typeof starbucks);
console.log( Object.entries(starbucks.tea));
console.log(Object.entries(starbucks.coffee));

//**DOP */
let login = 'nurik'
let password = '2005'

var userLog = prompt('Your login')
var userPass = prompt('Your password') 

if(userLog === login && userPass === password){
    alert('Авторизация прошла успешно')
}else{
    alert('Повторите вход')
}

