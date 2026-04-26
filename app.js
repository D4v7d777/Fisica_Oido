const modules = [
  {
    title: "Anatomía y ruta del sonido",
    sheet: "Hojas 2 y 3",
    pageIndex: 1,
    summary:
      "Parte del PDF original y lo expande con la función física del tímpano, los huesecillos y la cóclea.",
    bullets: [
      "Oído externo, medio e interno.",
      "Martillo, yunque y estribo.",
      "Viaje del sonido hasta el nervio coclear."
    ]
  },
  {
    title: "Magnitudes acústicas y cóclea",
    sheet: "Hojas 4 y 5",
    pageIndex: 3,
    summary:
      "Resume frecuencia, longitud de onda, intensidad, decibeles, tonotopía y audición binaural.",
    bullets: [
      "Periodo, frecuencia y longitud de onda.",
      "Resonancia y selectividad frecuencial.",
      "Diferencias entre ambos oídos."
    ]
  },
  {
    title: "Doppler, Mach y cuidado auditivo",
    sheet: "Hojas 6, 7 y 8",
    pageIndex: 5,
    summary:
      "Une el cambio de tono por movimiento, las ondas de choque y la prevención del daño auditivo.",
    bullets: [
      "Fórmulas del Doppler sonoro.",
      "Cono de Mach y boom sónico.",
      "Niveles de ruido y protección."
    ]
  }
];

const labData = [
  {
    title: "Efecto Doppler mejorado",
    short: "Relativo al movimiento",
    pageIndex: 5,
    description:
      "Muestra el cambio de frecuencia observada cuando la fuente se mueve y comprime o estira los frentes de onda.",
    path: "animaciones/efecto-doppler.html",
    tag: "HTML Canvas"
  },
  {
    title: "Ondas de choque",
    short: "Régimen supersónico",
    pageIndex: 6,
    description:
      "Explica cómo los frentes de onda se apilan cuando la fuente supera la rapidez del sonido y forma un cono de Mach.",
    path: "animaciones/ondas-choque.html",
    tag: "Mach y sobrepresión"
  },
  {
    title: "Transducción auditiva",
    short: "De vibración a señal",
    pageIndex: 2,
    description:
      "Simula el paso desde el aire en el conducto auditivo hasta la vibración del tímpano, los huesecillos y la cóclea.",
    path: "animaciones/transduccion-oido.html",
    tag: "Cadena auditiva"
  },
  {
    title: "Tonotopía coclear",
    short: "Mapa de frecuencias",
    pageIndex: 4,
    description:
      "Permite barrer frecuencias y observar cómo la zona de máxima respuesta cambia desde la base hacia el ápice.",
    path: "animaciones/coclea-tonotopia.html",
    tag: "Base vs. ápice"
  },
  {
    title: "Resonancia del conducto auditivo",
    short: "Filtro natural",
    pageIndex: 3,
    description:
      "Visualiza cómo un conducto con cierta longitud responde mejor a algunas frecuencias y realza parte del habla.",
    path: "animaciones/resonancia-conducto.html",
    tag: "Resonancia"
  },
  {
    title: "Localización binaural",
    short: "Dos oídos, una dirección",
    pageIndex: 4,
    description:
      "Compara retraso e intensidad entre ambos oídos para mostrar cómo el cerebro estima la dirección del sonido.",
    path: "animaciones/localizacion-binaural.html",
    tag: "Espacio sonoro"
  }
];

