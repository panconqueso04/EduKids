// Función para cambiar el idioma
function setLanguage(language) {
    // Guardar el idioma seleccionado en localStorage
    localStorage.setItem('language', language);

    // Cambiar el texto según el idioma
    if (language === 'en') {
        document.querySelector('h1').textContent = 'Terms and Conditions';
        document.querySelector('h2:nth-of-type(1)').textContent = '1. Introduction';
        document.querySelector('p:nth-of-type(1)').innerHTML = 'Welcome to <strong>EduKids</strong>. By accessing and using this platform, you agree to comply with the following terms and conditions. If you disagree with any of them, please do not use this website.';

        document.querySelector('h2:nth-of-type(2)').textContent = '2. Use of the platform';
        document.querySelector('p:nth-of-type(2)').innerHTML = '<strong>EduKids</strong> offers interactive educational materials for children, with a special focus on language development and neurodiversity. Users must use the platform only for educational purposes and in accordance with Peruvian law. Any fraudulent, illegal use, or use that could harm others is prohibited. Users must supervise minors during their interaction with the content.';

        document.querySelector('h2:nth-of-type(3)').textContent = '3. Intellectual Property';
        document.querySelector('p:nth-of-type(3)').innerHTML = 'All content on <strong>EduKids</strong> (games, texts, graphics, videos, etc.) is owned by the platform or its licensors. It is forbidden to copy, reproduce, or distribute any part of the content without authorization.';

        document.querySelector('h2:nth-of-type(4)').textContent = '4. Registration and Security';
        document.querySelector('p:nth-of-type(4)').innerHTML = 'Some services may require registration. Users are responsible for the security of their account. <strong>EduKids</strong> is not responsible for the misuse of an unprotected account.';

        // Modificar el enlace de la política de privacidad
        document.querySelector('#privacy-policy').innerHTML = 'For more information, please review our <a href="privacy-policy.html" id="privacy-link">Privacy Policy</a>.';

        document.querySelector('h2:nth-of-type(6)').textContent = '6. Limitation of Liability';
        document.querySelector('p:nth-of-type(6)').innerHTML = '<strong>EduKids</strong> does not guarantee that the platform will be error-free or uninterrupted. We are not responsible for damages resulting from the use or inability to use the platform.';

        document.querySelector('h2:nth-of-type(7)').textContent = '7. Modifications to Terms';
        document.querySelector('p:nth-of-type(7)').innerHTML = '<strong>EduKids</strong> reserves the right to modify these terms at any time. Users should periodically review this page to stay informed of any changes.';

        document.querySelector('h2:nth-of-type(8)').textContent = '8. Links to Third-Party Sites';
        document.querySelector('p:nth-of-type(8)').innerHTML = 'The platform may contain links to third-party sites. <strong>EduKids</strong> is not responsible for the content or privacy policies of these sites.';

        document.querySelector('h2:nth-of-type(9)').textContent = '9. Service Termination';
        document.querySelector('p:nth-of-type(9)').innerHTML = '<strong>EduKids</strong> may suspend or terminate access to any user who violates these terms, without prior notice.';

        document.querySelector('h2:nth-of-type(10)').textContent = '10. Jurisdiction and Applicable Law';
        document.querySelector('p:nth-of-type(10)').innerHTML = 'These terms are governed by the laws of Peru. Any dispute will be resolved in the competent courts of Peru.';

        // Modificar el correo electrónico con enlace
        document.querySelector('#contact-info').innerHTML = 'For any questions related to these terms, you can contact us at <a href="mailto:contacto.amparito04@gmail.com" id="contact-email">contacto.amparito04@gmail.com</a>.';

        // Cambiar la clase 'selected' a la bandera correspondiente
        document.getElementById('switch-en').classList.add('selected');
        document.getElementById('switch-es').classList.remove('selected');

    } else if (language === 'es') {
        document.querySelector('h1').textContent = 'Términos y Condiciones';
        document.querySelector('h2:nth-of-type(1)').textContent = '1. Introducción';
        document.querySelector('p:nth-of-type(1)').innerHTML = 'Bienvenido/a a <strong>EduKids</strong>. Al acceder y utilizar esta plataforma, aceptas cumplir con los siguientes términos y condiciones. Si no estás de acuerdo con alguno de ellos, por favor, no utilices este sitio web.';

        document.querySelector('h2:nth-of-type(2)').textContent = '2. Uso de la plataforma';
        document.querySelector('p:nth-of-type(2)').innerHTML = '<strong>EduKids</strong> ofrece materiales educativos interactivos para niños, con un enfoque especial en el desarrollo del lenguaje y la neurodiversidad. Los usuarios deben utilizar la plataforma solo para fines educativos y conforme a las leyes de Perú. Cualquier uso fraudulento, ilícito o que pueda dañar a terceros está prohibido. Los usuarios deben supervisar a los menores durante su interacción con los contenidos.';

        document.querySelector('h2:nth-of-type(3)').textContent = '3. Propiedad intelectual';
        document.querySelector('p:nth-of-type(3)').innerHTML = 'Todos los contenidos de <strong>EduKids</strong> (juegos, textos, gráficos, videos, etc.) son propiedad de la plataforma o sus licenciantes. Está prohibido copiar, reproducir o distribuir cualquier parte del contenido sin autorización.';

        document.querySelector('h2:nth-of-type(4)').textContent = '4. Registro y seguridad';
        document.querySelector('p:nth-of-type(4)').innerHTML = 'Algunos servicios pueden requerir registro. Los usuarios son responsables de la seguridad de su cuenta. <strong>EduKids</strong> no se hace responsable por el uso indebido de una cuenta no protegida.';

        // Modificar el enlace de la política de privacidad en español
        document.querySelector('#privacy-policy').innerHTML = 'Para más información, revisa nuestra <a href="politica-privacidad.html" id="privacy-link">Política de Privacidad</a>.';

        document.querySelector('h2:nth-of-type(6)').textContent = '6. Limitación de responsabilidad';
        document.querySelector('p:nth-of-type(6)').innerHTML = '<strong>EduKids</strong> no garantiza que la plataforma esté libre de errores o interrupciones. No nos hacemos responsables por daños derivados del uso o la incapacidad de usar la plataforma.';

        document.querySelector('h2:nth-of-type(7)').textContent = '7. Modificaciones a los términos';
        document.querySelector('p:nth-of-type(7)').innerHTML = '<strong>EduKids</strong> se reserva el derecho de modificar estos términos en cualquier momento. Los usuarios deben revisar periódicamente esta página para estar al tanto de los cambios.';

        document.querySelector('h2:nth-of-type(8)').textContent = '8. Enlaces a sitios de terceros';
        document.querySelector('p:nth-of-type(8)').innerHTML = 'La plataforma puede contener enlaces a sitios de terceros. <strong>EduKids</strong> no se hace responsable por el contenido ni las políticas de privacidad de estos sitios.';

        document.querySelector('h2:nth-of-type(9)').textContent = '9. Terminación del servicio';
        document.querySelector('p:nth-of-type(9)').innerHTML = '<strong>EduKids</strong> puede suspender o terminar el acceso de cualquier usuario que incumpla estos términos, sin previo aviso.';

        document.querySelector('h2:nth-of-type(10)').textContent = '10. Jurisdicción y ley aplicable';
        document.querySelector('p:nth-of-type(10)').innerHTML = 'Estos términos se rigen por las leyes de Perú. Cualquier disputa se resolverá en los tribunales competentes de Perú.';

        // Modificar el correo electrónico con enlace en español
        document.querySelector('#contact-info').innerHTML = 'Para cualquier consulta relacionada con estos términos, puedes contactarnos a través de <a href="mailto:contacto.amparito04@gmail.com" id="contact-email">contacto.amparito04@gmail.com</a>.';

        // Cambiar la clase 'selected' a la bandera correspondiente
        document.getElementById('switch-es').classList.add('selected');
        document.getElementById('switch-en').classList.remove('selected');
    }
}

// Función para cargar el idioma seleccionado al cargar la página
function loadLanguage() {
    const language = localStorage.getItem('language') || 'es'; // Español por defecto
    setLanguage(language);
}

// Cargar el idioma cuando la página se cargue
document.addEventListener('DOMContentLoaded', loadLanguage);
