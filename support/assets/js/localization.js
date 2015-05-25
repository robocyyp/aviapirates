var localizationLangs = ["ru","en"];
var  _currentLocalizationLang = 'ru'; //todo Get From Cookies? save this state? 


var currentLocalizationLang =function(lang){
    if(lang){
        _currentLocalizationLang = lang;
        return _currentLocalizationLang;
    }
    else{
         return _currentLocalizationLang;
    }
};
var cook = getCookie('lang');
if(cook){
    currentLocalizationLang(cook);
}


var localization = (function (lang) {
    var localizedStrings = {};
    var _getLocalizedName = function (field) {
        if (field && (field[lang])){
            return field[lang];
        } else if (field['ru']){
            return field['ru'];
        } else {return "";}
    };
    

    _header={en:"Aviapirates", ru:"Авиапираты"};
    localizedStrings.header = (function () {
        return _getLocalizedName(_header);
    }());
    _underHeader={en:"Aviapirates", ru:"Для тех, кто любит путешествовать"};
    localizedStrings.underHeader = (function () {
        return _getLocalizedName(_underHeader);
    }());
    _question={en:"Ask for a question", ru:"Есть вопросы?"};
    localizedStrings.question = (function () {
        return _getLocalizedName(_question);
    }());
    _textWithMail={en:'Or just send email on <a href="mailto:support@snaprix.com?Subject=Question about app">support@snaprix.com</a>', 
    ru:'Или просто задайте нам вопрос по почте <a href="mailto:support@snaprix.com?Subject=Question about app">support@snaprix.com</a>'};
    localizedStrings.textWithMail = (function () {
        return _getLocalizedName(_textWithMail);
    }());

    return localizedStrings; 
}(_currentLocalizationLang));

// использование




//var temp = this.localization.dashboardNameClients;
// this.currentLocalizationLang('en');