const notebookPages = [
  {
    tab: "Portada",
    label: "Hoja 1",
    title: "Panorama",
    html: String.raw`
      <div class="paper-content">
        <div class="paper-meta">
          <span class="page-tag">Portada del cuaderno</span>
          <span class="page-number-stamp">Hoja 1</span>
        </div>
        <h3 class="paper-title">Física del oído: del aire al cerebro</h3>
        <p class="paper-subtitle">
          Esta libreta parte del PDF del oído que estaba en la carpeta y lo convierte en
          una secuencia completa de aprendizaje: anatomía, propagación de ondas,
          transducción, localización espacial, efecto Doppler, ondas de choque y cuidado auditivo.
        </p>

        <div class="paper-grid">
          <div class="paper-main">
            <section class="summary-bar">
              <h4>Qué hace este cuaderno</h4>
              <p>
                Une la biología básica del oído con la física del sonido. La idea central es
                seguir una misma pregunta: <span class="highlight-text">¿cómo una variación de presión
                en el aire se transforma en una experiencia consciente de tono, volumen y dirección?</span>
              </p>
            </section>

            <div class="trio-grid">
              <article class="info-tile">
                <strong>Base del PDF</strong>
                <p>Externo, medio, interno, huesecillos, cóclea y nervio coclear.</p>
              </article>
              <article class="info-tile">
                <strong>Ampliación física</strong>
                <p>Frecuencia, longitud de onda, intensidad, resonancia, impedancia y tonotopía.</p>
              </article>
              <article class="info-tile">
                <strong>Fenómenos especiales</strong>
                <p>Doppler, ondas de choque, boom sónico y prevención del daño por ruido.</p>
              </article>
            </div>

            <section class="paper-section">
              <h4>Cómo recorrerlo</h4>
              <ol class="step-list">
                <li>Empieza por la anatomía para ubicar cada región del oído.</li>
                <li>Luego pasa al viaje del sonido y a las magnitudes físicas.</li>
                <li>Después revisa la cóclea y la audición binaural.</li>
                <li>Cierra con el laboratorio sobre Doppler, Mach y protección auditiva.</li>
              </ol>
            </section>

            <section class="quote-strip">
              <h4>Idea guía</h4>
              <p>
                El oído no “escucha” objetos: detecta patrones temporales y espaciales en una
                onda mecánica, y el cerebro interpreta esos patrones como voces, música, dirección o peligro.
              </p>
            </section>
          </div>

          <aside class="paper-side">
            <figure class="figure-card">
              <h4>Ilustración principal</h4>
              <img src="assets/images/portada-oido.svg" alt="Portada ilustrada del cuaderno del oído">
              <p class="caption">
                Portada original creada para este proyecto. Resume oído, ondas, cóclea y ritmo visual de libreta escolar.
              </p>
            </figure>

            <article class="note-card">
              <h4>Lo nuevo frente al proyecto anterior</h4>
              <ul class="key-list">
                <li>Un cuaderno único con pestañas laterales.</li>
                <li>Laboratorios centrados en el oído y el sonido.</li>
                <li>Imágenes y diagramas creados para esta carpeta.</li>
                <li>Chatbot con personajes especializados en acústica.</li>
              </ul>
            </article>
          </aside>
        </div>
      </div>
    `
  },
  {
    tab: "Anatomía",
    label: "Hoja 2",
    title: "Mapa del oído",
    html: String.raw`
      <div class="paper-content">
        <div class="paper-meta">
          <span class="page-tag">Anatomía base</span>
          <span class="page-number-stamp">Hoja 2</span>
        </div>
        <h3 class="paper-title">Tres regiones, una misma cadena física</h3>
        <p class="paper-subtitle">
          El PDF original deja claro que el oído humano se divide en <strong>oído externo,
          medio e interno</strong>. Esa división no es solo anatómica: también separa etapas distintas
          del transporte, la amplificación y la conversión del sonido.
        </p>

        <div class="paper-grid">
          <div class="paper-main">
            <section class="paper-section">
              <h4>Qué aporta cada región</h4>
              <div class="trio-grid">
                <article class="info-tile">
                  <strong>Oído externo</strong>
                  <p>Recoge y canaliza variaciones de presión desde el ambiente hasta el tímpano.</p>
                </article>
                <article class="info-tile">
                  <strong>Oído medio</strong>
                  <p>Convierte la vibración de la membrana timpánica en una transmisión mecánica más eficiente.</p>
                </article>
                <article class="info-tile">
                  <strong>Oído interno</strong>
                  <p>Transforma el movimiento del fluido coclear en señales eléctricas para el sistema nervioso.</p>
                </article>
              </div>
            </section>

            <section class="paper-section">
              <h4>Lectura física del esquema</h4>
              <p>
                El <span class="highlight-text">pabellón auricular</span> ayuda a captar sonido y
                aporta pistas de dirección. El <span class="highlight-text">conducto auditivo</span>
                actúa como un tubo resonante. El <span class="highlight-text">tímpano</span> vibra
                con el cambio de presión y entrega esa vibración a la cadena de huesecillos.
                Finalmente, la energía entra a la cóclea y se reparte a lo largo de la membrana basilar.
              </p>
            </section>

            <section class="formula-box">
              <h4>La materia prima del oído</h4>
              <p>Desde el punto de vista físico, lo que entra al oído es una perturbación mecánica:</p>
              <div class="math-display">$$\text{sonido} = \text{oscilaciones de presión en un medio material}$$</div>
              <p>
                Por eso el sonido necesita aire, agua o sólidos; no se propaga en el vacío.
              </p>
            </section>
          </div>

          <aside class="paper-side">
            <figure class="figure-card">
              <h4>Diagrama recreado</h4>
              <img src="assets/images/anatomia-oido.svg" alt="Esquema original del oído externo, medio e interno">
              <p class="caption">
                Recreación propia del mapa anatómico que el PDF presenta de forma básica en sus primeras páginas.
              </p>
            </figure>

            <article class="note-card">
              <h4>Elementos nombrados por el PDF</h4>
              <ul class="key-list">
                <li>Pabellón auricular.</li>
                <li>Conducto auditivo.</li>
                <li>Membrana timpánica.</li>
                <li>Martillo, yunque y estribo.</li>
                <li>Caracol o cóclea.</li>
                <li>Nervio coclear.</li>
              </ul>
            </article>
          </aside>
        </div>
      </div>
    `
  },
  {
    tab: "Ruta del sonido",
    label: "Hoja 3",
    title: "Del tímpano al nervio coclear",
    html: String.raw`
      <div class="paper-content">
        <div class="paper-meta">
          <span class="page-tag">Cadena de transmisión</span>
          <span class="page-number-stamp">Hoja 3</span>
        </div>
        <h3 class="paper-title">El viaje del sonido dentro del oído</h3>
        <p class="paper-subtitle">
          La última página del PDF resume un proceso muy importante: la onda sonora entra por el
          conducto auditivo, hace vibrar el tímpano, pasa por los huesecillos y termina generando
          actividad en el nervio coclear.
        </p>

        <div class="paper-grid">
          <div class="paper-main">
            <section class="paper-section">
              <h4>Secuencia paso a paso</h4>
              <ol class="step-list">
                <li>Las ondas sonoras modifican la presión del aire dentro del conducto auditivo.</li>
                <li>El tímpano responde con una vibración forzada, análoga a una membrana tensada.</li>
                <li>Martillo, yunque y estribo transmiten esa vibración y mejoran el acoplamiento hacia el oído interno.</li>
                <li>La ventana oval impulsa el fluido coclear y aparece una onda viajera dentro de la cóclea.</li>
                <li>Las células ciliadas convierten esa deformación mecánica en señales eléctricas que viajan al cerebro.</li>
              </ol>
            </section>

            <section class="paper-section">
              <h4>Por qué existen los huesecillos</h4>
              <p>
                El oído medio compensa el cambio entre un medio gaseoso y un medio líquido. Si la vibración
                del aire entrara directamente a la cóclea, gran parte de la energía se reflejaría. La cadena de
                huesecillos y la diferencia de áreas entre tímpano y ventana oval mejoran ese acoplamiento.
              </p>
            </section>

            <section class="formula-box">
              <h4>Frecuencia y longitud de onda</h4>
              <p>La forma temporal de la onda que llega al tímpano está ligada a una frecuencia y una longitud de onda:</p>
              <div class="math-display">$$\lambda = \frac{v}{f}$$</div>
              <p>
                En aire a temperatura ambiente suele usarse <strong>$$v \approx 343 \text{ m/s}$$</strong>.
                Cuanto mayor es la frecuencia, menor es la longitud de onda.
              </p>
            </section>
          </div>

          <aside class="paper-side">
            <figure class="figure-card">
              <h4>Cadena auditiva</h4>
              <img src="assets/images/cadena-auditiva.svg" alt="Transmisión desde el tímpano hasta la cóclea">
              <p class="caption">
                El esquema resalta la transición entre presión en aire, vibración mecánica y movimiento del fluido coclear.
              </p>
            </figure>

            <article class="note-card">
              <h4>Conexión con el laboratorio</h4>
              <p>
                La animación <strong>Transducción auditiva</strong> recrea esta misma ruta con controles de frecuencia y amplitud.
              </p>
            </article>
          </aside>
        </div>
      </div>
    `
  },
  {
    tab: "Magnitudes",
    label: "Hoja 4",
    title: "Frecuencia, intensidad y resonancia",
    html: String.raw`
      <div class="paper-content">
        <div class="paper-meta">
          <span class="page-tag">Física de ondas</span>
          <span class="page-number-stamp">Hoja 4</span>
        </div>
        <h3 class="paper-title">Las magnitudes que el oído termina interpretando</h3>
        <p class="paper-subtitle">
          Aunque el cerebro habla de tono, timbre o volumen, el oído recibe primero variables físicas:
          periodo, frecuencia, amplitud, intensidad y estructura espectral.
        </p>

        <div class="paper-grid">
          <div class="paper-main">
            <section class="paper-section">
              <h4>Magnitudes básicas</h4>
              <table class="paper-table">
                <thead>
                  <tr>
                    <th>Magnitud</th>
                    <th>Símbolo</th>
                    <th>Qué describe</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Periodo</td>
                    <td>$$T$$</td>
                    <td>Tiempo que tarda un ciclo completo.</td>
                  </tr>
                  <tr>
                    <td>Frecuencia</td>
                    <td>$$f$$</td>
                    <td>Número de ciclos por segundo; se mide en hertz.</td>
                  </tr>
                  <tr>
                    <td>Longitud de onda</td>
                    <td>$$\lambda$$</td>
                    <td>Separación espacial entre frentes equivalentes.</td>
                  </tr>
                  <tr>
                    <td>Intensidad</td>
                    <td>$$I$$</td>
                    <td>Energía transportada por unidad de área y tiempo.</td>
                  </tr>
                </tbody>
              </table>
            </section>

            <div class="mini-grid">
              <article class="formula-box">
                <h4>Relación temporal</h4>
                <div class="math-display">$$f = \frac{1}{T}$$</div>
                <p>El tono percibido depende en gran parte de esta frecuencia de oscilación.</p>
              </article>
              <article class="formula-box">
                <h4>Nivel en decibeles</h4>
                <div class="math-display">$$\beta = 10\log_{10}\left(\frac{I}{I_0}\right)$$</div>
                <p>El decibel no es una intensidad directa, sino una escala logarítmica.</p>
              </article>
            </div>

            <section class="paper-section">
              <h4>Rangos útiles para la audición</h4>
              <ul class="key-list">
                <li>Rango auditivo típico humano: aproximadamente 20 Hz a 20 kHz.</li>
                <li>La mayor parte de la inteligibilidad del habla se concentra entre unas centenas y pocos miles de hertz.</li>
                <li>El conducto auditivo externo puede reforzar frecuencias cercanas al rango donde muchas consonantes se vuelven críticas.</li>
              </ul>
            </section>
          </div>

          <aside class="paper-side">
            <article class="note-card">
              <h4>Resonancia del conducto auditivo</h4>
              <p>
                Como el conducto auditivo se comporta como una cavidad con cierta longitud efectiva, no responde igual a
                todas las frecuencias. Esa respuesta selectiva ayuda a realzar parte del contenido importante para el habla.
              </p>
            </article>

            <article class="warning-card">
              <h4>Intensidad no es “solo volumen”</h4>
              <p>
                El volumen percibido depende también del espectro, la duración y la sensibilidad del oído. Por eso el
                cerebro puede juzgar dos sonidos con intensidades parecidas de manera muy distinta.
              </p>
            </article>
          </aside>
        </div>
      </div>
    `
  },
  {
    tab: "Cóclea",
    label: "Hoja 5",
    title: "Tonotopía y audición espacial",
    html: String.raw`
      <div class="paper-content">
        <div class="paper-meta">
          <span class="page-tag">Oído interno y percepción</span>
          <span class="page-number-stamp">Hoja 5</span>
        </div>
        <h3 class="paper-title">La cóclea separa frecuencias y el cerebro reconstruye el espacio</h3>
        <p class="paper-subtitle">
          La cóclea no vibra toda igual. La onda viajera alcanza su máximo en una zona distinta según la frecuencia,
          y esa organización espacial se llama <strong>tonotopía</strong>.
        </p>

        <div class="paper-grid">
          <div class="paper-main">
            <section class="paper-section">
              <h4>Mapa de frecuencias en la membrana basilar</h4>
              <ul class="key-list">
                <li>La <strong>base</strong> de la cóclea responde mejor a frecuencias altas.</li>
                <li>El <strong>ápice</strong> responde mejor a frecuencias bajas.</li>
                <li>Las células ciliadas internas codifican información sensorial; las externas ajustan y afinan la respuesta mecánica.</li>
              </ul>
            </section>

            <section class="paper-section">
              <h4>Cómo sabemos de dónde viene un sonido</h4>
              <div class="mini-grid">
                <article class="info-tile">
                  <strong>Diferencia interaural de tiempo</strong>
                  <p>Si el sonido llega antes a un oído que al otro, el cerebro usa ese retraso para estimar dirección.</p>
                </article>
                <article class="info-tile">
                  <strong>Diferencia interaural de intensidad</strong>
                  <p>La cabeza crea sombra acústica, sobre todo a frecuencias altas, y eso modifica el nivel en cada oído.</p>
                </article>
              </div>
            </section>

            <section class="quote-strip">
              <h4>Conclusión física</h4>
              <p>
                Escuchar no es solo detectar una onda: es comparar tiempos, intensidades y espectros en dos entradas
                sensoriales mientras la cóclea descompone la señal en bandas de frecuencia.
              </p>
            </section>
          </div>

          <aside class="paper-side">
            <div class="split-figures">
              <figure class="figure-card">
                <h4>Tonotopía</h4>
                <img src="assets/images/coclea-tonotopia.svg" alt="Mapa tonotópico de la cóclea">
                <p class="caption">Base: altas frecuencias. Ápice: bajas frecuencias.</p>
              </figure>
              <figure class="figure-card">
                <h4>Escucha binaural</h4>
                <img src="assets/images/localizacion-binaural.svg" alt="Comparación del sonido entre ambos oídos">
                <p class="caption">El cerebro compara los dos oídos para deducir dirección y profundidad.</p>
              </figure>
            </div>
          </aside>
        </div>
      </div>
    `
  },
  {
    tab: "Doppler",
    label: "Hoja 6",
    title: "Cambio de tono por movimiento",
    html: String.raw`
      <div class="paper-content">
        <div class="paper-meta">
          <span class="page-tag">Fenómeno ondulatorio</span>
          <span class="page-number-stamp">Hoja 6</span>
        </div>
        <h3 class="paper-title">Efecto Doppler: la frecuencia que se escucha no siempre es la emitida</h3>
        <p class="paper-subtitle">
          Cuando una fuente sonora se mueve respecto al medio, los frentes de onda se
          comprimen delante y se separan detrás. El resultado perceptivo es el cambio de tono
          típico de una sirena cuando se acerca y luego se aleja.
        </p>

        <div class="paper-grid">
          <div class="paper-main">
            <section class="paper-section">
              <h4>Fórmula para fuente en movimiento</h4>
              <div class="mini-grid">
                <article class="formula-box">
                  <h4>Acercándose</h4>
                  <div class="math-display">$$f' = f \frac{v}{v-v_s}$$</div>
                  <p>La frecuencia observada sube porque la separación entre frentes de onda disminuye.</p>
                </article>
                <article class="formula-box">
                  <h4>Alejándose</h4>
                  <div class="math-display">$$f' = f \frac{v}{v+v_s}$$</div>
                  <p>La frecuencia observada baja porque la separación entre frentes de onda aumenta.</p>
                </article>
              </div>
            </section>

            <section class="paper-section">
              <h4>Qué debe quedar claro</h4>
              <ul class="key-list">
                <li>$$v$$ es la rapidez del sonido en el medio.</li>
                <li>$$v_s$$ es la rapidez de la fuente respecto al medio.</li>
                <li>El efecto es mayor cuanto más rápido se mueve la fuente.</li>
                <li>También existe Doppler con observador en movimiento, pero ahí la compresión del medio se interpreta de otra forma.</li>
              </ul>
            </section>

            <section class="paper-section">
              <h4>Por qué sí importa en un cuaderno sobre el oído</h4>
              <p>
                El efecto Doppler modifica justo la variable a la que el sistema auditivo es muy sensible:
                la frecuencia percibida. Por eso sirve como puente natural entre la física del movimiento relativo
                y la fisiología de la audición.
              </p>
            </section>
          </div>

          <aside class="paper-side">
            <figure class="figure-card">
              <h4>Fuente móvil y frentes de onda</h4>
              <img src="assets/images/doppler-poster.svg" alt="Ilustración del efecto Doppler con una sirena en movimiento">
              <p class="caption">
                Delante de la fuente, las crestas quedan más juntas; detrás, más separadas.
              </p>
            </figure>

            <article class="note-card">
              <h4>Aplicaciones</h4>
              <ul class="key-list">
                <li>Sirenas y vehículos en marcha.</li>
                <li>Ultrasonido Doppler en medicina.</li>
                <li>Radar y medición de velocidad.</li>
                <li>Ecolocalización y análisis de movimiento.</li>
              </ul>
            </article>
          </aside>
        </div>
      </div>
    `
  },
  {
    tab: "Ondas de choque",
    label: "Hoja 7",
    title: "Régimen supersónico",
    html: String.raw`
      <div class="paper-content">
        <div class="paper-meta">
          <span class="page-tag">Ondas y sobrepresión</span>
          <span class="page-number-stamp">Hoja 7</span>
        </div>
        <h3 class="paper-title">Ondas de choque: cuando la fuente supera a su propia perturbación sonora</h3>
        <p class="paper-subtitle">
          Si una fuente se mueve más rápido que el sonido en el medio, ya no “deja atrás”
          ondas esféricas separadas con normalidad. Los frentes se apilan y forman una envolvente:
          el <strong>cono de Mach</strong>.
        </p>

        <div class="paper-grid">
          <div class="paper-main">
            <section class="paper-section">
              <h4>Número de Mach y ángulo del cono</h4>
              <div class="mini-grid">
                <article class="formula-box">
                  <h4>Número de Mach</h4>
                  <div class="math-display">$$M = \frac{v_s}{c}$$</div>
                  <p>Compara la rapidez de la fuente con la rapidez del sonido en el medio.</p>
                </article>
                <article class="formula-box">
                  <h4>Ángulo del cono</h4>
                  <div class="math-display">$$\sin(\mu) = \frac{c}{v_s} = \frac{1}{M}$$</div>
                  <p>Cuanto mayor es el Mach, más estrecho se vuelve el cono.</p>
                </article>
              </div>
            </section>

            <section class="paper-section">
              <h4>Diferencia con el Doppler común</h4>
              <p>
                En el Doppler sub-sónico los frentes siguen saliendo por delante de la fuente.
                En cambio, en el régimen supersónico la fuente adelanta a las perturbaciones que ella misma emite.
                El resultado no es solo un cambio de tono, sino un salto brusco de presión asociado al boom sónico.
              </p>
            </section>

            <section class="warning-card">
              <h4>Relación con el oído</h4>
              <p>
                Una sobrepresión intensa puede sobrecargar estructuras delicadas del oído, sobre todo si el evento es cercano,
                repetido o muy energético. Por eso este tema no es ajeno a la audición: conecta la física del frente de choque
                con el riesgo de daño mecánico y ruido impulsivo.
              </p>
            </section>
          </div>

          <aside class="paper-side">
            <figure class="figure-card">
              <h4>Cono de Mach</h4>
              <img src="assets/images/cono-mach.svg" alt="Esquema del cono de Mach y las ondas de choque">
              <p class="caption">
                La envolvente geométrica de los frentes emitidos define la región de choque.
              </p>
            </figure>

            <article class="note-card">
              <h4>Qué observar en la animación</h4>
              <ul class="key-list">
                <li>Qué pasa antes de Mach 1.</li>
                <li>Qué cambia justo al cruzar Mach 1.</li>
                <li>Cómo varía el ángulo al aumentar la velocidad.</li>
              </ul>
            </article>
          </aside>
        </div>
      </div>
    `
  },
  {
    tab: "Cuidado auditivo",
    label: "Hoja 8",
    title: "Ruido, riesgo y protección",
    html: String.raw`
      <div class="paper-content">
        <div class="paper-meta">
          <span class="page-tag">Salud y prevención</span>
          <span class="page-number-stamp">Hoja 8</span>
        </div>
        <h3 class="paper-title">La física también sirve para proteger el oído</h3>
        <p class="paper-subtitle">
          No basta con entender cómo oímos: también hay que saber cómo se daña el sistema auditivo cuando la intensidad
          es demasiado grande o la exposición se prolonga.
        </p>

        <div class="paper-grid">
          <div class="paper-main">
            <section class="paper-section">
              <h4>Ideas prácticas de seguridad</h4>
              <ul class="key-list">
                <li>El NIDCD indica que sonidos a o por encima de <strong>85 dBA</strong> pueden causar daño si la exposición es larga o repetida.</li>
                <li>Sonidos a <strong>70 dBA o menos</strong> son poco probables como causa de pérdida auditiva aun con exposición prolongada.</li>
                <li>Si el sonido es muy fuerte, muy cercano o dura demasiado, el riesgo aumenta.</li>
              </ul>
            </section>

            <section class="paper-section">
              <h4>Señales de advertencia</h4>
              <div class="mini-grid">
                <article class="info-tile">
                  <strong>Tinnitus temporal</strong>
                  <p>Si tus oídos zumban después de una exposición, el sistema ya mostró fatiga o agresión acústica.</p>
                </article>
                <article class="info-tile">
                  <strong>Sonido amortiguado</strong>
                  <p>La sensación de “todo se oye opaco” tras un concierto o explosión es un signo serio de exceso de carga.</p>
                </article>
              </div>
            </section>

            <section class="paper-section">
              <h4>Reglas útiles</h4>
              <ol class="step-list">
                <li>Baja el volumen cuando uses audífonos.</li>
                <li>Aumenta la distancia a la fuente siempre que puedas.</li>
                <li>Usa protectores auditivos en ambientes ruidosos.</li>
                <li>Reduce el tiempo total de exposición.</li>
              </ol>
            </section>
          </div>

          <aside class="paper-side">
            <figure class="figure-card">
              <h4>Protección auditiva</h4>
              <img src="assets/images/proteccion-auditiva.svg" alt="Medidas de cuidado auditivo y control de volumen">
              <p class="caption">
                Volumen, distancia, tiempo de exposición y protección física forman el paquete básico de prevención.
              </p>
            </figure>

            <article class="note-card">
              <h4>Vínculo con Doppler y choque</h4>
              <p>
                Sirenas, motores, explosiones y boom sónico no solo son ejemplos de teoría ondulatoria:
                también pueden entrar en zonas de riesgo real para el sistema auditivo.
              </p>
            </article>
          </aside>
        </div>
      </div>
    `
  },
  {
    tab: "Actividades",
    label: "Hoja 9",
    title: "Síntesis y mini retos",
    html: String.raw`
      <div class="paper-content">
        <div class="paper-meta">
          <span class="page-tag">Cierre del cuaderno</span>
          <span class="page-number-stamp">Hoja 9</span>
        </div>
        <h3 class="paper-title">Actividades para fijar la idea física del oído</h3>
        <p class="paper-subtitle">
          Esta última hoja conecta teoría, cálculo corto y observación de las simulaciones para que el cuaderno no quede solo como lectura.
        </p>

        <div class="paper-grid">
          <div class="paper-main">
            <div class="mini-grid">
              <article class="activity-card">
                <h4>Reto 1: longitud de onda</h4>
                <p>
                  Calcula la longitud de onda de un sonido de 440 Hz en aire usando
                  $$v \approx 343 \text{ m/s}$$. Compara luego con 4400 Hz y observa qué cambia.
                </p>
              </article>
              <article class="activity-card">
                <h4>Reto 2: barrido coclear</h4>
                <p>
                  Abre la animación de tonotopía y sube la frecuencia. Describe por qué el máximo de respuesta
                  migra hacia la base de la cóclea.
                </p>
              </article>
              <article class="activity-card">
                <h4>Reto 3: Doppler</h4>
                <p>
                  En la simulación de Doppler, aumenta la velocidad de la fuente y explica por qué la frecuencia
                  observada delante crece más rápido que detrás.
                </p>
              </article>
              <article class="activity-card">
                <h4>Reto 4: Mach</h4>
                <p>
                  En el laboratorio de ondas de choque, compara Mach 1.2 y Mach 2.0. ¿Cuál cono es más estrecho y por qué?
                </p>
              </article>
            </div>

            <section class="paper-section">
              <h4>Glosario mínimo</h4>
              <ul class="key-list">
                <li><strong>Transducción:</strong> conversión de una señal mecánica en una señal eléctrica.</li>
                <li><strong>Tonotopía:</strong> organización espacial de la respuesta por frecuencia.</li>
                <li><strong>Impedancia acústica:</strong> oposición de un sistema al paso de la energía sonora.</li>
                <li><strong>Doppler:</strong> cambio de frecuencia observada por movimiento relativo.</li>
                <li><strong>Mach:</strong> razón entre rapidez de la fuente y rapidez del sonido.</li>
              </ul>
            </section>
          </div>

          <aside class="paper-side">
            <article class="note-card">
              <h4>Conexión final</h4>
              <p>
                El cuaderno empezó con partes anatómicas y termina en un sistema físico completo:
                captación, resonancia, transmisión, selección frecuencial, codificación neural y
                prevención del daño por ruido.
              </p>
            </article>

            <article class="note-card">
              <h4>Qué abrir después</h4>
              <ul class="key-list">
                <li>Video guía oficial del NIH/NIDCD.</li>
                <li>Simulación de transducción auditiva.</li>
                <li>Simulación de efecto Doppler.</li>
                <li>Simulación de ondas de choque.</li>
              </ul>
            </article>
          </aside>
        </div>
      </div>
    `
  }
];

