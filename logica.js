const Trocarimg = ()=>{
    let imagem = [
        'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'];
    
    let slide = document.getElementById('slide');
    let btn = document.getElementById('btn');
    let btn2 = document.getElementById('btn2');
    let i = 0;
    slide.src = imagem[i]
    
    btn.addEventListener('click',()=>{
        i++;
        slide.src= imagem[i]
        if(i >= imagem.length){
            i = 0;
            slide.src = imagem[i]
        }
    })
    
    btn2.addEventListener('click',()=>{
        i = i - 1;
        slide.src = imagem[i]
        if(i < 0){
            i = 2 
            slide.src = imagem[i]
        }
    })
}
Trocarimg();