# Configuración del Formulario de Contacto

## Configuración de Formspree

El formulario de contacto está configurado para usar Formspree, un servicio gratuito para el envío de formularios en sitios estáticos.

### Pasos para configurar:

1. **Crear cuenta en Formspree**:
   - Ve a [https://formspree.io/](https://formspree.io/)
   - Crea una cuenta gratuita

2. **Crear un nuevo formulario**:
   - Haz clic en "New Form"
   - Asigna un nombre (ej: "Portfolio Contact")
   - Copia el endpoint que te proporciona (ej: `https://formspree.io/f/xpwgkqkp`)

3. **Configurar variables de entorno**:
   - Crea un archivo `.env.local` en la raíz del proyecto
   - Agrega la siguiente línea:
   ```
   NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/TU_ENDPOINT_AQUI
   ```

4. **Configurar el email de destino**:
   - En tu cuenta de Formspree, ve a la configuración del formulario
   - Agrega tu email donde quieres recibir los mensajes
   - Configura las notificaciones según prefieras

### Funcionalidades incluidas:

- ✅ Validación de formulario en el frontend
- ✅ Envío de emails en tiempo real
- ✅ Notificaciones de éxito/error
- ✅ Protección contra spam
- ✅ Funciona con sitios estáticos (GitHub Pages)

### Personalización:

Puedes personalizar los mensajes de éxito y error editando los archivos de traducción en `src/lib/dictionary/`.

### Alternativas:

Si prefieres usar otro servicio, puedes reemplazar la URL de Formspree por:
- Netlify Forms
- EmailJS
- Getform
- Cualquier otro servicio de formularios