const scientists = {
  newton: {
    name: "Isaac Newton",
    image: "imagenes/isaac newton.png",
    color: "#00f3ff",
    summary: "Mecánica, vibración y rigor matemático.",
    quote: "\"Si he visto más lejos, es poniéndome sobre hombros de gigantes.\"",
    welcome:
      "Saludos. Soy Isaac Newton. Puedo ayudarte a leer el oído como un sistema mecánico: membranas, vibración, fuerzas, movimiento oscilatorio y transmisión del sonido.",
    prompt:
      "Eres Isaac Newton. Responde en español, en primera persona, con tono riguroso y claro. Explica el oído y el sonido desde la mecánica clásica, la vibración, la propagación ondulatoria y el análisis matemático."
  },
  hertz: {
    name: "Heinrich Hertz",
    image: "imagenes/Heinrich Hertz.png",
    color: "#39ff14",
    summary: "Ondas, frecuencia y experimentación.",
    quote: "\"Las ondas y la frecuencia revelan la estructura profunda del fenómeno.\"",
    welcome:
      "Soy Heinrich Hertz. Si quieres hablar de frecuencia, ondas, resonancia, cóclea o Doppler, puedo responderlo desde el lenguaje experimental.",
    prompt:
      "Eres Heinrich Hertz. Responde en español, en primera persona, con enfoque experimental y preciso. Prioriza frecuencia, ondas, resonancia, interferencia y medición."
  },
  einstein: {
    name: "Albert Einstein",
    image: "imagenes/Albert Einstein.png",
    color: "#ab80ff",
    summary: "Intuición física y analogías profundas.",
    quote: "\"La imaginación es más importante que el conocimiento.\"",
    welcome:
      "Soy Albert Einstein. Puedo explicar el oído y el sonido con analogías claras, sin perder profundidad física.",
    prompt:
      "Eres Albert Einstein. Responde en español, en primera persona, con tono brillante, claro y un poco filosófico. Usa analogías útiles para explicar oído, sonido, Doppler y percepción."
  },
  curie: {
    name: "Marie Curie",
    image: "imagenes/Marie Curie.png",
    color: "#ff6b9d",
    summary: "Disciplina experimental y claridad directa.",
    quote: "\"Nada en la vida debe ser temido, solo comprendido.\"",
    welcome:
      "Soy Marie Curie. Si quieres una explicación firme, ordenada y experimental sobre la audición o el daño por ruido, aquí estoy.",
    prompt:
      "Eres Marie Curie. Responde en español, en primera persona, con firmeza, precisión experimental y claridad. Relaciona el fenómeno acústico con observación, medición y cuidado auditivo."
  }
};

