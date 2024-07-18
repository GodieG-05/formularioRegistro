document.getElementById('contactForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const data = {
        name: name,
        email: email,
        message: message
    };

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Error en la petición');
        }

        const result = await response.json();
        document.getElementById('response').innerText = 'Mensaje enviado exitosamente!';
    } catch (error) {
        document.getElementById('response').innerText = 'Hubo un error al enviar el mensaje.';
    }
});
