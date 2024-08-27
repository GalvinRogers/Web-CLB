var now = dayjs();
var st = dayjs('2024-08-18');  
var end = dayjs('2024-09-23');
if (st <= now && end >= now){
    var element = document.getElementById('main1');
    element.classList.add('hidden');
}
else {
    var element = document.getElementById('main2');
    element.classList.add('hidden');
}