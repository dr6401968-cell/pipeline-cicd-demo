# ACT3. Práctica: Construir un pipeline CI/CD

Proyecto de ejemplo para la materia **Automatización de Infraestructura Digital**.
Aplicación Node.js mínima con pruebas unitarias (`node:test`) y un pipeline de
CI/CD implementado con **GitHub Actions**.

## Estructura del proyecto

```
proyecto-cicd/
├── .github/
│   └── workflows/
│       └── ci-cd.yml        # Pipeline de CI/CD
├── src/
│   ├── math.js               # Función matemática (lógica de negocio)
│   └── index.js               # Punto de entrada de la app
├── test/
│   └── math.test.js          # Pruebas unitarias
├── package.json               # Dependencias y scripts (test, build, start)
└── README.md
```

---

## 1. Comandos de Git para subir el proyecto a GitHub

```bash
# 1. Entrar a la carpeta del proyecto
cd proyecto-cicd

# 2. Inicializar el repositorio local
git init

# 3. Agregar todos los archivos
git add .

# 4. Primer commit
git commit -m "Commit inicial: app base con pruebas y pipeline CI/CD"

# 5. Renombrar la rama principal a main (si no se llama así por defecto)
git branch -M main

# 6. Vincular con el repositorio remoto (créalo antes en github.com, vacío,
#    sin README, para evitar conflictos)
git remote add origin https://github.com/TU-USUARIO/TU-REPOSITORIO.git

# 7. Subir el proyecto (esto disparará el primer workflow automáticamente)
git push -u origin main
```

---

## 2. Guía de capturas de pantalla (evidencias)

Sigue este orden; corresponde exactamente a los 5 puntos de comprobación
solicitados en la actividad.

### a) Workflow ejecutándose en tiempo real
1. Ve a tu repositorio en GitHub → pestaña **Actions**.
2. Justo después de hacer `git push`, deberías ver una ejecución nueva con un
   ícono amarillo (en progreso).
3. Haz clic sobre ella para entrar al detalle y captura la pantalla mientras
   los jobs `build-and-test` y `deploy` muestran el círculo de carga.

### b) Resultado de pruebas exitosas y logs
1. Dentro de la misma ejecución, expande el job **Build & Test**.
2. Haz clic en el paso **"Ejecutar pruebas unitarias"**.
3. Captura el log donde se ven las 5 pruebas en verde (`ok 1`, `ok 2`, ... y
   el resumen `# pass 5`, `# fail 0`).

### c) Demostración de fallo controlado
1. Edita `test/math.test.js` y cambia intencionalmente una aserción, por
   ejemplo:
   ```js
   assert.strictEqual(divide(10, 2), 999); // valor incorrecto a propósito
   ```
2. Guarda, haz commit y push:
   ```bash
   git add .
   git commit -m "Introducir error intencional para probar fallo del pipeline"
   git push
   ```
3. Ve a **Actions** → la nueva ejecución mostrará una ❌ roja.
4. Entra al job **Build & Test** y captura el step **"Ejecutar pruebas
   unitarias"**, donde se ve el error exacto (`AssertionError`) y el mensaje
   de que el job falló.
5. Captura también la vista general del workflow mostrando que el job
   **Deploy** aparece como **"Skipped"** (omitido) — evidencia de que el
   pipeline detuvo correctamente el despliegue.

### d) Corrección del error y re-ejecución exitosa
1. Regresa la línea a su valor correcto:
   ```js
   assert.strictEqual(divide(10, 2), 5);
   ```
2. Commit y push:
   ```bash
   git add .
   git commit -m "Corregir error en prueba unitaria"
   git push
   ```
3. Ve a **Actions** y captura la nueva ejecución completamente en verde
   (ambos jobs con ✔️).

### e) Evidencia del paso de despliegue
1. Dentro de esa ejecución exitosa, abre el job **Deploy**.
2. Haz clic en el paso **"Simular despliegue"**.
3. Captura el log donde se muestra el listado de archivos de `dist/` y el
   mensaje final: *"Despliegue completado exitosamente..."*.

> **Tip:** en cada captura procura que se vea el nombre del commit y el
> ícono de estado (✔️ / ❌) en la parte superior, para que quede clara la
> relación entre el cambio en el código y el resultado del pipeline.

---

## 3. Conclusión técnica

La implementación de un pipeline de integración y despliegue continuo
(CI/CD) representa una transformación fundamental en la forma de construir
software, ya que automatiza y estandariza etapas que tradicionalmente se
realizaban de forma manual y propensa a errores. Al ejecutar pruebas
automatizadas en cada cambio, se materializa el principio de *shift-left
testing*: los defectos se detectan en las primeras etapas del ciclo de
desarrollo, cuando su corrección es considerablemente más rápida y menos
costosa que si se descubrieran en producción. Esto reduce significativamente
el riesgo de introducir regresiones y mejora la confianza del equipo en cada
entrega.

Asimismo, la construcción (build) y el despliegue automatizados garantizan
consistencia: el mismo proceso se ejecuta de manera idéntica sin importar
quién realice el cambio, eliminando la variabilidad de los despliegues
manuales y el clásico problema de "en mi máquina sí funciona". La
integración de un mecanismo de control de flujo —donde el despliegue depende
explícitamente del éxito de las pruebas— añade una capa de seguridad que
impide que código defectuoso llegue a un entorno productivo.

En conjunto, adoptar CI/CD acelera los ciclos de entrega, mejora la calidad
del software, facilita la colaboración entre desarrolladores y sienta las
bases para prácticas más avanzadas de DevOps, como el despliegue continuo a
múltiples entornos y la observabilidad post-despliegue. Por ello, dominar
estas herramientas resulta esencial para cualquier profesional que participe
en el ciclo de vida moderno del desarrollo de software.
