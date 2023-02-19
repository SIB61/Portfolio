
const pointer = document.getElementById('pointer')
const profile = document.getElementById('profile')
const profile_pic = document.getElementById('profile_pic')
const home = document.getElementById('home')
home.addEventListener('mousemove',(event)=>{
   trackCursor(pointer,event)
   let profileCol = detectCollision(pointer,profile)
   profileCol ? setMouseShadow(profile,event) : removeLightShadow(profile)
})

function setMouseShadow(element,mouse){
   const light_top = mouse.clientY-200
   const element_top = element.getBoundingClientRect().top
   const shadowY =    (element_top - light_top) * 0.5
   const light_left = mouse.clientX-200 
   const element_left = element.getBoundingClientRect().left
   const shadowX =    (element_left - light_left) * 0.5
   const opacity = Math.sqrt(shadowX**2 + shadowY**2) / 200
   element.style.boxShadow = `50px 50px 48px rgba(0,0,0,0.4) inset,-50px -50px 48px rgba(0,0,0,0.4) inset, ${shadowX}px ${shadowY}px 32px rgba(0,0,0,${0.7-opacity})`
}

function trackCursor(element,cursorEvent){
   element.style.left = `${cursorEvent.clientX-200}px`
   element.style.top = `${cursorEvent.clientY-200}px`
}

function setLightShadow(element,light){
   const light_top = light.getBoundingClientRect().top
   const element_top = element.getBoundingClientRect().top
   const shadowY =    (element_top - light_top) * 0.5
   const light_left = light.getBoundingClientRect().left
   const element_left = element.getBoundingClientRect().left
   const shadowX =    (element_left - light_left) * 0.5
   const opacity = Math.sqrt(shadowX**2 + shadowY**2) / 200
   element.style.boxShadow = `50px 50px 48px rgba(0,0,0,0.4) inset,-50px -50px 48px rgba(0,0,0,0.4) inset, ${shadowX}px ${shadowY}px 32px rgba(0,0,0,${0.7-opacity})`
}

function removeLightShadow(element){
  element.style.boxShadow = "50px 50px 48px rgba(0,0,0,0.4) inset,-50px -50px 48px rgba(0,0,0,0.4) inset"
}


function detectCollision(el1,el2){
  const el1Rect = el1.getBoundingClientRect()
  const el2Rect = el2.getBoundingClientRect()
  const xCol = el1Rect.left < el2Rect.left + el2Rect.width && el2Rect.left < el1Rect.left + el1Rect.width 
  const yCol = el1Rect.top < el2Rect.top + el2Rect.height && el2Rect.top < el1Rect.top + el1Rect.height 
  return xCol && yCol
}




