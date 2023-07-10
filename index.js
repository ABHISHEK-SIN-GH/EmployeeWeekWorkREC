let inputBox = document.querySelectorAll('input');

let mon_cbox = document.querySelector('#MON_CBOX');
let tue_cbox = document.querySelector('#TUE_CBOX');
let wed_cbox = document.querySelector('#WED_CBOX');
let thu_cbox = document.querySelector('#THU_CBOX');
let fri_cbox = document.querySelector('#FRI_CBOX');
let sat_cbox = document.querySelector('#SAT_CBOX');
let sun_cbox = document.querySelector('#SUN_CBOX');

let mon_rec = document.querySelectorAll('.MON_REC');
let tue_rec = document.querySelectorAll('.TUE_REC');
let wed_rec = document.querySelectorAll('.WED_REC');
let thu_rec = document.querySelectorAll('.THU_REC');
let fri_rec = document.querySelectorAll('.FRI_REC');
let sat_rec = document.querySelectorAll('.SAT_REC');
let sun_rec = document.querySelectorAll('.SUN_REC');

let mon_rec_sum = document.querySelector('.MON_REC_SUM');
let tue_rec_sum = document.querySelector('.TUE_REC_SUM');
let wed_rec_sum = document.querySelector('.WED_REC_SUM');
let thu_rec_sum = document.querySelector('.THU_REC_SUM');
let fri_rec_sum = document.querySelector('.FRI_REC_SUM');
let sat_rec_sum = document.querySelector('.SAT_REC_SUM');
let sun_rec_sum = document.querySelector('.SUN_REC_SUM');

let projects = document.getElementById('projects');
let leaves = document.getElementById('leaves');
let overall = document.getElementById('overall');

let pro_recs = document.querySelectorAll('.proRec');
projects.value = pro_recs.length;

updateLeave();

function updateLeave(){
    let totalLeaves = mon_cbox.checked + tue_cbox.checked + wed_cbox.checked + thu_cbox.checked + fri_cbox.checked + sat_cbox.checked + sun_cbox.checked;
    leaves.value = totalLeaves;
}

updateOverall();

function updateOverall(){
    let totalSum = Math.abs(mon_rec_sum.value) + Math.abs(tue_rec_sum.value) + Math.abs(wed_rec_sum.value) + Math.abs(thu_rec_sum.value) + Math.abs(fri_rec_sum.value) + Math.abs(sat_rec_sum.value) + Math.abs(sun_rec_sum.value);
    overall.value = totalSum;
}

mon_cbox.addEventListener('change',(e)=>{
    updateLeave();
    if(e.target.checked){
        mon_rec.forEach(ZeroUp);
        mon_rec_sum.value = 0;
    }else{
        mon_rec.forEach((e)=>{
            e.disabled=false;
        });
    }
    updateOverall();
});

tue_cbox.addEventListener('change',(e)=>{
    updateLeave();
    if(e.target.checked){
        tue_rec.forEach(ZeroUp);
        tue_rec_sum.value = 0;
    }else{
        tue_rec.forEach((e)=>{
            e.disabled=false;
        });
    }
    updateOverall();
});

wed_cbox.addEventListener('change',(e)=>{
    updateLeave();
    if(e.target.checked){
        wed_rec.forEach(ZeroUp);
        wed_rec_sum.value = 0;
    }else{
        wed_rec.forEach((e)=>{
            e.disabled=false;
        });
    }
    updateOverall();
});

thu_cbox.addEventListener('change',(e)=>{
    updateLeave();
    if(e.target.checked){
        thu_rec.forEach(ZeroUp);
        thu_rec_sum.value = 0;
    }else{
        thu_rec.forEach((e)=>{
            e.disabled=false;
        });
    }
    updateOverall();
});

fri_cbox.addEventListener('change',(e)=>{
    updateLeave();
    if(e.target.checked){
        fri_rec.forEach(ZeroUp);
        fri_rec_sum.value = 0;
    }else{
        fri_rec.forEach((e)=>{
            e.disabled=false;
        });
    }
    updateOverall();
});

sat_cbox.addEventListener('change',(e)=>{
    updateLeave();
    if(e.target.checked){
        sat_rec.forEach(ZeroUp);
        sat_rec_sum.value = 0;
    }else{
        sat_rec.forEach((e)=>{
            e.disabled=false;
        });
    }
    updateOverall();
});

sun_cbox.addEventListener('change',(e)=>{
    updateLeave();
    if(e.target.checked){
        sun_rec.forEach(ZeroUp);
        sun_rec_sum.value = 0;
    }else{
        sun_rec.forEach((e)=>{
            e.disabled=false;
        });
    }
    updateOverall();
});

function ZeroUp(e){
    e.value = 0;
    e.disabled = true;
}

inputBox.forEach((e)=>{
    e.addEventListener('input',(element)=>{
        if(element.target.classList.contains('MON_REC')){
            let cntr = 0;
            mon_rec.forEach((ele)=>{
                cntr += Math.abs(ele.value);
            });
            mon_rec_sum.value = cntr;
        }
        else if(element.target.classList.contains('TUE_REC')){
            let cntr = 0
            tue_rec.forEach((ele)=>{
                cntr += Math.abs(ele.value);
            });
            tue_rec_sum.value = cntr;
        }
        else if(element.target.classList.contains('WED_REC')){
            let cntr = 0
            wed_rec.forEach((ele)=>{
                cntr += Math.abs(ele.value);
            });
            wed_rec_sum.value = cntr;
        }
        else if(element.target.classList.contains('THU_REC')){
            let cntr = 0
            thu_rec.forEach((ele)=>{
                cntr += Math.abs(ele.value);
            });
            thu_rec_sum.value = cntr;
        }
        else if(element.target.classList.contains('FRI_REC')){
            let cntr = 0
            fri_rec.forEach((ele)=>{
                cntr += Math.abs(ele.value);
            });
            fri_rec_sum.value = cntr;
        }
        else if(element.target.classList.contains('SAT_REC')){
            let cntr = 0
            sat_rec.forEach((ele)=>{
                cntr += Math.abs(ele.value);
            });
            sat_rec_sum.value = cntr;
        }
        else if(element.target.classList.contains('SUN_REC')){
            let cntr = 0
            sun_rec.forEach((ele)=>{
                cntr += Math.abs(ele.value);
            });
            sun_rec_sum.value = cntr;
        }
        updateOverall();
    });
});