const knowledgeBase = [
  {
    title: "oído externo, medio e interno",
    pageIndex: 1,
    keywords: ["oido externo", "oido medio", "oido interno", "pabellon", "conducto auditivo", "timpano"],
    answer:
      "El oído externo recoge y canaliza la onda de presión, el oído medio transmite y mejora el acoplamiento mecánico mediante tímpano y huesecillos, y el oído interno convierte la vibración del fluido coclear en señales eléctricas."
  },
  {
    title: "huesecillos y transmisión",
    pageIndex: 2,
    keywords: ["martillo", "yunque", "estribo", "huesecillos", "ventana oval", "cadena auditiva"],
    answer:
      "Martillo, yunque y estribo forman una cadena mecánica que lleva la vibración del tímpano hacia la ventana oval. Su función principal es mejorar el acoplamiento entre aire y fluido coclear para que no se pierda tanta energía."
  },
  {
    title: "cóclea y tonotopía",
    pageIndex: 4,
    keywords: ["coclea", "caracol", "membrana basilar", "tonotopia", "celulas ciliadas", "onda viajera"],
    answer:
      "La cóclea organiza la respuesta por frecuencia: la base responde mejor a sonidos agudos y el ápice a sonidos graves. Esa distribución espacial permite que el cerebro reciba una especie de mapa de frecuencias."
  },
  {
    title: "frecuencia e intensidad",
    pageIndex: 3,
    keywords: ["frecuencia", "intensidad", "longitud de onda", "periodo", "decibeles", "db", "lambda"],
    answer:
      "La frecuencia determina cuántos ciclos llegan por segundo y se relaciona con el tono percibido. La intensidad describe el flujo de energía de la onda, y el nivel en decibeles usa una escala logarítmica para comparar intensidades."
  },
  {
    title: "audición binaural",
    pageIndex: 4,
    keywords: ["binaural", "localizacion", "interaural", "dos oidos", "dirección", "sombra acústica"],
    answer:
      "La localización binaural se basa en comparar dos señales: diferencias interaurales de tiempo para estimar retrasos y diferencias interaurales de intensidad para aprovechar la sombra acústica creada por la cabeza."
  },
  {
    title: "efecto Doppler",
    pageIndex: 5,
    keywords: ["doppler", "sirena", "fuente en movimiento", "frecuencia observada", "tono", "se acerca", "se aleja"],
    answer:
      "Cuando la fuente se mueve, los frentes de onda se comprimen delante y se separan detrás. Por eso una sirena se oye más aguda al acercarse y más grave al alejarse; la frecuencia observada ya no coincide con la emitida."
  },
  {
    title: "ondas de choque",
    pageIndex: 6,
    keywords: ["onda de choque", "mach", "boom sonico", "supersonico", "cono de mach", "sobrepresion"],
    answer:
      "Si la fuente supera la rapidez del sonido, aparece un cono de Mach. Ya no se trata solo de Doppler sub-sónico: los frentes se apilan y producen una sobrepresión brusca asociada al boom sónico."
  },
  {
    title: "cuidado auditivo",
    pageIndex: 7,
    keywords: ["cuidado auditivo", "85 dba", "ruido", "proteccion", "audifonos", "tinnitus", "perdida auditiva"],
    answer:
      "La protección auditiva combina tres variables físicas: bajar intensidad, aumentar distancia y reducir tiempo de exposición. Sonidos intensos o repetidos pueden dañar las células sensoriales del oído interno."
  }
];

