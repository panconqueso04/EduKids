// Función para cambiar el idioma
function setLanguage(language) {
    // Guardar el idioma seleccionado en localStorage
    localStorage.setItem('language', language);

    // Cambiar el texto según el idioma
    if (language === 'en') {
        document.querySelector('h1').textContent = 'Privacy Policy';

        document.querySelector('h2:nth-of-type(1)').textContent = '1. Introduction';
        document.querySelector('p:nth-of-type(1)').innerHTML = 'At <strong>EduKids</strong>, we respect and value your privacy. This privacy policy explains how we collect, use, store, and protect your personal information when you use our platform. By accessing and using our website, you agree to the practices described in this policy.';

        document.querySelector('h2:nth-of-type(2)').textContent = '2. Information we collect';
        document.querySelector('p:nth-of-type(2)').innerHTML = 'We collect personal information in various ways, including when users register on the platform, interact with our content, or contact us. The information we collect includes, but is not limited to:';
        document.querySelector('p:nth-of-type(3)').innerHTML = '• Name and surname.';
        document.querySelector('p:nth-of-type(4)').innerHTML = '• Email address.';
        document.querySelector('p:nth-of-type(5)').innerHTML = '• Information about platform usage.';
        document.querySelector('p:nth-of-type(6)').innerHTML = '• Data related to minors using the platform (only with the proper authorization from parents or guardians).';

        document.querySelector('h2:nth-of-type(3)').textContent = '3. Use of Information';
        document.querySelector('p:nth-of-type(7)').innerHTML = 'The collected information is used for the following purposes:';
        document.querySelector('p:nth-of-type(8)').innerHTML = '• Provide access to and support for the educational content on the platform.';
        document.querySelector('p:nth-of-type(9)').innerHTML = '• Personalize the user experience.';
        document.querySelector('p:nth-of-type(10)').innerHTML = '• Send notifications related to platform updates, educational activities, or new features of <strong>EduKids</strong>.';
        document.querySelector('p:nth-of-type(11)').innerHTML = '• Perform internal analysis and improve the quality of the service.';

        document.querySelector('h2:nth-of-type(4)').textContent = '4. How we protect your information';
        document.querySelector('p:nth-of-type(12)').innerHTML = 'We implement security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, due to the nature of the internet, we cannot guarantee the absolute security of data transmitted over the network.';

        document.querySelector('h2:nth-of-type(5)').textContent = '5. Sharing your information';
        document.querySelector('p:nth-of-type(13)').innerHTML = '<strong>EduKids</strong> does not share, sell, or rent your personal information to third parties without your consent, except in the following cases:';
        document.querySelector('p:nth-of-type(14)').innerHTML = '• If required by law or a legal process.';
        document.querySelector('p:nth-of-type(15)').innerHTML = '• If necessary to protect the rights, property, or safety of <strong>EduKids</strong>, its users, or the public.';

        document.querySelector('h2:nth-of-type(6)').textContent = '6. Use of cookies';
        document.querySelector('p:nth-of-type(16)').innerHTML = 'At <strong>EduKids</strong>, we use cookies to enhance the user experience. Cookies are small files stored on your device that allow us to recognize your browser and provide a personalized experience. You can configure your browser to reject cookies, but this may affect your ability to use some platform features.';

        document.querySelector('h2:nth-of-type(7)').textContent = '7. User Rights';
        document.querySelector('p:nth-of-type(17)').innerHTML = 'Users have the right to:';
        document.querySelector('p:nth-of-type(18)').innerHTML = '• Access, correct, or delete their personal information.';
        document.querySelector('p:nth-of-type(19)').innerHTML = '• Cancel their account and stop receiving promotional communications at any time.';
        document.querySelector('p:nth-of-type(20)').innerHTML = '• Request more information about how their personal information is handled.';
        document.querySelector('p:nth-of-type(21)').innerHTML = 'To exercise these rights, please contact us through the channels provided in the <a href="AcercaDe.html">Contact</a> section.';

        document.querySelector('h2:nth-of-type(8)').textContent = '8. Links to third-party sites';
        document.querySelector('p:nth-of-type(22)').innerHTML = 'The platform may contain links to third-party websites. We are not responsible for the privacy practices or content of these sites. We recommend reading the privacy policies of each website you visit.';

        document.querySelector('h2:nth-of-type(9)').textContent = '9. Changes to the privacy policy';
        document.querySelector('p:nth-of-type(23)').innerHTML = '<strong>EduKids</strong> reserves the right to modify this privacy policy at any time. Changes will be effective as soon as they are posted on this page. It is recommended that you review this policy regularly to stay informed of any changes.';

        document.querySelector('h2:nth-of-type(10)').textContent = '10. Contact';
        document.querySelector('p:nth-of-type(24)').innerHTML = 'If you have any questions or concerns about this privacy policy, please contact us at <a href="mailto:contacto.amparito04@gmail.com" id="contact-email">contacto.amparito04@gmail.com</a>.';

        // Cambiar la clase 'selected' a la bandera correspondiente
        document.getElementById('switch-en').classList.add('selected');
        document.getElementById('switch-es').classList.remove('selected');

    } else if (language === 'es') {
        document.querySelector('h1').textContent = 'Política de Privacidad';

        document.querySelector('h2:nth-of-type(1)').textContent = '1. Introducción';
        document.querySelector('p:nth-of-type(1)').innerHTML = 'En <strong>EduKids</strong>, respetamos y valoramos tu privacidad. Esta política de privacidad explica cómo recopilamos, usamos, almacenamos y protegemos tu información personal cuando usas nuestra plataforma. Al acceder y utilizar nuestro sitio web, aceptas las prácticas descritas en esta política.';

        document.querySelector('h2:nth-of-type(2)').textContent = '2. Información que recopilamos';
        document.querySelector('p:nth-of-type(2)').innerHTML = 'Recopilamos información personal de diversas maneras, incluyendo cuando los usuarios se registran en la plataforma, interactúan con nuestro contenido, o nos contactan. La información que recopilamos incluye, pero no se limita a:';
        document.querySelector('p:nth-of-type(3)').innerHTML = '• Nombre y apellidos.';
        document.querySelector('p:nth-of-type(4)').innerHTML = '• Correo electrónico.';
        document.querySelector('p:nth-of-type(5)').innerHTML = '• Información sobre el uso de la plataforma.';
        document.querySelector('p:nth-of-type(6)').innerHTML = '• Datos relacionados con los menores que utilizan la plataforma (solo con la debida autorización de los padres o tutores).';

        document.querySelector('h2:nth-of-type(3)').textContent = '3. Uso de la información';
        document.querySelector('p:nth-of-type(7)').innerHTML = 'La información recopilada se utiliza para los siguientes fines:';
        document.querySelector('p:nth-of-type(8)').innerHTML = '• Proveer acceso y soporte a los contenidos educativos de la plataforma.';
        document.querySelector('p:nth-of-type(9)').innerHTML = '• Personalizar la experiencia del usuario.';
        document.querySelector('p:nth-of-type(10)').innerHTML = '• Enviarte notificaciones relacionadas con actualizaciones de la plataforma, actividades educativas o novedades de <strong>EduKids</strong>.';
        document.querySelector('p:nth-of-type(11)').innerHTML = '• Realizar análisis internos y mejorar la calidad del servicio.';

        document.querySelector('h2:nth-of-type(4)').textContent = '4. Cómo protegemos tu información';
        document.querySelector('p:nth-of-type(12)').innerHTML = 'Implementamos medidas de seguridad para proteger tu información personal contra accesos no autorizados, alteraciones, divulgación o destrucción. Sin embargo, debido a la naturaleza de Internet, no podemos garantizar la seguridad absoluta de los datos transmitidos a través de la red.';

        document.querySelector('h2:nth-of-type(5)').textContent = '5. Compartir tu información';
        document.querySelector('p:nth-of-type(13)').innerHTML = '<strong>EduKids</strong> no comparte, vende ni alquila tu información personal a terceros sin tu consentimiento, salvo en los siguientes casos:';
        document.querySelector('p:nth-of-type(14)').innerHTML = '• Si es necesario para cumplir con la ley o un proceso legal.';
        document.querySelector('p:nth-of-type(15)').innerHTML = '• Si es necesario para proteger los derechos, propiedad o seguridad de <strong>EduKids</strong>, sus usuarios o el público.';

        document.querySelector('h2:nth-of-type(6)').textContent = '6. Uso de cookies';
        document.querySelector('p:nth-of-type(16)').innerHTML = 'En <strong>EduKids</strong> utilizamos cookies para mejorar la experiencia del usuario. Las cookies son pequeños archivos que se almacenan en tu dispositivo y nos permiten reconocer tu navegador y ofrecerte una experiencia personalizada. Puedes configurar tu navegador para rechazar las cookies, pero esto puede afectar tu capacidad para usar algunas funcionalidades de la plataforma.';

        document.querySelector('h2:nth-of-type(7)').textContent = '7. Derechos de los usuarios';
        document.querySelector('p:nth-of-type(17)').innerHTML = 'Los usuarios tienen derecho a:';
        document.querySelector('p:nth-of-type(18)').innerHTML = '• Acceder, corregir o eliminar su información personal.';
        document.querySelector('p:nth-of-type(19)').innerHTML = '• Cancelar su cuenta y dejar de recibir comunicaciones promocionales en cualquier momento.';
        document.querySelector('p:nth-of-type(20)').innerHTML = '• Solicitar más información sobre cómo se maneja su información personal.';
        document.querySelector('p:nth-of-type(21)').innerHTML = 'Para ejercer estos derechos, por favor contáctanos a través de los canales proporcionados en la sección de <a href="AcercaDe.html">Contacto</a>.';

        document.querySelector('h2:nth-of-type(8)').textContent = '8. Enlaces a sitios de terceros';
        document.querySelector('p:nth-of-type(22)').innerHTML = 'La plataforma puede contener enlaces a sitios web de terceros. No somos responsables de las prácticas de privacidad ni del contenido de estos sitios. Te recomendamos leer las políticas de privacidad de cada sitio web que visites.';

        document.querySelector('h2:nth-of-type(9)').textContent = '9. Cambios en la política de privacidad';
        document.querySelector('p:nth-of-type(23)').innerHTML = '<strong>EduKids</strong> se reserva el derecho de modificar esta política de privacidad en cualquier momento. Los cambios serán efectivos tan pronto como se publiquen en esta página. Se recomienda revisar esta política periódicamente para estar informado de cualquier cambio.';

        document.querySelector('h2:nth-of-type(10)').textContent = '10. Contacto';
        document.querySelector('p:nth-of-type(24)').innerHTML = 'Si tienes alguna pregunta o inquietud sobre esta política de privacidad, por favor contáctanos en <a href="mailto:contacto.amparito04@gmail.com" id="contact-email">contacto.amparito04@gmail.com</a>.';

        // Cambiar la clase 'selected' a la bandera correspondiente
        document.getElementById('switch-es').classList.add('selected');
        document.getElementById('switch-en').classList.remove('selected');
    }
}

// Verificar el idioma almacenado en localStorage al cargar la página
window.addEventListener('DOMContentLoaded', (event) => {
    const savedLanguage = localStorage.getItem('language') || 'es'; // Por defecto es español
    setLanguage(savedLanguage);
});










// Función para cargar el idioma seleccionado al cargar la página
function loadLanguage() {
    const language = localStorage.getItem('language') || 'es'; // Español por defecto
    setLanguage(language);
}

// Cargar el idioma cuando la página se cargue
document.addEventListener('DOMContentLoaded', loadLanguage);
