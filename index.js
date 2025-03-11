let mode = 'time'
const output = document.getElementById('output')
const fullBtn = document.getElementById('full')
const dateBtn = document.getElementById('date')
const timeBtn = document.getElementById('time')

setInterval(update,1000)
update()

function update() {
    output.textContent = format(mode)
}

function format(formatMode){
    const now = new Date()
switch(formatMode){
    case 'time': return now.toLocaleTimeString()
    case 'full': return now.toLocaleDateString() + ' ' + now.toLocaleTimeString()
    case 'date': return now.toLocaleDateString()
    case 'default': return now.toLocaleTimeString()
    }
}

function bindMode (name) {
    return function(){
        mode=name
        update()
    }
}

timeBtn.onclick = bindMode('time')
dateBtn.onclick = bindMode('date')
fullBtn.onclick = bindMode('full')