const availableThemes = ["dark", "light", "forest", "sunset", "ocean", "neon", "aurora"];
const storedScientist = localStorage.getItem("fisica_oido_scientist");
const fallbackApiKey = localStorage.getItem("fisica_oido_chat_api_key") || localStorage.getItem("physics_api_key") || "";
const fallbackModel = localStorage.getItem("fisica_oido_chat_model") || localStorage.getItem("physics_api_model") || "gpt-4o-mini";

const appState = {
  currentView: "home",
  currentPage: 0,
  chatOpen: false,
  currentScientist: scientists[storedScientist] ? storedScientist : "newton",
  apiKey: fallbackApiKey,
  chatModel: fallbackModel,
  theme: localStorage.getItem("physics_theme") || document.documentElement.dataset.theme || "dark"
};

document.addEventListener("DOMContentLoaded", () => {
  setupThemeSystem();
  setupIntroScreen();
  renderModuleCards();
  renderLabCards();
  renderChapterTabs();
  renderNotebookPage(appState.currentPage);
  setupViewRouting();
  setupNotebookControls();
  setupChat();
  updateScientistUI();
  seedChat();
  setView(appState.currentView);
  updateClock();
  window.setInterval(updateClock, 1000);
});

function setupThemeSystem() {
  document.querySelectorAll(".theme-dot").forEach((dot) => {
    dot.addEventListener("click", () => {
      setTheme(dot.dataset.theme);
    });
  });

  setTheme(appState.theme);
}

function setTheme(theme) {
  const nextTheme = availableThemes.includes(theme) ? theme : "dark";
  appState.theme = nextTheme;
  document.documentElement.setAttribute("data-theme", nextTheme);
  localStorage.setItem("physics_theme", nextTheme);

  document.querySelectorAll(".theme-dot").forEach((dot) => {
    dot.classList.toggle("active", dot.dataset.theme === nextTheme);
  });

  syncLabThemes();
}

function syncLabThemes() {
  document.querySelectorAll("iframe").forEach((frame) => {
    if (!frame.contentWindow) {
      return;
    }

    try {
      frame.contentWindow.postMessage({ type: "setTheme", theme: appState.theme }, "*");
    } catch (error) {
      console.warn("No se pudo enviar el tema al iframe:", error);
    }
  });
}

function setupIntroScreen() {
  const introScreen = document.getElementById("introScreen");
  const enterSiteBtn = document.getElementById("enterSiteBtn");

  if (!introScreen || !enterSiteBtn) {
    return;
  }

  document.body.classList.add("intro-active");

  const closeIntro = () => {
    introScreen.classList.add("is-hidden");
    document.body.classList.remove("intro-active");
  };

  enterSiteBtn.addEventListener("click", closeIntro);
}

function renderModuleCards() {
  const moduleGrid = document.getElementById("moduleGrid");
  moduleGrid.innerHTML = modules
    .map(
      (module) => `
        <article class="module-card">
          <div class="module-topline">
            <span class="module-pill">${module.sheet}</span>
            <span class="page-number-stamp">${String(module.pageIndex + 1).padStart(2, "0")}</span>
          </div>
          <h4>${module.title}</h4>
          <p>${module.summary}</p>
          <ul class="module-list">
            ${module.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
          </ul>
          <button class="paper-btn secondary" data-view-target="notebook" data-page-target="${module.pageIndex}">
            Abrir módulo
          </button>
        </article>
      `
    )
    .join("");
}

function renderLabCards() {
  const homeLabGrid = document.getElementById("homeLabGrid");
  const labGrid = document.getElementById("labGrid");

  const cardMarkup = (lab) => `
    <article class="lab-card" data-lab-path="${lab.path}">
      <div class="lab-meta">
        <span>${lab.tag}</span>
        <small>${lab.short}</small>
      </div>
      <h4>${lab.title}</h4>
      <iframe src="${lab.path}" loading="lazy" title="${lab.title}" data-lab-iframe="${lab.path}"></iframe>
      <p>${lab.description}</p>
      <div class="hero-actions">
        <a class="paper-link" href="${lab.path}" target="_blank" rel="noreferrer">Abrir aparte</a>
        <button class="paper-btn secondary" data-view-target="notebook" data-page-target="${lab.pageIndex}">
          Ver teoría relacionada
        </button>
      </div>
    </article>
  `;

  homeLabGrid.innerHTML = labData.map(cardMarkup).join("");
  labGrid.innerHTML = labData.map(cardMarkup).join("");

  document.querySelectorAll("[data-lab-iframe]").forEach((frame) => {
    frame.addEventListener("load", syncLabThemes, { once: true });
  });
}

