document.addEventListener('DOMContentLoaded', (event) => {
    setTimeout(() => {
        const textToCopy = 'jl.vinhos@gmail.com';
        navigator.clipboard.writeText(textToCopy).then(() => {
            const messageElement = document.getElementById('message');
            messageElement.classList.add('show');
            
            // Ocultar el mensaje después de 3 segundos
            setTimeout(() => {
                messageElement.classList.remove('show');
            }, 3000);
        }).catch(err => {
            console.error('Error copying text: ', err);
        });
    }, 500);
});