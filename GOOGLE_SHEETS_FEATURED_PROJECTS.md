# Google Sheets + Sistema de Trabajos Destacados

## ✅ Implementación Completada

Se han implementado exitosamente dos funcionalidades principales:

1. **Integración de Google Sheets** al formulario de contacto existente
2. **Sistema de trabajos destacados** configurable por IDs

---

## 📧 Formulario de Contacto con Google Sheets

### Características Implementadas

- ✅ **Campo teléfono agregado** (opcional)
- ✅ **Integración completa con Google Sheets**
- ✅ **Estados de loading** durante el envío
- ✅ **Validaciones del lado cliente**
- ✅ **Manejo de errores robusto**
- ✅ **Timestamp automático** en zona horaria Argentina
- ✅ **Diseño mantenido** exactamente igual
- ✅ **Toast notifications** preservadas

### Configuración de Google Sheets

#### Paso 1: Crear Google Sheet
1. Ve a [Google Sheets](https://sheets.google.com)
2. Crea una nueva hoja de cálculo
3. Nómbrala "Contactos Portfolio" (o como prefieras)

#### Paso 2: Configurar Google Apps Script
1. En tu Google Sheet, ve a **Extensiones > Apps Script**
2. Borra el código por defecto
3. Copia y pega el código de `google-apps-script.js`
4. Guarda el proyecto con nombre "Portfolio Contact Handler"

#### Paso 3: Desplegar como Web App
1. En Apps Script, haz clic en **Desplegar > Nueva implementación**
2. Selecciona tipo: **Aplicación web**
3. Configuración:
   - **Ejecutar como**: Tu cuenta
   - **Quién tiene acceso**: Cualquier persona
4. Haz clic en **Desplegar**
5. **COPIA LA URL** que aparece (algo como: `https://script.google.com/macros/s/ABC123.../exec`)

#### Paso 4: Actualizar el Código React
En `src/pages/Contacto.tsx`, línea 61, reemplaza:
```typescript
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';
```

Por tu URL real:
```typescript
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/TU_SCRIPT_ID_REAL/exec';
```

### Estructura de Datos en Google Sheets

| Timestamp | Nombre | Email | Teléfono | Mensaje |
|-----------|--------|-------|----------|---------|
| 07/08/2025 17:30:15 | Juan Pérez | juan@email.com | +54 9 11 1234-5678 | Hola, me interesa... |

### Validaciones Implementadas

- **Nombre**: Obligatorio, se elimina espacios en blanco
- **Email**: Obligatorio, validación HTML5 de formato
- **Teléfono**: Opcional, se muestra "No proporcionado" si está vacío
- **Mensaje**: Obligatorio, se elimina espacios en blanco

---

## 🎯 Sistema de Trabajos Destacados

### Características Implementadas

- ✅ **Datos centralizados** en `src/data/projects.ts`
- ✅ **Configuración simple** por array de IDs
- ✅ **Reutilización completa** entre componentes
- ✅ **Mismo diseño y funcionalidad** que la galería principal
- ✅ **Soporte completo para videos** e imágenes
- ✅ **Fácil mantenimiento** y actualización

### Cómo Funciona

#### Archivo de Datos Centralizado
```typescript
// src/data/projects.ts
export const FEATURED_PROJECT_IDS = [1, 2, 3, 4]; // ← Solo cambiar estos IDs
```

#### Función de Filtrado Automático
```typescript
export const getFeaturedProjects = (featuredIds: number[]): Project[] => {
  return projects.filter(project => featuredIds.includes(project.id));
};
```

### Cómo Cambiar Trabajos Destacados

**Método 1: Cambiar IDs (Recomendado)**
```typescript
// En src/data/projects.ts, línea final:
export const FEATURED_PROJECT_IDS = [2, 4, 5, 6]; // Nuevos IDs destacados
```

**Método 2: Agregar Nuevos Proyectos**
1. Agrega el proyecto al array `projects` en `src/data/projects.ts`
2. Incluye el nuevo ID en `FEATURED_PROJECT_IDS`

### Ejemplo de Proyecto con Video
```typescript
{
  id: 7,
  title: "Mi Nuevo Video",
  description: "Descripción del proyecto",
  detailedDescription: "Descripción detallada...",
  images: [
    {
      id: 1,
      url: "public/videos/mi-video.mp4",
      alt: "Descripción para accesibilidad",
      caption: "Caption del video",
      type: "video" as const,
      poster: "public/images/mi-poster.jpg"
    }
  ],
  category: "Categoría",
  year: "2025",
  tags: ["Video", "Tag2", "Tag3"],
  extraInfo: "Información técnica adicional"
}
```

---

## 🚀 Componentes Actualizados

### 1. `src/pages/Contacto.tsx`
- ✅ Campo teléfono agregado
- ✅ Lógica de Google Sheets implementada
- ✅ Estados de loading y validaciones
- ✅ Diseño mantenido idénticamente

### 2. `src/data/projects.ts` (NUEVO)
- ✅ Datos centralizados de todos los proyectos
- ✅ Interfaces TypeScript exportadas
- ✅ Funciones de utilidad para filtrado
- ✅ Configuración de trabajos destacados

### 3. `src/components/InteractiveGallery.tsx`
- ✅ Usa datos compartidos de `projects.ts`
- ✅ Interfaces eliminadas (usa las importadas)
- ✅ Funcionalidad mantenida completamente

### 4. `src/components/ProjectCarousel.tsx`
- ✅ Interfaces sincronizadas con datos compartidos
- ✅ Soporte completo para videos mantenido

### 5. `src/pages/Home.tsx`
- ✅ Sistema dinámico de trabajos destacados
- ✅ Usa `getFeaturedProjects()` automáticamente
- ✅ Renderizado correcto de videos e imágenes

---

## 📋 Archivos Creados/Modificados

### Archivos Nuevos
- ✅ `src/data/projects.ts` - Datos centralizados
- ✅ `google-apps-script.js` - Script para Google Sheets
- ✅ `GOOGLE_SHEETS_FEATURED_PROJECTS.md` - Esta documentación

### Archivos Modificados
- ✅ `src/pages/Contacto.tsx` - Google Sheets + campo teléfono
- ✅ `src/components/InteractiveGallery.tsx` - Usa datos compartidos
- ✅ `src/components/ProjectCarousel.tsx` - Interfaces actualizadas
- ✅ `src/pages/Home.tsx` - Sistema dinámico de destacados

---

## 🔧 Configuración Rápida

### Para Google Sheets:
1. Crear Google Sheet
2. Configurar Apps Script con el código proporcionado
3. Desplegar como Web App
4. Actualizar URL en `Contacto.tsx`

### Para Trabajos Destacados:
1. Cambiar IDs en `FEATURED_PROJECT_IDS` 
2. ¡Listo! Los cambios se reflejan automáticamente

---

## 🎨 Experiencia de Usuario

### Formulario de Contacto
- **Mismo diseño visual** exacto que antes
- **Nuevos estados**: Loading con spinner durante envío
- **Validaciones mejoradas** con mensajes claros
- **Campo teléfono** integrado naturalmente
- **Toast notifications** mantenidas y mejoradas

### Trabajos Destacados
- **Misma experiencia visual** que la galería principal
- **Hover effects** y transiciones mantenidas
- **Soporte completo** para videos con autoplay
- **Navegación idéntica** al hacer clic
- **Responsive design** conservado

---

## 🚀 Próximos Pasos

1. **Configurar Google Sheets** siguiendo los pasos de arriba
2. **Probar el formulario** enviando un mensaje de prueba
3. **Personalizar trabajos destacados** cambiando los IDs
4. **Agregar más proyectos** según sea necesario

## 💡 Tips de Mantenimiento

- **Para cambiar destacados**: Solo edita `FEATURED_PROJECT_IDS`
- **Para agregar proyectos**: Agrega al array `projects` y actualiza IDs destacados
- **Para debugging**: Revisa la consola del navegador y Google Apps Script logs
- **Para backups**: Los datos de Google Sheets se guardan automáticamente

¡El sistema está completamente funcional y listo para usar! 🎉