function renderChapterTabs() {
  const chapterTabs = document.getElementById("chapterTabs");
  chapterTabs.innerHTML = notebookPages
    .map(
      (page, index) => `
        <button class="chapter-tab ${index === appState.currentPage ? "is-active" : ""}" data-page-index="${index}">
          <strong>${page.tab}</strong>
          <span>${page.label}</span>
        </button>
      `
    )
    .join("");

  chapterTabs.querySelectorAll(".chapter-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      renderNotebookPage(Number(tab.dataset.pageIndex));
    });
  });
}

function renderNotebookPage(pageIndex) {
  appState.currentPage = Math.max(0, Math.min(pageIndex, notebookPages.length - 1));
  const page = notebookPages[appState.currentPage];
  const paperSheet = document.getElementById("paperSheet");
  paperSheet.classList.remove("is-visible");
  window.setTimeout(() => {
    paperSheet.innerHTML = page.html;
    paperSheet.classList.add("is-visible");
    renderMathInNotebook(paperSheet);
  }, 90);

  document.getElementById("pageIndicator").textContent = `${page.label} / ${notebookPages.length} · ${page.title}`;

  const prevBtn = document.getElementById("prevPageBtn");
  const nextBtn = document.getElementById("nextPageBtn");
  prevBtn.disabled = appState.currentPage === 0;
  nextBtn.disabled = appState.currentPage === notebookPages.length - 1;
  prevBtn.style.opacity = prevBtn.disabled ? "0.45" : "1";
  nextBtn.style.opacity = nextBtn.disabled ? "0.45" : "1";

  document.querySelectorAll(".chapter-tab").forEach((tab, index) => {
    tab.classList.toggle("is-active", index === appState.currentPage);
  });
}

function renderMathInNotebook(element) {
  if (typeof window.renderMathInElement !== "function") {
    return;
  }

  window.renderMathInElement(element, {
    delimiters: [
      { left: "$$", right: "$$", display: true },
      { left: "$", right: "$", display: false }
    ],
    throwOnError: false
  });
}

function setupViewRouting() {
  document.querySelectorAll("[data-view-target]").forEach((element) => {
    element.addEventListener("click", () => {
      const view = element.dataset.viewTarget;
      const pageTarget = element.dataset.pageTarget;
      setView(view);
      if (pageTarget) {
        renderNotebookPage(Number(pageTarget));
      }
    });
  });
}

function setView(viewName) {
  const targetView = document.getElementById(`view-${viewName}`) ? viewName : "home";
  appState.currentView = targetView;
  document.querySelectorAll(".view").forEach((view) => {
    view.classList.toggle("is-active", view.id === `view-${targetView}`);
  });
  document.querySelectorAll(".view-btn").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.viewTarget === targetView);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openNotebookPage(pageIndex = appState.currentPage) {
  setView("notebook");
  renderNotebookPage(pageIndex);
}

function openLabs(path) {
  setView("labs");
  if (!path) {
    return;
  }

  const target = [...document.querySelectorAll("#labGrid .lab-card")].find((card) => card.dataset.labPath === path);
  if (!target) {
    return;
  }

  window.setTimeout(() => {
    target.classList.add("is-highlighted");
    target.scrollIntoView({ behavior: "smooth", block: "center" });
    window.setTimeout(() => {
      target.classList.remove("is-highlighted");
    }, 1800);
  }, 120);
}

function goHome() {
  setView("home");
}

function setupNotebookControls() {
  document.getElementById("prevPageBtn").addEventListener("click", () => {
    renderNotebookPage(appState.currentPage - 1);
  });

  document.getElementById("nextPageBtn").addEventListener("click", () => {
    renderNotebookPage(appState.currentPage + 1);
  });
}

function updateClock() {
  const now = new Date();
  const dateFormat = new Intl.DateTimeFormat("es-CO", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric"
  });
  const timeFormat = new Intl.DateTimeFormat("es-CO", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });
  document.getElementById("dateLabel").textContent = dateFormat.format(now);
  document.getElementById("clockLabel").textContent = timeFormat.format(now);
}

function setupChat() {
  const chatFab = document.getElementById("chatFab");
  const chatWindow = document.getElementById("chatWindow");
  const chatCloseBtn = document.getElementById("chatCloseBtn");
  const chatScientistBtn = document.getElementById("chatScientistBtn");
  const chatConfigBtn = document.getElementById("chatConfigBtn");
  const sendChatBtn = document.getElementById("sendChatBtn");
  const saveApiBtn = document.getElementById("saveApiBtn");
  const chatInput = document.getElementById("chatInput");
  const scientistOverlay = document.getElementById("scientistOverlay");

  renderScientistSelector();
  toggleChat(appState.chatOpen);

  chatFab.addEventListener("click", () => toggleChat(true));
  chatCloseBtn.addEventListener("click", () => toggleChat(false));
  chatScientistBtn.addEventListener("click", () => togglePanel("scientistSelector"));
  chatConfigBtn.addEventListener("click", () => togglePanel("chatConfigPanel"));
  sendChatBtn.addEventListener("click", sendChatMessage);
  saveApiBtn.addEventListener("click", saveApiConfig);

  document.getElementById("chatActionNotebook").addEventListener("click", () => {
    appendMessage("Te llevo al cuaderno para revisar las hojas del tema.", "bot");
    openNotebookPage(0);
    toggleChat(true);
  });

  document.getElementById("chatActionLabs").addEventListener("click", () => {
    appendMessage("Abro el laboratorio completo con todas las animaciones del proyecto.", "bot");
    openLabs();
    toggleChat(true);
  });

  document.getElementById("chatActionDoppler").addEventListener("click", () => {
    appendMessage("Voy directo a la simulación del efecto Doppler.", "bot");
    openLabs("animaciones/efecto-doppler.html");
    toggleChat(true);
  });

  document.getElementById("chatActionHome").addEventListener("click", () => {
    appendMessage("Regreso al inicio del cuaderno interactivo.", "bot");
    goHome();
    toggleChat(true);
  });

  chatInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendChatMessage();
    }
  });

  scientistOverlay.addEventListener("click", (event) => {
    if (event.target === scientistOverlay) {
      scientistOverlay.classList.remove("open");
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") {
      return;
    }
    scientistOverlay.classList.remove("open");
    document.getElementById("chatConfigPanel").classList.add("hidden");
    if (appState.chatOpen) {
      toggleChat(false);
    }
  });

  document.getElementById("chatApiKeyInput").value = appState.apiKey;
  document.getElementById("chatModelInput").value = appState.chatModel;

  setupDraggableChat(chatWindow, document.getElementById("chatDragHandle"));
}

function toggleChat(forceState) {
  const nextState = typeof forceState === "boolean" ? forceState : !appState.chatOpen;
  appState.chatOpen = nextState;
  document.getElementById("chatWindow").classList.toggle("open", nextState);
}

function togglePanel(panelId) {
  const scientistOverlay = document.getElementById("scientistOverlay");
  const chatConfigPanel = document.getElementById("chatConfigPanel");

  if (panelId === "scientistSelector") {
    scientistOverlay.classList.add("open");
    chatConfigPanel.classList.add("hidden");
    return;
  }

  chatConfigPanel.classList.toggle("hidden");
  scientistOverlay.classList.remove("open");
}

function saveApiConfig() {
  appState.apiKey = document.getElementById("chatApiKeyInput").value.trim();
  appState.chatModel = document.getElementById("chatModelInput").value.trim() || "gpt-4o-mini";
  localStorage.setItem("fisica_oido_chat_api_key", appState.apiKey);
  localStorage.setItem("fisica_oido_chat_model", appState.chatModel);
  localStorage.setItem("physics_api_key", appState.apiKey);
  localStorage.setItem("physics_api_model", appState.chatModel);
  appendMessage(
    "Configuración guardada. Si la API responde, usaré el modelo indicado; si no, continúo con la base local del cuaderno.",
    "bot"
  );
  document.getElementById("chatConfigPanel").classList.add("hidden");
}

