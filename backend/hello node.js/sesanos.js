exports.sesanName = (englishName)=>{
    //יחזיר את שם העונה בעברית
    switch(englishName){
        case 'spring':
            return 'שמחה רבה שמחה רבה, אביב הגיע, ואין מנקה';
        case 'summer':
            return 'סחנה, למות';
        case 'autumn':
            return 'זה קר, זה חם, זה מטורף';
        case 'winter':
            return 'זה רק אני והפוך שלי';
        default:
            return 'גבריאל, עוד פעם התחלנו?';
    }
}

exports.holiday = (englishName)=>{
    switch(englishName){
        case 'spring':
            return 'חג פסח';
        case 'summer':
            return 'טו באב';
        case 'autumn':
            return 'סוכות';
        case 'winter':
            return 'חנוכה';
        default:
            return 'תמיר המלך';
    }
}

