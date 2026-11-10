// 10 November 2026 at 17:00 in Palestine (UTC+02:00).
const launchAt = Date.parse('2026-11-10T17:00:00+02:00');
function remaining(now){const t=Math.max(0,Math.ceil((launchAt-now)/1000));return [Math.floor(t/86400),Math.floor(t/3600)%24,Math.floor(t/60)%60,t%60];}
function updateCountdown(){const now=Date.now();remaining(now).forEach((v,i)=>document.getElementById(['days','hours','minutes','seconds'][i]).textContent=String(v).padStart(2,'0'));if(now>=launchAt){document.getElementById('status').textContent='حان موعدنا مع سَما!';document.getElementById('watch-label').textContent='شاهدوا الآن على يوتيوب';document.getElementById('note').textContent='ابدؤوا رحلتكم مع الألبوم ✦';}}
updateCountdown();setInterval(updateCountdown,1000);