function renderScientistSelector() {
  const selector = document.getElementById("scientistSelector");
  selector.innerHTML = Object.entries(scientists)
    .map(
      ([id, scientist]) => `
        <button
          class="scientist-card ${id === appState.currentScientist ? "is-active" : ""}"
          type="button"
          data-scientist-id="${id}"
          style="--sci-color:${scientist.color}"
        >
          <span class="sci-portrait-container">
            <span class="sci-ring"></span>
            <img class="sci-img" src="${scientist.image}" alt="${scientist.name}">
          </span>
          <span>
            <h3>${scientist.name}</h3>
            <p>${scientist.summary}</p>
          </span>
        </button>
      `
    )
    .join("");

  selector.querySelectorAll("[data-scientist-id]").forEach((button) => {
    button.addEventListener("click", () => {
      selectScientist(button.dataset.scientistId);
    });
  });
}

function selectScientist(scientistId) {
  if (!scientists[scientistId]) {
    return;
  }

  appState.currentScientist = scientistId;
  localStorage.setItem("fisica_oido_scientist", appState.currentScientist);
  updateScientistUI();
  renderScientistSelector();
  playScientistIntro();
}

function updateScientistUI() {
  const scientist = scientists[appState.currentScientist];
  const chatFab = document.getElementById("chatFab");
  const chatFabImg = document.getElementById("chatFabImg");
  const chatAvatar = document.getElementById("chatAvatar");
  const chatName = document.getElementById("chatName");
  const chatHeader = document.getElementById("chatDragHandle");

  chatFabImg.src = scientist.image;
  chatFabImg.alt = scientist.name;
  chatFab.style.borderColor = scientist.color;
  chatFab.style.boxShadow = `0 22px 48px ${scientist.color}33`;
  chatFab.style.background = `linear-gradient(135deg, ${scientist.color}1f, rgba(9, 14, 23, 0.94))`;

  chatAvatar.innerHTML = `<img src="${scientist.image}" alt="${scientist.name}">`;
  chatAvatar.style.borderColor = scientist.color;
  chatHeader.style.background = `linear-gradient(135deg, ${scientist.color}30, rgba(255,255,255,0.04))`;
  chatName.textContent = scientist.name;
}

function playScientistIntro() {
  const scientist = scientists[appState.currentScientist];
  const overlay = document.getElementById("cinematicOverlay");
  const icon = document.getElementById("cinematicIcon");
  const name = document.getElementById("cinematicName");
  const quote = document.getElementById("cinematicQuote");

  icon.innerHTML = `<img src="${scientist.image}" alt="${scientist.name}">`;
  icon.style.borderColor = scientist.color;
  name.textContent = scientist.name;
  quote.textContent = scientist.quote;
  overlay.classList.add("active");

  window.setTimeout(() => {
    overlay.classList.remove("active");
    document.getElementById("scientistOverlay").classList.remove("open");
    seedChat();
    toggleChat(true);
  }, 2200);
}

function seedChat() {
  const scientist = scientists[appState.currentScientist];
  document.getElementById("chatMessages").innerHTML = "";
  appendMessage(
    `${scientist.welcome} También puedo abrir el cuaderno, el laboratorio o una animación concreta como Doppler, ondas de choque, resonancia del conducto y localización binaural.`,
    "bot"
  );
}

