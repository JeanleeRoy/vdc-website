const footer = document.querySelector('footer');

const footerContent = () => (`
    <div class="footer-container">
        <div class="company-description">
            <img src="/img/logo_VDC.png" alt="CompAñía VDC">
            <p>Somos una empresa de expertos en construcción de todo tipo de edificios desde la elaboración
                de estudios de pre factibilidad, desarrollo del proyecto hasta la ejecución de obra.</p>
        </div>
        <div class="footer-useful">
            <div class="footer-contact foo-use">
                <h3><a href="/contacto.html">Contáctanos</a></h3>
                <ul>
                    <li><img src="/img/map-icon.png" alt="Dirección"> Av. Mariscal Castilla 1456, Oficina 101, Santiago de Surco</li>
                    <li><img src="/img/phone-icon.png" alt="Teléfono"> +51 960189815</li>
                    <li><img src="/img/at-icon.png" alt="mail"> contacto@vdcconsultores.com</li>
                </ul>
            </div>
            <div class="footer-services foo-use">
                <h3><a href="/servicios.html">Servicios</a></h3>
                <ul>
                    <li><a href="/servicios/supervicion.html">Supervisión de proyectos y gerenciamiento de obras de construcción</a></li>
                    <li><a href="/servicios/diseno-arquitectonico.html">Diseño arquitectónico de proyectos</a></li>
                    <li><a>Ejecución de obras de construcción</a></li>
                </ul>
            </div>
            <div class="footer-company foo-use">
                <h3>Compañía</h3>
                <ul>
                    <li><a href="/nosotros.html">Quiénes somos</a></li>
                    <!-- <li><a href="/proyectos.html">Proyectos</a></li> -->
                    <li><a href="/contacto.html">Clientes</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="footer-info">
        <div class="footer-social">
            <!-- <a href="https://www.facebook.com/" target="_blank"><img src="/img/facebook.png" alt=""></a> -->
            <!-- <a href="https://twitter.com/" target="_blank"><img src="/img/twitter.png" alt=""></a> -->
            <a href="https://www.linkedin.com/company/vdcproyectos" target="_blank"><img src="/img/linkedin.png" alt=""></a>
        </div>
        <p class="footer-copyright">
            © VDC Proyectos 2022 &nbsp;|&nbsp; Desarrollado por 
            <a href="http://" target="_blank">Jesús Sullón</a>, 
            <a href="http://" target="_blank">Jeanlee Barreto</a>
        </p>
    </div>
`)

footer.innerHTML = footerContent()