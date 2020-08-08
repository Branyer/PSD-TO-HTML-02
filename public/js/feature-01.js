const buttonsTab = document.querySelectorAll('.button-tab');
const containerInfo = document.querySelectorAll('.container-tab-info');

buttonsTab.forEach((button, index) => {
    
        button.addEventListener('click', () => {

            console.log('click')

            button.classList.add('selected');
            containerInfo[index].classList.remove('not_show', 'before', 'next');

            if(index-1<0){
                containerInfo[containerInfo.length-1].classList.add('before', 'not_show');
                containerInfo[containerInfo.length-1].classList.remove('next');
                buttonsTab[containerInfo.length-1].classList.remove('selected');

                containerInfo[index+1].classList.add('next', 'not_show');
                containerInfo[index+1].classList.remove('selected', 'before');
                buttonsTab[index+1].classList.remove('selected');
           
            } else if (index+1===containerInfo.length){

                containerInfo[0].classList.add('next', 'not_show');
                containerInfo[0].classList.remove('selected', 'before');
                buttonsTab[0].classList.remove('selected');

                containerInfo[index-1].classList.add('before', 'not_show');
                containerInfo[index-1].classList.remove('selected', 'next');
                buttonsTab[index-1].classList.remove('selected');

            } else {

                containerInfo[index+1].classList.add('next', 'not_show');
                containerInfo[index+1].classList.remove('selected', 'before');
                buttonsTab[index+1].classList.remove('selected');

                containerInfo[index-1].classList.add('before', 'not_show');
                containerInfo[index-1].classList.remove('selected', 'next');
                buttonsTab[index-1].classList.remove('selected');
            }

        })
})