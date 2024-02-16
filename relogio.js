const hora = document.querySelector('.hour')
const minutos = document.querySelector('.min')
const segundos= document.querySelector('.sec')

const seta = document.querySelector('.seta')
const cron = document.querySelector('.cronometro')
const rel = document.querySelector('.relogio')
const setaesq = document.querySelector('.seta2')


function getTime(){
    const time = new Date()

    const horaRot = (360 / 12) * time.getHours()
    const minutosRot = (360 / 60 ) * time.getMinutes()
    const segundosRot = (360 / 60 ) * time.getSeconds()

    hora.style.transform = `rotate(${horaRot}deg)`
    minutos.style.transform = `rotate(${minutosRot}deg)`
    segundos.style.transform = `rotate(${segundosRot}deg)`
}
setInterval(() => {
    getTime();
  }, 1000);
  
  getTime();

  
seta.addEventListener('click', slide)
setaesq.addEventListener('click', slide)

rel.style.transform = 'translateX(250%)'
function slide(){
    if (rel.style.transform === 'translateX(250%)'){
        rel.style.transform = 'translateX(0)'
        cron.style.transform = 'translateX(-250%)'
        seta.style.display = 'none'
        setaesq.style.display = 'inline-block'

    }else if (cron.style.transform === 'translateX(-250%)'){
        cron.style.transform = 'translateX(0)'
        rel.style.transform = 'translateX(250%)'
        seta.style.display = 'inline-block'
        setaesq.style.display = 'none'
    

    }
    
}

    