async function sendChatMessage() {
  const chatInput = document.getElementById("chatInput");
  const message = chatInput.value.trim();
  if (!message) {
    return;
  }

  chatInput.value = "";
  appendMessage(message, "user");
  const loadingId = appendMessage("Pensando sobre el cuaderno...", "bot");

  const context = findRelevantKnowledge(message);

  if (!appState.apiKey) {
    window.setTimeout(() => {
      applyReplyAndCommands(loadingId, buildLocalReply(message, context));
    }, 420);
    return;
  }

  try {
    const scientist = scientists[appState.currentScientist];
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${appState.apiKey}`
      },
      body: JSON.stringify({
        model: appState.chatModel,
        messages: [
          {
            role: "system",
            content: [
              scientist.prompt,
              "Responde siempre en español.",
              "Apóyate primero en el contexto local del cuaderno.",
              "No des diagnóstico médico ni sustituyas atención profesional.",
              "Puedes navegar la interfaz solo con estos comandos exactos, al final de tu respuesta:",
              "[CMD:view:home]",
              "[CMD:view:notebook]",
              "[CMD:view:notebook:0]",
              "[CMD:view:notebook:1]",
              "[CMD:view:notebook:2]",
              "[CMD:view:notebook:3]",
              "[CMD:view:notebook:4]",
              "[CMD:view:notebook:5]",
              "[CMD:view:notebook:6]",
              "[CMD:view:notebook:7]",
              "[CMD:view:labs]",
              "[CMD:lab:animaciones/efecto-doppler.html]",
              "[CMD:lab:animaciones/ondas-choque.html]",
              "[CMD:lab:animaciones/transduccion-oido.html]",
              "[CMD:lab:animaciones/coclea-tonotopia.html]",
              "[CMD:lab:animaciones/resonancia-conducto.html]",
              "[CMD:lab:animaciones/localizacion-binaural.html]",
              "Incluye uno solo cuando el usuario pida abrir, ir, mostrar o navegar.",
              "Contexto del cuaderno:",
              context.length > 0
                ? context.map((entry) => `- ${entry.title}: ${entry.answer}`).join("\n")
                : "- Usa la estructura general del cuaderno sobre oído, sonido, Doppler, Mach y cuidado auditivo."
            ].join("\n")
          },
          {
            role: "user",
            content: message
          }
        ],
        max_tokens: 420
      })
    });

    if (!response.ok) {
      throw new Error(`API ${response.status}`);
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content?.trim();
    applyReplyAndCommands(loadingId, reply || buildLocalReply(message, context));
  } catch (error) {
    applyReplyAndCommands(
      loadingId,
      `${buildLocalReply(message, context)}\n\nNota: la llamada externa falló, así que respondí con la base local del cuaderno.`
    );
  }
}

function buildLocalReply(message, context) {
  const scientist = scientists[appState.currentScientist];
  const normalized = normalizeText(message);
  const pageRefs = [...new Set(context.map((entry) => notebookPages[entry.pageIndex]?.label).filter(Boolean))];
  const navigationCommand = detectNavigationCommand(normalized, context);

  if (normalized.includes("hola") || normalized.includes("buenas") || normalized.includes("saludos")) {
    return scientist.welcome;
  }

  if (normalized.includes("quien eres") || normalized.includes("quien sos")) {
    return `${scientist.name}: ${scientist.summary} Puedo responder usando el contenido del cuaderno, las fórmulas base y las simulaciones de esta página.`;
  }

  if (navigationCommand) {
    return `${navigationLead(navigationCommand, scientist, context)} [CMD:${navigationCommand}]`;
  }

  if (normalized.includes("resumen") && context.length === 0) {
    return [
      openingByScientist(scientist),
      "El cuaderno explica cómo el oído externo capta sonido, cómo el oído medio lo transmite y cómo la cóclea lo separa por frecuencias antes de enviarlo al cerebro.",
      "Luego enlaza esa base con resonancia, localización binaural, efecto Doppler, ondas de choque y cuidado auditivo."
    ].join(" ");
  }

  if (context.length > 0) {
    const body = context
      .slice(0, 2)
      .map((entry) => entry.answer)
      .join(" ");
    const hint = pageRefs.length
      ? ` Si quieres profundizar, abre ${pageRefs.join(" y ")} del cuaderno.`
      : "";
    return `${openingByScientist(scientist)} ${body}${hint}`;
  }

  return [
    openingByScientist(scientist),
    "No encontré una coincidencia clara en la base local, pero puedo ayudarte si reformulas la pregunta con palabras como cóclea, huesecillos, resonancia, frecuencia, Doppler, Mach, decibeles o localización binaural."
  ].join(" ");
}

function openingByScientist(scientist) {
  if (scientist.name.includes("Newton")) {
    return "Lo ordeno desde la mecánica del sistema auditivo:";
  }
  if (scientist.name.includes("Hertz")) {
    return "Vayamos al fenómeno como experimento de ondas y frecuencia:";
  }
  if (scientist.name.includes("Einstein")) {
    return "Imagina primero el comportamiento profundo de la onda antes de nombrarlo:";
  }
  return "Conviene mirarlo con disciplina experimental y una conclusión clara:";
}

function detectNavigationCommand(normalized, context) {
  const asksToNavigate =
    normalized.includes("abre") ||
    normalized.includes("abrir") ||
    normalized.includes("ir") ||
    normalized.includes("lleva") ||
    normalized.includes("muestr") ||
    normalized.includes("ver") ||
    normalized.includes("mostrar");

  if (!asksToNavigate) {
    return null;
  }

  if (normalized.includes("inicio") || normalized.includes("home") || normalized.includes("portada")) {
    return "view:home";
  }

  if (normalized.includes("laboratorio") || normalized.includes("laboratorios") || normalized.includes("animacion") || normalized.includes("simulacion")) {
    return detectSpecificLabCommand(normalized) || "view:labs";
  }

  if (normalized.includes("cuaderno") || normalized.includes("hoja") || normalized.includes("teoria") || normalized.includes("tema")) {
    const firstHit = context[0];
    if (firstHit && Number.isInteger(firstHit.pageIndex)) {
      return `view:notebook:${firstHit.pageIndex}`;
    }
    return "view:notebook";
  }

  return detectSpecificLabCommand(normalized);
}

function detectSpecificLabCommand(normalized) {
  if (normalized.includes("doppler")) {
    return "lab:animaciones/efecto-doppler.html";
  }
  if (normalized.includes("choque") || normalized.includes("mach") || normalized.includes("boom sonico")) {
    return "lab:animaciones/ondas-choque.html";
  }
  if (normalized.includes("transduccion") || normalized.includes("timpano") || normalized.includes("huesecillos")) {
    return "lab:animaciones/transduccion-oido.html";
  }
  if (normalized.includes("tonotopia") || normalized.includes("membrana basilar") || normalized.includes("coclea")) {
    return "lab:animaciones/coclea-tonotopia.html";
  }
  if (normalized.includes("resonancia") || normalized.includes("conducto auditivo")) {
    return "lab:animaciones/resonancia-conducto.html";
  }
  if (normalized.includes("binaural") || normalized.includes("localizacion") || normalized.includes("interaural")) {
    return "lab:animaciones/localizacion-binaural.html";
  }
  return null;
}

function navigationLead(command, scientist, context) {
  const contextHint = context[0]?.answer ? ` ${context[0].answer}` : "";

  if (command.startsWith("view:notebook")) {
    return `${openingByScientist(scientist)} Te llevo al cuaderno para que revises la teoría directamente.${contextHint}`;
  }
  if (command === "view:labs") {
    return `${openingByScientist(scientist)} Abro el laboratorio completo para que compares todas las animaciones del tema.`;
  }
  if (command === "view:home") {
    return `${openingByScientist(scientist)} Regreso al inicio para que tengas el mapa general del proyecto.`;
  }
  if (command.startsWith("lab:animaciones/efecto-doppler")) {
    return `${openingByScientist(scientist)} Voy a la simulación de Doppler para observar la compresión y dilatación de frentes de onda.`;
  }
  if (command.startsWith("lab:animaciones/ondas-choque")) {
    return `${openingByScientist(scientist)} Abro la animación de ondas de choque para ver el cono de Mach y la sobrepresión.`;
  }
  if (command.startsWith("lab:animaciones/transduccion-oido")) {
    return `${openingByScientist(scientist)} Voy a la transducción auditiva para seguir el paso desde el tímpano hasta la señal nerviosa.`;
  }
  if (command.startsWith("lab:animaciones/coclea-tonotopia")) {
    return `${openingByScientist(scientist)} Abro la tonotopía coclear para ver cómo cambia la zona de respuesta con la frecuencia.`;
  }
  if (command.startsWith("lab:animaciones/resonancia-conducto")) {
    return `${openingByScientist(scientist)} Abro la resonancia del conducto auditivo para mostrar el refuerzo natural de ciertas frecuencias.`;
  }
  return `${openingByScientist(scientist)} Abro la animación de localización binaural para comparar tiempo e intensidad entre ambos oídos.`;
}

function findRelevantKnowledge(message) {
  const normalized = normalizeText(message);
  const ranked = knowledgeBase
    .map((entry) => {
      let score = 0;
      entry.keywords.forEach((keyword) => {
        const cleanKeyword = normalizeText(keyword);
        if (normalized.includes(cleanKeyword)) {
          score += cleanKeyword.length > 7 ? 3 : 2;
        }
      });
      if (normalized.includes(normalizeText(entry.title))) {
        score += 4;
      }
      return { ...entry, score };
    })
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score);

  return ranked;
}

function normalizeText(text) {
  return text
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase();
}

function applyReplyAndCommands(messageId, replyText) {
  const commands = [...replyText.matchAll(/\[CMD:([^\]]+)\]/g)].map((match) => match[1]);
  const cleanReply = replyText.replace(/\s*\[CMD:[^\]]+\]/g, "").trim() || "Listo.";
  updateMessage(messageId, cleanReply);
  commands.forEach((command) => {
    executeChatCommand(command);
  });
}

function executeChatCommand(command) {
  if (command === "view:home") {
    goHome();
    return;
  }
  if (command === "view:labs") {
    openLabs();
    return;
  }
  if (command.startsWith("view:notebook")) {
    const parts = command.split(":");
    const pageIndex = Number(parts[2]);
    openNotebookPage(Number.isFinite(pageIndex) ? pageIndex : 0);
    return;
  }
  if (command.startsWith("lab:")) {
    openLabs(command.slice(4));
  }
}

function formatChatText(text) {
  return escapeHtml(text)
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\n/g, "<br>");
}

function escapeHtml(text) {
  const map = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;"
  };

  return text.replace(/[&<>"']/g, (char) => map[char]);
}

function appendMessage(text, sender) {
  const chatBody = document.getElementById("chatMessages");
  const messageId = `msg-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

  const wrapper = document.createElement("div");
  wrapper.className = `chat-msg ${sender}`;
  wrapper.id = messageId;
  wrapper.innerHTML = `<div class="msg-bubble">${formatChatText(text)}</div>`;
  chatBody.appendChild(wrapper);
  chatBody.scrollTop = chatBody.scrollHeight;
  return messageId;
}

function updateMessage(messageId, newText) {
  const wrapper = document.getElementById(messageId);
  if (!wrapper) {
    return;
  }
  wrapper.querySelector(".msg-bubble").innerHTML = formatChatText(newText);
  document.getElementById("chatMessages").scrollTop = document.getElementById("chatMessages").scrollHeight;
}

function setupDraggableChat(widget, header) {
  let dragState = null;

  header.addEventListener("pointerdown", (event) => {
    if (window.innerWidth <= 760 || event.target.closest("button, input, label")) {
      return;
    }

    const rect = widget.getBoundingClientRect();
    widget.style.left = `${rect.left}px`;
    widget.style.top = `${rect.top}px`;
    widget.style.right = "auto";
    widget.style.bottom = "auto";

    dragState = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      originLeft: rect.left,
      originTop: rect.top
    };

    header.style.cursor = "grabbing";
    header.setPointerCapture(event.pointerId);
  });

  header.addEventListener("pointermove", (event) => {
    if (!dragState || dragState.pointerId !== event.pointerId) {
      return;
    }

    const nextLeft = dragState.originLeft + (event.clientX - dragState.startX);
    const nextTop = dragState.originTop + (event.clientY - dragState.startY);
    const safeLeft = Math.max(8, Math.min(window.innerWidth - widget.offsetWidth - 8, nextLeft));
    const safeTop = Math.max(8, Math.min(window.innerHeight - widget.offsetHeight - 8, nextTop));
    widget.style.left = `${safeLeft}px`;
    widget.style.top = `${safeTop}px`;
  });

  const releaseDrag = () => {
    dragState = null;
    header.style.cursor = "grab";
  };

  header.addEventListener("pointerup", releaseDrag);
  header.addEventListener("pointercancel", releaseDrag);
}
